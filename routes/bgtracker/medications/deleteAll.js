const express = require('express');
const router = express.Router();
const { bgtracker } = require('../../../db/db');
const { deleteAllMedications } = require('../../../db/sql/bgtracker/medications');

router.get('/:user_id', (req, res) => {
  bgtracker.query(deleteAllMedications,
    [req.params.user_id],
    (err, results, rows) => {
      if (err) {
        return res.send(err.message);
      } else {
        res.send(
          `Successfully Deleted All Medications For User ${req.params.user_id}`
        );
      }
    });
});

module.exports = router;
