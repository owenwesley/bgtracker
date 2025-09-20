const express = require('express');
const router = express.Router();
const { selectPreferences } = require('../../db/sql/bgtracker/preferences');
const { bgtracker } = require('../../db/db');

// Middleware
router.use('/add', require('./preferences/add'));
router.use('/edit', require('./preferences/edit'));
router.use('/delete', require('./preferences/delete'));

router.get('/', (req, res) => {
  bgtracker.query(selectPreferences,
    (err, preferences) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          preferences,
        });
      }
    });
});

router.get('/:user_id', (req, res) => {
  bgtracker.query(
    selectPreferences + ' WHERE user_id=?',
    [req.params.user_id],
    (err, preferences) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          preferences,
        });
      }
    }
  );
});

module.exports = router;
