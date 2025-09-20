const express = require('express');
const router = express.Router();
const { bgtracker } = require('../../../db/db');
const { deleteMedication } = require('../../../db/sql/bgtracker/medications');

router.post('/:id', (req, res) => {
  bgtracker.query(deleteMedication,
    [req.params.id],
    (err, results, rows) => {
      if (err) {
        return res.send(err.message);
      } else {
        res.send('Successfully Deleted Row');
      }
    });
});

module.exports = router;
