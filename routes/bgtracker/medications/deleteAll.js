const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

router.get('/:user_id', (req, res) => {
  const sql = `DELETE FROM medications WHERE user_id=${req.params.user_id};\
  CREATE TEMPORARY TABLE tmpmedications(
      user_id int not null,
      name varchar(25) not null,
      dose int not null,
      quantity int not null,
      prescriber varchar(25) not null,
      am int not null,
      noon int not null,
      evening int not null,
      bed int not null);\
    INSERT INTO tmpmedications(user_id, name, dose, quantity, prescriber,
      am, noon, evening, bed)\
      SELECT user_id, name, dose, quantity, prescriber,
      am, noon, evening, bed 
      FROM medications;\
    DROP TABLE medications;\
  CREATE TABLE medications(
      id int not null auto_increment,
      user_id int not null,
      name varchar(25) not null,
      dose int not null,
      quantity int not null,
      prescriber varchar(25) not null,
      am int not null,
      noon int not null,
      evening int not null,
      bed int not null,
    primary key (id));
  INSERT INTO medications(user_id, name, dose, quantity, prescriber,
      am, noon, evening, bed)\
  SELECT user_id, name, dose, quantity, prescriber, am, noon, evening, bed
    FROM tmpmedications;\
  DROP TEMPORARY TABLE tmpmedications`;

  connection.query(sql, (err, results, rows) => {
    if (err) {
      return res.send(err.message);
    } else {
      res.send(
        `Successfully Deleted All Medications For User ${req.params.user_id}`
      );
    }
  });
});

module.exports = router;
