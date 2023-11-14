import StepContent from "./components/StepContent";
import FormSteps from "./components/Steps";
import { useSelector } from "react-redux";

const EditPage = () => {
  const currentStep = useSelector((state) => state.employerReducer.currentStep);
  const storeSteps = useSelector((state) => state.employerReducer.steps);
  return (
    <div className="relative pb-10 lg:min-h-full lg:pb-0">
      <FormSteps currentStep={currentStep} storeSteps={storeSteps} />
      <div className="flex flex-col justify-between flex-grow w-full lg:h-2/3 lg:flex-row lg:bottom-0 lg:absolute">
        <StepContent currentStep={currentStep} />
      </div>
    </div>
  );
};

export default EditPage;
