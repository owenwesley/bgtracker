const express = require('express');
const router = express.Router();
const connection = require('../../db/Connection');

const SELECT_ALL_NUTRITIONS_QUERY = 'SELECT * FROM nutritions';

// Middleware
router.use('/add', require('./nutritions/add'));
router.use('/edit', require('./nutritions/edit'));
router.use('/delete', require('./nutritions/delete'));
router.use('/deleteAll', require('./nutritions/deleteAll'));

router.get('/', (req, res) => {
  connection.query(SELECT_ALL_NUTRITIONS_QUERY, (err, results) => {
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
    SELECT_ALL_NUTRITIONS_QUERY + ' WHERE user_id=?',
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
