const express = require('express');
const router = express.Router();
const connection = require('../../db/Connection');

router.get('/:id', (req, res) => {
  const sql = `DELETE FROM users WHERE id=${req.params.id}\
     ORDER BY id LIMIT 1;\
    CREATE TEMPORARY TABLE tmpusers(
      firstName text not null,
      lastName text not null,
      userName text not null,
      password text not null,
      email text not null);\
      INSERT INTO tmpusers(firstName,lastName,userName,password,email)\
        SELECT firstName,lastName,userName,password,email FROM users;\
      DROP TABLE users;\
    CREATE TABLE users(
      id int not null auto_increment,
      firstName text not null,
      lastName text not null,
      userName text not null,
      password text not null,
      email text not null,
      primary key (id));\
    INSERT INTO users(firstName,lastName,userName,password,email)\
      SELECT firstName,lastName,userName,password,email FROM tmpusers;\
    DROP TEMPORARY TABLE tmpusers`;

  connection.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(`Successfully deleted User ${req.params.id}`);
    }
  });
});

module.exports = router;
