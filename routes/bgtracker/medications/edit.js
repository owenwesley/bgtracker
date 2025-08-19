const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

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

  const sql =
    `SET @id=?;SET @user_id=?;SET @name=?;SET @dose=?;SET @unit=?;
    SET @quantity=?;SET @prescriber=?;SET @am=?;SET @noon=?;
    SET @evening=?;SET @bed=?; CALL updateMedication(@id,@user_id,
    @name,@dose,@unit,@quantity,@prescriber,@am,@noon,@evening,@bed);`;

  connection.query(
    sql,
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
