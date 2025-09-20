const express = require('express');
const router = express.Router();
const { bgtracker } = require('../../../db/db');
const { deletePreference } = require('../../../db/sql/bgtracker/preferences');

router.get('/:id', (req, res) => {
  bgtracker.query(deletePreference,
    [req.params.id],
    (err, results, rows) => {
      if (err) {
        return res.send(err.message);
      } else {
        res.send(`Successfully Deleted Row ${req.params.id}`);
      }
    });
});

module.exports = router;
