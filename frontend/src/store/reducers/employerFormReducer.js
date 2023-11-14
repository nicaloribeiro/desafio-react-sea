import {
  RESET_FORM,
  SET_FORM,
  UPDATE_FIELD,
  UPDATE_ACTIVITY,
  INSERT_ACTIVITY,
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
  usesEpi: false,
  activities: [],
  documents: [],
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
      return action.payload.employer;
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
    default:
      return state;
  }
};

export default employerFormReducer;
