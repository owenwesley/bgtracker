const copyBooksTable =
  `CREATE TEMPORARY TABLE tmpbooks(
        user_id int not null,
        title text not null,
        author text not null,
        publisher text not null,
        copywrite int not null,
        isbn text not null,
        io tinyint(1) not null,
        who text not null,
        lost tinyint(1) not null,
        imgurl text not null);
      INSERT INTO tmpbooks(user_id,title,author,publisher,copywrite,isbn,
        io,who,lost,imgurl)
        SELECT user_id,title,author,publisher,copywrite,isbn,io,who,
        lost,imgurl FROM books;
      DROP TABLE books;
    CREATE TABLE books(
        id int not null auto_increment,
        user_id int not null,
        title text not null,
        author text not null,
        publisher text not null,
        copywrite int not null,
        isbn text not null,
        io tinyint(1) not null,
        who text not null,
        lost tinyint(1) not null,
        imgurl text not null);
        primary key (id));
    INSERT INTO books(user_id,title,author,publisher,copywrite,isbn,
      io,who,lost,imgurl)
      SELECT user_id,title,author,publisher,copywrite,isbn,io,who,lost,
      imgurl
       FROM tmpbooks order by title, user_id;
    DROP TEMPORARY TABLE tmpbooks;`;

const createBooksTbl =
  `CREATE TABLE IF NOT EXISTS books(
        id int not null auto_increment,
        user_id int not null,
        title text not null,
        author text not null,
        publisher text not null,
        copywrite int not null,
        isbn text not null,
        io tinyint(1) not null,
        who text not null,
        lost tinyint(1) not null,
        imgurl text not null,
        primary key (id));`;

const deleteAllBooks =
  `DELETE FROM books WHERE user_id=?;
  ${copyBooksTable}`;

const deleteBooks =
  `DELETE FROM books WHERE user_id=?;
     ORDER BY id LIMIT 1;
     ${copyBooksTable}`;

const insertBook =
  `INSERT INTO books (user_id,title,author,publisher,copywrite,isbn,
      io,who,lost,imgurl) values(?,?,?,?,?,?,?,?,?,?)`;

const selectBooks =
  `SELECT id,user_id,title,author,publisher,copywrite,isbn,
   IF(io, 'true','false'), io,who,
   IF(lost, 'true','false'), lost,imgurl FROM books`;

const updateBook =
  `SET @id=?;SET @user_id=?;SET @title=?;SET @author=?;
    SET @publisher=?;SET @copywrite=?;SET @isbn=?;SET @io=?;
    SET @who=?;SET @lost=?;SET @imgurl=?;
     CALL updateBook(@id,@user_id,@title,@author,@publisher,
     @copywrite,@isbn,@io,@who,@lost,@imgurl);`;

module.exports={
  copyBooksTable,
  createBooksTbl,
  deleteAllBooks,
  deleteBooks,
  insertBook,
  selectBooks,
  updateBook,
}