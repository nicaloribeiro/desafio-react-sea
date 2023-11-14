import { UPDATE_STEP_IS_DONE } from "../actions/employerActions";
const mockEpi = {
  name: "Epi name",
  code: "Epi code",
};

const mockActivities = {
  activity: "Activity 01",
  epis: [mockEpi],
};
const mockEmployer = {
  isActive: true,
  name: "John Doe",
  gender: "M",
  cpf: "09009090909",
  rg: "8987778",
  birthday: "01/01/2001",
  role: "Role 01",
  usesEpi: false,
  activities: [mockActivities],
  documents: [],
};
const initialState = {
  currentStep: 0,
  steps: {
    0: {
      employers: [mockEmployer],
      isDone: false,
    },
  },
};

const employerReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STEP_IS_DONE:
      const { step, isDone } = action.payload;
      console.log(step, isDone)
      return {
        ...state,
        steps: {
          ...state.steps,
          [step]: {
            ...state.steps[step],
            isDone,
          },
        },
      };

    default:
      return state;
  }
};

export default employerReducer;
