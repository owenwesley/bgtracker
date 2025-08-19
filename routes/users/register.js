const express = require('express');
const router = express.Router();
const connection = require('../../db/Connection');
const bcrypt = require('bcryptjs');

router.post('/', (req, res) => {
  const {
    firstName = req.body.firstName,
    lastName = req.body.lastName,
    userName = req.body.userName,
    password = req.body.password,
    email = req.body.email,
  } = req.query;
  const salt = 10;

  bcrypt.hash(password, salt, (err, hashPass) => {
    if (err) throw err;
    const INSERT_USERS_QUERY =
      'INSERT INTO users (' +
      'firstName, lastName, userName, password, email) values(' +
      `'${firstName}','${lastName}','${userName}','${hashPass}','${email}');\
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

    connection.query(INSERT_USERS_QUERY, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send('Successfuly added user');
      }
    });
  });
});

module.exports = router;
