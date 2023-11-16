import { useSelector } from "react-redux";
import EmployeesList from "../EployeesList";
import EmployeeForm from "../EmployeeForm";

const Employee = () => {
  const currentStep = useSelector((state) => state.employeeReducer.currentStep);
  const isEditing = useSelector(
    (state) => state.employeeReducer.steps[currentStep]?.isEditing
  );

  switch (isEditing) {
    case true:
      return <EmployeeForm />;
    default:
      return <EmployeesList />;
  }
};

export default Employee;
