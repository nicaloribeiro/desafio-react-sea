export const UPDATE_STEP_IS_DONE = "UPDATE_STEP_IS_DONE";
export const NEXT_SETP = "NEXT_STEP";
export const PREVIOUS_STEP = "PREVIOUS_STEP";
export const EDITING_EMPLOYER_FALSE = "EDITING_EMPLOYER_FALSE";
export const EDITING_EMPLOYER_TRUE = "EDITING_EMPLOYER_TRUE";

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
  type: EDITING_EMPLOYER_TRUE,
  payload: { step },
});

export const disableEditing = (step) => ({
  type: EDITING_EMPLOYER_FALSE,
  payload: { step },
});
