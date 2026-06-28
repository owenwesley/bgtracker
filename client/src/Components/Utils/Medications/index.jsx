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
  // 1. Create a clean reference to the current reading object
  const currentReading = readings[editIdx];

  // 2. Coerce values to strict booleans (handles both true/false and 1/0 cleanly)
  const hasB = !!currentReading.chkMedsB;
  const hasL = !!currentReading.chkMedsL;
  const hasD = !!currentReading.chkMedsD;
  const hasBed = !!currentReading.chkMedsBed;

  // 3. Evaluate grouped conditions cleanly
  if (hasB && !hasL && !hasD && !hasBed) {
    // AM / Breakfast Slot
    currentReading.chkMedsB = 1;
    for (let i = 0; i < medications.length; i++) {
      medications[i].quantity -= medications[i].am;
      await editMeds(user, medications, i);
    }
    totalAm = medications[medications.length - 1]?.quantity; // Tracks final quantity if needed

  } else if ((hasB && hasL && !hasD && !hasBed) || (!hasB && hasL && !hasD && !hasBed)) {
    // Noon / Lunch Slot
    currentReading.chkMedsL = 1;
    for (let i = 0; i < medications.length; i++) {
      medications[i].quantity -= medications[i].noon;
      await editMeds(user, medications, i);
    }

  } else if ((hasB && hasL && hasD && !hasBed) || (!hasB && !hasL && hasD && !hasBed)) {
    // Evening / Dinner Slot
    currentReading.chkMedsD = 1;
    for (let i = 0; i < medications.length; i++) {
      medications[i].quantity -= medications[i].evening;
      await editMeds(user, medications, i);
    }

  } else if (hasBed) {
    // Bedtime Slot (Triggers if Bed is checked, regardless of others based on your rules)
    currentReading.chkMedsBed = 1;
    for (let i = 0; i < medications.length; i++) {
      medications[i].quantity -= medications[i].bed;
      await editMeds(user, medications, i);
    }
  }

  // 4. Save and return data
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
