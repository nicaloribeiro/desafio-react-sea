import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  isActive: false,
  name: "",
  gender: "",
  cpf: "",
  rg: "",
  birthday: "",
  role: "",
  activities: [],
  document: {},
};

const handleChangeActivities = (activities, activityToInsert) => {
  let found = false;
  const newActivity = activities.map((activity) => {
    if (activity?.id === activityToInsert?.id) {
      found = true;
      return activityToInsert;
    }
    return activity;
  });
  if (!found) newActivity.push(activityToInsert);
  return newActivity;
};

const employeeFormSlice = createSlice({
  name: "employeeForm",
  initialState,
  reducers: {
    resetForm: () => initialState,
    setForm: (state, action) => action.payload.employee,
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    updateActivity: (state, action) => {
      state.activities = handleChangeActivities(
        state.activities,
        action.payload.value
      );
    },
    insertActivity: (state, action) => {
      state.activities.push(action.payload.value);
    },
    insertDocument: (state, action) => {
      state.document = action.payload.document;
    },
  },
});

export default employeeFormSlice.reducer;
export const {
  resetForm,
  setForm,
  updateField,
  updateActivity,
  insertActivity,
  insertDocument,
} = employeeFormSlice.actions;
