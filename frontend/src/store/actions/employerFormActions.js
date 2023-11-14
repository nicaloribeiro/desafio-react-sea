export const RESET_FORM = "RESET_FORM";
export const SET_FORM = "SET_FORM";
export const UPDATE_FIELD = "UPDATE_FIELD";


export const resetForm = () => ({
  type: RESET_FORM,
});

export const setForm = (employer) => ({
  type: SET_FORM,
  payload: { employer },
});

export const updateField = (field, value) => ({
    type: UPDATE_FIELD,
    payload: { field, value }
})
