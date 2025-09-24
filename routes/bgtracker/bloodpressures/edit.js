const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

router.post('/:user_id', (req, res) => {
  const {
    id = req.body.id,
    user_id = req.params.user_id,
    date = req.body.date,
    hbp = req.body.hbp,
    lbp = req.body.lbp,
    hr = req.body.hr,
    hbp2 = req.body.hbp2,
    lbp2 = req.body.lbp2,
    hr2 = req.body.hr2,
  } = req.query;

  const sql = `SET @id=?;SET @user_id=?;SET @date=?;SET @hbp=?;SET @lbp=?;\
     SET @hr=?;SET @hbp2=?;SET @lbp2=?;SET @hr2=?;\
      CALL updateBP(@id,@user_id,@date,@hbp,@lbp,@hr,@hbp2,@lbp2,@hr2);`;

  connection.query(
    sql,
    [
      id,
      user_id,
      date,
      hbp,
      lbp,
      hr,
      hbp2,
      lbp2,
      hr2,
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
