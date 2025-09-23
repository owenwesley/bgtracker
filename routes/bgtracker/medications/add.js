const express = require('express');
const router = express.Router();
const { bgtracker } = require('../../../db/db');
const { insertMedication } = require('../../../db/sql/bgtracker/medications');

router.post('/:user_id', (req, res) => {
  const {
    user_id = req.params.user_id,
    name,
    dose,
    unit,
    quantity,
    prescriber,
    am,
    noon,
    evening,
    bed,
  } = req.body;

  bgtracker.query(insertMedication,
    [user_id, name, dose, unit, quantity, prescriber, am, noon,
      evening, bed],
    (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send('Successfuly Added Medication');
      }
    });
});

module.exports = router;
