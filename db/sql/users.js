const createUsersTbl =
  `CREATE TABLE IF NOT EXISTS users(
        id int not null auto_increment,
        firstName text not null,
        lastName text not null,
        userName text not null,
        password text not null,
        email text not null,
        primary key (id));`;

const copyUserTable =
    `CREATE TEMPORARY TABLE tmpusers(
        firstName text not null,
        lastName text not null,
        userName text not null,
        password text not null,
        email text not null);
        INSERT INTO tmpusers(firstName,lastName,userName,password,email)
          SELECT firstName,lastName,userName,password,email FROM users;
        DROP TABLE users;
        ${createUsersTbl}
      INSERT INTO users(firstName,lastName,userName,password,email)
       SELECT firstName,lastName,userName,password,email FROM tmpusers;
      DROP TEMPORARY TABLE tmpusers`;

const deleteUserById = (id) => {
  return sql = `DELETE FROM users WHERE id=${id}
   ORDER BY id LIMIT 1;
     ${copyUserTable}`;
}

const selectUser = 'SELECT * FROM users';

const insertUser = (firstName, lastName, userName, password, email) => {
  return sql =
    `INSERT INTO users (
    firstName, lastName, userName, password, email)
     values(${firstName},${lastName},${userName},${password},${email});
    ${copyUserTable}`;
}

const updateUser =
  `SET @id=?;SET @firstName=?;SET @lastName=?;SET @userName=?;
    SET @password=?;SET @email=?;
  CALL updateUser(@id,@firstName,@lastName,@userName,@password,@email);`;

module.exports={
  copyUserTable,
  createUsersTbl,
  deleteUserById,
  selectUser,
  insertUser,
  updateUser,
}