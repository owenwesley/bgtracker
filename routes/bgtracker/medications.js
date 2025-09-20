const express = require('express');
const router = express.Router();
const { selectMedications } = require('../../db/sql/bgtracker/medications');
const { bgtracker } = require('../../db/db');

// Middleware
router.use('/add', require('./medications/add'));
router.use('/delete', require('./medications/delete'));
router.use('/deleteAll', require('./medications/deleteAll'));
router.use('/edit', require('./medications/edit'));

router.get('/', (req, res) => {
  bgtracker.query(selectMedications,
    (err, medications) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          medications,
        });
      }
    });
});

router.get('/:user_id', (req, res) => {
  bgtracker.query(
    selectMedications + ' WHERE user_id=?',
    [req.params.user_id],
    (err, medications) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          medications,
        });
      }
    }
  );
});

module.exports = router;
