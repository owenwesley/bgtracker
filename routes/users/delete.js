const express = require('express');
const router = express.Router();
const { deleteUserById } = require('../../db/sql/users');
const { bgtracker } = require('../../db/db');

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
