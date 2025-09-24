const express = require('express');
const router = express.Router();
const connection = require('../../db/Connection');

const SELECT_ALL_MEDICATIONS_QUERY = `SELECT * FROM medications`;

// Middleware
router.use('/add', require('./medications/add'));
router.use('/delete', require('./medications/delete'));
router.use('/deleteAll', require('./medications/deleteAll'));
router.use('/edit', require('./medications/edit'));

router.get('/', (req, res) => {
  connection.query(SELECT_ALL_MEDICATIONS_QUERY, (err, results) => {
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
    SELECT_ALL_MEDICATIONS_QUERY + ' WHERE user_id=?',
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
