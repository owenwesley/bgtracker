const express = require('express');
const router = express.Router();
const connection = require('../../db/Connection');

const SELECT_ALL_WEIGHTS_QUERY =
    `SELECT * FROM weights`;

// Middleware
router.use('/add', require('./weights/add'));
router.use('/edit', require('./weights/edit'));
router.use('/delete', require('./weights/delete'));
router.use('/deleteAll', require('./weights/deleteAll'));

router.get('/', (req, res) => {
    connection.query(SELECT_ALL_WEIGHTS_QUERY, (err, results) => {
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
        SELECT_ALL_WEIGHTS_QUERY + ' WHERE user_id=?',
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
