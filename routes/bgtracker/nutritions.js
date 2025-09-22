const express = require('express');
const router = express.Router();
const { selectNutritions } = require('../../db/sql/bgtracker/nutritions');
const { bgtracker } = require('../../db/db');

// Middleware
router.use('/add', require('./nutritions/add'));
router.use('/edit', require('./nutritions/edit'));
router.use('/delete', require('./nutritions/delete'));
router.use('/deleteAll', require('./nutritions/deleteAll'));

router.get('/', (req, res) => {
  bgtracker.query(selectNutritions,
    (err, nutritions) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          nutritions,
        });
      }
    });
});

router.get('/:user_id', (req, res) => {
  bgtracker.query(
    selectNutritions + ' WHERE user_id=?',
    [req.params.user_id],
    (err, nutritions) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          nutritions,
        });
      }
    }
  );
});

module.exports = router;
