const copyContactsTable =
    `CREATE TEMPORARY TABLE tmpcontacts(
        user_id int not null,
        firstName text not null,
        lastName text not null,
        phoneNum text not null,
        address text not null,
        birthday date not null);
      INSERT INTO tmpcontacts(user_id,firstName,lastName,phoneNum,
       address)
        SELECT user_id,firstName,lastName,phoneNum,address
         FROM contacts;
      DROP TABLE contacts;
    CREATE TABLE contacts(
        id int not null auto_increment,
        user_id int not null,
        firstName text not null,
        lastName text not null,
        phoneNum text not null,
        address text not null,
        primary key (id));
    INSERT INTO contacts(user_id,firstName,lastName,phoneNum,address)
     SELECT user_id,firstName,lastName,phoneNum,address
      FROM tmpcontacts order by lastName, user_id;
    DROP TEMPORARY TABLE tmpcontacts;`;

const createContactsTbl =
    `CREATE TABLE IF NOT EXISTS contacts(
        id int not null auto_increment,
        user_id int not null,
        firstName text not null,
        lastName text not null,
        phoneNum text not null,
        address text not null,
        primary key (id));`;

const deleteAllContacts =
    `DELETE FROM contacts WHERE user_id=?;
      ${copyContactsTable}`;

const deleteContacts =
    `DELETE FROM contacts WHERE user_id=?;
     ORDER BY id LIMIT 1;
     ${copyContactsTable}`;

const insertContact =
    `INSERT INTO contacts(user_id,firstName,lastName,phoneNum,
       address) values(?,?,?,?,?)`;

const selectContacts = `select * from contacts`;

const updateContact =
    `SET @id=?;SET @user_id=?;SET @firstName=?;SET @lastName=?;
     SET @phoneNum=?;SET @address=?;
     CALL updateContact(@id,@user_id,@firstName,@lastName,@phoneNum,
     @address);`;

module.exports={
    copyContactsTable,
    createContactsTbl,
    deleteAllContacts,
    deleteContacts,
    insertContact,
    selectContacts,
    updateContact,
}