const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

router.post('/:user_id', (req, res) => {
  const {
    id = req.body.id,
    user_id = req.params.user_id,
    date = req.body.date,
    sugarB = req.body.sugarB,
    carbsB = req.body.carbsB,
    insulinB = req.body.insulinB,
    insulinSB = req.body.insulinSB,
    insulinFB = req.body.insulinFB,
    chkMedsB = req.body.chkMedsB,
    sugarL = req.body.sugarL,
    carbsL = req.body.carbsL,
    insulinL = req.body.insulinL,
    chkMedsL = req.body.chkMedsL,
    sugarD = req.body.sugarD,
    carbsD = req.body.carbsD,
    insulinD = req.body.insulinD,
    chkMedsD = req.body.chkMedsD,
    sugarBB = req.body.sugarBB,
    carbsBB = req.body.carbsBB,
    insulinBB = req.body.insulinBB,
    sugarBed = req.body.sugarBed,
    carbsBed = req.body.carbsBed,
    insulinBed = req.body.insulinBed,
    insulinSBed = req.body.insulinSBed,
    insulinFBed = req.body.insulinFBed,
    chkMedsBed = req.body.chkMedsBed,
  } = req.query;

  const sql = `SET @id=?;SET @user_id=?;SET @date=?;SET @sugarB=?;SET\
     @carbsB=?;SET @insulinB=?;SET @insulinSB=?;SET @insulinFB=?;
     SET @chkMedsB=?;SET @sugarL=?;SET @carbsL=?;SET @insulinL=?;
     SET @chkMedsL=?;SET @sugarD=?;SET @carbsD=?;SET @insulinD=?;
     SET @chkMedsD=?;SET @sugarBB=?;SET @carbsBB=?;SET @insulinBB=?;
     SET @sugarBed=?;SET @carbsBed=?;SET @insulinBed=?;SET @insulinSBed=?;
     SET @insulinFBed=?;SET @chkMedsBed=?;\
      CALL updateReading(@id,@user_id,@date,@sugarB,@carbsB,@insulinB,\
        @insulinSB,@insulinFB,@chkMedsB,@sugarL,@carbsL,@insulinL,@chkMedsL,
        @sugarD,@carbsD,@insulinD,@chkMedsD,@sugarBB,@carbsBB,@insulinBB,
        @sugarBed,@carbsBed,@insulinBed,@insulinSBed,@insulinFBed,
        @chkMedsBed);`;

  connection.query(
    sql,
    [
      id,
      user_id,
      date,
      sugarB,
      carbsB,
      insulinB,
      insulinSB,
      insulinFB,
      chkMedsB,
      sugarL,
      carbsL,
      insulinL,
      chkMedsL,
      sugarD,
      carbsD,
      insulinD,
      chkMedsD,
      sugarBB,
      carbsBB,
      insulinBB,
      sugarBed,
      carbsBed,
      insulinBed,
      insulinSBed,
      insulinFBed,
      chkMedsBed,
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
