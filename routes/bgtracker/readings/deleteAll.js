const express = require('express');
const router = express.Router();
const { deleteAllReadings } = require('../../../db/sql/bgtracker/readings');
const { bgtracker } = require('../../../db/db');

router.get('/:user_id', (req, res) => {
  bgtracker.query(deleteAllReadings,
    [req.params.user_id],
    (err, results, rows) => {
      if (err) {
        return res.send(err.message);
      } else {
        res.send('Successfully Deleted All Rows');
      }
    });
});

module.exports = router;
