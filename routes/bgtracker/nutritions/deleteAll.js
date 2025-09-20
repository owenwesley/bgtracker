const express = require('express');
const router = express.Router();
const { bgtracker } = require('../../../db/db');
const { deleteAllNutritions } = require('../../../db/sql/bgtracker/nutritions');

router.get('/:user_id', (req, res) => {
  bgtracker.query(deleteAllNutritions,
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
