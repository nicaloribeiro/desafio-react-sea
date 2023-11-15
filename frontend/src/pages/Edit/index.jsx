import { nextStep, prevStep } from "/src/store/reducers/employeeReducer";
import StepContent from "./components/StepContent";
import FormSteps from "./components/Steps";
import Button from "/src/components/Button";
import { useDispatch, useSelector } from "react-redux";

const EditPage = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.employeeReducer.currentStep);
  const storeSteps = useSelector((state) => state.employeeReducer.steps);
  const isEditing = storeSteps[currentStep]?.isEditing;

  return (
    <div className="relative pb-10 lg:min-h-full lg:pb-0">
      <FormSteps currentStep={currentStep} storeSteps={storeSteps} />
      <div className="flex flex-col justify-between flex-grow w-full lg:h-2/3 lg:flex-row lg:bottom-0 lg:absolute">
        <StepContent currentStep={currentStep} />
      </div>
      {!isEditing && (
        <div className="w-full pb-4 lg:absolute lg:bottom-0 lg:flex lg:flex-row-reverse lg:justify-between">
          <Button
            text="Próximo passo"
            disabled={!storeSteps[currentStep]?.isDone}
            onClick={() => dispatch(nextStep())}
            className="my-2 lg:my-0"
          />
          {currentStep > 0 && (
            <Button
              text="Passo anterior"
              onClick={() => dispatch(prevStep())}
              className="my-2 lg:my-0 hover:cursor"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default EditPage;
