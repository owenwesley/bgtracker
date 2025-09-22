const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { updateUser } = require('../../db/sql/users');
const { bgtracker } = require('../../db/db');

const UPDATE_USERS_QUERY =
  'UPDATE users SET firstName=?,lastName=?,userName=?,password=?,email=?';

router.post('/:id', (req, res) => {
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
      updateUser + ` WHERE id=${req.params.id}`,
      [firstName, lastName, userName, hashPass, email],
      (err, results, fields) => {
        if (err) {
          return res.send(err.message);
        } else {
          return res.send(`Successfuly edited User ${req.params.id}`);
        }
      }
    );
  });
});

module.exports = router;
