import { useSelector } from "react-redux";
import EmployeesList from "../EployeesList";
import EmployerForm from "../EmployerForm";

const Employer = () => {
  const currentStep = useSelector((state) => state.employeeReducer.currentStep);
  const isEditing = useSelector(
    (state) => state.employeeReducer.steps[currentStep]?.isEditing
  );

  switch (isEditing) {
    case true:
      return <EmployerForm />;
    default:
      return <EmployeesList />;
  }
};

export default Employer;
