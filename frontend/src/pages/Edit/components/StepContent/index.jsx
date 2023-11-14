import Employer from "../Employer";
import EmployeesList from "../EployeesList";
import InfoCard from "../InfoCard";
import EmptyMessage from "/src/components/EmptyMessage";

const StepContent = ({ currentStep }) => {
  switch (currentStep) {
    case 0:
      return (
        <>
          <InfoCard />
          <Employer />
        </>
      );
    default:
      return <EmptyMessage message="Em Breve" />;
  }
};

export default StepContent;
