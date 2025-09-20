const express = require('express');
const router = express.Router();
const connection = require('../../db/Connection');
const bcrypt = require('bcryptjs');
const { selectUser } = require('../../db/sql/users');

router.post('/', (req, res) => {
  let { userName, password } = req.body;

  bgtracker.query(
    selectUser + ` WHERE userName=?`,
    [userName],
    (error, results) => {
      if (error) throw error;
      if (!userName || !password) {
        return res.status(400).send({ message: 'No info' });
      } else {
        if (results.length > 0 || password === '') {
          bcrypt.compare(password, results[0].password, (err, result) => {
            if (result) {
              return res.send({ message: 'Login Successful' });
            } else {
              return res.status(400).send({ message: 'Invalid Password' });
            }
          });
        } else {
          return res.status(400).send({ message: 'Invalid userName' });
        }
      }
    }
  );
});

module.exports = router;
