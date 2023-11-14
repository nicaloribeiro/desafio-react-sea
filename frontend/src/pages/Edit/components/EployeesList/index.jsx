import { Switch } from "antd";
import EmployerCard from "../EmployerCard";
import Button from "/src/components/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateStepIsDone } from "/src/store/actions/employerActions";

const EmployeesList = ({ currentStep }) => {
  const dispatch = useDispatch();
  const employeesList = useSelector(
    (state) => state.employerReducer.steps[currentStep].employers
  );

  const stepDone = useSelector(
    (state) => state.employerReducer.steps[currentStep].isDone
  );

  console.log(employeesList[0]);

  const countIsActive = (list) => list?.filter((el) => el.isActive).length;

  return (
    <div className="lg:w-2/3 pt-10 lg:pt-0 lg:pl-10 lg:pb-[60px]">
      <div className="flex flex-col bg-white rounded-[20px] h-full">
        <div className="flex items-center pl-[19px] bg-primary-blue rounded-t-[20px] h-[55px]">
          <p className="text-2xl">Funcionário(s)</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 overflow-y-auto">
          <Button text="+ Adicionar Funcionário" large transparent full />
          <div className="w-full mt-2 lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex lg:w-2/3 lg:justify-between">
              <Button
                text="Ver apenas ativos"
                transparent
                spacing={2}
                full
                className="lg:mr-2"
              />
              <Button text="Limpar filtros" transparent spacing={2} full />
            </div>
            <div className="flex justify-center lg:w-1/3 lg:justify-end">
              <p className="text-[#4F4F4F] text-sm">
                Ativos {countIsActive(employeesList)}/{employeesList?.length}
              </p>
            </div>
          </div>
          {employeesList?.length > 0
            ? employeesList?.map((employer, index) => (
                <EmployerCard
                  key={`${employer.name}-${index}`}
                  employer={employer}
                />
              ))
            : null}
        </div>
        <div className="flex items-center justify-end w-full p-4 ">
          <p className="text-[#3A3A3A]">A etapa está concluída?</p>
          <Switch
            checked={stepDone}
            checkedChildren="Sim"
            unCheckedChildren="Não"
            className="mx-2 bg-gray-300"
            onChange={(checked) =>
              dispatch(updateStepIsDone(currentStep, checked))
            }
          />
        </div>
      </div>
      <div className="flex justify-end w-full mt-3">
        <Button text="Próximo passo" />
      </div>
    </div>
  );
};

export default EmployeesList;
