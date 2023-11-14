import {
  UPDATE_STEP_IS_DONE,
  NEXT_SETP,
  PREVIOUS_STEP,
  EDITING_EMPLOYER_TRUE,
  EDITING_EMPLOYER_FALSE,
} from "../actions/employerActions";

const mockEpi = {
  name: "epi_01",
  code: "Epi code",
};

const mockActivities = {
  id: 1,
  usesEpi: false,
  activity: "activity_01",
  epis: mockEpi,
};

const mockEmployer = {
  id: 1,
  isActive: true,
  name: "John Doe",
  gender: "M",
  cpf: "09009090909",
  rg: "8987778",
  birthday: "01/01/2001",
  role: "Role 01",
  activities: [mockActivities],
  documents: [],
};
const initialState = {
  currentStep: 0,
  steps: {
    0: {
      employers: [mockEmployer],
      isDone: false,
      isEditing: true,
    },
  },
};

const employerReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STEP_IS_DONE:
      return {
        ...state,
        steps: {
          ...state.steps,
          [action.payload.step]: {
            ...state.steps[action.payload.step],
            isDone: action.payload.isDone,
          },
        },
      };
    case NEXT_SETP:
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case PREVIOUS_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    case EDITING_EMPLOYER_TRUE:
      return {
        ...state,
        steps: {
          ...state.steps,
          [action.payload.step]: {
            ...state.steps[action.payload.step],
            isEditing: true,
          },
        },
      };
    case EDITING_EMPLOYER_FALSE:
      return {
        ...state,
        steps: {
          ...state.steps,
          [action.payload.step]: {
            ...state.steps[action.payload.step],
            isEditing: false,
          },
        },
      };
    default:
      return state;
  }
};

export default employerReducer;
