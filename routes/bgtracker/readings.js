const express = require('express');
const router = express.Router();
const connection = require('../../db/Connection');

const SELECT_ALL_READINGS_QUERY =
`SELECT id,user_id,date,sugarB,carbsB,insulinB,insulinSB,insulinFB,` +
`IF(chkMedsB, 'true','false'), chkMedsB,sugarL,carbsL,insulinL,` +
`IF(chkMedsL, 'true','false'), chkMedsL,sugarD,carbsD,insulinD,` +
`IF(chkMedsD, 'true','false'), chkMedsD,sugarBB,carbsBB,insulinBB,` +
`sugarBed,carbsBed,insulinBed,insulinSBed,insulinFBed,` +
`IF(chkMedsBed, 'true','false'), chkMedsBed FROM readings`;

// Middleware
router.use('/add', require('./readings/add'));
router.use('/edit', require('./readings/edit'));
router.use('/delete', require('./readings/delete'));
router.use('/deleteAll', require('./readings/deleteAll'));

router.get('/', (req, res) => {
  connection.query(SELECT_ALL_READINGS_QUERY, (err, results) => {
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
    SELECT_ALL_READINGS_QUERY + ' WHERE user_id=?',
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
