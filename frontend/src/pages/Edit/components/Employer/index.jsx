import { useSelector } from "react-redux";
import EmployeesList from "../EployeesList";
import EmployerForm from "../EmployerForm";

const Employer = () => {
  const currentStep = useSelector((state) => state.employerReducer.currentStep);
  const isEditing = useSelector(
    (state) => state.employerReducer.steps[currentStep].isEditing
  );

  switch (isEditing) {
    case true:
      return <EmployerForm />;
    default:
      return <EmployeesList />;
  }
};

export default Employer;
