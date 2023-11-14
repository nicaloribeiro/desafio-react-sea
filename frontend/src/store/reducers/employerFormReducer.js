import { RESET_FORM, SET_FORM } from "../actions/employerFormActions";

const initialState = {
  isActive: true,
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
        return action.payload.employer
    default:
      return state;
  }
};

export default employerFormReducer;
