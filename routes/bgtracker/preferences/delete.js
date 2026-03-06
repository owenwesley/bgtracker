const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

router.get('/:id', (req, res) => {
  const sql = `DELETE FROM preferences WHERE id=${req.params.id}\
    ORDER BY id LIMIT 1;\
    CREATE TEMPORARY TABLE tmppreferences(
        user_id int not null,
        timesPD int not null,
        chkNutrition tinyint not null,
        chkWeight tinyint not null,
        chkMeds tinyint not null,
        chkMedsB tinyint not null,
        chkMedsL tinyint not null,
        chkMedsD tinyint not null,
        chkMedsBed tinyint not null,
        chkInsulin tinyint not null,
        typInsulin int not null,
        chkBP tinyint not null,
        chkSlidingScale tinyint not null,
        slidingScale1 int not null,
        slidingScale2a int not null,
        slidingScale2b int not null,
        slidingScale3a int not null,
        slidingScale3b int not null,
        slidingScale4a int not null,
        slidingScale4b int not null,
        slidingScale5 int not null,
        carbRatio int not null);
      INSERT INTO tmppreferences(user_id,timesPD,chkNutrition,
      chkWeight,chkMeds,chkMedsB,chkMedsL,chkMedsD,chkMedsBed,
      chkInsulin,typInsulin,chkBP,chkSlidingScale,slidingScale1,
      slidingScale2a,slidingScale2b,slidingScale3a,slidingScale3b,
      slidingScale4a,slidingScale4b,slidingScale5,carbRatio)
        SELECT user_id,timesPD,chkNutrition,chkWeight,chkMeds,
        chkMedsB,chkMedsL,chkMedsD,chkMedsBed,chkInsulin,typInsulin,
        chkBP,chkSlidingScale,slidingScale1,slidingScale2a,
        slidingScale2b,slidingScale3a,slidingScale3b,slidingScale4a,
        slidingScale4b,slidingScale5,carbRatio 
        FROM preferences;
      DROP TABLE preferences;
    CREATE TABLE preferences(
      user_id int not null,
      timesPD int not null,
      chkNutrition tinyint not null,
      chkWeight tinyint not null,
      chkMeds tinyint not null,
      chkMedsB tinyint not null,
      chkMedsL tinyint not null,
      chkMedsD tinyint not null,
      chkMedsBed tinyint not null,
      chkInsulin tinyint not null,
      typInsulin int not null,
      chkBP tinyint not null,
      chkSlidingScale tinyint not null,
      slidingScale1 int not null,
      slidingScale2a int not null,
      slidingScale2b int not null,
      slidingScale3a int not null,
      slidingScale3b int not null,
      slidingScale4a int not null,
      slidingScale4b int not null,
      slidingScale5 int not null,
      carbRatio int not null,
      primary key (id));
    INSERT INTO preferences(user_id,timesPD,chkNutrition,chkWeight,
    chkMeds,chkMedsB,chkMedsL,chkMedsD,chkMedsBed,chkInsulin,
    typInsulin,chkBP,chkSlidingScale,slidingScale1,slidingScale2a,
    slidingScale2b,slidingScale3a,slidingScale3b,slidingScale4a,
    slidingScale4b,slidingScale5,carbRatio)
      SELECT user_id,timesPD,chkNutrition,chkWeight,chkMeds,
      chkMedsB,chkMedsL,chkMedsD,chkMedsBed,chkInsulin,typInsulin,
      chkBP,chkSlidingScale,slidingScale1,slidingScale2a,
      slidingScale2b,slidingScale3a,slidingScale3b,slidingScale4a,
      slidingScale4b,slidingScale5,carbRatio FROM tmppreferences;
    DROP TEMPORARY TABLE tmppreferences;`;

  connection.query(sql, (err, results, rows) => {
    if (err) {
      return res.send(err.message);
    } else {
      res.send(`Successfully Deleted Row ${req.params.id}`);
    }
  });
});

module.exports = router;
