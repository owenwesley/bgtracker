import React from "react";
import TableOne from "./Tables/TableOne";
import TableTwo from "./Tables/TableTwo";
import TableTwoBed from "./Tables/TableTwoBed";
import TableTwoBB from "./Tables/TableTwoBB";
import TableThree from "./Tables/TableThree";
import TableFour from "./Tables/TableFour";
import TableFive from "./Tables/TableFive";
import TableFiveMeds from "./Tables/TableFiveMeds";
import TableFiveMeds2 from "./Tables/TableFiveMeds2";
import TableFiveMeds3 from "./Tables/TableFiveMeds3";
import TableFiveMedsBBed from "./Tables/TableFiveMedsBBed";
import TableFiveMedsOne from "./Tables/TableFiveMedsOne";
import TableFiveMedsTwo from "./Tables/TableFiveMedsTwo";
import TableFiveOne from "./Tables/TableFiveOne";
import TableFiveOneMeds from "./Tables/TableFiveOneMeds";
import TableFiveOneMeds2 from "./Tables/TableFiveOneMeds2";
import TableFiveOneMeds3 from "./Tables/TableFiveOneMeds3";
import TableFiveOneMeds4 from "./Tables/TableFiveOneMeds4";
import TableFiveOneMedsBBed from "./Tables/TableFiveOneMedsBBed";
import TableSix from "./Tables/TableSix";
import TableSeven from "./Tables/TableSeven";
import TableEight from "./Tables/TableEight";
import TableEightMeds from "./Tables/TableEightMeds";
import TableEightMeds2 from "./Tables/TableEightMeds2";
import TableEightMeds3 from "./Tables/TableEightMeds3";
import TableEightMeds4 from "./Tables/TableEightMeds4";
import TableEightMedsBBed from "./Tables/TableEightMedsBBed";
import LogInRegister from "./L-R/LogInRegister";
import TableOneBP from "./Tables/TableOneBP";
import TableFiveMedsThreeInsulin from "./Tables/TableFiveMedsThreeInsulin";
import TableSixMeds from "./Tables/TableSixMeds";
import TableSixMeds2 from "./Tables/TableSixMeds2";
import TableSixMeds3 from "./Tables/TableSixMeds3";
import TableSixMeds4 from "./Tables/TableSixMeds4";
import TableSixMedsBBed from "./Tables/TableSixMedsBBed";
import TableSevenMeds from "./Tables/TableSevenMeds";
import TableSevenMeds2 from "./Tables/TableSevenMeds2";
import TableSevenMeds3 from "./Tables/TableSevenMeds3";
import TableSevenMeds4 from "./Tables/TableSevenMeds4";
import TableSevenMedsBBed from "./Tables/TableSevenMedsBBed";

const Tables = ({
  add,
  A1C,
  addBP,
  editIdx,
  timesPD,
  chkNutrition,
  chkMeds,
  chkMedsB,
  chkMedsL,
  chkMedsD,
  chkMedsBed,
  chkInsulin,
  typInsulin,
  chkBP,
  chkSlidingScale,
  startEditingReading,
  stopEditingReading,
  handleChange,
  startEditingBP,
  stopEditingBP,
  handleChangeBP,
  readings,
  bloodpressures,
  userName,
  password,
  isLogedin,
  loginError,
  handleUser,
  handleLogIn,
  handleRegister,
  firstName,
  firstNameError,
  lastName,
  lastNameError,
  userNameError,
  passwordError,
  email,
  emailError,
}) => {
  return (timesPD === 5 &&
    chkNutrition === true &&
    chkMeds === true &&
    chkMedsB === true &&
    chkMedsL === true &&
    chkMedsD === true &&
    chkMedsBed === true &&
    chkInsulin === true &&
    typInsulin === 2 &&
    chkBP === false &&
    chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableEightMeds4
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "MedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableEightMeds4
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "MedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableEightMeds4
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "MedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableEightMeds3
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableEightMeds3
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableEightMeds3
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableEightMeds2
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableEightMeds2
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableEightMeds2
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableEightMeds
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableEightMeds
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableEightMeds
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableEightMedsBBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableEightMedsBBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableEightMedsBBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : timesPD === 5 &&
    chkNutrition === true &&
    chkInsulin === true &&
    typInsulin === 2 &&
    chkBP === true &&
    chkSlidingScale === true ? (
    <TableEight
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableEight
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : timesPD === 5 &&
    chkNutrition === true &&
    chkInsulin === true &&
    typInsulin === 2 &&
    chkBP === false ? (
    <TableEight
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableFiveOneMeds4
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "MedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFiveOneMeds4
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFiveOneMeds4
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "MedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableFiveOneMeds3
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFiveOneMeds3
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFiveOneMeds3
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableFiveOneMeds2
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFiveOneMeds2
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFiveOneMeds2
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableFiveOneMeds
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFiveOneMeds
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFiveOneMeds
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableFiveOneMedsBBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFiveOneMedsBBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFiveOneMedsBBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : timesPD === 5 &&
    chkNutrition === true &&
    chkInsulin === true &&
    typInsulin === 1 &&
    chkBP === true ? (
    <TableFiveOne
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : timesPD === 5 &&
    chkNutrition === true &&
    chkInsulin === true &&
    typInsulin === 1 &&
    chkBP === false ? (
    <TableFiveOne
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 5 &&
      chkNutrition === true &&
      chkInsulin === false &&
      typInsulin === 0 &&
      chkBP === false) ||
    (timesPD === 5 &&
      chkNutrition === 1 &&
      chkInsulin === 0 &&
      typInsulin === 0 &&
      chkBP === 0) ? (
    <TableTwoBB
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableSevenMeds4
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "MedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableSevenMeds4
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "MedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableSevenMeds4
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "MedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableSevenMeds3
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableSevenMeds3
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableSevenMeds3
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableSevenMeds2
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableSevenMeds2
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableSevenMeds2
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableSevenMeds
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableSevenMeds
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableSevenMeds
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableSevenMedsBBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableSevenMedsBBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableSevenMedsBBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : timesPD === 4 &&
    chkNutrition === true &&
    chkInsulin === true &&
    typInsulin === 2 &&
    chkBP === true &&
    chkSlidingScale === true ? (
    <TableSeven
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableSeven
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : timesPD === 4 &&
    chkNutrition === true &&
    chkInsulin === true &&
    typInsulin === 2 &&
    chkBP === false ? (
    <TableSeven
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "SB",
          prop: "insulinSBed",
          type: "number",
        },
        {
          name: "FB",
          prop: "insulinFBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableSixMeds4
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "MedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableSixMeds4
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "MedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableSixMeds4
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "MedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableSixMeds3
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableSixMeds3
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableSixMeds3
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableSixMeds2
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableSixMeds2
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableSixMeds2
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableSixMeds
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableSixMeds
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableSixMeds
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableSixMedsBBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableSixMedsBBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableSixMedsBBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : timesPD === 4 &&
    chkNutrition === true &&
    chkInsulin === true &&
    typInsulin === 1 &&
    chkBP === true &&
    chkSlidingScale === true ? (
    <TableSix
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableSix
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 0) ? (
    <TableSix
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 4 &&
      chkNutrition === true &&
      chkInsulin === false &&
      typInsulin === 0 &&
      chkBP === false) ||
    (timesPD === 4 &&
      chkNutrition === 1 &&
      chkInsulin === 0 &&
      typInsulin === 0 &&
      chkBP === 0) ? (
    <TableTwoBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsBed",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableFiveMedsThreeInsulin
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFiveMedsThreeInsulin
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFiveMedsThreeInsulin
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableFiveMedsThreeInsulin
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableFiveMedsThreeInsulin
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFiveMedsThreeInsulin
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFiveMedsThreeInsulin
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFiveMedsThreeInsulin
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFiveMedsThreeInsulin
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableFiveMedsTwo
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFiveMedsTwo
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFiveMedsTwo
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableFiveMedsOne
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFiveMedsOne
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFiveMedsOne
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableFiveMedsTwo
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFiveMedsTwo
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFiveMedsTwo
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFive
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkInsulin === true &&
      typInsulin === 2 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkInsulin === 1 &&
      typInsulin === 2 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFive
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : timesPD === 3 &&
    chkNutrition === true &&
    chkInsulin === true &&
    typInsulin === 2 &&
    chkBP === false ? (
    <TableFour
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Slow",
          prop: "insulinSB",
          type: "number",
        },
        {
          name: "Fast",
          prop: "insulinFB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableFiveMeds3
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFiveMeds3
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === true &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 1 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFiveMeds3
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsD",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableFiveMeds2
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFiveMeds2
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === true &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 1 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFiveMeds2
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsL",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableFiveMeds
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFiveMeds
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 0 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFiveMeds
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === false &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 0 &&
      chkSlidingScale === 0) ? (
    <TableFiveMedsBBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 0) ? (
    <TableFiveMedsBBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === true &&
      chkMedsB === true &&
      chkMedsL === false &&
      chkMedsD === false &&
      chkMedsBed === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkMeds === 1 &&
      chkMedsB === 1 &&
      chkMedsL === 0 &&
      chkMedsD === 0 &&
      chkMedsBed === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableFiveMedsBBed
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsB",
          type: "checkbox",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
        {
          name: "Meds",
          prop: "chkMedsBed",
          type: "checkbox",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkMeds === false &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true &&
      chkSlidingScale === true) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1 &&
      chkSlidingScale === 1) ? (
    <TableThree
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkInsulin === true &&
      typInsulin === 1 &&
      chkBP === true) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkInsulin === 1 &&
      typInsulin === 1 &&
      chkBP === 1) ? (
    <TableThree
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : timesPD === 3 &&
    chkNutrition === true &&
    chkInsulin === true &&
    typInsulin === 1 &&
    chkBP === false ? (
    <TableThree
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
        {
          name: "Insulin",
          prop: "insulinD",
          type: "number",
        },
      ]}
    />
  ) : (timesPD === 3 &&
      chkNutrition === true &&
      chkInsulin === false &&
      typInsulin === 0 &&
      chkBP === false) ||
    (timesPD === 3 &&
      chkNutrition === 1 &&
      chkInsulin === 0 &&
      typInsulin === 0 &&
      chkBP === 0) ? (
    <TableTwo
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Carbs",
          prop: "carbsD",
          type: "number",
        },
      ]}
    />
  ) : timesPD === 5 &&
    chkNutrition === false &&
    chkInsulin === false &&
    typInsulin === 0 &&
    chkBP === false ? (
    <TableOne
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
      ]}
    />
  ) : timesPD === 4 &&
    chkNutrition === false &&
    chkInsulin === false &&
    typInsulin === 0 &&
    chkBP === false ? (
    <TableOne
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarBed",
          type: "number",
        },
      ]}
    />
  ) : timesPD === 3 &&
    chkNutrition === false &&
    chkInsulin === false &&
    typInsulin === 0 &&
    chkBP === false ? (
    <TableOne
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarD",
          type: "number",
        },
      ]}
    />
  ) : timesPD === 2 &&
    chkNutrition === false &&
    chkInsulin === false &&
    typInsulin === 0 &&
    chkBP === false ? (
    <TableOne
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
        {
          name: "Sugar Count",
          prop: "sugarL",
          type: "number",
        },
      ]}
    />
  ) : timesPD === 2 &&
    chkNutrition === false &&
    chkInsulin === false &&
    typInsulin === 0 &&
    chkBP === true ? (
    <TableOneBP
      add={addBP}
      editIdx={editIdx}
      startEditing={startEditingBP}
      stopEditing={stopEditingBP}
      handleChange={handleChangeBP}
      bloodpressures={bloodpressures}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "SYS(Top BP)",
          prop: "hbp",
          type: "number",
        },
        {
          name: "DIAS(Bottom BP)",
          prop: "lbp",
          type: "number",
        },
        {
          name: "HR",
          prop: "hr",
          type: "number",
        },
        {
          name: "SYS(Top BP)",
          prop: "hbp2",
          type: "number",
        },
        {
          name: "DIAS(Bottom BP)",
          prop: "lbp2",
          type: "number",
        },
        {
          name: "HR",
          prop: "hr2",
          type: "number",
        },
      ]}
    />
  ) : timesPD === 1 &&
    chkNutrition === false &&
    chkInsulin === false &&
    typInsulin === 0 &&
    chkBP === false ? (
    <TableOne
      add={add}
      A1C={A1C}
      editIdx={editIdx}
      startEditing={startEditingReading}
      stopEditing={stopEditingReading}
      handleChange={handleChange}
      readings={readings}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "Sugar Count",
          prop: "sugarB",
          type: "number",
        },
      ]}
    />
  ) : timesPD === 1 &&
    chkNutrition === false &&
    chkInsulin === false &&
    typInsulin === 0 &&
    chkBP === true ? (
    <TableOneBP
      add={addBP}
      editIdx={editIdx}
      startEditing={startEditingBP}
      stopEditing={stopEditingBP}
      handleChange={handleChangeBP}
      bloodpressures={bloodpressures}
      header={[
        {
          name: "Date",
          prop: "date",
          type: "date",
        },
        {
          name: "SYS(Top BP)",
          prop: "hbp",
          type: "number",
        },
        {
          name: "DIAS(Bottom BP)",
          prop: "lbp",
          type: "number",
        },
        {
          name: "HR",
          prop: "hr",
          type: "number",
        },
      ]}
    />
  ) : !isLogedin ? (
    <LogInRegister
      userName={userName}
      password={password}
      loginError={loginError}
      handleUser={handleUser}
      handleLogIn={handleLogIn}
      handleRegister={handleRegister}
      firstName={firstName}
      firstNameError={firstNameError}
      lastName={lastName}
      lastNameError={lastNameError}
      userNameError={userNameError}
      passwordError={passwordError}
      email={email}
      emailError={emailError}
    />
  ) : (
    ""
  );
};

export default Tables;
