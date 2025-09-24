const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

router.post('/:user_id', (req, res) => {
  const {
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
  const INSERT_READINGS_QUERY =
    `INSERT INTO readings (user_id,date,sugarB,carbsB,insulinB,` +
    `insulinSB,insulinFB,chkMedsB,sugarL,carbsL,insulinL,chkMedsL,sugarD,` +
    `carbsD,insulinD,chkMedsD,sugarBB,carbsBB,insulinBB,sugarBed,carbsBed,` +
    `insulinBed,insulinSBed,insulinFBed,chkMedsBed) VALUES (${user_id},` +
    `curdate(),${sugarB},${carbsB},${insulinB},${insulinSB},${insulinFB},` +
    `${chkMedsB},${sugarL},${carbsL},${insulinL},${chkMedsL},${sugarD},` +
    `${carbsD},${insulinD},${chkMedsD},${sugarBB},${carbsBB},${insulinBB},` +
    `${sugarBed},${carbsBed},${insulinBed},${insulinSBed},${insulinFBed},` +
    `${chkMedsBed});\
    CREATE TEMPORARY TABLE tmpreadings(
      user_id int not null,
      date text not null,
      sugarB int not null,
      carbsB int not null,
      insulinB int not null,
      insulinSB int not null,
      insulinFB int not null,
      chkMedsB tinyint not null,
      sugarL int not null,
      carbsL int not null,
      insulinL int not null,
      chkMedsL tinyint not null,
      sugarD int not null,
      carbsD int not null,
      insulinD int not null,
      chkMedsD tinyint not null,
      sugarBB int not null,
      carbsBB int not null,
      insulinBB int not null,
      sugarBed int not null,
      carbsBed int not null,
      insulinBed int not null,
      insulinSBed int not null,
      insulinFBed int not null,
      chkMedsBed tinyint not null);\
      INSERT INTO tmpreadings(user_id,date,sugarB,carbsB,insulinB,insulinSB,
        insulinFB,chkMedsB,sugarL,carbsL,insulinL,chkMedsL,sugarD,carbsD,
        insulinD,chkMedsD,sugarBB,carbsBB,insulinBB,sugarBed,carbsBed,
        insulinBed,insulinSBed,insulinFBed,chkMedsBed)\
        SELECT user_id,date,sugarB,carbsB,insulinB,insulinSB,insulinFB,
        chkMedsB,sugarL,carbsL,insulinL,chkMedsL,sugarD,carbsD,insulinD,
        chkMedsD,sugarBB,carbsBB,insulinBB,sugarBed,carbsBed,insulinBed,
        insulinSBed,insulinFBed,chkMedsBed FROM readings;\
      DROP TABLE readings;\
    CREATE TABLE readings(
      id int not null auto_increment,
      user_id int not null,
      date text not null,
      sugarB int not null,
      carbsB int not null,
      insulinB int not null,
      insulinSB int not null,
      insulinFB int not null,
      chkMedsB tinyint not null,
      sugarL int not null,
      carbsL int not null,
      insulinL int not null,
      chkMedsL tinyint not null,
      sugarD int not null,
      carbsD int not null,
      insulinD int not null,
      chkMedsD tinyint not null,
      sugarBB int not null,
      carbsBB int not null,
      insulinBB int not null,
      sugarBed int not null,
      carbsBed int not null,
      insulinBed int not null,
      insulinSBed int not null,
      insulinFBed int not null,
      chkMedsBed tinyint not null,
      primary key (id));\
    INSERT INTO readings(user_id,date,sugarB,carbsB,insulinB,insulinSB,
      insulinFB,chkMedsB,sugarL,carbsL,insulinL,chkMedsL,sugarD,carbsD,
      insulinD,chkMedsD,sugarBB,carbsBB,insulinBB,sugarBed,carbsBed,
      insulinBed,insulinSBed,insulinFBed,chkMedsBed)\
      SELECT user_id,date,sugarB,carbsB,insulinB,insulinSB,
      insulinFB,chkMedsB,sugarL,carbsL,insulinL,chkMedsL,sugarD,carbsD,
      insulinD,chkMedsD,sugarBB,carbsBB,insulinBB,sugarBed,carbsBed,
      insulinBed,insulinSBed,insulinFBed,chkMedsBed 
      FROM tmpreadings order by date, user_id;\
    DROP TEMPORARY TABLE tmpreadings;`;

  connection.query(INSERT_READINGS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send('Successfuly added reading');
    }
  });
});

module.exports = router;
