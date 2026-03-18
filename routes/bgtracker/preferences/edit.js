const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

router.post('/:id', (req, res) => {
  const {
    id = req.params.id,
    user_id = req.body.user_id,
    timesPD = req.body.timesPD,
    chkNutrition = req.body.chkNutrition,
    chkWeight = req.body.chkWeight,
    height = req.body.height,
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

  const sql =
    `SET @id=?;SET @user_id=?;SET @timesPD=?;SET @chkNutrition=?;\
    SET @chkWeight=?;SET @height=?;SET @chkMeds=?;SET @chkMedsB=?;\
    SET @chkMedsL=?;SET @chkMedsD=?;SET @chkMedsBed=?;SET @chkInsulin=?;\
    SET @typInsulin=?;SET @chkBP=?;SET @chkSlidingScale=?;\
    SET @slidingScale1=?;SET @slidingScale2a=?;SET @slidingScale2b=?;\
    SET @slidingScale3a=?;SET @slidingScale3b=?;SET @slidingScale4a=?;\
    SET @slidingScale4b=?;SET @slidingScale5=?;SET @carbRatio=?;\
     CALL updatePreference(@id,@user_id,@timesPD,@chkNutrition,
      @chkWeight,@height,@chkMeds,@chkMedsB,@chkMedsL,@chkMedsD,
      @chkMedsBed,@chkInsulin,@typInsulin,@chkBP,@chkSlidingScale,
      @slidingScale1,@slidingScale2a,@slidingScale2b,@slidingScale3a,
      @slidingScale3b,@slidingScale4a,@slidingScale4b,@slidingScale5,
      @carbRatio);`;

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
