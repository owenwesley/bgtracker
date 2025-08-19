const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

router.post('/:user_id', (req, res) => {
  const sql = `DELETE FROM bloodpressures WHERE user_id=${req.params.user_id}\
     ORDER BY id LIMIT 1;\
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
      FROM tmpbloodpressures;\
    DROP TEMPORARY TABLE tmpbloodpressures`;

  connection.query(sql, (err, results, rows) => {
    if (err) {
      return res.send(err.message);
    } else {
      res.send('Successfully Deleted Row');
    }
  });
});

module.exports = router;
