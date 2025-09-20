const express = require('express');
const router = express.Router();
const { selectBloodPressures } = require('../../db/sql/bgtracker/bloodpressures');
const { bgtracker } = require('../../db/db');

// Middleware
router.use('/add', require('./bloodpressures/add'));
router.use('/edit', require('./bloodpressures/edit'));
router.use('/delete', require('./bloodpressures/delete'));
router.use('/deleteAll', require('./bloodpressures/deleteAll'));

router.get('/', (req, res) => {
  bgtracker.query(selectBloodPressures,
    (err, bloodpressures) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          bloodpressures,
        });
      }
    });
});

router.get('/:user_id', (req, res) => {
  bgtracker.query(
    selectBloodPressures + ' WHERE user_id=?',
    [req.params.user_id],
    (err, bloodpressures) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          bloodpressures,
        });
      }
    }
  );
});

module.exports = router;
