const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

router.post('/:user_id', (req, res) => {
  const {
    user_id = req.params.user_id,
    date = req.body.date,
    hbp = req.body.hbp,
    lbp = req.body.lbp,
    hr = req.body.hr,
    hbp2 = req.body.hbp2,
    lbp2 = req.body.lbp2,
    hr2 = req.body.hr2,
  } = req.query;
  const INSERT_BLOODPRESSURES_QUERY =
    `INSERT INTO bloodpressures (user_id,date,hbp,lbp,hr,hbp2,lbp2,hr2)` +
    ` VALUES (${user_id},curdate(),${hbp},${lbp},${hr},${hbp2},${lbp2},` +
    `${hr2});\
    CREATE TEMPORARY TABLE tmpbloodpressures(
      user_id int not null,
      date text not null,
      hbp int not null,
      lbp int not null,
      hr int not null,
      hbp2 int not null,
      lbp2 int not null,
      hr2 int not null);\
      INSERT INTO tmpbloodpressures(user_id,date,hbp,lbp,hr,hbp2,lbp2,hr2)\
        SELECT user_id,date,hbp,lbp,hr,hbp2,lbp2,hr2
        FROM bloodpressures;\
      DROP TABLE bloodpressures;\
    CREATE TABLE bloodpressures(
      id int not null auto_increment,
      user_id int not null,
      date text not null,
      hbp int not null,
      lbp int not null,
      hr int not null,
      hbp2 int not null,
      lbp2 int not null,
      hr2 int not null,
      primary key (id));
    INSERT INTO bloodpressures(user_id,date,hbp,lbp,hr,hbp2,lbp2,hr2)\
      SELECT user_id,date,hbp,lbp,hr,hbp2,lbp2,hr2 
      FROM tmpbloodpressures order by date, user_id;\
    DROP TEMPORARY TABLE tmpbloodpressures;`;

  connection.query(INSERT_BLOODPRESSURES_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send('Successfuly added bloodpressure');
    }
  });
});

module.exports = router;
