const copyPrefereceTable =
  `CREATE TEMPORARY TABLE tmppreferences(
        user_id int not null,
        timesPD int not null,
        chkNutrition tinyint not null,
        chkMeds tinyint not null,
        chkMedsB tinyint not null,
        chkMedsL tinyint not null,
        chkMedsD tinyint not null,
        chkMedsBed tinyint not null,
        chkInsulin tinyint not null,
        typInsulin int not null,
        chkBP tinyint not null,
        chkSlidingScale tinyint not null,
        slidingScale1 int not null,
        slidingScale2a int not null,
        slidingScale2b int not null,
        slidingScale3a int not null,
        slidingScale3b int not null,
        slidingScale4a int not null,
        slidingScale4b int not null,
        slidingScale5 int not null,
        carbRatio int not null);
      INSERT INTO tmppreferences(user_id,timesPD,chkNutrition,chkMeds,
        chkMedsB,chkMedsL,chkMedsD,chkMedsBed,chkInsulin,typInsulin,
        chkBP,chkSlidingScale,slidingScale1,slidingScale2a,slidingScale2b,
        slidingScale3a,slidingScale3b,slidingScale4a,slidingScale4b,
        slidingScale5,carbRatio)
        SELECT user_id,timesPD,chkNutrition,chkMeds,
        chkMedsB,chkMedsL,chkMedsD,chkMedsBed,chkInsulin,typInsulin,
        chkBP,chkSlidingScale,slidingScale1,slidingScale2a,slidingScale2b,
        slidingScale3a,slidingScale3b,slidingScale4a,slidingScale4b,
        slidingScale5,carbRatio 
        FROM preferences;
      DROP TABLE preferences;
    CREATE TABLE preferences(
      id int not null auto_increment,
      user_id int not null,
      timesPD int not null,
      chkNutrition tinyint not null,
      chkMeds tinyint not null,
      chkMedsB tinyint not null,
      chkMedsL tinyint not null,
      chkMedsD tinyint not null,
      chkMedsBed tinyint not null,
      chkInsulin tinyint not null,
      typInsulin int not null,
      chkBP tinyint not null,
      chkSlidingScale tinyint not null,
      slidingScale1 int not null,
      slidingScale2a int not null,
      slidingScale2b int not null,
      slidingScale3a int not null,
      slidingScale3b int not null,
      slidingScale4a int not null,
      slidingScale4b int not null,
      slidingScale5 int not null,
      carbRatio int not null,
      primary key (id));
    INSERT INTO preferences(user_id,timesPD,chkNutrition,chkMeds,
      chkMedsB,chkMedsL,chkMedsD,chkMedsBed,chkInsulin,typInsulin,
      chkBP,chkSlidingScale,slidingScale1,slidingScale2a,slidingScale2b,
      slidingScale3a,slidingScale3b,slidingScale4a,slidingScale4b,
      slidingScale5,carbRatio)
      SELECT user_id,timesPD,chkNutrition,chkMeds,
      chkMedsB,chkMedsL,chkMedsD,chkMedsBed,chkInsulin,typInsulin,
      chkBP,chkSlidingScale,slidingScale1,slidingScale2a,slidingScale2b,
      slidingScale3a,slidingScale3b,slidingScale4a,slidingScale4b,
      slidingScale5,carbRatio FROM tmppreferences;
    DROP TEMPORARY TABLE tmppreferences;`;

const deletePreference = `DELETE FROM preferences WHERE id=?
    ORDER BY id LIMIT 1;`

const insertPreference =
  `INSERT INTO preferences (
    user_id,timesPD,chkNutrition,chkMeds,chkMedsB,chkMedsL,chkMedsD,
    chkMedsBed,chkInsulin,typInsulin,chkSlidingScale,slidingScale1,
    slidingScale2a,slidingScale2b,slidingScale3a,slidingScale3b,
    slidingScale4a,slidingScale4b, slidingScale5,carbRatio)
     values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

const selectPreferences =
  `SELECT id, user_id, timesPD,
    IF(chkNutrition, 'true','false'), chkNutrition,
    IF(chkMeds, 'true','false'), chkMeds, 
    IF(chkMedsB, 'true','false'), chkMedsB, 
    IF(chkMedsL, 'true','false'), chkMedsL, 
    IF(chkMedsD, 'true','false'), chkMedsD, 
    IF(chkMedsBed, 'true','false'), chkMedsBed, 
    IF(chkInsulin, 'true','false'), chkInsulin, 
    typInsulin,IF(chkBP, 'true','false'), chkBP, 
    IF(chkSlidingScale, 'true','false'), chkSlidingScale, 
    slidingScale1, slidingScale2a, slidingScale2b, slidingScale3a, 
    slidingScale3b, slidingScale4a, slidingScale4b, slidingScale5, 
    carbRatio FROM preferences`;

const updatePreference =
  'SET @id=?;SET @user_id=?;SET @timesPD=?;SET @chkNutrition=?;\
    SET @chkMeds=?;SET @chkMedsB=?;SET @chkMedsL=?;SET @chkMedsD=?;\
    SET @chkMedsBed=?;SET @chkInsulin=?;SET @typInsulin=?;SET @chkBP=?;\
    SET @chkSlidingScale=?;SET @slidingScale1=?;SET @slidingScale2a=?;\
    SET @slidingScale2b=?;SET @slidingScale3a=?;SET @slidingScale3b=?;\
    SET @slidingScale4a=?;SET @slidingScale4b=?;SET @slidingScale5=?;\
    SET @carbRatio=?; CALL updatePreference(@id,@user_id,@timesPD,\
      @chkNutrition,@chkMeds,@chkMedsB,@chkMedsL,@chkMedsD,@chkMedsBed,\
      @chkInsulin,@typInsulin,@chkBP,@chkSlidingScale,@slidingScale1,\
      @slidingScale2a,@slidingScale2b,@slidingScale3a,@slidingScale3b,\
      @slidingScale4a,@slidingScale4b,@slidingScale5,@carbRatio);';

module.exports = {
  copyPrefereceTable,
  deletePreference,
  insertPreference,
  selectPreferences,
  updatePreference,
}