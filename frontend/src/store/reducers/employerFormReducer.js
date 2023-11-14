import {
  RESET_FORM,
  SET_FORM,
  UPDATE_FIELD,
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
    default:
      return state;
  }
};

export default employerFormReducer;
