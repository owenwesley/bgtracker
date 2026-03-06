import { postFetch } from "../../../Utils/Fetch";

export const deleteWeight = async (user, weights, editIdx) => {
    await postFetch(`/bgtracker/weights/delete/${user.id}`, {
        id: weights[editIdx + 1].id,
    }).catch((err) => console.log(err));
};

export const editWeight = async (user, weights, editIdx) => {
    await postFetch(`/bgtracker/weights/edit/${user.id}`, {
        id: weights[editIdx].id,
        user_id: user.id,
        date: weights[editIdx].date,
        kg: weights[editIdx].kg,
        lbs: weights[editIdx].lbs,
        bmi: weights[editIdx].bmi,
    }).catch((err) => console.log(err));
};

export const removeWeight = (i, weights) => {
    const arr = [...weights];
    arr.splice(i, 1);
    return arr;
};
