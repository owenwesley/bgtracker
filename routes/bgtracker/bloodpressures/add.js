const express = require('express');
const router = express.Router();
const { bgtracker } = require('../../../db/db');
const { insertBloodpressure } = require('../../../db/sql/bgtracker/bloodpressures');

router.post('/:user_id', (req, res) => {
  const {
    user_id = req.params.user_id,
    date = req.body.date,
    hbp = req.body.hbp,
    lbp = req.body.lbp,
    hr = req.body.hr,
    hbp2 = req.body.hbp2,
    lbp2 = req.body.lbp2,
    hr2 = req.body.hr2,
  } = req.query;
  bgtracker.query(insertBloodpressure,
    [user_id, date, hbp, lbp, hr, hbp2, lbp2, hr2],
    (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send('Successfuly added bloodpressure');
      }
    });
});

module.exports = router;
