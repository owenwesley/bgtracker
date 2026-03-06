const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

router.post('/:user_id', (req, res) => {
  const {
    user_id = req.params.user_id,
    date = req.body.date,
    kg = req.body.kg,
    lbs = req.body.lbs,
    bmi = req.body.bmi,
  } = req.query;

  const INSERT_WEIGHTS_QUERY =
    `INSERT INTO weights (user_id,date,kg,lbs,bmi)
     VALUES (${user_id},curdate(),${kg},${lbs},${bmi});\
    CREATE TEMPORARY TABLE tmpweights(
      user_id int not null,
      date text not null,
      kg double not null,
      lbs double not null,
      bmi double not null);
      INSERT INTO tmpweights(user_id,date,kg,lbs,bmi)
        SELECT user_id,date,kg,lbs,bmi FROM weights;
      DROP TABLE weights;
    CREATE TABLE weights(
      id int not null auto_increment,
      user_id int not null,
      date text not null,
      kg double not null,
      lbs double not null,
      bmi double not null,
      primary key (id));
    INSERT INTO weights(user_id,date,kg,lbs,bmi)
      SELECT user_id,date,kg,lbs,bmi 
      FROM tmpweights order by date, user_id;
    DROP TEMPORARY TABLE tmpweights;`;

  connection.query(INSERT_WEIGHTS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send('Successfuly added weight');
    }
  });
});

module.exports = router;
