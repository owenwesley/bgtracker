const express = require('express');
const router = express.Router();
const connection = require('../../../db/Connection');

router.post('/:user_id', (req, res) => {
  const {
    user_id = req.params.user_id,
    name = req.body.name,
    dose = req.body.dose,
    unit = req.body.unit,
    quantity = req.body.quantity,
    prescriber = req.body.prescriber,
    am = req.body.am,
    noon = req.body.noon,
    evening = req.body.evening,
    bed = req.body.bed,
  } = req.query;
  const INSERT_MEDICATIONS_QUERY =
    `INSERT INTO medications (user_id, name, dose, unit,quantity, prescriber,
     am, noon, evening, bed) values(${user_id},${name},${dose},${unit},
     ${quantity},${prescriber},${am},${noon},${evening},${bed});
    CREATE TEMPORARY TABLE tmpmedications(
      user_id int not null,
      name text not null,
      dose double not null,
      unit text not null,
      quantity int not null,
      prescriber text not null,
      am int not null,
      noon int not null,
      evening int not null,
      bed int not null);\
      INSERT INTO tmpmedications(user_id,name,dose,unit,quantity,prescriber,
        am,noon,evening,bed)
        SELECT user_id,name,dose,unit,quantity,prescriber,am,noon,evening,bed 
        FROM medications;
      DROP TABLE medications;
    CREATE TABLE medications(
      id int not null auto_increment,
      user_id int not null,
      name text not null,
      dose double not null,
      unit text not null,
      quantity int not null,
      prescriber text not null,
      am int not null,
      noon int not null,
      evening int not null,
      bed int not null,
      primary key (id));\
    INSERT INTO medications(user_id,name,dose,unit,quantity,prescriber,\
      am,noon,evening,bed)\
      SELECT user_id,name,dose,unit,quantity,prescriber,am,noon,evening,bed 
      FROM tmpmedications order by name, user_id;
    DROP TEMPORARY TABLE tmpmedications;`;

  connection.query(INSERT_MEDICATIONS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send('Successfuly Added Medication');
    }
  });
});

module.exports = router;
