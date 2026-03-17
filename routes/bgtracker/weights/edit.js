const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

router.post('/:user_id', (req, res) => {
  const {
    id = req.body.id,
    user_id = req.params.user_id,
    date = req.body.date,
    kg = req.body.kg,
    lbs = req.body.lbs,
    bmi = req.body.bmi,
  } = req.query;

  const sql = `UPDATE weights SET id=?,user_id=?,date=?,kg=?,lbs=?,bmi=? WHERE id=? AND user_id=?`;

  connection.query(
    sql,
    [
      id,
      user_id,
      date,
      kg,
      lbs,
      bmi,
      id,
      user_id,
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
