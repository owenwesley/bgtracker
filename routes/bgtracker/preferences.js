const express = require('express');
const router = express.Router();
const connection = require('../../db/Connection');

const SELECT_ALL_PREFERENCES_QUERY =
  `SELECT id, user_id, timesPD,` +
  `IF(chkNutrition, 'true','false'), chkNutrition, ` +
  `IF(chkMeds, 'true','false'), chkMeds, ` +
  `IF(chkMedsB, 'true','false'), chkMedsB, ` +
  `IF(chkMedsL, 'true','false'), chkMedsL, ` +
  `IF(chkMedsD, 'true','false'), chkMedsD, ` +
  `IF(chkMedsBed, 'true','false'), chkMedsBed, ` +
  `IF(chkInsulin, 'true','false'), chkInsulin, ` +
  `typInsulin,IF(chkBP, 'true','false'), chkBP, ` +
  `IF(chkSlidingScale, 'true','false'), chkSlidingScale, ` +
  `slidingScale1, slidingScale2a, slidingScale2b, slidingScale3a, ` +
  `slidingScale3b, slidingScale4a, slidingScale4b, slidingScale5, ` +
  `carbRatio FROM preferences`;

// Middleware
router.use('/add', require('./preferences/add'));
router.use('/edit', require('./preferences/edit'));
router.use('/delete', require('./preferences/delete'));

router.get('/', (req, res) => {
  connection.query(SELECT_ALL_PREFERENCES_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        results,
      });
    }
  });
});

router.get('/:user_id', (req, res) => {
  connection.query(
    SELECT_ALL_PREFERENCES_QUERY + ' WHERE user_id=?',
    [req.params.user_id],
    (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          results,
        });
      }
    }
  );
});

module.exports = router;
