const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

router.post('/:id', (req, res) => {
  const {
    id = req.params.id,
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

  const sql = `UPDATE preferences SET id=?, user_id=?, timesPD=?,
   chkNutrition=?, chkWeight=?, height=?, chkMeds=?, chkMedsB=?,
   chkMedsL=?, chkMedsD=?, chkMedsBed=?, chkInsulin=?, typInsulin=?,
   chkBP=?, chkSlidingScale=?, slidingScale1=?, slidingScale2a=?,
   slidingScale2b=?, slidingScale3a=?, slidingScale3b=?,
   slidingScale4a=?, slidingScale4b=?, slidingScale5=?, carbRatio=?
    WHERE id=? AND user_id=?;`;

  connection.query(
    sql,
    [
      id,
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
      id,
      user_id,
    ],
    (err, results) => {
      if (err) {
        return res.send(err.message);
      } else {
        res.send('Successfully Edited Row:');
      }
    }
  );
});

module.exports = router;
