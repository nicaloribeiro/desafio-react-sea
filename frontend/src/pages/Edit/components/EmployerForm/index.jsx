import { useDispatch, useSelector } from "react-redux";
import leftArrow from "/src/assets/leftArrow.svg";
import { disableEditing } from "/src/store/actions/employerActions";
import { resetForm } from "/src/store/actions/employerFormActions";
const EmployerForm = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.employerReducer.currentStep);
  const currentEmployer = useSelector((state) => state.employerFormReducer);
  console.log(currentEmployer);

  return (
    <div className="lg:w-2/3 pt-10 lg:pt-0 lg:pl-10 lg:pb-[60px]">
      <div className="flex flex-col bg-white rounded-[20px] h-full">
        <div className="flex items-center pl-[19px] bg-primary-blue rounded-t-[20px] h-[55px]">
          <img
            src={leftArrow}
            className="w-6 h-6 hover:cursor-pointer"
            onClick={() => {
              dispatch(disableEditing(currentStep));
              dispatch(resetForm());
            }}
          />
          <p className="ml-2 text-2xl">Adicionar Funcionário</p>
        </div>
      </div>
    </div>
  );
};

export default EmployerForm;
