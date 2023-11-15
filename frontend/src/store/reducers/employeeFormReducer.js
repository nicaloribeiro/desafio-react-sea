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

// const employerFormReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case RESET_FORM:
//       return initialState;
//     case SET_FORM:
//       return action.payload.employee;
//     case UPDATE_FIELD:
//       return {
//         ...state,
//         [action.payload.field]: action.payload.value,
//       };
//     case UPDATE_ACTIVITY:
//       return {
//         ...state,
//         activities: handleChangeActivities(
//           state.activities,
//           action.payload.value
//         ),
//       };
//     case INSERT_ACTIVITY:
//       return {
//         ...state,
//         activities: [...state.activities, action.payload.value],
//       };
//     case INSERT_DOCUMENT:
//       return {
//         ...state,
//         document: action.payload.document,
//       };
//     default:
//       return state;
//   }
// };

export default employeeFormSlice.reducer;
export const {
  resetForm,
  setForm,
  updateField,
  updateActivity,
  insertActivity,
  insertDocument,
} = employeeFormSlice.actions;
