import { postFetch } from "../../../Utils/Fetch";

export const deleteReading = async (user, readings, editIdx) => {
  await postFetch(`/bgtracker/readings/delete/${user.id}`, {
    id: readings[editIdx + 1].id,
  }).catch((err) => console.log(err));
};

export const editReading = async (user, readings, editIdx) => {
  await postFetch(`/bgtracker/readings/edit/${user.id}`, {
    id: readings[editIdx].id,
    user_id: user.id,
    date: readings[editIdx].date,
    sugarB: readings[editIdx].sugarB,
    carbsB: readings[editIdx].carbsB,
    insulinB: readings[editIdx].insulinB,
    insulinSB: readings[editIdx].insulinSB,
    insulinFB: readings[editIdx].insulinFB,
    chkMedsB: readings[editIdx].chkMedsB,
    sugarL: readings[editIdx].sugarL,
    carbsL: readings[editIdx].carbsL,
    insulinL: readings[editIdx].insulinL,
    chkMedsL: readings[editIdx].chkMedsL,
    sugarD: readings[editIdx].sugarD,
    carbsD: readings[editIdx].carbsD,
    insulinD: readings[editIdx].insulinD,
    chkMedsD: readings[editIdx].chkMedsD,
    sugarBB: readings[editIdx].sugarBB,
    carbsBB: readings[editIdx].carbsBB,
    insulinBB: readings[editIdx].insulinBB,
    sugarBed: readings[editIdx].sugarBed,
    carbsBed: readings[editIdx].carbsBed,
    insulinBed: readings[editIdx].insulinBed,
    insulinSBed: readings[editIdx].insulinSBed,
    insulinFBed: readings[editIdx].insulinFBed,
    chkMedsBed: readings[editIdx].chkMedsBed,
  }).catch((err) => console.log(err));
};

export const removeReading = (i, readings) => {
  const arr = readings;
  arr.splice(i, 1);
  readings = arr;
};
