const express = require('express');
const router = express.Router();
const { selectReadings } = require('../../db/sql/bgtracker/readings');
const { bgtracker } = require('../../db/db');

// Middleware
router.use('/add', require('./readings/add'));
router.use('/edit', require('./readings/edit'));
router.use('/delete', require('./readings/delete'));
router.use('/deleteAll', require('./readings/deleteAll'));

router.get('/', (req, res) => {
  bgtracker.query(selectReadings,
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

router.get('/:user_id', (req, res) => {
  bgtracker.query(
    selectReadings + ' WHERE user_id=?',
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
