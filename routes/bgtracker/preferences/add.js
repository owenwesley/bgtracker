const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

router.post('/:user_id', (req, res) => {
  const {
    user_id,
    timesPD,
    chkNutrition,
    chkWeight,
    height,
    chkMeds,
    chkMedsB,
    chkMedsL,
    chkMedsD,
    chkMedsBed,
    chkInsulin,
    typInsulin,
    chkBP,
    chkSlidingScale,
    slidingScale1,
    slidingScale2a,
    slidingScale2b,
    slidingScale3a,
    slidingScale3b,
    slidingScale4a,
    slidingScale4b,
    slidingScale5,
    carbRatio,
  } = req.body;

  const INSERT_PREFERENCES_QUERY =
    `INSERT INTO preferences (
    user_id,timesPD,chkNutrition,chkWeight,height,chkMeds,chkMedsB,
    chkMedsL,chkMedsD,chkMedsBed,chkInsulin,typInsulin,
    chkSlidingScale,slidingScale1,slidingScale2a,slidingScale2b,
    slidingScale3a,slidingScale3b,slidingScale4a,slidingScale4b,
    slidingScale5,carbRatio)
     values(${user_id},${timesPD},${chkNutrition},${chkWeight},
      ${height},${chkMeds},${chkMedsB},${chkMedsL},${chkMedsD},
      ${chkMedsBed},${chkInsulin},${typInsulin},${chkBP},
      ${chkSlidingScale},${slidingScale1},${slidingScale2a},
      ${slidingScale2b},${slidingScale3a},${slidingScale3b},
      ${slidingScale4a},${slidingScale4b},${slidingScale5},
      ${carbRatio})`;

  connection.query(INSERT_PREFERENCES_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send('Successfuly added preference');
    }
  });
});

module.exports = router;
