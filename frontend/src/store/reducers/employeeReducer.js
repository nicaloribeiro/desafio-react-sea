import {
  UPDATE_STEP_IS_DONE,
  NEXT_SETP,
  PREVIOUS_STEP,
  EDITING_EMPLOYEE_TRUE,
  EDITING_EMPLOYEE_FALSE,
  INSERT_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "../actions/employeeActions";

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

const mockEmployee = {
  id: 1,
  isActive: true,
  name: "John Doe",
  gender: "M",
  cpf: "09009090909",
  rg: "8987778",
  birthday: "01/01/2001",
  role: "Role 01",
  activities: [mockActivities],
  document: {},
};
const initialState = {
  currentStep: 0,
  steps: {
    0: {
      employees: [mockEmployee],
      isDone: false,
      isEditing: false,
    },
  },
};

const updateEmployee = (employee, employeeList) => {
  const { id } = employee;
  return employeeList.map((currEmployee) => {
    if (currEmployee.id === id) return employee;
    return currEmployee;
  });
};

const employeeReducer = (state = initialState, action) => {
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
    case EDITING_EMPLOYEE_TRUE:
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
    case EDITING_EMPLOYEE_FALSE:
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
    case INSERT_EMPLOYEE:
      return {
        ...state,
        steps: {
          ...state.steps,
          [action.payload.step]: {
            ...state.steps[action.payload.step],
            employees: [
              ...state.steps[action.payload.step].employees,
              action.payload.employee,
            ],
          },
        },
      };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        steps: {
          ...state.steps,
          [action.payload.step]: {
            ...state.steps[action.payload.step],
            employees: updateEmployee(
              action.payload.employee,
              state.steps[action.payload.step].employees
            ),
          },
        },
      };

    default:
      return state;
  }
};

export default employeeReducer;
