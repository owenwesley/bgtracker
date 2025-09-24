const copyMedicationsTable =
  `CREATE TEMPORARY TABLE tmpmedications(
      user_id int not null,
      name text not null,
      dose double not null,
      unit text not null,
      quantity int not null,
      prescriber text not null,
      am int not null,
      noon int not null,
      evening int not null,
      bed int not null);
      INSERT INTO tmpmedications(user_id,name,dose,unit,quantity,
      prescriber,am,noon,evening,bed)
        SELECT user_id,name,dose,unit,quantity,prescriber,am,noon,
        evening,bed 
        FROM medications order by name asc;
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
      primary key (id));
    INSERT INTO medications(user_id,name,dose,unit,quantity,prescriber,
      am,noon,evening,bed)
      SELECT user_id,name,dose,unit,quantity,prescriber,am,noon,evening,bed 
      FROM tmpmedications;
    DROP TEMPORARY TABLE tmpmedications;`;

const createMedicationsTbl =
  `CREATE TABLE IF NOT EXISTS medications(
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
      primary key (id));`;

const deleteMedication = `DELETE FROM medications WHERE id=? LIMIT 1;
    ${copyMedicationsTable}`;

const deleteAllMedications =
  `DELETE FROM medications WHERE user_id=?;
    ${copyMedicationsTable}`;

const insertMedication =
  `INSERT INTO medications (user_id, name, dose, unit, quantity,
    prescriber, am, noon, evening, bed) values(?,?,?,?,?,?,?,?,?,?);
     ${copyMedicationsTable}`;

const selectMedications = `SELECT * FROM medications`;

const updateMedication =
  `SET @id=?;SET @user_id=?;SET @name=?;SET @dose=?;SET @unit=?;
  SET @quantity=?;SET @prescriber=?;SET @am=?;SET @noon=?;
  SET @evening=?;SET @bed=?;CALL updateMedication(@id,@user_id,@name,
  @dose,@unit,@quantity,@prescriber,@am,@noon,@evening,@bed);`;

module.exports = {
  copyMedicationsTable,
  deleteAllMedications,
  deleteMedication,
  insertMedication,
  selectMedications,
  updateMedication,
}