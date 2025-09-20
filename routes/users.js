const express = require('express');
const router = express.Router();
const { selectUser } = require('../db/sql/users');
const { bgtracker } = require('../db/db');

// Users Middleware
router.use('/delete', require('./users/delete'));
router.use('/edit', require('./users/edit'));
router.use('/login', require('./users/login'));
router.use('/register', require('./users/register'));

router.get('/', (req, res) => {
  bgtracker.query(selectUser,
    (err, results) => {
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
  bgtracker.query(
    selectUser + ' WHERE userName=?',
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
