import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tables from "./Tables";
import { A1CChart, BGChart, BPChart } from "./Charts";
import Preferences from "./Preferences";
import { InitialState } from "./State/InitialState";
import { addMeds, deductMeds, editMeds } from "./Utils/Medications";
import { deleteNutrition, removeNutrition } from "./Utils/Nutrition";
import { deleteReading, editReading, removeReading } from "./Utils/Readings";
import { postFetch } from "../Utils/Fetch";
import TableMeds from "./Tables/TableMeds";
import Help from "./Help";
import TableOneBP from "./Tables/TableOneBP";
import { StyledDiv } from "./Styles/StyledDiv.styled";
import { StyledButton } from "./Styles/Button.styled";
import { NavBarLink } from "./Styles/Link.styled";
import { addBP, deleteBP, removeBloodPressure } from "./Utils/BloodPressures";
import { bpLabels, Labels120 } from "./State/Labels";
import {
  BGChartData,
  BPChartData,
  backgroundColor,
  borderColor,
  borderdataTimes,
  colaberated,
  colordataTimes,
  dataTimes,
} from "./Utils/ChartData";
// import TableNutrition from './Tables/TableNutrition';
// import TableNutritionTwo from './Tables/TableNutritionTwo';
// import TableNutritionThree from './Tables/TableNutritionThree';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = InitialState;
  }

  addBP = async () => {
    const { date, hbp, lbp, hr, hbp2, lbp2, hr2 } = this.state.bloodpressure;
    const { editIdx, user, bloodpressures } = this.state;

    if (bloodpressures.length >= 90) {
      await deleteBP(user, bloodpressures, editIdx);
      removeBloodPressure(0, bloodpressures);
      this.setState({
        bloodpressures: [
          ...bloodpressures,
          {
            user_id: user.id,
            date: date,
            hbp: hbp,
            lbp: lbp,
            hr: hr,
            hbp2: hbp2,
            lbp2: lbp2,
            hr2: hr2,
          },
        ],
      });
    } else {
      this.setState({
        bloodpressures: [
          ...bloodpressures,
          {
            user_id: user.id,
            date: date,
            hbp: 0,
            lbp: 0,
            hr: 0,
            hbp2: 0,
            lbp2: 0,
            hr2: 0,
          },
        ],
      });
    }
    await addBP(user, date, hbp, lbp, hr, hbp2, lbp2, hr2);
    this.findAvgBp();
  };

  addMedication = async () => {
    const { name, dose, quantity, prescriber, am, noon, evening, bed } =
      this.state.medication;
    const { user, medications } = this.state;

    this.setState({
      medications: [
        ...medications,
        {
          user_id: user.id,
          name: name,
          dose: dose,
          quantity: quantity,
          prescriber: prescriber,
          am: am,
          noon: noon,
          evening: evening,
          bed: bed,
        },
      ],
    });
    await addMeds(user, name, prescriber);
  };

  addNutrition = async () => {
    const {
      date,
      foodNameB,
      caloriesB,
      saturatedB,
      transB,
      polyunsaturatedB,
      monosaturatedB,
      cholesterolB,
      sodiumB,
      carbsB,
      fiberB,
      sugarsB,
      proteinB,
      vitaminAB,
      vitaminCB,
      vitaminDB,
      calciumB,
      ironB,
      potassiumB,
      foodNameL,
      caloriesL,
      saturatedL,
      transL,
      polyunsaturatedL,
      monosaturatedL,
      cholesterolL,
      sodiumL,
      carbsL,
      fiberL,
      sugarsL,
      proteinL,
      vitaminAL,
      vitaminCL,
      vitaminDL,
      calciumL,
      ironL,
      potassiumL,
      foodNameD,
      caloriesD,
      saturatedD,
      transD,
      polyunsaturatedD,
      monosaturatedD,
      cholesterolD,
      sodiumD,
      carbsD,
      fiberD,
      sugarsD,
      proteinD,
      vitaminAD,
      vitaminCD,
      vitaminDD,
      calciumD,
      ironD,
      potassiumD,
      foodNameBB,
      caloriesBB,
      saturatedBB,
      transBB,
      polyunsaturatedBB,
      monosaturatedBB,
      cholesterolBB,
      sodiumBB,
      carbsBB,
      fiberBB,
      sugarsBB,
      proteinBB,
      vitaminABB,
      vitaminCBB,
      vitaminDBB,
      calciumBB,
      ironBB,
      potassiumBB,
      foodNameBed,
      caloriesBed,
      saturatedBed,
      transBed,
      polyunsaturatedBed,
      monosaturatedBed,
      cholesterolBed,
      sodiumBed,
      carbsBed,
      fiberBed,
      sugarsBed,
      proteinBed,
      vitaminABed,
      vitaminCBed,
      vitaminDBed,
      calciumBed,
      ironBed,
      potassiumBed,
    } = this.state.nutrition;
    const { editIdx, user, nutritions } = this.state;

    if (nutritions.length >= 90) {
      await deleteNutrition(user, nutritions, editIdx);
      removeNutrition(0, nutritions);
      this.setState({
        nutritions: [
          ...nutritions,
          {
            user_id: user.id,
            date: date,
            foodNameB: foodNameB,
            caloriesB: caloriesB,
            saturatedB: saturatedB,
            transB: transB,
            polyunsaturatedB: polyunsaturatedB,
            monosaturatedB: monosaturatedB,
            cholesterolB: cholesterolB,
            sodiumB: sodiumB,
            carbsB: carbsB,
            fiberB: fiberB,
            sugarsB: sugarsB,
            proteinB: proteinB,
            vitaminAB: vitaminAB,
            vitaminCB: vitaminCB,
            vitaminDB: vitaminDB,
            calciumB: calciumB,
            ironB: ironB,
            potassiumB: potassiumB,
            foodNameL: foodNameL,
            caloriesL: caloriesL,
            saturatedL: saturatedL,
            transL: transL,
            polyunsaturatedL: polyunsaturatedL,
            monosaturatedL: monosaturatedL,
            cholesterolL: cholesterolL,
            sodiumL: sodiumL,
            carbsL: carbsL,
            fiberL: fiberL,
            sugarsL: sugarsL,
            proteinL: proteinL,
            vitaminAL: vitaminAL,
            vitaminCL: vitaminCL,
            vitaminDL: vitaminDL,
            calciumL: calciumL,
            ironL: ironL,
            potassiumL: potassiumL,
            foodNameD: foodNameD,
            caloriesD: caloriesD,
            saturatedD: saturatedD,
            transD: transD,
            polyunsaturatedD: polyunsaturatedD,
            monosaturatedD: monosaturatedD,
            cholesterolD: cholesterolD,
            sodiumD: sodiumD,
            carbsD: carbsD,
            fiberD: fiberD,
            sugarsD: sugarsD,
            proteinD: proteinD,
            vitaminAD: vitaminAD,
            vitaminCD: vitaminCD,
            vitaminDD: vitaminDD,
            calciumD: calciumD,
            ironD: ironD,
            potassiumD: potassiumD,
            foodNameBB: foodNameBB,
            caloriesBB: caloriesBB,
            saturatedBB: saturatedBB,
            transBB: transBB,
            polyunsaturatedBB: polyunsaturatedBB,
            monosaturatedBB: monosaturatedBB,
            cholesterolBB: cholesterolBB,
            sodiumBB: sodiumBB,
            carbsBB: carbsBB,
            fiberBB: fiberBB,
            sugarsBB: sugarsBB,
            proteinBB: proteinBB,
            vitaminABB: vitaminABB,
            vitaminCBB: vitaminCBB,
            vitaminDBB: vitaminDBB,
            calciumBB: calciumBB,
            ironBB: ironBB,
            potassiumBB: potassiumBB,
            foodNameBed: foodNameBed,
            caloriesBed: caloriesBed,
            saturatedBed: saturatedBed,
            transBed: transBed,
            polyunsaturatedBed: polyunsaturatedBed,
            monosaturatedBed: monosaturatedBed,
            cholesterolBed: cholesterolBed,
            sodiumBed: sodiumBed,
            carbsBed: carbsBed,
            fiberBed: fiberBed,
            sugarsBed: sugarsBed,
            proteinBed: proteinBed,
            vitaminABed: vitaminABed,
            vitaminCBed: vitaminCBed,
            vitaminDBed: vitaminDBed,
            calciumBed: calciumBed,
            ironBed: ironBed,
            potassiumBed: potassiumBed,
          },
        ],
      });
    } else {
      this.setState({
        nutritions: [
          ...nutritions,
          {
            user_id: user.id,
            date: date,
            foodNameB: foodNameB,
            caloriesB: caloriesB,
            saturatedB: saturatedB,
            transB: transB,
            polyunsaturatedB: polyunsaturatedB,
            monosaturatedB: monosaturatedB,
            cholesterolB: cholesterolB,
            sodiumB: sodiumB,
            carbsB: carbsB,
            fiberB: fiberB,
            sugarsB: sugarsB,
            proteinB: proteinB,
            vitaminAB: vitaminAB,
            vitaminCB: vitaminCB,
            vitaminDB: vitaminDB,
            calciumB: calciumB,
            ironB: ironB,
            potassiumB: potassiumB,
            foodNameL: foodNameL,
            caloriesL: caloriesL,
            saturatedL: saturatedL,
            transL: transL,
            polyunsaturatedL: polyunsaturatedL,
            monosaturatedL: monosaturatedL,
            cholesterolL: cholesterolL,
            sodiumL: sodiumL,
            carbsL: carbsL,
            fiberL: fiberL,
            sugarsL: sugarsL,
            proteinL: proteinL,
            vitaminAL: vitaminAL,
            vitaminCL: vitaminCL,
            vitaminDL: vitaminDL,
            calciumL: calciumL,
            ironL: ironL,
            potassiumL: potassiumL,
            foodNameD: foodNameD,
            caloriesD: caloriesD,
            saturatedD: saturatedD,
            transD: transD,
            polyunsaturatedD: polyunsaturatedD,
            monosaturatedD: monosaturatedD,
            cholesterolD: cholesterolD,
            sodiumD: sodiumD,
            carbsD: carbsD,
            fiberD: fiberD,
            sugarsD: sugarsD,
            proteinD: proteinD,
            vitaminAD: vitaminAD,
            vitaminCD: vitaminCD,
            vitaminDD: vitaminDD,
            calciumD: calciumD,
            ironD: ironD,
            potassiumD: potassiumD,
            foodNameBB: foodNameBB,
            caloriesBB: caloriesBB,
            saturatedBB: saturatedBB,
            transBB: transBB,
            polyunsaturatedBB: polyunsaturatedBB,
            monosaturatedBB: monosaturatedBB,
            cholesterolBB: cholesterolBB,
            sodiumBB: sodiumBB,
            carbsBB: carbsBB,
            fiberBB: fiberBB,
            sugarsBB: sugarsBB,
            proteinBB: proteinBB,
            vitaminABB: vitaminABB,
            vitaminCBB: vitaminCBB,
            vitaminDBB: vitaminDBB,
            calciumBB: calciumBB,
            ironBB: ironBB,
            potassiumBB: potassiumBB,
            foodNameBed: foodNameBed,
            caloriesBed: caloriesBed,
            saturatedBed: saturatedBed,
            transBed: transBed,
            polyunsaturatedBed: polyunsaturatedBed,
            monosaturatedBed: monosaturatedBed,
            cholesterolBed: cholesterolBed,
            sodiumBed: sodiumBed,
            carbsBed: carbsBed,
            fiberBed: fiberBed,
            sugarsBed: sugarsBed,
            proteinBed: proteinBed,
            vitaminABed: vitaminABed,
            vitaminCBed: vitaminCBed,
            vitaminDBed: vitaminDBed,
            calciumBed: calciumBed,
            ironBed: ironBed,
            potassiumBed: potassiumBed,
          },
        ],
      });
    }
    await postFetch(`/bgtracker/nutritions/add/${user.id}`, {
      user_id: user.id,
      date: date,
      foodNameB: foodNameB,
      caloriesB: caloriesB,
      saturatedB: saturatedB,
      transB: transB,
      polyunsaturatedB: polyunsaturatedB,
      monosaturatedB: monosaturatedB,
      cholesterolB: cholesterolB,
      sodiumB: sodiumB,
      carbsB: carbsB,
      fiberB: fiberB,
      sugarsB: sugarsB,
      proteinB: proteinB,
      vitaminAB: vitaminAB,
      vitaminCB: vitaminCB,
      vitaminDB: vitaminDB,
      calciumB: calciumB,
      ironB: ironB,
      potassiumB: potassiumB,
      foodNameL: foodNameL,
      caloriesL: caloriesL,
      saturatedL: saturatedL,
      transL: transL,
      polyunsaturatedL: polyunsaturatedL,
      monosaturatedL: monosaturatedL,
      cholesterolL: cholesterolL,
      sodiumL: sodiumL,
      carbsL: carbsL,
      fiberL: fiberL,
      sugarsL: sugarsL,
      proteinL: proteinL,
      vitaminAL: vitaminAL,
      vitaminCL: vitaminCL,
      vitaminDL: vitaminDL,
      calciumL: calciumL,
      ironL: ironL,
      potassiumL: potassiumL,
      foodNameD: foodNameD,
      caloriesD: caloriesD,
      saturatedD: saturatedD,
      transD: transD,
      polyunsaturatedD: polyunsaturatedD,
      monosaturatedD: monosaturatedD,
      cholesterolD: cholesterolD,
      sodiumD: sodiumD,
      carbsD: carbsD,
      fiberD: fiberD,
      sugarsD: sugarsD,
      proteinD: proteinD,
      vitaminAD: vitaminAD,
      vitaminCD: vitaminCD,
      vitaminDD: vitaminDD,
      calciumD: calciumD,
      ironD: ironD,
      potassiumD: potassiumD,
      foodNameBB: foodNameBB,
      caloriesBB: caloriesBB,
      saturatedBB: saturatedBB,
      transBB: transBB,
      polyunsaturatedBB: polyunsaturatedBB,
      monosaturatedBB: monosaturatedBB,
      cholesterolBB: cholesterolBB,
      sodiumBB: sodiumBB,
      carbsBB: carbsBB,
      fiberBB: fiberBB,
      sugarsBB: sugarsBB,
      proteinBB: proteinBB,
      vitaminABB: vitaminABB,
      vitaminCBB: vitaminCBB,
      vitaminDBB: vitaminDBB,
      calciumBB: calciumBB,
      ironBB: ironBB,
      potassiumBB: potassiumBB,
      foodNameBed: foodNameBed,
      caloriesBed: caloriesBed,
      saturatedBed: saturatedBed,
      transBed: transBed,
      polyunsaturatedBed: polyunsaturatedBed,
      monosaturatedBed: monosaturatedBed,
      cholesterolBed: cholesterolBed,
      sodiumBed: sodiumBed,
      carbsBed: carbsBed,
      fiberBed: fiberBed,
      sugarsBed: sugarsBed,
      proteinBed: proteinBed,
      vitaminABed: vitaminABed,
      vitaminCBed: vitaminCBed,
      vitaminDBed: vitaminDBed,
      calciumBed: calciumBed,
      ironBed: ironBed,
      potassiumBed: potassiumBed,
    }).catch((err) => console.log(err));
  };

  addReading = async () => {
    const {
      date,
      sugarB,
      carbsB,
      insulinB,
      insulinSB,
      insulinFB,
      chkMedsB,
      sugarL,
      carbsL,
      insulinL,
      chkMedsL,
      sugarD,
      carbsD,
      insulinD,
      chkMedsD,
      sugarBB,
      carbsBB,
      insulinBB,
      sugarBed,
      carbsBed,
      insulinBed,
      insulinSBed,
      insulinFBed,
      chkMedsBed,
    } = this.state.reading;
    const { editIdx, user, readings } = this.state;

    if (readings.length >= 120) {
      await deleteReading(user, readings, editIdx);
      removeReading(0, readings);
      this.setState({
        readings: [
          ...readings,
          {
            user_id: user.id,
            date: date,
            sugarB,
            carbsB,
            insulinB,
            insulinSB,
            insulinFB,
            chkMedsB,
            sugarL,
            carbsL,
            insulinL,
            chkMedsL,
            sugarD,
            carbsD,
            insulinD,
            chkMedsD,
            sugarBB,
            carbsBB,
            insulinBB,
            sugarBed,
            carbsBed,
            insulinBed,
            insulinSBed,
            insulinFBed,
            chkMedsBed,
          },
        ],
      });
    } else {
      this.setState({
        readings: [
          ...readings,
          {
            user_id: user.id,
            date: date,
            sugarB,
            carbsB,
            insulinB,
            insulinSB,
            insulinFB,
            chkMedsB,
            sugarL,
            carbsL,
            insulinL,
            chkMedsL,
            sugarD,
            carbsD,
            insulinD,
            chkMedsD,
            sugarBB,
            carbsBB,
            insulinBB,
            sugarBed,
            carbsBed,
            insulinBed,
            insulinSBed,
            insulinFBed,
            chkMedsBed,
          },
        ],
      });
    }
    await postFetch(`/bgtracker/readings/add/${user.id}`, {
      user_id: user.id,
      date: date,
      sugarB: sugarB,
      carbsB: carbsB,
      insulinB: insulinB,
      insulinSB: insulinSB,
      insulinFB: insulinFB,
      chkMedsB: chkMedsB,
      sugarL: sugarL,
      carbsL: carbsL,
      insulinL: insulinL,
      chkMedsL: chkMedsL,
      sugarD: sugarD,
      carbsD: carbsD,
      insulinD: insulinD,
      chkMedsD: chkMedsD,
      sugarBB: sugarBB,
      carbsBB: carbsBB,
      insulinBB: insulinBB,
      sugarBed: sugarBed,
      carbsBed: carbsBed,
      insulinBed: insulinBed,
      insulinSBed: insulinSBed,
      insulinFBed: insulinFBed,
      chkMedsBed: chkMedsBed,
    }).catch((err) => console.log(err));
    this.getA1CChartDataColaberated();
    this.getA1CChartData();
    this.getBPChartData();
    this.findAvg();
  };

  startEditingBloodPressure = (i) => {
    const { users } = this.state;
    const { userName } = this.state.user;

    this.getBloodPressures(users.find((user) => user.userName === userName).id);
    this.setState({ editIdx: i });
  };

  startEditingMedication = (i) => {
    const { users } = this.state;
    const { userName } = this.state.user;

    this.getMedications(users.find((user) => user.userName === userName).id);
    this.setState({ editIdx: i });
  };

  startEditingNutrition = (i) => {
    const { users } = this.state;
    const { userName } = this.state.user;

    this.getNutritions(users.find((user) => user.userName === userName).id);
    this.setState({ editIdx: i });
  };

  startEditingReading = (i) => {
    const { users } = this.state;
    const { userName } = this.state.user;

    this.getReadings(users.find((user) => user.userName === userName).id);
    this.setState({ editIdx: i });
  };

  stopEditingMedication = async () => {
    const { editIdx, user, medications } = this.state;

    this.setState({ editIdx: -1 });
    await postFetch(`/bgtracker/medications/edit/${user.id}`, {
      id: medications[editIdx].id,
      user_id: user.id,
      name: medications[editIdx].name,
      dose: medications[editIdx].dose,
      unit: medications[editIdx].unit,
      quantity: medications[editIdx].quantity,
      prescriber: medications[editIdx].prescriber,
      am: medications[editIdx].am,
      noon: medications[editIdx].noon,
      evening: medications[editIdx].evening,
      bed: medications[editIdx].bed,
    }).catch((err) => console.log(err));
  };

  stopEditingBloodPressure = async () => {
    const { editIdx, user, bloodpressures } = this.state;

    this.setState({ editIdx: -1 });
    await postFetch(`/bgtracker/bloodpressures/edit/${user.id}`, {
      id: bloodpressures[editIdx].id,
      user_id: user.id,
      date: bloodpressures[editIdx].date,
      hbp: bloodpressures[editIdx].hbp,
      lbp: bloodpressures[editIdx].lbp,
      hr: bloodpressures[editIdx].hr,
      hbp2: bloodpressures[editIdx].hbp2,
      lbp2: bloodpressures[editIdx].lbp2,
      hr2: bloodpressures[editIdx].hr2,
    }).catch((err) => console.log(err));
    this.findAvgBp();
  };

  stopEditingNutrition = async () => {
    const { editIdx, user, nutritions } = this.state;

    this.setState({ editIdx: -1 });
    await postFetch(`/bgtracker/nutritions/edit/${user.id}`, {
      id: nutritions[editIdx].id,
      user_id: user.id,
      date: nutritions[editIdx].date,
      foodNameB: nutritions[editIdx].foodNameB,
      caloriesB: nutritions[editIdx].caloriesB,
      saturatedB: nutritions[editIdx].saturatedB,
      transB: nutritions[editIdx].transB,
      polyunsaturatedB: nutritions[editIdx].polyunsaturatedB,
      monosaturatedB: nutritions[editIdx].monosaturatedB,
      cholesterolB: nutritions[editIdx].cholesterolB,
      sodiumB: nutritions[editIdx].sodiumB,
      carbsB: nutritions[editIdx].carbsB,
      fiberB: nutritions[editIdx].fiberB,
      sugarsB: nutritions[editIdx].sugarsB,
      proteinB: nutritions[editIdx].proteinB,
      vitaminAB: nutritions[editIdx].vitaminAB,
      vitaminCB: nutritions[editIdx].vitaminCB,
      vitaminDB: nutritions[editIdx].vitaminDB,
      calciumB: nutritions[editIdx].calciumB,
      ironB: nutritions[editIdx].ironB,
      potassiumB: nutritions[editIdx].potassiumB,
      foodNameL: nutritions[editIdx].foodNameL,
      caloriesL: nutritions[editIdx].caloriesL,
      saturatedL: nutritions[editIdx].saturatedL,
      transL: nutritions[editIdx].transL,
      polyunsaturatedL: nutritions[editIdx].polyunsaturatedL,
      monosaturatedL: nutritions[editIdx].monosaturatedL,
      cholesterolL: nutritions[editIdx].cholesterolL,
      sodiumL: nutritions[editIdx].sodiumL,
      carbsL: nutritions[editIdx].carbsL,
      fiberL: nutritions[editIdx].fiberL,
      sugarsL: nutritions[editIdx].sugarsL,
      proteinL: nutritions[editIdx].proteinL,
      vitaminAL: nutritions[editIdx].vitaminAL,
      vitaminCL: nutritions[editIdx].vitaminCL,
      vitaminDL: nutritions[editIdx].vitaminDL,
      calciumL: nutritions[editIdx].calciumL,
      ironL: nutritions[editIdx].ironL,
      potassiumL: nutritions[editIdx].potassiumL,
      foodNameD: nutritions[editIdx].foodNameD,
      caloriesD: nutritions[editIdx].caloriesD,
      saturatedD: nutritions[editIdx].saturatedD,
      transD: nutritions[editIdx].transD,
      polyunsaturatedD: nutritions[editIdx].polyunsaturatedD,
      monosaturatedD: nutritions[editIdx].monosaturatedD,
      cholesterolD: nutritions[editIdx].cholesterolD,
      sodiumD: nutritions[editIdx].sodiumD,
      carbsD: nutritions[editIdx].carbsD,
      fiberD: nutritions[editIdx].fiberD,
      sugarsD: nutritions[editIdx].sugarsD,
      proteinD: nutritions[editIdx].proteinD,
      vitaminAD: nutritions[editIdx].vitaminAD,
      vitaminCD: nutritions[editIdx].vitaminCD,
      vitaminDD: nutritions[editIdx].vitaminDD,
      calciumD: nutritions[editIdx].calciumD,
      ironD: nutritions[editIdx].ironD,
      potassiumD: nutritions[editIdx].potassiumD,
      foodNameBB: nutritions[editIdx].foodNameBB,
      caloriesBB: nutritions[editIdx].caloriesBB,
      saturatedBB: nutritions[editIdx].saturatedBB,
      transBB: nutritions[editIdx].transBB,
      polyunsaturatedBB: nutritions[editIdx].polyunsaturatedBB,
      monosaturatedBB: nutritions[editIdx].monosaturatedBB,
      cholesterolBB: nutritions[editIdx].cholesterolBB,
      sodiumBB: nutritions[editIdx].sodiumBB,
      carbsBB: nutritions[editIdx].carbsBB,
      fiberBB: nutritions[editIdx].fiberBB,
      sugarsBB: nutritions[editIdx].sugarsBB,
      proteinBB: nutritions[editIdx].proteinBB,
      vitaminABB: nutritions[editIdx].vitaminABB,
      vitaminCBB: nutritions[editIdx].vitaminCBB,
      vitaminDBB: nutritions[editIdx].vitaminDBB,
      calciumBB: nutritions[editIdx].calciumBB,
      ironBB: nutritions[editIdx].ironBB,
      potassiumBB: nutritions[editIdx].potassiumBB,
      foodNameBed: nutritions[editIdx].foodNameBed,
      caloriesBed: nutritions[editIdx].caloriesBed,
      saturatedBed: nutritions[editIdx].saturatedBed,
      transBed: nutritions[editIdx].transBed,
      polyunsaturatedBed: nutritions[editIdx].polyunsaturatedBed,
      monosaturatedBed: nutritions[editIdx].monosaturatedBed,
      cholesterolBed: nutritions[editIdx].cholesterolBed,
      sodiumBed: nutritions[editIdx].sodiumBed,
      carbsBed: nutritions[editIdx].carbsBed,
      fiberBed: nutritions[editIdx].fiberBed,
      sugarsBed: nutritions[editIdx].sugarsBed,
      proteinBed: nutritions[editIdx].proteinBed,
      vitaminABed: nutritions[editIdx].vitaminABed,
      vitaminCBed: nutritions[editIdx].vitaminCBed,
      vitaminDBed: nutritions[editIdx].vitaminDBed,
      calciumBed: nutritions[editIdx].calciumBed,
      ironBed: nutritions[editIdx].ironBed,
      potassiumBed: nutritions[editIdx].potassiumBed,
    }).catch((err) => console.log(err));
  };

  stopEditingReading = async () => {
    const { editIdx, user, readings, medications } = this.state;
    const {
      slidingScale1,
      slidingScale2a,
      slidingScale2b,
      slidingScale3a,
      slidingScale3b,
      slidingScale4a,
      slidingScale4b,
      slidingScale5,
      carbRatio,
    } = this.state.preference;
    let SugarB = 0,
      SugarL = 0,
      SugarD = 0,
      SugarBB = 0,
      SugarBed = 0,
      CarbsB = 0,
      CarbsL = 0,
      CarbsD = 0,
      CarbsBB = 0,
      CarbsBed = 0,
      InsulinB = 0,
      InsulinFB = 0,
      InsulinSB = 0,
      InsulinL = 0,
      InsulinD = 0,
      InsulinBB = 0,
      InsulinBed = 0,
      InsulinFBed = 0,
      InsulinSBed = 0,
      totalAm = 0,
      totalNoon = 0,
      totalEvening = 0,
      totalBed = 0,
      totalInsulinB = 0,
      totalInsulinfb = 0,
      totalInsulinL = 0,
      totalInsulinD = 0,
      totalInsulinBB = 0,
      totalInsulinBed = 0,
      totalInsulinSBed = 0,
      totalInsulinFBed = 0,
      totalInsulinF = 0,
      totalInsulinS = 0,
      remainder = 0;

    this.setState({ editIdx: -1 });

    if (carbRatio !== 0) {
      SugarB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.sugarB, 10)),
        0
      );
      CarbsB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.carbsB, 10)),
        0
      );
      InsulinB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.insulinB, 10)),
        0
      );
      InsulinFB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.insulinFB, 10)),
        0
      );
      InsulinSB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.insulinSB, 10)),
        0
      );
      SugarL = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.sugarL, 10)),
        0
      );
      CarbsL = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.carbsL, 10)),
        0
      );
      InsulinL = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.insulinL, 10)),
        0
      );
      SugarD = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.sugarD, 10)),
        0
      );
      CarbsD = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.carbsD, 10)),
        0
      );
      InsulinD = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.insulinD, 10)),
        0
      );
      SugarBB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.sugarBB, 10)),
        0
      );
      CarbsBB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.carbsBB, 10)),
        0
      );
      InsulinBB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.insulinBB, 10)),
        0
      );
      SugarBed = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.sugarBed, 10)),
        0
      );
      CarbsBed = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.carbsBed, 10)),
        0
      );
      InsulinBed = readings.reduce(
        (Totaldata, readings) =>
          (Totaldata = parseInt(readings.insulinBed, 10)),
        0
      );
      InsulinFBed = readings.reduce(
        (Totaldata, readings) =>
          (Totaldata = parseInt(readings.insulinFBed, 10)),
        0
      );
      InsulinSBed = readings.reduce(
        (Totaldata, readings) =>
          (Totaldata = parseInt(readings.insulinSBed, 10)),
        0
      );

      if (SugarB <= slidingScale1 && CarbsB === 0) {
        totalInsulinfb = 0;
      }
      if (SugarB >= 1 && SugarB <= slidingScale1) {
        totalInsulinfb = 0;
        if (CarbsB >= parseInt(carbRatio)) {
          totalInsulinfb = parseInt(CarbsB / carbRatio);
          remainder -= parseInt(CarbsB % carbRatio);
          if (remainder === 0) {
            totalInsulinfb += 0;
          } else {
            totalInsulinfb += 1;
          }
        }
        if (CarbsB >= 1 && CarbsB < carbRatio) {
          totalInsulinfb += 1;
        }
        totalInsulinfb += 0;
      }
      if (SugarB >= slidingScale2a && SugarB <= slidingScale2b) {
        totalInsulinfb = 0;
        remainder = 0;
        if (CarbsB >= parseInt(carbRatio)) {
          totalInsulinfb = parseInt(CarbsB / carbRatio);
          remainder -= parseInt(CarbsB % carbRatio);
          if (remainder === 0) {
            totalInsulinfb += 0;
          } else {
            totalInsulinfb += 1;
          }
        }
        if (CarbsB >= 1 && CarbsB < carbRatio) {
          totalInsulinfb += 1;
        }
        totalInsulinfb += 2;
      }
      if (SugarB >= slidingScale3a && SugarB <= slidingScale3b) {
        totalInsulinfb = 0;
        remainder = 0;
        if (CarbsB >= parseInt(carbRatio)) {
          totalInsulinfb = parseInt(CarbsB / carbRatio);
          remainder -= parseInt(CarbsB % carbRatio);
          if (remainder === 0) {
            totalInsulinfb += 0;
          } else {
            totalInsulinfb += 1;
          }
        }
        if (CarbsB >= 1 && CarbsB < carbRatio) {
          totalInsulinfb += 1;
        }
        totalInsulinfb += 4;
      }
      if (SugarB >= slidingScale4a && SugarB <= slidingScale4b) {
        totalInsulinfb = 0;
        remainder = 0;
        if (CarbsB >= parseInt(carbRatio)) {
          totalInsulinfb = parseInt(CarbsB / carbRatio);
          remainder -= parseInt(CarbsB % carbRatio);
          if (remainder === 0) {
            totalInsulinfb += 0;
          } else {
            totalInsulinfb += 1;
          }
        }
        if (CarbsB >= 1 && CarbsB < carbRatio) {
          totalInsulinfb += 1;
        }
        totalInsulinfb += 6;
      }
      if (SugarB >= slidingScale5) {
        totalInsulinfb = 0;
        remainder = 0;
        if (CarbsB >= parseInt(carbRatio)) {
          totalInsulinfb = parseInt(CarbsB / carbRatio);
          remainder -= parseInt(CarbsB % carbRatio);
          if (remainder === 0) {
            totalInsulinfb += 0;
          } else {
            totalInsulinfb += 1;
          }
        }
        if (CarbsB >= 1 && CarbsB < carbRatio) {
          totalInsulinfb += 1;
        }
        totalInsulinfb += 8;
      }
      readings[editIdx].insulinFB = totalInsulinfb;
      if (SugarL <= slidingScale1 && CarbsL === 0) {
        totalInsulinL = 0;
      }
      if (SugarL >= 1 && SugarL <= slidingScale1) {
        totalInsulinL = 0;
        remainder = 0;
        if (CarbsL >= parseInt(carbRatio)) {
          totalInsulinL = parseInt(CarbsL / carbRatio);
          remainder -= parseInt(CarbsL % carbRatio);
          if (remainder === 0) {
            totalInsulinL += 0;
          } else {
            totalInsulinL += 1;
          }
        }
        if (CarbsL >= 1 && CarbsL < carbRatio) {
          totalInsulinL += 1;
        }
        totalInsulinL += 0;
      }
      if (SugarL >= slidingScale2a && SugarL <= slidingScale2b) {
        totalInsulinL = 0;
        remainder = 0;
        if (CarbsL >= parseInt(carbRatio)) {
          totalInsulinL = parseInt(CarbsL / carbRatio);
          remainder -= parseInt(CarbsL % carbRatio);
          if (remainder === 0) {
            totalInsulinL += 0;
          } else {
            totalInsulinL += 1;
          }
        }
        if (CarbsL >= 1 && CarbsL < carbRatio) {
          totalInsulinL += 1;
        }
        totalInsulinL += 2;
      }
      if (SugarL >= slidingScale3a && SugarL <= slidingScale3b) {
        totalInsulinL = 0;
        remainder = 0;
        if (CarbsL >= parseInt(carbRatio)) {
          totalInsulinL = parseInt(CarbsL / carbRatio);
          remainder -= parseInt(CarbsL % carbRatio);
          if (remainder === 0) {
            totalInsulinL += 0;
          } else {
            totalInsulinL += 1;
          }
        }
        if (CarbsL >= 1 && CarbsL < carbRatio) {
          totalInsulinL += 1;
        }
        totalInsulinL += 4;
      }
      if (SugarL >= slidingScale4a && SugarL <= slidingScale4b) {
        totalInsulinL = 0;
        remainder = 0;
        if (CarbsL >= parseInt(carbRatio)) {
          totalInsulinL = parseInt(CarbsL / carbRatio);
          remainder -= parseInt(CarbsL % carbRatio);
          if (remainder === 0) {
            totalInsulinL += 0;
          } else {
            totalInsulinL += 1;
          }
        }
        if (CarbsL >= 1 && CarbsL < carbRatio) {
          totalInsulinL += 1;
        }
        totalInsulinL += 6;
      }
      if (SugarL >= slidingScale5) {
        totalInsulinL = 0;
        remainder = 0;
        if (CarbsL >= parseInt(carbRatio)) {
          totalInsulinL = parseInt(CarbsL / carbRatio);
          remainder -= parseInt(CarbsL % carbRatio);
          if (remainder === 0) {
            totalInsulinL += 0;
          } else {
            totalInsulinL += 1;
          }
        }
        if (CarbsL >= 1 && CarbsL < carbRatio) {
          totalInsulinL += 1;
        }
        totalInsulinL += 8;
      }
      readings[editIdx].insulinL = totalInsulinL;
      if (SugarD <= slidingScale1 && CarbsD === 0) {
        totalInsulinD = 0;
      }
      if (SugarD >= 1 && SugarD <= slidingScale1) {
        totalInsulinD = 0;
        remainder = 0;
        if (CarbsD >= parseInt(carbRatio)) {
          totalInsulinD = parseInt(CarbsD / carbRatio);
          remainder -= parseInt(CarbsD % carbRatio);
          if (remainder === 0) {
            totalInsulinD += 0;
          } else {
            totalInsulinD += 1;
          }
        }
        if (CarbsD >= 1 && CarbsD < carbRatio) {
          totalInsulinD += 1;
        }
        totalInsulinD += 0;
      }
      if (SugarD >= slidingScale2a && SugarD <= slidingScale2b) {
        totalInsulinD = 0;
        remainder = 0;
        if (CarbsD >= parseInt(carbRatio)) {
          totalInsulinD = parseInt(CarbsD / carbRatio);
          remainder -= parseInt(CarbsD % carbRatio);
          if (remainder === 0) {
            totalInsulinD += 0;
          } else {
            totalInsulinD += 1;
          }
        }
        if (CarbsD >= 1 && CarbsD < carbRatio) {
          totalInsulinD += 1;
        }
        totalInsulinD += 2;
      }
      if (SugarD >= slidingScale3a && SugarD <= slidingScale3b) {
        totalInsulinD = 0;
        remainder = 0;
        if (CarbsD >= parseInt(carbRatio)) {
          totalInsulinD = parseInt(CarbsD / carbRatio);
          remainder -= parseInt(CarbsD % carbRatio);
          if (remainder === 0) {
            totalInsulinD += 0;
          } else {
            totalInsulinD += 1;
          }
        }
        if (CarbsD >= 1 && CarbsD < carbRatio) {
          totalInsulinD += 1;
        }
        totalInsulinD += 4;
      }
      if (SugarD >= slidingScale4a && SugarD <= slidingScale4b) {
        totalInsulinD = 0;
        remainder = 0;
        if (CarbsD >= parseInt(carbRatio)) {
          totalInsulinD = parseInt(CarbsD / carbRatio);
          remainder -= parseInt(CarbsD % carbRatio);
          if (remainder === 0) {
            totalInsulinD += 0;
          } else {
            totalInsulinD += 1;
          }
        }
        if (CarbsD >= 1 && CarbsD < carbRatio) {
          totalInsulinD += 1;
        }
        totalInsulinD += 6;
      }
      if (SugarD >= slidingScale5) {
        totalInsulinD = 0;
        remainder = 0;
        if (CarbsD >= parseInt(carbRatio)) {
          totalInsulinD = parseInt(CarbsD / carbRatio);
          remainder -= parseInt(CarbsD % carbRatio);
          if (remainder === 0) {
            totalInsulinD += 0;
          } else {
            totalInsulinD += 1;
          }
        }
        if (CarbsD >= 1 && CarbsD < carbRatio) {
          totalInsulinD += 1;
        }
        totalInsulinD += 8;
      }
      readings[editIdx].insulinD = totalInsulinD;
      if (SugarBB <= slidingScale1 && CarbsBB === 0) {
        totalInsulinBB = 0;
      }
      if (SugarBB >= 1 && SugarBB <= slidingScale1) {
        totalInsulinBB = 0;
        remainder = 0;
        if (CarbsBB >= parseInt(carbRatio)) {
          totalInsulinBB = parseInt(CarbsBB / carbRatio);
          remainder -= parseInt(CarbsBB % carbRatio);
          if (remainder === 0) {
            totalInsulinBB += 0;
          } else {
            totalInsulinBB += 1;
          }
        }
        if (CarbsBB >= 1 && CarbsBB < carbRatio) {
          totalInsulinBB += 1;
        }
        totalInsulinBB += 0;
      }
      if (SugarBB >= slidingScale2a && SugarBB <= slidingScale2b) {
        totalInsulinBB = 0;
        remainder = 0;
        if (CarbsBB >= parseInt(carbRatio)) {
          totalInsulinBB = parseInt(CarbsBB / carbRatio);
          remainder -= parseInt(CarbsBB % carbRatio);
          if (remainder === 0) {
            totalInsulinBB += 0;
          } else {
            totalInsulinBB += 1;
          }
        }
        if (CarbsBB >= 1 && CarbsBB < carbRatio) {
          totalInsulinBB += 1;
        }
        totalInsulinBB += 2;
      }
      if (SugarBB >= slidingScale3a && SugarBB <= slidingScale3b) {
        totalInsulinBB = 0;
        remainder = 0;
        if (CarbsBB >= parseInt(carbRatio)) {
          totalInsulinBB = parseInt(CarbsBB / carbRatio);
          remainder -= parseInt(CarbsBB % carbRatio);
          if (remainder === 0) {
            totalInsulinBB += 0;
          } else {
            totalInsulinBB += 1;
          }
        }
        if (CarbsBB >= 1 && CarbsBB < carbRatio) {
          totalInsulinBB += 1;
        }
        totalInsulinBB += 4;
      }
      if (SugarBB >= slidingScale4a && SugarBB <= slidingScale4b) {
        totalInsulinBB = 0;
        remainder = 0;
        if (CarbsBB >= parseInt(carbRatio)) {
          totalInsulinBB = parseInt(CarbsBB / carbRatio);
          remainder -= parseInt(CarbsBB % carbRatio);
          if (remainder === 0) {
            totalInsulinBB += 0;
          } else {
            totalInsulinBB += 1;
          }
        }
        if (CarbsBB >= 1 && CarbsBB < carbRatio) {
          totalInsulinBB += 1;
        }
        totalInsulinBB += 6;
      }
      if (SugarBB >= slidingScale5) {
        totalInsulinBB = 0;
        remainder = 0;
        if (CarbsBB >= parseInt(carbRatio)) {
          totalInsulinBB = parseInt(CarbsBB / carbRatio);
          remainder -= parseInt(CarbsBB % carbRatio);
          if (remainder === 0) {
            totalInsulinBB += 0;
          } else {
            totalInsulinBB += 1;
          }
        }
        if (CarbsBB >= 1 && CarbsBB < carbRatio) {
          totalInsulinBB += 1;
        }
        totalInsulinBB += 8;
      }
      readings[editIdx].insulinBB = totalInsulinBB;
      if (SugarBed <= slidingScale1 && CarbsBed === 0) {
        totalInsulinFBed = 0;
      }
      if (SugarBed >= 1 && SugarBed <= slidingScale1) {
        totalInsulinFBed = 0;
        remainder = 0;
        if (CarbsBed >= parseInt(carbRatio)) {
          totalInsulinFBed = parseInt(CarbsBed / carbRatio);
          remainder -= parseInt(CarbsBed % carbRatio);
          if (remainder === 0) {
            totalInsulinFBed += 0;
          } else {
            totalInsulinFBed += 1;
          }
        }
        if (CarbsBed >= 1 && CarbsBed < carbRatio) {
          totalInsulinFBed += 1;
        }
        totalInsulinFBed += 0;
      }
      if (SugarBed >= slidingScale2a && SugarBed <= slidingScale2b) {
        totalInsulinFBed = 0;
        remainder = 0;
        if (CarbsBed >= parseInt(carbRatio)) {
          totalInsulinFBed = parseInt(CarbsBed / carbRatio);
          remainder -= parseInt(CarbsBed % carbRatio);
          if (remainder === 0) {
            totalInsulinFBed += 0;
          } else {
            totalInsulinFBed += 1;
          }
        }
        if (CarbsBed >= 1 && CarbsBed < carbRatio) {
          totalInsulinFBed += 1;
        }
        totalInsulinFBed += 2;
      }
      if (SugarBed >= slidingScale3a && SugarBed <= slidingScale3b) {
        totalInsulinFBed = 0;
        remainder = 0;
        if (CarbsBed >= parseInt(carbRatio)) {
          totalInsulinFBed = parseInt(CarbsBed / carbRatio);
          remainder -= parseInt(CarbsBed % carbRatio);
          if (remainder === 0) {
            totalInsulinFBed += 0;
          } else {
            totalInsulinFBed += 1;
          }
        }
        if (CarbsBed >= 1 && CarbsBed < carbRatio) {
          totalInsulinFBed += 1;
        }
        totalInsulinFBed += 4;
      }
      if (SugarBed >= slidingScale4a && SugarBed <= slidingScale4b) {
        totalInsulinFBed = 0;
        remainder = 0;
        if (CarbsBed >= parseInt(carbRatio)) {
          totalInsulinFBed = parseInt(CarbsBed / carbRatio);
          remainder -= parseInt(CarbsBed % carbRatio);
          if (remainder === 0) {
            totalInsulinFBed += 0;
          } else {
            totalInsulinFBed += 1;
          }
        }
        if (CarbsBed >= 1 && CarbsBed < carbRatio) {
          totalInsulinFBed += 1;
        }
        totalInsulinFBed += 6;
      }
      if (SugarBed >= slidingScale5) {
        totalInsulinFBed = 0;
        remainder = 0;
        if (CarbsBed >= parseInt(carbRatio)) {
          totalInsulinFBed = parseInt(CarbsBed / carbRatio);
          remainder -= parseInt(CarbsBed % carbRatio);
          if (remainder === 0) {
            totalInsulinFBed += 0;
          } else {
            totalInsulinFBed += 1;
          }
        }
        if (CarbsBed >= 1 && CarbsBed < carbRatio) {
          totalInsulinFBed += 1;
        }
        totalInsulinFBed += 8;
      }
      readings[editIdx].insulinFBed = totalInsulinFBed;
      if (readings[editIdx].insulinB !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Fast Acting" &&
            InsulinB !== readings[editIdx].insulinB
          ) {
            totalInsulinB = medications[i].quantity - InsulinB;
            medications[i].quantity = totalInsulinB;
            await editMeds(user, medications, i);
          }
        }
      }
      if (readings[editIdx].insulinFB !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Fast Acting" &&
            InsulinFB !== readings[editIdx].insulinFB
          ) {
            totalInsulinF = medications[i].quantity - totalInsulinfb;
            medications[i].quantity = totalInsulinF;
            await editMeds(user, medications, i);
          }
        }
      }
      if (readings[editIdx].insulinSB !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Slow Acting" &&
            InsulinSB !== readings[editIdx].insulinSB
          ) {
            totalInsulinS = medications[i].quantity - InsulinSB;
            medications[i].quantity = totalInsulinS;
            await editMeds(user, medications, i);
          }
        }
      }
      if (readings[editIdx].insulinL !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Fast Acting" &&
            InsulinL !== readings[editIdx].insulinL
          ) {
            totalInsulinL = medications[i].quantity - totalInsulinL;
            medications[i].quantity = totalInsulinL;
            await editMeds(user, medications, i);
          }
        }
      }
      if (readings[editIdx].insulinD !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Fast Acting" &&
            InsulinD !== readings[editIdx].insulinD
          ) {
            totalInsulinD = medications[i].quantity - totalInsulinD;
            medications[i].quantity = totalInsulinD;
            await editMeds(user, medications, i);
          }
        }
      }
      if (readings[editIdx].insulinBB !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Fast Acting" &&
            InsulinBB !== readings[editIdx].insulinBB
          ) {
            totalInsulinBB = medications[i].quantity - totalInsulinBB;
            medications[i].quantity = totalInsulinBB;
            await editMeds(user, medications, i);
          }
        }
      }
      if (readings[editIdx].insulinBed !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Fast Acting" &&
            InsulinBed !== readings[editIdx].insulinBed
          ) {
            totalInsulinBed = medications[i].quantity - totalInsulinBed;
            medications[i].quantity = totalInsulinBed;
            await editMeds(user, medications, i);
          }
        }
      }
      if (readings[editIdx].insulinFBed !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Fast Acting" &&
            InsulinFBed !== readings[editIdx].insulinFBed
          ) {
            totalInsulinFBed = medications[i].quantity - totalInsulinFBed;
            medications[i].quantity = totalInsulinFBed;
            await editMeds(user, medications, i);
          }
        }
      }
      if (readings[editIdx].insulinSBed !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Slow Acting" &&
            InsulinSBed !== readings[editIdx].insulinSBed
          ) {
            totalInsulinSBed = medications[i].quantity - totalInsulinSBed;
            medications[i].quantity = totalInsulinSBed;
            await editMeds(user, medications, i);
          }
        }
      }
      {
        readings[editIdx].chkMedsB ||
          readings[editIdx].chkMedsL ||
          readings[editIdx].chkMedsD ||
          readings[editIdx].chkMedsBed
          ? ({ totalAm, totalNoon, totalEvening, totalBed } = await deductMeds(
            readings,
            editIdx,
            medications,
            totalAm,
            user,
            totalNoon,
            totalEvening,
            totalBed
          ))
          : await editReading(user, readings, editIdx);
      }
      this.findAvg();
    } else {
      SugarB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.sugarB, 10)),
        0
      );
      CarbsB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.carbsB, 10)),
        0
      );
      InsulinB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.insulinB, 10)),
        0
      );
      InsulinFB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.insulinFB, 10)),
        0
      );
      InsulinSB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.insulinSB, 10)),
        0
      );
      SugarL = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.sugarL, 10)),
        0
      );
      CarbsL = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.carbsL, 10)),
        0
      );
      InsulinL = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.insulinL, 10)),
        0
      );
      SugarD = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.sugarD, 10)),
        0
      );
      CarbsD = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.carbsD, 10)),
        0
      );
      InsulinD = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.insulinD, 10)),
        0
      );
      SugarBB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.sugarBB, 10)),
        0
      );
      CarbsBB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.carbsBB, 10)),
        0
      );
      InsulinBB = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.insulinBB, 10)),
        0
      );
      SugarBed = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.sugarBed, 10)),
        0
      );
      CarbsBed = readings.reduce(
        (Totaldata, readings) => (Totaldata = parseInt(readings.carbsBed, 10)),
        0
      );
      InsulinBed = readings.reduce(
        (Totaldata, readings) =>
          (Totaldata = parseInt(readings.insulinBed, 10)),
        0
      );
      InsulinFBed = readings.reduce(
        (Totaldata, readings) =>
          (Totaldata = parseInt(readings.insulinFBed, 10)),
        0
      );
      InsulinSBed = readings.reduce(
        (Totaldata, readings) =>
          (Totaldata = parseInt(readings.insulinSBed, 10)),
        0
      );

      readings[editIdx].insulinFBed = totalInsulinFBed;
      if (readings[editIdx].insulinB !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Fast Acting" &&
            InsulinB !== readings[editIdx].insulinB
          ) {
            totalInsulinB = medications[i].quantity - InsulinB;
            medications[i].quantity = totalInsulinB;
            await editMeds(user, medications, i);
          }
        }
        await editReading(user, readings, editIdx);
      }
      if (readings[editIdx].insulinFB !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Fast Acting" &&
            InsulinFB !== readings[editIdx].insulinFB
          ) {
            totalInsulinF = medications[i].quantity - totalInsulinfb;
            medications[i].quantity = totalInsulinF;
            await editMeds(user, medications, i);
          }
        }
        await editReading(user, readings, editIdx);
      }
      if (readings[editIdx].insulinSB !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Slow Acting" &&
            InsulinSB !== readings[editIdx].insulinSB
          ) {
            totalInsulinS = medications[i].quantity - InsulinSB;
            medications[i].quantity = totalInsulinS;
            await editMeds(user, medications, i);
          }
        }
        await editReading(user, readings, editIdx);
      }
      if (readings[editIdx].insulinL !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Fast Acting" &&
            InsulinL !== readings[editIdx].insulinL
          ) {
            totalInsulinL = medications[i].quantity - totalInsulinL;
            medications[i].quantity = totalInsulinL;
            await editMeds(user, medications, i);
          }
        }
        await editReading(user, readings, editIdx);
      }
      if (readings[editIdx].insulinD !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Fast Acting" &&
            InsulinD !== readings[editIdx].insulinD
          ) {
            totalInsulinD = medications[i].quantity - totalInsulinD;
            medications[i].quantity = totalInsulinD;
            await editMeds(user, medications, i);
          }
        }
        await editReading(user, readings, editIdx);
      }
      if (readings[editIdx].insulinBB !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Fast Acting" &&
            InsulinBB !== readings[editIdx].insulinBB
          ) {
            totalInsulinBB = medications[i].quantity - totalInsulinBB;
            medications[i].quantity = totalInsulinBB;
            await editMeds(user, medications, i);
          }
        }
        await editReading(user, readings, editIdx);
      }
      if (readings[editIdx].insulinBed !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Fast Acting" &&
            InsulinBed !== readings[editIdx].insulinBed
          ) {
            totalInsulinBed = medications[i].quantity - totalInsulinBed;
            medications[i].quantity = totalInsulinBed;
            await editMeds(user, medications, i);
          }
        }
        await editReading(user, readings, editIdx);
      }
      if (readings[editIdx].insulinFBed !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Fast Acting" &&
            InsulinFBed !== readings[editIdx].insulinFBed
          ) {
            totalInsulinFBed = medications[i].quantity - totalInsulinFBed;
            medications[i].quantity = totalInsulinFBed;
            await editMeds(user, medications, i);
          }
        }
        await editReading(user, readings, editIdx);
      }
      if (readings[editIdx].insulinSBed !== 0) {
        for (let i = 0; i < medications.length; i++) {
          if (
            medications[i].name === "Slow Acting" &&
            InsulinSBed !== readings[editIdx].insulinSBed
          ) {
            totalInsulinSBed = medications[i].quantity - totalInsulinSBed;
            medications[i].quantity = totalInsulinSBed;
            await editMeds(user, medications, i);
          }
        }
        await editReading(user, readings, editIdx);
      }
      {
        readings[editIdx].chkMedsB ||
          readings[editIdx].chkMedsL ||
          readings[editIdx].chkMedsD ||
          readings[editIdx].chkMedsBed
          ? ({ totalAm, totalNoon, totalEvening, totalBed } = await deductMeds(
            readings,
            editIdx,
            medications,
            totalAm,
            user,
            totalNoon,
            totalEvening,
            totalBed
          ))
          : await editReading(user, readings, editIdx);
      }
      this.findAvg();
    }
    this.getReadings(user.id);
  };

  handlePreference = (e) => {
    const preference =
      e.target.type === "checkbox" ? e.target.checked : Number(e.target.value);

    this.setState({
      preference: {
        ...this.state.preference,
        [e.target.name]: preference,
      },
    });
  };

  handleEditPreference = async () => {
    const {
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
      slidingScale1,
      slidingScale2a,
      slidingScale2b,
      slidingScale3a,
      slidingScale3b,
      slidingScale4a,
      slidingScale4b,
      slidingScale5,
      carbRatio,
    } = this.state.preference;
    const { user } = this.state;

    await postFetch(`/bgtracker/preferences/edit/${user.id}`, {
      id: user.id,
      user_id: user.id,
      timesPD,
      chkNutrition: `${timesPD > 2 && chkNutrition ? 1 : 0}`,
      chkMeds: `${timesPD > 2 && chkMeds ? 1 : 0}`,
      chkMedsB: `${timesPD > 2 && chkMedsB ? 1 : 0}`,
      chkMedsL: `${timesPD > 2 && chkMedsL ? 1 : 0}`,
      chkMedsD: `${timesPD > 2 && chkMedsD ? 1 : 0}`,
      chkMedsBed: `${timesPD > 2 && chkMedsBed ? 1 : 0}`,
      chkInsulin: `${timesPD > 2 && chkInsulin ? 1 : 0}`,
      typInsulin: `${timesPD > 2 && chkInsulin ? typInsulin : 0}`,
      chkBP: `${chkBP ? 1 : 0}`,
      chkSlidingScale: `${timesPD > 2 && chkSlidingScale ? 1 : 0}`,
      slidingScale1: `${timesPD > 2 && chkSlidingScale ? slidingScale1 : 0}`,
      slidingScale2a: `${timesPD > 2 && chkSlidingScale ? slidingScale2a : 0}`,
      slidingScale2b: `${timesPD > 2 && chkSlidingScale ? slidingScale2b : 0}`,
      slidingScale3a: `${timesPD > 2 && chkSlidingScale ? slidingScale3a : 0}`,
      slidingScale3b: `${timesPD > 2 && chkSlidingScale ? slidingScale3b : 0}`,
      slidingScale4a: `${timesPD > 2 && chkSlidingScale ? slidingScale4a : 0}`,
      slidingScale4b: `${timesPD > 2 && chkSlidingScale ? slidingScale4b : 0}`,
      slidingScale5: `${timesPD > 2 && chkSlidingScale ? slidingScale5 : 0}`,
      carbRatio: `${timesPD > 2 && chkSlidingScale ? carbRatio : 0}`,
    })
      .then(
        this.setState({
          preference: {
            ...this.state.preference,
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
            slidingScale1,
            slidingScale2a,
            slidingScale2b,
            slidingScale3a,
            slidingScale3b,
            slidingScale4a,
            slidingScale4b,
            slidingScale5,
            carbRatio,
          },
        })
      )
      .catch((err) => console.log(err));
  };

  handleSavePreference = async () => {
    const { timesPD, chkNutrition, chkInsulin, typInsulin, chkBP } =
      this.state.preference;
    const { user, preferences } = this.state;

    await postFetch(`/bgtracker/preferences/add/${user.id}`, {
      user_id: user.id,
      timesPD,
      chkNutrition,
      chkInsulin,
      typInsulin,
      chkBP,
    })
      .then(
        this.setState({
          preferences: [
            ...preferences,
            {
              user_id: user.id,
              timesPD,
              chkNutrition,
              chkInsulin,
              typInsulin,
              chkBP,
            },
          ],
        })
      )
      .catch((err) => console.log(err));
  };

  handleUser = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleLogIn = async () => {
    const { userName, password, isLogedIn } = this.state.user;
    const { users } = this.state;

    await postFetch(`/users/login`, {
      userName,
      password,
    })
      .then((result) => {
        //handle wrong password
        if (!result.message) {
          console.log(result.errors);
          return;
        } else if (result.message === "Invalid userName") {
          this.setState({
            user: {
              ...this.state.user,
              loginError: "Registration Required",
            },
          });
        } else if (result.message === "Invalid Password") {
          this.setState({
            user: {
              ...this.state.user,
              loginError: "User Name or password incorrect",
            },
          });
        } else if (result.message === "No info") {
          this.setState({
            user: {
              ...this.state.user,
              loginError: "Enter userName and password",
            },
          });
        } else if (result.message === "Login Successful") {
          let user = users.find((user) => user.userName === userName);
          this.setState({
            user: {
              ...this.state.user,
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              userName: user.userName,
              password: user.password,
              email: user.email,
              isLogedIn: !isLogedIn,
              loginError: "",
            },
          });
          this.getBloodPressures(user.id);
          this.getMedications(user.id);
          this.getNutritions(user.id);
          this.getPreference(user.id);
          this.getReadings(user.id);
        }
      })
      .catch((err) => console.log(err));
  };

  handleRegister = async () => {
    const { firstName, lastName, userName, password, email } = this.state.user;
    const isValid = this.validate();

    if (isValid) {
      await postFetch("/users/register", {
        firstName,
        lastName,
        userName,
        password,
        email,
      })
        .then(
          this.setState({
            users: [
              ...this.state.users,
              {
                firstName,
                lastName,
                userName,
                password,
                email,
              },
            ],
          })
        )
        .catch((err) => console.log(err));
      this.setState(InitialState);
      this.getUsers();
    }
  };

  handleBloodPressureChange = (e, name, i) => {
    const { value } = e.target;

    this.setState((state) => ({
      bloodpressures: state.bloodpressures.map((row, j) =>
        j === i ? { ...row, [name]: value } : row
      ),
    }));
    this.getBGChartData();
    this.getBPChartData();
  };

  handleMedicationChange = (e, name, i) => {
    const { value } = e.target;

    this.setState((state) => ({
      medications: state.medications.map((row, j) =>
        j === i ? { ...row, [name]: value } : row
      ),
    }));
  };

  handleNutritionChange = (e, name, i) => {
    const { value } = e.target;

    this.setState((state) => ({
      nutritions: state.nutritions.map((row, j) =>
        j === i ? { ...row, [name]: value } : row
      ),
    }));
  };

  handleMedicationDelete = async (i) => {
    const meds = Object.assign([], this.state.medications);
    const { medications } = this.state;
    await postFetch(`/bgtracker/medications/delete/${i + 1}`, {
      id: medications[i].id,
    }).catch((err) => console.log(err));

    meds.splice(i, 1);
    this.setState({ medications: meds });
  };

  handleReadingChange = (e, name, i) => {
    const { value } = e.target;

    this.setState((state) => ({
      readings: state.readings.map((row, j) =>
        j === i ? { ...row, [name]: value } : row
      ),
    }));
  };

  findAvg = () => {
    const { readings, rate } = this.state;
    const { timesPD } = this.state.preference;
    let total = 0,
      Total = 0,
      Total2 = 0,
      Total3 = 0,
      Total4 = 0,
      Total5 = 0,
      avg = 0,
      a1c = 0;

    Total = readings.reduce(
      (Totaldata, readings) => Totaldata + parseInt(readings.sugarB, 10),
      0
    );
    Total2 = readings.reduce(
      (Totaldata2, readings) => Totaldata2 + parseInt(readings.sugarL, 10),
      0
    );
    Total3 = readings.reduce(
      (Totaldata3, readings) => Totaldata3 + parseInt(readings.sugarD, 10),
      0
    );
    Total4 = readings.reduce(
      (Totaldata4, readings) => Totaldata4 + parseInt(readings.sugarBB, 10),
      0
    );
    Total5 = readings.reduce(
      (Totaldata5, readings) => Totaldata5 + parseInt(readings.sugarBed, 10),
      0
    );
    total = Total + Total2 + Total3 + Total4 + Total5;
    avg = total / (timesPD * 120);
    a1c = avg * rate; //0.0461538461538;

    this.setState({
      Avg: avg,
      A1C: a1c,
    });
  };

  findAvgBp = () => {
    const { bloodpressures } = this.state;

    let Totalhbp = 0,
      Totallbp = 0,
      Totalhr = 0,
      TotalHbp = 0,
      TotalLbp = 0,
      TotalHr = 0,
      Totalhbp2 = 0,
      Totallbp2 = 0,
      Totalhr2 = 0,
      avghbp = 0,
      avglbp = 0,
      avghr = 0,
      avgBp = 0;

    Totalhbp = bloodpressures.reduce(
      (Totaldata, bp) => Totaldata + parseInt(bp.hbp, 10),
      0
    );
    Totallbp = bloodpressures.reduce(
      (Totaldata, bp) => Totaldata + parseInt(bp.lbp, 10),
      0
    );
    Totalhr = bloodpressures.reduce(
      (Totaldata, bp) => Totaldata + parseInt(bp.hr, 10),
      0
    );
    Totalhbp2 = bloodpressures.reduce(
      (Totaldata2, bp) => Totaldata2 + parseInt(bp.hbp2, 10),
      0
    );
    Totallbp2 = bloodpressures.reduce(
      (Totaldata2, bp) => Totaldata2 + parseInt(bp.lbp2, 10),
      0
    );
    Totalhr2 = bloodpressures.reduce(
      (Totaldata2, bp) => Totaldata2 + parseInt(bp.hr2, 10),
      0
    );
    TotalHbp = Totalhbp + Totalhbp2;
    TotalLbp = Totallbp + Totallbp2;
    TotalHr = Totalhr + Totalhr2;

    avghbp = TotalHbp / 90;
    avglbp = TotalLbp / 90;
    avghr = TotalHr / 90;
    avgBp = `${Number(avghbp).toFixed(0)}/${Number(avglbp).toFixed(0)}/${Number(
      avghr
    ).toFixed(0)}`;

    this.setState({
      AvgBp: avgBp,
    });
  };

  getBloodPressures = async (user_id) => {
    const response = await fetch(`/bgtracker/bloodpressures/${user_id}`);
    const data = await response.json();

    this.setState({ bloodpressures: data.results });
    this.findAvgBp();
  };

  getNutritions = async (user_id) => {
    const response = await fetch(`/bgtracker/nutritions/${user_id}`);
    const data = await response.json();

    this.setState({ nutritions: data.results });
  };

  getMedications = async (user_id) => {
    const response = await fetch(`/bgtracker/medications/${user_id}`);
    const data = await response.json();

    this.setState({ medications: data.results });
  };

  getPreference = async (user_id) => {
    const response = await fetch(`/bgtracker/preferences/${user_id}`);
    const data = await response.json();

    this.setState({ preference: data.results });
    const { preferences } = this.state;
    let preference = preferences.find(
      (preference) => preference.user_id === user_id
    );

    if (preferences.length > 0 && preference) {
      this.setState({
        preference: {
          ...this.state.preference,
          id: preference.id,
          user_id: preference.user_id,
          timesPD: preference.timesPD,
          chkNutrition: preference.chkNutrition,
          chkMeds: preference.chkMeds,
          chkMedsB: preference.chkMedsB,
          chkMedsL: preference.chkMedsL,
          chkMedsD: preference.chkMedsD,
          chkMedsBed: preference.chkMedsBed,
          chkInsulin: preference.chkInsulin,
          typInsulin: preference.typInsulin,
          chkBP: preference.chkBP,
          chkSlidingScale: preference.chkSlidingScale,
          slidingScale1: preference.slidingScale1,
          slidingScale2a: preference.slidingScale2a,
          slidingScale2b: preference.slidingScale2b,
          slidingScale3a: preference.slidingScale3a,
          slidingScale3b: preference.slidingScale3b,
          slidingScale4a: preference.slidingScale4a,
          slidingScale4b: preference.slidingScale4b,
          slidingScale5: preference.slidingScale5,
          carbRatio: preference.carbRatio,
        },
      });
      if (
        preference.chkNutrition === 0 &&
        preference.chkMeds === 0 &&
        preference.chkMedsB === 0 &&
        preference.chkMedsL === 0 &&
        preference.chkMedsD === 0 &&
        preference.chkMedsBed === 0 &&
        preference.chkInsulin === 0 &&
        preference.chkBP === 0 &&
        preference.chkSlidingScale === 0
      ) {
        this.setState({
          preference: {
            ...this.state.preference,
            id: preference.id,
            user_id: user_id,
            timesPD: preference.timesPD,
            chkNutrition: false,
            chkMeds: false,
            chkMedsB: false,
            chkMedsL: false,
            chkMedsD: false,
            chkMedsBed: false,
            chkInsulin: false,
            typInsulin: preference.typInsulin,
            chkBP: false,
            chkSlidingScale: false,
            slidingScale1: 0,
            slidingScale2a: 0,
            slidingScale2b: 0,
            slidingScale3a: 0,
            slidingScale3b: 0,
            slidingScale4a: 0,
            slidingScale4b: 0,
            slidingScale5: 0,
            carbRatio: 0,
          },
        });
      } else if (
        preference.chkNutrition === 1 &&
        preference.chkMeds === 1 &&
        preference.chkMedsB === 1 &&
        preference.chkMedsL === 1 &&
        preference.chkMedsD === 1 &&
        preference.chkMedsBed === 1 &&
        preference.chkInsulin === 1 &&
        preference.chkBP === 1 &&
        preference.chkSlidingScale === 1
      ) {
        this.setState({
          preference: {
            ...this.state.preference,
            id: preference.id,
            user_id: user_id,
            timesPD: preference.timesPD,
            chkNutrition: true,
            chkMeds: true,
            chkMedsB: true,
            chkMedsL: true,
            chkMedsD: true,
            chkMedsBed: true,
            chkInsulin: true,
            typInsulin: preference.typInsulin,
            chkBP: true,
            chkSlidingScale: true,
            slidingScale1: preference.slidingScale1,
            slidingScale2a: preference.slidingScale2a,
            slidingScale2b: preference.slidingScale2b,
            slidingScale3a: preference.slidingScale3a,
            slidingScale3b: preference.slidingScale3b,
            slidingScale4a: preference.slidingScale4a,
            slidingScale4b: preference.slidingScale4b,
            slidingScale5: preference.slidingScale5,
            carbRatio: preference.carbRatio,
          },
        });
      } else if (
        preference.chkNutrition === 0 &&
        preference.chkMeds === 0 &&
        preference.chkMedsB === 0 &&
        preference.chkMedsL === 0 &&
        preference.chkMedsD === 0 &&
        preference.chkMedsBed === 0 &&
        preference.chkInsulin === 0 &&
        preference.chkBP === 1 &&
        preference.chkSlidingScale === 0
      ) {
        this.setState({
          preference: {
            ...this.state.preference,
            id: preference.id,
            user_id: user_id,
            timesPD: preference.timesPD,
            chkNutrition: false,
            chkMeds: false,
            chkMedsB: false,
            chkMedsL: false,
            chkMedsD: false,
            chkMedsBed: false,
            chkInsulin: false,
            typInsulin: preference.typInsulin,
            chkBP: true,
            chkSlidingScale: false,
            slidingScale1: 0,
            slidingScale2a: 0,
            slidingScale2b: 0,
            slidingScale3a: 0,
            slidingScale3b: 0,
            slidingScale4a: 0,
            slidingScale4b: 0,
            slidingScale5: 0,
            carbRatio: 0,
          },
        });
      }
    } else {
      console.log("Incorrect ID");
    }
  };

  getPreferences = async () => {
    const response = await fetch("/bgtracker/preferences");
    const data = await response.json();

    this.setState({ preferences: data.results });
  };

  getReadings = async (user_id) => {
    const response = await fetch(`/bgtracker/readings/${user_id}`);
    const data = await response.json();

    this.setState({ readings: data.results });
    if (
      (this.state.preference.timesPD === 1 &&
        this.state.preference.chkBP === true) ||
      (this.state.preference.timesPD === 2 &&
        this.state.preference.chkBP === true)
    ) {
      this.getA1CChartData();
      this.getBGChartData();
      this.getBPChartData();
    } else {
      this.getA1CChartDataColaberated();
      this.getA1CChartData();
      this.getBGChartData();
      this.getBPChartData();
      this.findAvg();
    }
  };

  getUsers = async () => {
    const response = await fetch(`/users`);
    const data = await response.json();

    this.setState({ users: data.results });
  };

  componentDidMount() {
    this.getUsers();
    this.getPreferences();
  }

  getA1CChartDataColaberated = () => {
    const { A1CLabels, readings, rate } = this.state;
    const { timesPD } = this.state.preference;
    const {
      totalTimes,
      Day1,
      totalTimes7,
      Day7,
      totalTimes30,
      Day30,
      totalTimes60,
      Day60,
      totalTimes90,
      Day90,
      totalTimes120,
      Day120,
    } = colaberated(readings, timesPD, rate);

    return this.setState({
      a1cChartDataColaberated: {
        labels: A1CLabels,
        datasets: [
          {
            label: "1 Day",
            backgroundColor: backgroundColor(
              ((totalTimes / (timesPD * 1)) * rate).toFixed(2)
            ),
            borderColor: borderColor(
              ((totalTimes / (timesPD * 1)) * rate).toFixed(2)
            ),
            data: Day1,
          },
          {
            label: "7 Day",
            backgroundColor: backgroundColor(
              ((totalTimes7 / (timesPD * 7)) * rate).toFixed(2)
            ),
            borderColor: borderColor(
              ((totalTimes7 / (timesPD * 7)) * rate).toFixed(2)
            ),
            data: Day7,
          },
          {
            label: "30 Day",
            backgroundColor: backgroundColor(
              ((totalTimes30 / (timesPD * 30)) * rate).toFixed(2)
            ),
            borderColor: borderColor(
              ((totalTimes30 / (timesPD * 30)) * rate).toFixed(2)
            ),
            data: Day30,
          },
          {
            label: "60 Day",
            backgroundColor: backgroundColor(
              ((totalTimes60 / (timesPD * 60)) * rate).toFixed(2)
            ),
            borderColor: borderColor(
              ((totalTimes60 / (timesPD * 60)) * rate).toFixed(2)
            ),
            data: Day60,
          },
          {
            label: "90 Day",
            backgroundColor: backgroundColor(
              ((totalTimes90 / (timesPD * 90)) * rate).toFixed(2)
            ),
            borderColor: borderColor(
              ((totalTimes90 / (timesPD * 90)) * rate).toFixed(2)
            ),
            data: Day90,
          },
          {
            label: "120 Day",
            backgroundColor: backgroundColor(
              ((totalTimes120 / (timesPD * 120)) * rate).toFixed(2)
            ),
            borderColor: borderColor(
              ((totalTimes120 / (timesPD * 120)) * rate).toFixed(2)
            ),
            data: Day120,
          },
        ],
      },
    });
  };

  getA1CChartData = () => {
    const { readings, rate } = this.state;
    const { timesPD } = this.state.preference;

    return this.setState({
      a1cChartData: {
        labels: Labels120,
        datasets: [
          {
            label: "A1C",
            backgroundColor: colordataTimes(readings, rate, timesPD),
            borderColor: borderdataTimes(readings, rate, timesPD),
            data: dataTimes(readings, rate, timesPD),
          },
        ],
      },
    });
  };

  getBGChartData = () => {
    const { readings } = this.state;
    const { dataSB, dataSL, dataSD, dataSBB, dataSBed } = BGChartData(readings);

    return this.setState({
      bgChartData: {
        labels: Labels120,
        datasets: [
          {
            label: "Breakfast",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,0,0,0.4)",
            borderColor: "rgba(255,0,0,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(255,0,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255,0,0,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataSB,
          },
          {
            label: "Lunch",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(0,255,0,0.4)",
            borderColor: "rgba(0,255,0,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(0,255,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(0,255,0,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataSL,
          },
          {
            label: "Dinner",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(0,0,255,0.4)",
            borderColor: "rgba(0,0,255,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(0,0,255,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(0,0,255,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataSD,
          },
          {
            label: "Before Bed",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,255,0,0.4)",
            borderColor: "rgba(255,255,0,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(255,255,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255,255,0,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataSBB,
          },
          {
            label: "Bed",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(0,255,255,0.4)",
            borderColor: "rgba(0,255,255,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(0,255,255,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(0,255,255,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataSBed,
          },
        ],
      },
    });
  };

  getBPChartData = () => {
    const { bloodpressures } = this.state;
    const { dataHBP, dataLBP, dataHR, dataHBP2, dataLBP2, dataHR2 } =
      BPChartData(bloodpressures);

    this.setState({
      bpChartData: {
        labels: bpLabels,
        datasets: [
          {
            label: "First SYS (Top BP)",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,0,0,0.4)",
            borderColor: "rgba(255,0,0,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(255,0,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255,0,0,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataHBP,
          },
          {
            label: "First DIAS (Bottom BP)",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(0,255,0,0.4)",
            borderColor: "rgba(0,255,0,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(0,255,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(0,255,0,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataLBP,
          },
          {
            label: "First Heart Rate",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(0,0,255,0.4)",
            borderColor: "rgba(0,0,255,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(0,0,255,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(0,0,255,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataHR,
          },
          {
            label: "Second SYS (Top BP)",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,0,130,0.4)",
            borderColor: "rgba(255,0,130,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(255,0,130,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255,0,130,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataHBP2,
          },
          {
            label: "Second DIAS (Bottom BP)",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(0,255,130,0.4)",
            borderColor: "rgba(0,255,130,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(0,255,130,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(0,255,130,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataLBP2,
          },
          {
            label: "Second Heart Rate",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(0,130,255,0.4)",
            borderColor: "rgba(0,130,255,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(0,130,255,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(0,130,255,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataHR2,
          },
        ],
      },
    });
  };

  validate = () => {
    let { firstName, lastName, userName, password, email } = this.state.user;
    const { users } = this.state;
    let firstNameError = "";
    let lastNameError = "";
    let userNameError = "";
    let passwordError = "";
    let emailError = "";

    if (!firstName) {
      firstNameError = "First Name Required";
    } else if (firstName.length <= 3) {
      firstNameError = "First Name must be at least 3 Characters long";
    }
    if (!lastName) {
      lastNameError = "Last Name Required";
    } else if (lastName.length <= 3) {
      lastNameError = "Last Name must be at least 3 Characters long";
    }
    if (!userName || userName.length <= 3) {
      userNameError = "User Name Required";
    }
    if (users.find((user) => user.userName === userName)) {
      userNameError = "User already exists";
    }
    if (!password) {
      passwordError = "Password Required";
    } else if (password.length <= 5) {
      passwordError = "Password is to short";
    } else if (password.length >= 21) {
      passwordError = "Password is to long";
    } else if (
      password === "password".toLocaleLowerCase() ||
      password === "password".toLocaleUpperCase()
    ) {
      passwordError = "Can not use password for Password";
    }
    if (!email) {
      emailError = "E-mail Required";
    } else if (!email.includes("@")) {
      emailError = "Invalid E-mail";
    }

    if (
      firstNameError ||
      lastNameError ||
      userNameError ||
      passwordError ||
      emailError
    ) {
      this.setState({
        user: {
          ...this.state.user,
          firstNameError,
          lastNameError,
          userNameError,
          passwordError,
          emailError,
        },
      });
      return false;
    }
    return true;
  };

  render() {
    const {
      editIdx,
      Avg,
      AvgBp,
      A1C,
      a1cChartData,
      a1cChartDataColaberated,
      bgChartData,
      bpChartData,
      medications,
      //nutritions,
      readings,
      bloodpressures,
    } = this.state;
    const {
      firstName,
      firstNameError,
      lastName,
      lastNameError,
      userName,
      userNameError,
      password,
      passwordError,
      email,
      emailError,
      isLogedIn,
      loginError,
    } = this.state.user;
    const {
      user_id,
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
      slidingScale1,
      slidingScale2a,
      slidingScale2b,
      slidingScale3a,
      slidingScale3b,
      slidingScale4a,
      slidingScale4b,
      slidingScale5,
      carbRatio,
    } = this.state.preference;

    return (
      <Router>
        <StyledDiv A1C={A1C}>
          <p>
            Welcome, {firstName} {lastName}
          </p>
          {Avg !== 0 ? <p>Average Blood Sugar: {Avg.toFixed(2)}</p> : ""}
          {(timesPD === 1 && chkBP) || (timesPD === 2 && chkBP) ? (
            <p>Average Blood Pressure: {AvgBp}</p>
          ) : timesPD >= 3 && chkBP ? (
            <p>Average Blood Pressure: {AvgBp}</p>
          ) : (
            ""
          )}
          {A1C !== 0 ? <p>A1C: {A1C.toFixed(2)} %</p> : ""}
          <ul>
            {(timesPD === 1 && chkBP) || (timesPD === 2 && chkBP) ? (
              <NavBarLink>
                <StyledButton to={"/"}>BP Tracker</StyledButton>
              </NavBarLink>
            ) : (
              <NavBarLink>
                <StyledButton to={"/"}>BG Tracker</StyledButton>
              </NavBarLink>
            )}
            {timesPD >= 3 && chkBP ? (
              <NavBarLink>
                <StyledButton to={"/bptracker"}>BP Tracker</StyledButton>
              </NavBarLink>
            ) : (
              ""
            )}
            {(timesPD === 1 && chkBP) || (timesPD === 2 && chkBP) ? (
              <NavBarLink>
                <StyledButton to={"/bpchart"}>BP Chart</StyledButton>
              </NavBarLink>
            ) : !isLogedIn ? (
              ""
            ) : (
              <NavBarLink>
                <StyledButton to={"/bgchart"}>BG Chart</StyledButton>
              </NavBarLink>
            )}
            {timesPD >= 3 && chkBP ? (
              <NavBarLink>
                <StyledButton to={"/bpchart"}>BP Chart</StyledButton>
              </NavBarLink>
            ) : (
              ""
            )}
            {(isLogedIn && timesPD === 1 && !chkBP) ||
              (timesPD === 2 && !chkBP) ||
              timesPD >= 3 ? (
              <NavBarLink>
                <StyledButton to={"/a1cchart"}>A1C Chart</StyledButton>
              </NavBarLink>
            ) : (
              ""
            )}
            {isLogedIn && chkMeds ? (
              <NavBarLink>
                <StyledButton to={"/medications"}>Medications</StyledButton>
              </NavBarLink>
            ) : (
              ""
            )}
            {/* {timesPD >= 3 && chkNutrition ? (
              <NavBarLink>
                <StyledButton to={'/nutrition'}>
                  Nutrition
                </StyledButton>
              </NavBarLink>
            ) : (
              ''
            )} */}
            {isLogedIn ? (
              <NavBarLink>
                <StyledButton to={"/preferences"}>Preferences</StyledButton>
              </NavBarLink>
            ) : (
              ""
            )}
            <NavBarLink>
              <StyledButton to={"/help"}>Help</StyledButton>
            </NavBarLink>
          </ul>

          <Switch>
            <Route exact path="/">
              <Tables
                add={this.addReading}
                addBP={this.addBP}
                A1C={A1C}
                editIdx={editIdx}
                timesPD={timesPD}
                chkNutrition={chkNutrition}
                chkMeds={chkMeds}
                chkMedsB={chkMedsB}
                chkMedsL={chkMedsL}
                chkMedsD={chkMedsD}
                chkMedsBed={chkMedsBed}
                chkInsulin={chkInsulin}
                typInsulin={typInsulin}
                chkBP={chkBP}
                chkSlidingScale={chkSlidingScale}
                startEditingReading={this.startEditingReading}
                stopEditingReading={this.stopEditingReading}
                handleChange={this.handleReadingChange}
                startEditingBP={this.startEditingBloodPressure}
                stopEditingBP={this.stopEditingBloodPressure}
                handleChangeBP={this.handleBloodPressureChange}
                handleLogIn={this.handleLogIn}
                handleUser={this.handleUser}
                readings={readings}
                bloodpressures={bloodpressures}
                userName={userName}
                password={password}
                isLogedIn={isLogedIn}
                loginError={loginError}
                firstName={firstName}
                firstNameError={firstNameError}
                lastName={lastName}
                lastNameError={lastNameError}
                userNameError={userNameError}
                passwordError={passwordError}
                email={email}
                emailError={emailError}
                handleRegister={this.handleRegister}
              />
            </Route>
            {/* {timesPD === 3 && chkNutrition ? (
              <Route path='/nutrition'>
                <TableNutrition
                  add={this.addNutrition}
                  editIdx={editIdx}
                  startEditing={this.startEditingNutrition}
                  stopEditing={this.stopEditingNutrition}
                  handleChange={this.handleNutritionChange}
                  nutritions={nutritions}
                  header={[
                    {
                      name: 'Date',
                      prop: 'date',
                      type: 'date',
                    },
                    {
                      name: 'Food Name',
                      prop: 'foodNameB',
                      type: 'text',
                    },
                    {
                      name: 'Calories',
                      prop: 'caloriesB',
                      type: 'number',
                    },
                    {
                      name: 'Saturated (g)',
                      prop: 'saturatedB',
                      type: 'number',
                    },
                    {
                      name: 'Trans (g)',
                      prop: 'transB',
                      type: 'number',
                    },
                    {
                      name: 'Polyunsaturated (g)',
                      prop: 'polyunsaturatedB',
                      type: 'number',
                    },
                    {
                      name: 'monosaturated (g)',
                      prop: 'monosaturatedB',
                      type: 'number',
                    },
                    {
                      name: 'Cholesterol (mg)',
                      prop: 'cholesterolB',
                      type: 'number',
                    },
                    {
                      name: 'Sodium (mg)',
                      prop: 'sodiumB',
                      type: 'number',
                    },
                    {
                      name: 'Carbs (g)',
                      prop: 'carbsB',
                      type: 'number',
                    },
                    {
                      name: 'Fiber (g)',
                      prop: 'fiberB',
                      type: 'number',
                    },
                    {
                      name: 'Sugars (g)',
                      prop: 'sugarsB',
                      type: 'number',
                    },
                    {
                      name: 'Protein (g)',
                      prop: 'proteinB',
                      type: 'number',
                    },
                    {
                      name: 'A (mcg)',
                      prop: 'vitaminAB',
                      type: 'number',
                    },
                    {
                      name: 'C (mcg)',
                      prop: 'vitaminCB',
                      type: 'number',
                    },
                    {
                      name: 'D (mcg)',
                      prop: 'vitaminDB',
                      type: 'number',
                    },
                    {
                      name: 'Calcium (mg)',
                      prop: 'calciumB',
                      type: 'number',
                    },
                    {
                      name: 'Iron (mg)',
                      prop: 'ironB',
                      type: 'number',
                    },
                    {
                      name: 'Potassium (mg)',
                      prop: 'potassiumB',
                      type: 'number',
                    },
                    {
                      name: 'Food Name',
                      prop: 'foodNameL',
                      type: 'text',
                    },
                    {
                      name: 'Calories',
                      prop: 'caloriesL',
                      type: 'number',
                    },
                    {
                      name: 'Saturated (g)',
                      prop: 'saturatedL',
                      type: 'number',
                    },
                    {
                      name: 'Trans (g)',
                      prop: 'transL',
                      type: 'number',
                    },
                    {
                      name: 'Polyunsaturated (g)',
                      prop: 'polyunsaturatedL',
                      type: 'number',
                    },
                    {
                      name: 'monosaturated (g)',
                      prop: 'monosaturatedL',
                      type: 'number',
                    },
                    {
                      name: 'Cholesterol (mg)',
                      prop: 'cholesterolL',
                      type: 'number',
                    },
                    {
                      name: 'Sodium (mg)',
                      prop: 'sodiumL',
                      type: 'number',
                    },
                    {
                      name: 'Carbs (g)',
                      prop: 'carbsL',
                      type: 'number',
                    },
                    {
                      name: 'Fiber (g)',
                      prop: 'fiberL',
                      type: 'number',
                    },
                    {
                      name: 'Sugars (g)',
                      prop: 'sugarsL',
                      type: 'number',
                    },
                    {
                      name: 'Protein (g)',
                      prop: 'proteinL',
                      type: 'number',
                    },
                    {
                      name: 'A (mcg)',
                      prop: 'vitaminAL',
                      type: 'number',
                    },
                    {
                      name: 'C (mcg)',
                      prop: 'vitaminCL',
                      type: 'number',
                    },
                    {
                      name: 'D (mcg)',
                      prop: 'vitaminDL',
                      type: 'number',
                    },
                    {
                      name: 'Calcium (mg)',
                      prop: 'calciumL',
                      type: 'number',
                    },
                    {
                      name: 'Iron (mg)',
                      prop: 'ironL',
                      type: 'number',
                    },
                    {
                      name: 'Potassium (mg)',
                      prop: 'potassiumL',
                      type: 'number',
                    },
                    {
                      name: 'Food Name',
                      prop: 'foodNameD',
                      type: 'text',
                    },
                    {
                      name: 'Calories',
                      prop: 'caloriesD',
                      type: 'number',
                    },
                    {
                      name: 'Saturated (g)',
                      prop: 'saturatedD',
                      type: 'number',
                    },
                    {
                      name: 'Trans (g)',
                      prop: 'transD',
                      type: 'number',
                    },
                    {
                      name: 'Polyunsaturated (g)',
                      prop: 'polyunsaturatedD',
                      type: 'number',
                    },
                    {
                      name: 'monosaturated (g)',
                      prop: 'monosaturatedD',
                      type: 'number',
                    },
                    {
                      name: 'Cholesterol (mg)',
                      prop: 'cholesterolD',
                      type: 'number',
                    },
                    {
                      name: 'Sodium (mg)',
                      prop: 'sodiumD',
                      type: 'number',
                    },
                    {
                      name: 'Carbs (g)',
                      prop: 'carbsD',
                      type: 'number',
                    },
                    {
                      name: 'Fiber (g)',
                      prop: 'fiberD',
                      type: 'number',
                    },
                    {
                      name: 'Sugars (g)',
                      prop: 'sugarsD',
                      type: 'number',
                    },
                    {
                      name: 'Protein (g)',
                      prop: 'proteinD',
                      type: 'number',
                    },
                    {
                      name: 'A (mcg)',
                      prop: 'vitaminAD',
                      type: 'number',
                    },
                    {
                      name: 'C (mcg)',
                      prop: 'vitaminCD',
                      type: 'number',
                    },
                    {
                      name: 'D (mcg)',
                      prop: 'vitaminDD',
                      type: 'number',
                    },
                    {
                      name: 'Calcium (mg)',
                      prop: 'calciumD',
                      type: 'number',
                    },
                    {
                      name: 'Iron (mg)',
                      prop: 'ironD',
                      type: 'number',
                    },
                    {
                      name: 'Potassium (mg)',
                      prop: 'potassiumD',
                      type: 'number',
                    },
                  ]}
                />
              </Route>
            ) : timesPD === 4 && chkNutrition ? (
              <Route path='/nutrition'>
                <TableNutritionTwo
                  add={this.addNutrition}
                  editIdx={editIdx}
                  startEditing={this.startEditingNutrition}
                  stopEditing={this.stopEditingNutrition}
                  handleChange={this.handleNutritionChange}
                  nutritions={nutritions}
                  header={[
                    {
                      name: 'Date',
                      prop: 'date',
                      type: 'date',
                    },
                    {
                      name: 'Food Name',
                      prop: 'foodNameB',
                      type: 'text',
                    },
                    {
                      name: 'Calories',
                      prop: 'caloriesB',
                      type: 'number',
                    },
                    {
                      name: 'Saturated (g)',
                      prop: 'saturatedB',
                      type: 'number',
                    },
                    {
                      name: 'Trans (g)',
                      prop: 'transB',
                      type: 'number',
                    },
                    {
                      name: 'Polyunsaturated (g)',
                      prop: 'polyunsaturatedB',
                      type: 'number',
                    },
                    {
                      name: 'monosaturated (g)',
                      prop: 'monosaturatedB',
                      type: 'number',
                    },
                    {
                      name: 'Cholesterol (mg)',
                      prop: 'cholesterolB',
                      type: 'number',
                    },
                    {
                      name: 'Sodium (mg)',
                      prop: 'sodiumB',
                      type: 'number',
                    },
                    {
                      name: 'Carbs (g)',
                      prop: 'carbsB',
                      type: 'number',
                    },
                    {
                      name: 'Fiber (g)',
                      prop: 'fiberB',
                      type: 'number',
                    },
                    {
                      name: 'Sugars (g)',
                      prop: 'sugarsB',
                      type: 'number',
                    },
                    {
                      name: 'Protein (g)',
                      prop: 'proteinB',
                      type: 'number',
                    },
                    {
                      name: 'A (mcg)',
                      prop: 'vitaminAB',
                      type: 'number',
                    },
                    {
                      name: 'C (mcg)',
                      prop: 'vitaminCB',
                      type: 'number',
                    },
                    {
                      name: 'D (mcg)',
                      prop: 'vitaminDB',
                      type: 'number',
                    },
                    {
                      name: 'Calcium (mg)',
                      prop: 'calciumB',
                      type: 'number',
                    },
                    {
                      name: 'Iron (mg)',
                      prop: 'ironB',
                      type: 'number',
                    },
                    {
                      name: 'Potassium (mg)',
                      prop: 'potassiumB',
                      type: 'number',
                    },
                    {
                      name: 'Food Name',
                      prop: 'foodNameL',
                      type: 'text',
                    },
                    {
                      name: 'Calories',
                      prop: 'caloriesL',
                      type: 'number',
                    },
                    {
                      name: 'Saturated (g)',
                      prop: 'saturatedL',
                      type: 'number',
                    },
                    {
                      name: 'Trans (g)',
                      prop: 'transL',
                      type: 'number',
                    },
                    {
                      name: 'Polyunsaturated (g)',
                      prop: 'polyunsaturatedL',
                      type: 'number',
                    },
                    {
                      name: 'monosaturated (g)',
                      prop: 'monosaturatedL',
                      type: 'number',
                    },
                    {
                      name: 'Cholesterol (mg)',
                      prop: 'cholesterolL',
                      type: 'number',
                    },
                    {
                      name: 'Sodium (mg)',
                      prop: 'sodiumL',
                      type: 'number',
                    },
                    {
                      name: 'Carbs (g)',
                      prop: 'carbsL',
                      type: 'number',
                    },
                    {
                      name: 'Fiber (g)',
                      prop: 'fiberL',
                      type: 'number',
                    },
                    {
                      name: 'Sugars (g)',
                      prop: 'sugarsL',
                      type: 'number',
                    },
                    {
                      name: 'Protein (g)',
                      prop: 'proteinL',
                      type: 'number',
                    },
                    {
                      name: 'A (mcg)',
                      prop: 'vitaminAL',
                      type: 'number',
                    },
                    {
                      name: 'C (mcg)',
                      prop: 'vitaminCL',
                      type: 'number',
                    },
                    {
                      name: 'D (mcg)',
                      prop: 'vitaminDL',
                      type: 'number',
                    },
                    {
                      name: 'Calcium (mg)',
                      prop: 'calciumL',
                      type: 'number',
                    },
                    {
                      name: 'Iron (mg)',
                      prop: 'ironL',
                      type: 'number',
                    },
                    {
                      name: 'Potassium (mg)',
                      prop: 'potassiumL',
                      type: 'number',
                    },
                    {
                      name: 'Food Name',
                      prop: 'foodNameD',
                      type: 'text',
                    },
                    {
                      name: 'Calories',
                      prop: 'caloriesD',
                      type: 'number',
                    },
                    {
                      name: 'Saturated (g)',
                      prop: 'saturatedD',
                      type: 'number',
                    },
                    {
                      name: 'Trans (g)',
                      prop: 'transD',
                      type: 'number',
                    },
                    {
                      name: 'Polyunsaturated (g)',
                      prop: 'polyunsaturatedD',
                      type: 'number',
                    },
                    {
                      name: 'monosaturated (g)',
                      prop: 'monosaturatedD',
                      type: 'number',
                    },
                    {
                      name: 'Cholesterol (mg)',
                      prop: 'cholesterolD',
                      type: 'number',
                    },
                    {
                      name: 'Sodium (mg)',
                      prop: 'sodiumD',
                      type: 'number',
                    },
                    {
                      name: 'Carbs (g)',
                      prop: 'carbsD',
                      type: 'number',
                    },
                    {
                      name: 'Fiber (g)',
                      prop: 'fiberD',
                      type: 'number',
                    },
                    {
                      name: 'Sugars (g)',
                      prop: 'sugarsD',
                      type: 'number',
                    },
                    {
                      name: 'Protein (g)',
                      prop: 'proteinD',
                      type: 'number',
                    },
                    {
                      name: 'A (mcg)',
                      prop: 'vitaminAD',
                      type: 'number',
                    },
                    {
                      name: 'C (mcg)',
                      prop: 'vitaminCD',
                      type: 'number',
                    },
                    {
                      name: 'D (mcg)',
                      prop: 'vitaminDD',
                      type: 'number',
                    },
                    {
                      name: 'Calcium (mg)',
                      prop: 'calciumD',
                      type: 'number',
                    },
                    {
                      name: 'Iron (mg)',
                      prop: 'ironD',
                      type: 'number',
                    },
                    {
                      name: 'Potassium (mg)',
                      prop: 'potassiumD',
                      type: 'number',
                    },
                    {
                      name: 'Food Name',
                      prop: 'foodNameBed',
                      type: 'text',
                    },
                    {
                      name: 'Calories',
                      prop: 'caloriesBed',
                      type: 'number',
                    },
                    {
                      name: 'Saturated (g)',
                      prop: 'saturatedBed',
                      type: 'number',
                    },
                    {
                      name: 'Trans (g)',
                      prop: 'transBed',
                      type: 'number',
                    },
                    {
                      name: 'Polyunsaturated (g)',
                      prop: 'polyunsaturatedBed',
                      type: 'number',
                    },
                    {
                      name: 'monosaturated (g)',
                      prop: 'monosaturatedBed',
                      type: 'number',
                    },
                    {
                      name: 'Cholesterol (mg)',
                      prop: 'cholesterolBed',
                      type: 'number',
                    },
                    {
                      name: 'Sodium (mg)',
                      prop: 'sodiumBed',
                      type: 'number',
                    },
                    {
                      name: 'Carbs (g)',
                      prop: 'carbsBed',
                      type: 'number',
                    },
                    {
                      name: 'Fiber (g)',
                      prop: 'fiberBed',
                      type: 'number',
                    },
                    {
                      name: 'Sugars (g)',
                      prop: 'sugarsBed',
                      type: 'number',
                    },
                    {
                      name: 'Protein (g)',
                      prop: 'proteinBed',
                      type: 'number',
                    },
                    {
                      name: 'A (mcg)',
                      prop: 'vitaminABed',
                      type: 'number',
                    },
                    {
                      name: 'C (mcg)',
                      prop: 'vitaminCBed',
                      type: 'number',
                    },
                    {
                      name: 'D (mcg)',
                      prop: 'vitaminDBed',
                      type: 'number',
                    },
                    {
                      name: 'Calcium (mg)',
                      prop: 'calciumBed',
                      type: 'number',
                    },
                    {
                      name: 'Iron (mg)',
                      prop: 'ironBed',
                      type: 'number',
                    },
                    {
                      name: 'Potassium (mg)',
                      prop: 'potassiumBed',
                      type: 'number',
                    },
                  ]}
                />
              </Route>
            ) : timesPD === 5 && chkNutrition ? (
              <Route path='/nutrition'>
                <TableNutritionThree
                  add={this.addNutrition}
                  editIdx={editIdx}
                  startEditing={this.startEditingNutrition}
                  stopEditing={this.stopEditingNutrition}
                  handleChange={this.handleNutritionChange}
                  nutritions={nutritions}
                  header={[
                    {
                      name: 'Date',
                      prop: 'date',
                      type: 'date',
                    },
                    {
                      name: 'Food Name',
                      prop: 'foodNameB',
                      type: 'text',
                    },
                    {
                      name: 'Calories',
                      prop: 'caloriesB',
                      type: 'number',
                    },
                    {
                      name: 'Saturated (g)',
                      prop: 'saturatedB',
                      type: 'number',
                    },
                    {
                      name: 'Trans (g)',
                      prop: 'transB',
                      type: 'number',
                    },
                    {
                      name: 'Polyunsaturated (g)',
                      prop: 'polyunsaturatedB',
                      type: 'number',
                    },
                    {
                      name: 'monosaturated (g)',
                      prop: 'monosaturatedB',
                      type: 'number',
                    },
                    {
                      name: 'Cholesterol (mg)',
                      prop: 'cholesterolB',
                      type: 'number',
                    },
                    {
                      name: 'Sodium (mg)',
                      prop: 'sodiumB',
                      type: 'number',
                    },
                    {
                      name: 'Carbs (g)',
                      prop: 'carbsB',
                      type: 'number',
                    },
                    {
                      name: 'Fiber (g)',
                      prop: 'fiberB',
                      type: 'number',
                    },
                    {
                      name: 'Sugars (g)',
                      prop: 'sugarsB',
                      type: 'number',
                    },
                    {
                      name: 'Protein (g)',
                      prop: 'proteinB',
                      type: 'number',
                    },
                    {
                      name: 'A (mcg)',
                      prop: 'vitaminAB',
                      type: 'number',
                    },
                    {
                      name: 'C (mcg)',
                      prop: 'vitaminCB',
                      type: 'number',
                    },
                    {
                      name: 'D (mcg)',
                      prop: 'vitaminDB',
                      type: 'number',
                    },
                    {
                      name: 'Calcium (mg)',
                      prop: 'calciumB',
                      type: 'number',
                    },
                    {
                      name: 'Iron (mg)',
                      prop: 'ironB',
                      type: 'number',
                    },
                    {
                      name: 'Potassium (mg)',
                      prop: 'potassiumB',
                      type: 'number',
                    },
                    {
                      name: 'Food Name',
                      prop: 'foodNameL',
                      type: 'text',
                    },
                    {
                      name: 'Calories',
                      prop: 'caloriesL',
                      type: 'number',
                    },
                    {
                      name: 'Saturated (g)',
                      prop: 'saturatedL',
                      type: 'number',
                    },
                    {
                      name: 'Trans (g)',
                      prop: 'transL',
                      type: 'number',
                    },
                    {
                      name: 'Polyunsaturated (g)',
                      prop: 'polyunsaturatedL',
                      type: 'number',
                    },
                    {
                      name: 'monosaturated (g)',
                      prop: 'monosaturatedL',
                      type: 'number',
                    },
                    {
                      name: 'Cholesterol (mg)',
                      prop: 'cholesterolL',
                      type: 'number',
                    },
                    {
                      name: 'Sodium (mg)',
                      prop: 'sodiumL',
                      type: 'number',
                    },
                    {
                      name: 'Carbs (g)',
                      prop: 'carbsL',
                      type: 'number',
                    },
                    {
                      name: 'Fiber (g)',
                      prop: 'fiberL',
                      type: 'number',
                    },
                    {
                      name: 'Sugars (g)',
                      prop: 'sugarsL',
                      type: 'number',
                    },
                    {
                      name: 'Protein (g)',
                      prop: 'proteinL',
                      type: 'number',
                    },
                    {
                      name: 'A (mcg)',
                      prop: 'vitaminAL',
                      type: 'number',
                    },
                    {
                      name: 'C (mcg)',
                      prop: 'vitaminCL',
                      type: 'number',
                    },
                    {
                      name: 'D (mcg)',
                      prop: 'vitaminDL',
                      type: 'number',
                    },
                    {
                      name: 'Calcium (mg)',
                      prop: 'calciumL',
                      type: 'number',
                    },
                    {
                      name: 'Iron (mg)',
                      prop: 'ironL',
                      type: 'number',
                    },
                    {
                      name: 'Potassium (mg)',
                      prop: 'potassiumL',
                      type: 'number',
                    },
                    {
                      name: 'Food Name',
                      prop: 'foodNameD',
                      type: 'text',
                    },
                    {
                      name: 'Calories',
                      prop: 'caloriesD',
                      type: 'number',
                    },
                    {
                      name: 'Saturated (g)',
                      prop: 'saturatedD',
                      type: 'number',
                    },
                    {
                      name: 'Trans (g)',
                      prop: 'transD',
                      type: 'number',
                    },
                    {
                      name: 'Polyunsaturated (g)',
                      prop: 'polyunsaturatedD',
                      type: 'number',
                    },
                    {
                      name: 'monosaturated (g)',
                      prop: 'monosaturatedD',
                      type: 'number',
                    },
                    {
                      name: 'Cholesterol (mg)',
                      prop: 'cholesterolD',
                      type: 'number',
                    },
                    {
                      name: 'Sodium (mg)',
                      prop: 'sodiumD',
                      type: 'number',
                    },
                    {
                      name: 'Carbs (g)',
                      prop: 'carbsD',
                      type: 'number',
                    },
                    {
                      name: 'Fiber (g)',
                      prop: 'fiberD',
                      type: 'number',
                    },
                    {
                      name: 'Sugars (g)',
                      prop: 'sugarsD',
                      type: 'number',
                    },
                    {
                      name: 'Protein (g)',
                      prop: 'proteinD',
                      type: 'number',
                    },
                    {
                      name: 'A (mcg)',
                      prop: 'vitaminAD',
                      type: 'number',
                    },
                    {
                      name: 'C (mcg)',
                      prop: 'vitaminCD',
                      type: 'number',
                    },
                    {
                      name: 'D (mcg)',
                      prop: 'vitaminDD',
                      type: 'number',
                    },
                    {
                      name: 'Calcium (mg)',
                      prop: 'calciumD',
                      type: 'number',
                    },
                    {
                      name: 'Iron (mg)',
                      prop: 'ironD',
                      type: 'number',
                    },
                    {
                      name: 'Potassium (mg)',
                      prop: 'potassiumD',
                      type: 'number',
                    },
                    {
                      name: 'Food Name',
                      prop: 'foodNameBB',
                      type: 'text',
                    },
                    {
                      name: 'Calories',
                      prop: 'caloriesBB',
                      type: 'number',
                    },
                    {
                      name: 'Saturated (g)',
                      prop: 'saturatedBB',
                      type: 'number',
                    },
                    {
                      name: 'Trans (g)',
                      prop: 'transBB',
                      type: 'number',
                    },
                    {
                      name: 'Polyunsaturated (g)',
                      prop: 'polyunsaturatedBB',
                      type: 'number',
                    },
                    {
                      name: 'monosaturated (g)',
                      prop: 'monosaturatedBB',
                      type: 'number',
                    },
                    {
                      name: 'Cholesterol (mg)',
                      prop: 'cholesterolBB',
                      type: 'number',
                    },
                    {
                      name: 'Sodium (mg)',
                      prop: 'sodiumBB',
                      type: 'number',
                    },
                    {
                      name: 'Carbs (g)',
                      prop: 'carbsBB',
                      type: 'number',
                    },
                    {
                      name: 'Fiber (g)',
                      prop: 'fiberBB',
                      type: 'number',
                    },
                    {
                      name: 'Sugars (g)',
                      prop: 'sugarsBB',
                      type: 'number',
                    },
                    {
                      name: 'Protein (g)',
                      prop: 'proteinBB',
                      type: 'number',
                    },
                    {
                      name: 'A (mcg)',
                      prop: 'vitaminABB',
                      type: 'number',
                    },
                    {
                      name: 'C (mcg)',
                      prop: 'vitaminCBB',
                      type: 'number',
                    },
                    {
                      name: 'D (mcg)',
                      prop: 'vitaminDBB',
                      type: 'number',
                    },
                    {
                      name: 'Calcium (mg)',
                      prop: 'calciumBB',
                      type: 'number',
                    },
                    {
                      name: 'Iron (mg)',
                      prop: 'ironBB',
                      type: 'number',
                    },
                    {
                      name: 'Potassium (mg)',
                      prop: 'potassiumBB',
                      type: 'number',
                    },
                    {
                      name: 'Food Name',
                      prop: 'foodNameBed',
                      type: 'text',
                    },
                    {
                      name: 'Calories',
                      prop: 'caloriesBed',
                      type: 'number',
                    },
                    {
                      name: 'Saturated (g)',
                      prop: 'saturatedBed',
                      type: 'number',
                    },
                    {
                      name: 'Trans (g)',
                      prop: 'transBed',
                      type: 'number',
                    },
                    {
                      name: 'Polyunsaturated (g)',
                      prop: 'polyunsaturatedBed',
                      type: 'number',
                    },
                    {
                      name: 'monosaturated (g)',
                      prop: 'monosaturatedBed',
                      type: 'number',
                    },
                    {
                      name: 'Cholesterol (mg)',
                      prop: 'cholesterolBed',
                      type: 'number',
                    },
                    {
                      name: 'Sodium (mg)',
                      prop: 'sodiumBed',
                      type: 'number',
                    },
                    {
                      name: 'Carbs (g)',
                      prop: 'carbsBed',
                      type: 'number',
                    },
                    {
                      name: 'Fiber (g)',
                      prop: 'fiberBed',
                      type: 'number',
                    },
                    {
                      name: 'Sugars (g)',
                      prop: 'sugarsBed',
                      type: 'number',
                    },
                    {
                      name: 'Protein (g)',
                      prop: 'proteinBed',
                      type: 'number',
                    },
                    {
                      name: 'A (mcg)',
                      prop: 'vitaminABed',
                      type: 'number',
                    },
                    {
                      name: 'C (mcg)',
                      prop: 'vitaminCBed',
                      type: 'number',
                    },
                    {
                      name: 'D (mcg)',
                      prop: 'vitaminDBed',
                      type: 'number',
                    },
                    {
                      name: 'Calcium (mg)',
                      prop: 'calciumBed',
                      type: 'number',
                    },
                    {
                      name: 'Iron (mg)',
                      prop: 'ironBed',
                      type: 'number',
                    },
                    {
                      name: 'Potassium (mg)',
                      prop: 'potassiumBed',
                      type: 'number',
                    },
                  ]}
                />
              </Route>
            ) : (
              ''
            )} */}
            <Route path="/bptracker">
              <TableOneBP
                add={this.addBP}
                A1C={A1C}
                editIdx={editIdx}
                startEditing={this.startEditingBloodPressure}
                stopEditing={this.stopEditingBloodPressure}
                handleChange={this.handleBloodPressureChange}
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
            </Route>
            <Route path="/bgchart">
              <BGChart chartData={bgChartData} />
            </Route>
            <Route path="/bpchart">
              <BPChart chartData={bpChartData} />
            </Route>
            <Route path="/a1cchart">
              <A1CChart
                chartDataColaberated={a1cChartDataColaberated}
                chartData={a1cChartData}
              />
            </Route>
            <Route exact path="/medications">
              <TableMeds
                add={this.addMedication}
                A1C={A1C}
                editIdx={editIdx}
                startEditing={this.startEditingMedication}
                stopEditing={this.stopEditingMedication}
                handleChange={this.handleMedicationChange}
                handleDelete={this.handleMedicationDelete}
                medications={medications}
                header={[
                  {
                    name: "Name",
                    prop: "name",
                    type: "text",
                  },
                  {
                    name: "Dose",
                    prop: "dose",
                    type: "number",
                  },
                  {
                    name: "Unit",
                    prop: "unit",
                    type: "text",
                  },
                  {
                    name: "Quantity",
                    prop: "quantity",
                    type: "number",
                  },
                  {
                    name: "Prescriber",
                    prop: "prescriber",
                    type: "text",
                  },
                  {
                    name: "AM",
                    prop: "am",
                    type: "number",
                  },
                  {
                    name: "Noon",
                    prop: "noon",
                    type: "number",
                  },
                  {
                    name: "Evening",
                    prop: "evening",
                    type: "number",
                  },
                  {
                    name: "Bed",
                    prop: "bed",
                    type: "number",
                  },
                ]}
              />
            </Route>
            <Route path="/preferences">
              <Preferences
                userId={user_id}
                timesPD={timesPD}
                chkNutrition={chkNutrition}
                chkMeds={chkMeds}
                chkMedsB={chkMedsB}
                chkMedsL={chkMedsL}
                chkMedsD={chkMedsD}
                chkMedsBed={chkMedsBed}
                chkInsulin={chkInsulin}
                typInsulin={typInsulin}
                chkBP={chkBP}
                chkSlidingScale={chkSlidingScale}
                slidingScale1={slidingScale1}
                slidingScale2a={slidingScale2a}
                slidingScale2b={slidingScale2b}
                slidingScale3a={slidingScale3a}
                slidingScale3b={slidingScale3b}
                slidingScale4a={slidingScale4a}
                slidingScale4b={slidingScale4b}
                slidingScale5={slidingScale5}
                carbRatio={carbRatio}
                handlePreference={this.handlePreference}
                handleEditPreferences={this.handleEditPreference}
                handleSavePreferences={this.handleSavePreference}
              />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
          </Switch>
        </StyledDiv>
      </Router>
    );
  }
}
