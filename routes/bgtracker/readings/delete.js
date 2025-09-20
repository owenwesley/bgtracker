const express = require('express');
const router = express.Router();
const { deleteReadings } = require('../../../db/sql/bgtracker/readings');
const { bgtracker } = require('../../../db/db');

router.post('/:user_id', (req, res) => {
  bgtracker.query(deleteReadings,
    [req.params.user_id],
    (err, results, rows) => {
      if (err) {
        return res.send(err.message);
      } else {
        res.send('Successfully Deleted Row');
      }
    });
});

module.exports = router;
