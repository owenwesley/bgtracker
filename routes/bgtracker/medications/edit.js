const express = require('express');
const router = express.Router();
const { bgtracker } = require('../../../db/db');
const { updateMedication } = require('../../../db/sql/bgtracker/medications');

router.post('/:user_id', (req, res) => {
  const {
    id = req.body.id,
    user_id = req.params.user_id,
    name = req.body.name,
    dose = req.body.dose,
    unit = req.body.unit,
    quantity = req.body.quantity,
    prescriber = req.body.prescriber,
    am = req.body.am,
    noon = req.body.noon,
    evening = req.body.evening,
    bed = req.body.bed,
  } = req.query;
  bgtracker.query(
    updateMedication,
    [id, user_id, name, dose, unit, quantity, prescriber, am, noon, evening, bed],
    (err, results) => {
      if (err) {
        return res.send(err.message);
      } else {
        res.send(`Successfully Edited Row ${id}`);
      }
    }
  );
});

module.exports = router;
