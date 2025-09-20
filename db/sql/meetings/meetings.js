export const createMeetingsTbl =
  `CREATE TABLE IF NOT EXISTS meetings(
        id int not null auto_increment,
        user_id int not null,
        date text not null,
        chair text not null,
        coChair text not null,
        newCommer int not null,
        day30 int not null,
        day60 int not null,
        day90 int not null,
        month6 int not null,
        month9 int not null,
        month12 int not null,
        month18 int not null,
        multiyr int not null,
        gc1 int not null,
        gc2 int not null,
        gc3 int not null,
        gc4 int not null,
        gc5 int not null,
        gc6 int not null,
        gc7 int not null,
        gc8 int not null,
        gc9 int not null,
        gc10 int not null,
        attendance int not null default(0),
        memo text not null,
        deposit double not null default(0.00),
        primary key (id));`;

export const copyMeetingsTable =
  `CREATE TEMPORARY TABLE tmpmeetings(
        user_id int not null,
        date text not null,
        chair text not null,
        coChair text not null,
        newCommer int not null,
        day30 int not null,
        day60 int not null,
        day90 int not null,
        month6 int not null,
        month9 int not null,
        month12 int not null,
        month18 int not null,
        multiyr int not null,
        gc1 int not null,
        gc2 int not null,
        gc3 int not null,
        gc4 int not null,
        gc5 int not null,
        gc6 int not null,
        gc7 int not null,
        gc8 int not null,
        gc9 int not null,
        gc10 int not null,
        attendance int not null default(0),
        memo text not null,
        deposit double not null default(0.00));
      INSERT INTO tmpmeetings(user_id,date,chair,coChair,newCommer,
      day30,day60,day90,month6,month9,month12,month18,multiyr,
      gc1,gc2,gc3,gc4,gc5,gc6,gc7,gc8,gc9,gc10,attendace,memo,deposit)
        SELECT user_id,date,chair,coChair,newCommer,day30,day60,
        day90,month6,month9,month12,month18,multiyr,gc1,gc2,
        gc3,gc4,gc5,gc6,gc7,gc8,gc9,gc10,attendace,memo,deposit
         FROM meetings;
      DROP TABLE meetings;
    CREATE TABLE meetings(
        user_id int not null,
        date text not null,
        chair text not null,
        coChair text not null,
        newCommer int not null,
        day30 int not null,
        day60 int not null,
        day90 int not null,
        month6 int not null,
        month9 int not null,
        month12 int not null,
        month18 int not null,
        multiyr int not null,
        gc1 int not null,
        gc2 int not null,
        gc3 int not null,
        gc4 int not null,
        gc5 int not null,
        gc6 int not null,
        gc7 int not null,
        gc8 int not null,
        gc9 int not null,
        gc10 int not null,
        attendance int not null default(0),
        memo text not null,
        deposit double not null default(0.00),
        primary key (id));
    INSERT INTO meetings(user_id,date,chair,coChair,newCommer,
      day30,day60,day90,month6,month9,month12,month18,multiyr,
      gc1,gc2,gc3,gc4,gc5,gc6,gc7,gc8,gc9,gc10,attendace,memo,deposit)
      SELECT user_id,date,chair,coChair,newCommer,
      day30,day60,day90,month6,month9,month12,month18,multiyr,
      gc1,gc2,gc3,gc4,gc5,gc6,gc7,gc8,gc9,gc10,attendace,memo,deposit 
      FROM tmpmeetings order by date, user_id;
    DROP TEMPORARY TABLE tmpmeetings;`;

export const deleteAllMeetings =
  `DELETE FROM meetings WHERE user_id=?;
  ${copyMeetingsTable}`;

export const deleteMeetings =
  `DELETE FROM meetings WHERE user_id=?;
     ORDER BY id LIMIT 1;
     ${copyMeetingsTable}`;

export const insertMeeting =
  `INSERT INTO meetings (user_id,date,chair,coChair,newCommer,
      day30,day60,day90,month6,month9,month12,month18,multiyr,
      gc1,gc2,gc3,gc4,gc5,gc6,gc7,gc8,gc9,gc10,attendace,memo,deposit)
       values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

export const selectMeetings = `SELECT * from meetings`;

export const updateMeeting =
  `SET @id=?;SET @user_id=?;SET @date=?;SET @chair=?;
    SET @coChair=?;SET @newCommer=?;SET @day30=?;SET @day60=?;
    SET @day90=?;SET @month6=?;SET @month9=?;SET @month12=?;
    SET @month18=?;SET @multiyr=?;SET @gc1=?;SET @gc2=?;SET @gc3=?;
    SET @gc4=?;SET @gc5=?;SET @gc6=?;SET @gc7=?;SET @gc8=?;
    SET @gc9=?;SET @gc10=?;SET @attendance=?;SET @memo=?;SET @deposit=?;
     CALL updateMeeting(@id,@user_id,@chair,@coChair,@newCommer,
     @day30,@day60,@day90,@month6,@month9,@month12,@month18,@multiyr,
     @gc1,@gc2,@gc3,@gc4,@gc5,@gc6,@gc7,@gc8,@gc9,@gc10,@attendance,
     @memo,@deposit);`;
