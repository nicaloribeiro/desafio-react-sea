import EmployeesList from "../EployeesList";
import InfoCard from "../InfoCard";
import EmptyMessage from "/src/components/EmptyMessage";

const StepContent = ({ currentStep }) => {
  switch (currentStep) {
    case 0:
      return (
        <>
          <InfoCard />
          <EmployeesList currentStep={currentStep} />
        </>
      );
    default:
      return <EmptyMessage message="Em Breve" />;
  }
};

export default StepContent;
