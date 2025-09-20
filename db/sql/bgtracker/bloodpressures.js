const copyBloodpressuresTable =
  `CREATE TEMPORARY TABLE tmpbloodpressures(
      user_id int not null,
      date text not null,
      hbp int not null,
      lbp int not null,
      hr int not null,
      hbp2 int not null,
      lbp2 int not null,
      hr2 int not null);
      INSERT INTO tmpbloodpressures(user_id,date,hbp,lbp,hr,hbp2,lbp2,hr2)
       SELECT user_id,date,hbp,lbp,hr,hbp2,lbp2,hr2
        FROM bloodpressures;
      DROP TABLE bloodpressures;
    CREATE TABLE bloodpressures(
      id int not null auto_increment,
      user_id int not null,
      date text not null,
      hbp int not null,
      lbp int not null,
      hr int not null,
      hbp2 int not null,
      lbp2 int not null,
      hr2 int not null,
      primary key (id));
    INSERT INTO bloodpressures(user_id,date,hbp,lbp,hr,hbp2,lbp2,hr2)
     SELECT user_id,date,hbp,lbp,hr,hbp2,lbp2,hr2
      FROM tmpbloodpressures order by date, user_id;
    DROP TEMPORARY TABLE tmpbloodpressures;`;

const deleteBloodpressure =
  `DELETE FROM bloodpressures WHERE user_id=?;
     ORDER BY id LIMIT 1;
    ${copyBloodpressuresTable}`;

const deleteAllBloodpressures =
  `DELETE FROM bloodpressures WHERE user_id=?;
    ${copyBloodpressuresTable}`;

const insertBloodpressure =
  `INSERT INTO bloodpressures (user_id,date,hbp,lbp,hr,hbp2,lbp2,hr2)
     VALUES (?,?,?,?,?,?,?,?);
     ${copyBloodpressuresTable}`;

const selectBloodPressures = 'SELECT * FROM bloodpressures';

const updateBP =
  `SET @id=?;SET @user_id=?;SET @date=?;SET @hbp=?;SET @lbp=?;
     SET @hr=?;SET @hbp2=?;SET @lbp2=?;SET @hr2=?;
     CALL updateBP(@id,@user_id,@date,@hbp,@lbp,@hr,@hbp2,@lbp2,@hr2);`;

module.exports = {
  copyBloodpressuresTable,
  deleteBloodpressure,
  deleteAllBloodpressures,
  insertBloodpressure,
  selectBloodPressures,
  updateBP,
}