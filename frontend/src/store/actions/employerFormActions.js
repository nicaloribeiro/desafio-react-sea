export const RESET_FORM = "RESET_FORM";
export const SET_FORM = "SET_FORM";

export const resetForm = () => ({
  type: RESET_FORM,
});

export const setForm = (employer) => ({
  type: SET_FORM,
  payload: { employer },
});
