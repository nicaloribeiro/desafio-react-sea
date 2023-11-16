import { formatCpf } from "/src/utils/formatString";
import DetailCard from "../DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "/src/store/reducers/employeeFormReducer.js";
import { enableEditing } from "/src/store/reducers/employeeReducer";

const EmployeeCard = ({ employee, ...props }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.employeeReducer.currentStep);

  return (
    <div
      {...props}
      className="flex justify-between my-2 w-full bg-[#EDF1F5] rounded-[10px] min-h-20"
    >
      <div className="flex flex-col w-full p-2">
        <p className="text-[#707070]">{employee.name}</p>
        <div className="flex flex-wrap items-center justify-start w-full p-2">
          <DetailCard info={formatCpf(employee.cpf)} className="m-1" />
          {employee.activities.map((activity, index) => (
            <DetailCard
              key={`${activity.activity}-${index}`}
              info={activity.activity}
              className="m-1"
            />
          ))}
          <DetailCard info={employee.role} className="m-1" />
        </div>
      </div>
      <div
        className="flex justify-center items-center font-bold bg-primary-blue rounded-r-[10px] h-auto w-12 hover:cursor-pointer"
        onClick={() => {
          dispatch(setForm({ employee }));
          dispatch(enableEditing({ step: currentStep }));
        }}
      >
        ...
      </div>
    </div>
  );
};

export default EmployeeCard;
