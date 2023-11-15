import {
  RESET_FORM,
  SET_FORM,
  UPDATE_FIELD,
  UPDATE_ACTIVITY,
  INSERT_ACTIVITY,
  INSERT_DOCUMENT,
} from "../actions/employerFormActions";

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

const employerFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_FORM:
      return initialState;
    case SET_FORM:
      return action.payload.employee;
    case UPDATE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case UPDATE_ACTIVITY:
      return {
        ...state,
        activities: handleChangeActivities(
          state.activities,
          action.payload.value
        ),
      };
    case INSERT_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload.value],
      };
    case INSERT_DOCUMENT:
      return {
        ...state,
        document: action.payload.document,
      };
    default:
      return state;
  }
};

export default employerFormReducer;
