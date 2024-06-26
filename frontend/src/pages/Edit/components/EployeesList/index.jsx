import { Switch } from "antd";
import EmployeeCard from "../EmployeeCard";
import Button from "/src/components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  updateStepIsDone,
  enableEditing,
} from "/src/store/reducers/employeeReducer";
import { useState } from "react";

const EmployeesList = () => {
  const dispatch = useDispatch();
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const currentStep = useSelector((state) => state.employeeReducer.currentStep);
  const employeesList = useSelector(
    (state) => state.employeeReducer.steps[currentStep].employees
  );
  const stepDone = useSelector(
    (state) => state.employeeReducer.steps[currentStep].isDone
  );

  const countIsActive = (list) => list?.filter((el) => el.isActive).length;

  return (
    <div className="lg:w-2/3 pt-10 lg:pt-0 lg:pl-10 lg:pb-[60px]">
      <div className="flex flex-col bg-white rounded-[20px] h-full">
        <div className="flex items-center pl-[19px] bg-primary-blue rounded-t-[20px] h-[55px]">
          <p className="text-2xl">Funcionário(s)</p>
        </div>
        <div className="flex flex-col items-center justify-start p-4 h-4/5 l">
          <Button
            text="+ Adicionar Funcionário"
            large
            transparent
            full
            onClick={() => {
              dispatch(enableEditing({ step: currentStep }));
            }}
          />
          <div className="w-full mt-2 lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex lg:w-2/3 lg:justify-between">
              <Button
                text="Ver apenas ativos"
                transparent
                spacing={2}
                full
                className="lg:mr-2"
                isActive={isActiveFilter}
                onClick={() => {
                  setIsActiveFilter(true);
                }}
              />
              <Button
                text="Limpar filtros"
                transparent
                spacing={2}
                full
                onClick={() => {
                  setIsActiveFilter(false);
                }}
              />
            </div>
            <div className="flex justify-center lg:w-1/3 lg:justify-end">
              <p className="text-[#4F4F4F] text-sm">
                Ativos {countIsActive(employeesList)}/{employeesList?.length}
              </p>
            </div>
          </div>
          <div className="w-full mt-2 overflow-y-auto ">
            {employeesList?.length > 0
              ? employeesList
                  ?.filter((employee) =>
                    isActiveFilter ? employee.isActive === true : employee
                  )
                  .map((employee, index) => (
                    <EmployeeCard
                      key={`${employee.name}-${index}`}
                      employee={employee}
                    />
                  ))
              : null}
          </div>
        </div>
        <div className="flex items-center justify-end w-full p-4 ">
          <p className="text-[#3A3A3A]">A etapa está concluída?</p>
          <Switch
            checked={stepDone}
            checkedChildren="Sim"
            unCheckedChildren="Não"
            className="mx-2 bg-gray-300"
            onChange={(checked) =>
              dispatch(updateStepIsDone({ step: currentStep, isDone: checked }))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeesList;
