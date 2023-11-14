export const UPDATE_STEP_IS_DONE = "UPDATE_STEP_IS_DONE";

export const updateStepIsDone = (step, isDone) => ({
  type: UPDATE_STEP_IS_DONE,
  payload: { step, isDone },
});
