import EmployeesList from "./components/EployeesList";
import InfoCard from "./components/InfoCard";
import FormSteps from "./components/Steps";
import { useSelector } from "react-redux";

const EditPage = () => {
  const currentStep = useSelector((state) => state.employerReducer.currentStep);
  const storeSteps = useSelector((state) => state.employerReducer.steps);
  return (
    <div className="lg:min-h-full relative pb-10 lg:pb-0">
      <FormSteps currentStep={currentStep} storeSteps={storeSteps} />
      <div className="flex flex-col flex-grow w-full lg:h-2/3 justify-between lg:flex-row lg:bottom-0 lg:absolute">
        <InfoCard />
        <EmployeesList currentStep={currentStep}/>
      </div>
    </div>
  );
};

export default EditPage;
