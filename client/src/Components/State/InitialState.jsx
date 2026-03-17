import { A1CLabels } from "./A1CLabels";
import { Bloodpressure } from "./Bloodpressure";
import { bpLabels, Labels120 } from "./Labels";
import { Medication } from "./Medication";
import { Nutrition } from "./Nutrition";
import { Preference } from "./Preference";
import { Reading } from "./Reading";
import { User } from "./User";
import { Weight } from "./Weight";

export const InitialState = {
  A1CLabels: A1CLabels,
  labels: Labels120,
  a1cChartDataColaberated: {},
  a1cChartData: {},
  bgChartData: {},
  bpChartData: {},
  bloodpressures: [],
  bloodpressure: Bloodpressure,
  medications: [],
  medication: Medication,
  nutritions: [],
  nutrition: Nutrition,
  preferences: [],
  preference: Preference,
  readings: [],
  reading: Reading,
  users: [],
  user: User,
  weights: [],
  weight: Weight,
  Avg: 0,
  AvgBP: 0,
  A1C: 0.0,
  rate: 0.05,
  editIdx: -1,
  isLoginOpen: true,
  isRegisterOpen: false,
  errors: [],
  pwdState: null,
  showPaypal: false,
};
