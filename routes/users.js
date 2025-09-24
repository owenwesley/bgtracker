const express = require('express');
const router = express.Router();
const connection = require('../db/Connection');

const SELECT_ALL_USERS_QUERY = 'SELECT * FROM users';

// Users Middleware
router.use('/delete', require('./users/delete'));
router.use('/edit', require('./users/edit'));
router.use('/login', require('./users/login'));
router.use('/register', require('./users/register'));

router.get('/', (req, res) => {
  connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        results,
      });
    }
  });
});

router.get('/:userName', (req, res) => {
  connection.query(
    SELECT_ALL_USERS_QUERY + ' WHERE userName=?',
    [req.params.userName],
    (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          results,
        });
      }
    }
  );
});

module.exports = router;
