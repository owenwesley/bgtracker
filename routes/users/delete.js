const express = require('express');
const router = express.Router();
const connection = require('../../db/Connection');
const { deleteUserById } = require('../../db/sql/users');

router.get('/:id', (req, res) => {
  bgtracker.query(
    deleteUserById(req.params.id),
    (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send(`Successfully deleted User ${req.params.id}`);
      }
    });
});

module.exports = router;
