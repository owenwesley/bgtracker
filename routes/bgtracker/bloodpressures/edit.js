const express = require('express');
const router = express.Router();
const { bgtracker } = require('../../../db/db');
const { updateBP } = require('../../../db/sql/bgtracker/bloodpressures');

router.post('/:user_id', (req, res) => {
  const {
    id = req.body.id,
    user_id = req.params.user_id,
    date = req.body.date,
    hbp = req.body.hbp,
    lbp = req.body.lbp,
    hr = req.body.hr,
    hbp2 = req.body.hbp2,
    lbp2 = req.body.lbp2,
    hr2 = req.body.hr2,
  } = req.query;

  bgtracker.query(
    updateBP,
    [
      id,
      user_id,
      date,
      hbp,
      lbp,
      hr,
      hbp2,
      lbp2,
      hr2,
    ],
    (err, results, rows) => {
      if (err) {
        return res.send(err.message);
      } else {
        res.send('Successfully Edited Row');
      }
    }
  );
});

module.exports = router;
