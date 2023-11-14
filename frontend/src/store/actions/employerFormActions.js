export const RESET_FORM = "RESET_FORM";
export const SET_FORM = "SET_FORM";
export const UPDATE_FIELD = "UPDATE_FIELD";
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
export const INSERT_ACTIVITY = "INSERT_ACTIVITY";
export const INSERT_DOCUMENT = "INSERT_DOCUMENT";

export const resetForm = () => ({
  type: RESET_FORM,
});

export const setForm = (employer) => ({
  type: SET_FORM,
  payload: { employer },
});

export const updateField = (field, value) => ({
  type: UPDATE_FIELD,
  payload: { field, value },
});

export const updateActivity = (value) => ({
  type: UPDATE_ACTIVITY,
  payload: { value },
});

export const insertActivity = (value) => ({
  type: INSERT_ACTIVITY,
  payload: { value },
});

export const insertDocument = (document) => ({
  type: INSERT_DOCUMENT,
  payload: { document },
});
