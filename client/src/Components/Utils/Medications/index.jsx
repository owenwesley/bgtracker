import { postFetch } from "../../../Utils/Fetch";
import { editReading } from "../Readings";

export const addMeds = async (user, name, prescriber) => {
  await postFetch(`/bgtracker/medications/add/${user.id}`, {
    user_id: user.id,
    name: name,
    dose: 0,
    unit: 'G',
    quantity: 0,
    prescriber: prescriber,
    am: 0,
    noon: 0,
    evening: 0,
    bed: 0,
  }).catch((err) => console.log(err));
};

export const deductMeds = async (
  readings,
  editIdx,
  medications,
  totalAm,
  user,
  totalNoon,
  totalEvening,
  totalBed
) => {
  if (
    (readings[editIdx].chkMedsB &&
      !readings[editIdx].chkMedsL &&
      !readings[editIdx].chkMedsD &&
      !readings[editIdx].chkMedsBed) ||
    (readings[editIdx].chkMedsB === 1 &&
      readings[editIdx].chkMedsL === 0 &&
      readings[editIdx].chkMedsD === 0 &&
      readings[editIdx].chkMedsBed === 0)
  ) {
    readings[editIdx].chkMedsB = 1;
    for (let i = 0; i < medications.length; i++) {
      totalAm = medications[i].quantity - medications[i].am;
      medications[i].quantity = totalAm;
      await editMeds(user, medications, i);
    }
  } else if (
    (readings[editIdx].chkMedsB &&
      readings[editIdx].chkMedsL &&
      !readings[editIdx].chkMedsD &&
      !readings[editIdx].chkMedsBed) ||
    (readings[editIdx].chkMedsB === 1 &&
      readings[editIdx].chkMedsL === 1 &&
      readings[editIdx].chkMedsD === 0 &&
      readings[editIdx].chkMedsBed === 0)
  ) {
    readings[editIdx].chkMedsL = 1;
    for (let i = 0; i < medications.length; i++) {
      totalNoon = medications[i].quantity - medications[i].noon;
      medications[i].quantity = totalNoon;
      await editMeds(user, medications, i);
    }
  } else if (
    (!readings[editIdx].chkMedsB &&
      readings[editIdx].chkMedsL &&
      !readings[editIdx].chkMedsD &&
      !readings[editIdx].chkMedsBed) ||
    (readings[editIdx].chkMedsB === 0 &&
      readings[editIdx].chkMedsL === 1 &&
      readings[editIdx].chkMedsD === 0 &&
      readings[editIdx].chkMedsBed === 0)
  ) {
    readings[editIdx].chkMedsL = 1;
    for (let i = 0; i < medications.length; i++) {
      totalNoon = medications[i].quantity - medications[i].noon;
      medications[i].quantity = totalNoon;
      await editMeds(user, medications, i);
    }
  } else if (
    (readings[editIdx].chkMedsB &&
      readings[editIdx].chkMedsL &&
      readings[editIdx].chkMedsD &&
      !readings[editIdx].chkMedsBed) ||
    (readings[editIdx].chkMedsB === 1 &&
      readings[editIdx].chkMedsL === 1 &&
      readings[editIdx].chkMedsD === 1 &&
      readings[editIdx].chkMedsBed === 0)
  ) {
    readings[editIdx].chkMedsD = 1;
    for (let i = 0; i < medications.length; i++) {
      totalEvening = medications[i].quantity - medications[i].evening;
      medications[i].quantity = totalEvening;
      await editMeds(user, medications, i);
    }
  } else if (
    (!readings[editIdx].chkMedsB &&
      !readings[editIdx].chkMedsL &&
      readings[editIdx].chkMedsD &&
      !readings[editIdx].chkMedsBed) ||
    (readings[editIdx].chkMedsB === 0 &&
      readings[editIdx].chkMedsL === 0 &&
      readings[editIdx].chkMedsD === 1 &&
      readings[editIdx].chkMedsBed === 0)
  ) {
    readings[editIdx].chkMedsD = 1;
    for (let i = 0; i < medications.length; i++) {
      totalEvening = medications[i].quantity - medications[i].evening;
      medications[i].quantity = totalEvening;
      await editMeds(user, medications, i);
    }
  } else if (
    (!readings[editIdx].chkMedsB &&
      readings[editIdx].chkMedsL &&
      !readings[editIdx].chkMedsD &&
      readings[editIdx].chkMedsBed) ||
    (readings[editIdx].chkMedsB === 0 &&
      readings[editIdx].chkMedsL === 1 &&
      readings[editIdx].chkMedsD === 0 &&
      readings[editIdx].chkMedsBed === 1)
  ) {
    readings[editIdx].chkMedsBed = 1;
    for (let i = 0; i < medications.length; i++) {
      totalBed = medications[i].quantity - medications[i].bed;
      medications[i].quantity = totalBed;
      await editMeds(user, medications, i);
    }
  } else if (
    (readings[editIdx].chkMedsB &&
      !readings[editIdx].chkMedsL &&
      !readings[editIdx].chkMedsD &&
      readings[editIdx].chkMedsBed) ||
    (readings[editIdx].chkMedsB === 1 &&
      readings[editIdx].chkMedsL === 0 &&
      readings[editIdx].chkMedsD === 0 &&
      readings[editIdx].chkMedsBed === 1)
  ) {
    readings[editIdx].chkMedsBed = 1;
    for (let i = 0; i < medications.length; i++) {
      totalBed = medications[i].quantity - medications[i].bed;
      medications[i].quantity = totalBed;
      await editMeds(user, medications, i);
    }
  } else if (
    (!readings[editIdx].chkMedsB &&
      !readings[editIdx].chkMedsL &&
      !readings[editIdx].chkMedsD &&
      readings[editIdx].chkMedsBed) ||
    (readings[editIdx].chkMedsB === 0 &&
      readings[editIdx].chkMedsL === 0 &&
      readings[editIdx].chkMedsD === 0 &&
      readings[editIdx].chkMedsBed === 1)
  ) {
    readings[editIdx].chkMedsBed = 1;
    for (let i = 0; i < medications.length; i++) {
      totalBed = medications[i].quantity - medications[i].bed;
      medications[i].quantity = totalBed;
      await editMeds(user, medications, i);
    }
  } else if (
    (readings[editIdx].chkMedsB &&
      readings[editIdx].chkMedsL &&
      !readings[editIdx].chkMedsD &&
      readings[editIdx].chkMedsBed) ||
    (readings[editIdx].chkMedsB === 1 &&
      readings[editIdx].chkMedsL === 1 &&
      readings[editIdx].chkMedsD === 0 &&
      readings[editIdx].chkMedsBed === 1)
  ) {
    readings[editIdx].chkMedsBed = 1;
    for (let i = 0; i < medications.length; i++) {
      totalBed = medications[i].quantity - medications[i].bed;
      medications[i].quantity = totalBed;
      await editMeds(user, medications, i);
    }
  } else if (
    (readings[editIdx].chkMedsB &&
      readings[editIdx].chkMedsL &&
      readings[editIdx].chkMedsD &&
      readings[editIdx].chkMedsBed) ||
    (readings[editIdx].chkMedsB === 1 &&
      readings[editIdx].chkMedsL === 1 &&
      readings[editIdx].chkMedsD === 1 &&
      readings[editIdx].chkMedsBed === 1)
  ) {
    readings[editIdx].chkMedsBed = 1;
    for (let i = 0; i < medications.length; i++) {
      totalBed = medications[i].quantity - medications[i].bed;
      medications[i].quantity = totalBed;
      await editMeds(user, medications, i);
    }
  }
  await editReading(user, readings, editIdx);
  return { totalAm, totalNoon, totalEvening, totalBed };
};

export const editMeds = async (user, medications, i) => {
  await postFetch(`/bgtracker/medications/edit/${user.id}`, {
    id: medications[i].id,
    user_id: user.id,
    name: medications[i].name,
    dose: medications[i].dose,
    unit: medications[i].unit,
    quantity: medications[i].quantity,
    prescriber: medications[i].prescriber,
    am: medications[i].am,
    noon: medications[i].noon,
    evening: medications[i].evening,
    bed: medications[i].bed,
  }).catch((err) => console.log(err));
};
