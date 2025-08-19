const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

router.post('/:user_id', (req, res) => {
  const {
    user_id = req.body.user_id,
    timesPD = req.body.timesPD,
    chkNutrition = req.body.chkNutrition,
    chkMeds = req.body.chkMeds,
    chkMedsB = req.body.chkMedsB,
    chkMedsL = req.body.chkMedsL,
    chkMedsD = req.body.chkMedsD,
    chkMedsBed = req.body.chkMedsBed,
    chkInsulin = req.body.chkInsulin,
    typInsulin = req.body.typInsulin,
    chkBP = req.body.chkBP,
    chkSlidingScale = req.body.chkSlidingScale,
    slidingScale1 = req.body.slidingScale1,
    slidingScale2a = req.body.slidingScale2a,
    slidingScale2b = req.body.slidingScale2b,
    slidingScale3a = req.body.slidingScale3a,
    slidingScale3b = req.body.slidingScale3b,
    slidingScale4a = req.body.slidingScale4a,
    slidingScale4b = req.body.slidingScale4b,
    slidingScale5 = req.body.slidingScale5,
    carbRatio = req.body.carbRatio,
  } = req.query;
  const INSERT_PREFERENCES_QUERY =
    'INSERT INTO preferences (' +
    'user_id,timesPD,chkNutrition,chkMeds,chkMedsB,chkMedsL,chkMedsD,' +
    'chkMedsBed,chkInsulin,typInsulin,chkSlidingScale,slidingScale1,' +
    'slidingScale2a,slidingScale2b,slidingScale3a,slidingScale3b,' +
    'slidingScale4a,slidingScale4b, slidingScale5,carbRatio)' +
    ` values(${user_id},${timesPD},${chkNutrition},${chkMeds},${chkMedsB},
      ${chkMedsL},${chkMedsD},${chkMedsBed},${chkInsulin},${typInsulin},
      ${chkBP},${chkSlidingScale},${slidingScale1},${slidingScale2a},
      ${slidingScale2b},${slidingScale3a},${slidingScale3b},${slidingScale4a},
      ${slidingScale4b},${slidingScale5},${carbRatio})`;

  connection.query(INSERT_PREFERENCES_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send('Successfuly added preference');
    }
  });
});

module.exports = router;
