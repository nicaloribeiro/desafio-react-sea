export const UPDATE_STEP_IS_DONE = "UPDATE_STEP_IS_DONE";
export const NEXT_SETP = "NEXT_STEP";
export const PREVIOUS_STEP = "PREVIOUS_STEP";
export const EDITING_EMPLOYEE_FALSE = "EDITING_EMPLOYEE_FALSE";
export const EDITING_EMPLOYEE_TRUE = "EDITING_EMPLOYEE_TRUE";
export const INSERT_EMPLOYEE = "INSERT_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";

export const updateStepIsDone = (step, isDone) => ({
  type: UPDATE_STEP_IS_DONE,
  payload: { step, isDone },
});

export const nextStep = () => ({
  type: NEXT_SETP,
});

export const prevStep = () => ({
  type: PREVIOUS_STEP,
});

export const enableEditing = (step) => ({
  type: EDITING_EMPLOYEE_TRUE,
  payload: { step },
});

export const disableEditing = (step) => ({
  type: EDITING_EMPLOYEE_FALSE,
  payload: { step },
});

export const insertEmployee = (employee, step) => ({
  type: INSERT_EMPLOYEE,
  payload: { employee, step },
});

export const updateEmployee = (employee, step) => ({
  type: UPDATE_EMPLOYEE,
  payload: { employee, step },
});
