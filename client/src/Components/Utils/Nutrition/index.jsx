import { postFetch } from '../../../Utils/Fetch';

export const deleteNutrition = async (user, nutritions, editIdx) => {
  await postFetch(`/bgtracker/nutritions/delete/${user.id}`, {
    id: nutritions[editIdx + 1].id,
  }).catch((err) => console.log(err));
};

export const removeNutrition = (i, nutritions) => {
  const arr = nutritions;
  arr.splice(i, 1);
  nutritions = arr;
};
