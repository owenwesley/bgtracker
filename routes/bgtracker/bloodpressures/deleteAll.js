const express = require('express');
const router = express.Router();
const { bgtracker } = require('../../../db/db');
const { deleteAllBloodpressures } = require('../../../db/sql/bgtracker/bloodpressures');

router.get('/:user_id', (req, res) => {
  bgtracker.query(deleteAllBloodpressures,
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
