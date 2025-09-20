const express = require('express');
const router = express.Router();
const { bgtracker } = require('../../../db/db');
const { deleteNutrition } = require('../../../db/sql/bgtracker/nutritions');

router.post('/:user_id', (req, res) => {
  bgtracker.query(deleteNutrition,
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
