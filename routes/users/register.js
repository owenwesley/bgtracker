const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { insertUser } = require('../../db/sql/users');
const { bgtracker } = require('../../db/db');

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
    bgtracker.query(
      insertUser(firstName, lastName, userName, hashPass, email),
      (err, results) => {
        if (err) {
          return res.send(err);
        } else {
          return res.send('Successfuly added user');
        }
      });
  });
});

module.exports = router;
