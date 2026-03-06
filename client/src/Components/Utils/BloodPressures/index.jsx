import { postFetch } from '../../../Utils/Fetch';

export const addBP = async (user, date, hbp, lbp, hr, hbp2, lbp2, hr2) => {
  await postFetch(`/bgtracker/bloodpressures/add/${user.id}`, {
    user_id: user.id,
    date: date,
    hbp: hbp,
    lbp: lbp,
    hr: hr,
    hbp2: hbp2,
    lbp2: lbp2,
    hr2: hr2,
  }).catch((err) => console.log(err));
};

export const deleteBP = async (user, bloodpressures, editIdx) => {
  await postFetch(`/bgtracker/bloodpressures/delete/${user.id}`, {
    id: bloodpressures[editIdx + 1].id,
  }).catch((err) => console.log(err));
};

export const editBP = async (user, bloodpressures, editIdx) => {
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
};

export const removeBloodPressure = (i, bloodpressures) => {
  const arr = bloodpressures;
  arr.splice(i, 1);
  bloodpressures = arr;
};
