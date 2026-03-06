const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

router.post('/:user_id', (req, res) => {
  const sql = `DELETE FROM weights WHERE user_id=${req.params.user_id}\
     ORDER BY id LIMIT 1;\
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
      primary key (id));\
    INSERT INTO weights(user_id,date,kg,lbs,bmi)
      SELECT user_id,date,kg,lbs,bmi FROM tmpweights order by date, user_id;
    DROP TEMPORARY TABLE tmpweights;`;

  connection.query(sql, (err, results, rows) => {
    if (err) {
      return res.send(err.message);
    } else {
      res.send('Successfully Deleted Row');
    }
  });
});

module.exports = router;
