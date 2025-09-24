const express = require('express');
const router = express.Router();
const connection = require('../../db/Connection');

const SELECT_ALL_BLOODPRESSURES_QUERY = 'SELECT * FROM bloodpressures';

// Middleware
router.use('/add', require('./bloodpressures/add'));
router.use('/edit', require('./bloodpressures/edit'));
router.use('/delete', require('./bloodpressures/delete'));
router.use('/deleteAll', require('./bloodpressures/deleteAll'));

router.get('/', (req, res) => {
  connection.query(SELECT_ALL_BLOODPRESSURES_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        results,
      });
    }
  });
});

router.get('/:user_id', (req, res) => {
  connection.query(
    SELECT_ALL_BLOODPRESSURES_QUERY + ' WHERE user_id=?',
    [req.params.user_id],
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
