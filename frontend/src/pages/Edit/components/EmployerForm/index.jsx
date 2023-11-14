import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import leftArrow from "/src/assets/leftArrow.svg";
import { disableEditing } from "/src/store/actions/employerActions";
import {
  resetForm,
  updateField,
  insertActivity,
  updateActivity,
} from "/src/store/actions/employerFormActions";
import Section from "/src/components/Section";
import { Checkbox, DatePicker, Input, Radio, Select, Switch } from "antd";
import dayjs from "dayjs";
import Button from "/src/components/Button";
import {
  activityOptions,
  defaultActivity,
  dateFormat,
  roleOptions,
  defaultEpi,
  epiOptions,
} from "./helper";

const EmployerForm = () => {
  const [tempEpi, setTempEpi] = useState(defaultEpi);

  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.employerReducer.currentStep);
  const currentEmployer = useSelector((state) => state.employerFormReducer);
  console.log("currentEmployer, ", currentEmployer);
  const userId = currentEmployer.id || uuidv4();

  return (
    <div className="lg:w-2/3 pt-10 lg:pt-0 lg:pl-10 lg:pb-[60px] overflow-y-auto ">
      <div className="flex flex-col bg-white rounded-[20px] h-ful ">
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
        <div className="p-4">
          <Section>
            <p className="text-[#3A3A3A]">
              O trabalhador está ativo ou inativo?
            </p>
            <Switch
              checked={currentEmployer.isActive}
              checkedChildren="Ativo"
              unCheckedChildren="Inativo"
              className="mx-2 bg-gray-300"
              onChange={(checked) => dispatch(updateField("isActive", checked))}
            />
          </Section>
          <Section className="flex-col my-2 lg:flex lg:flex-row">
            <div className="w-full p-2 lg:w-1/2">
              <>
                <p className="text-[#3A3A3A] font-semibold">Nome</p>
                <Input
                  className="border-primary-blue"
                  defaultValue={currentEmployer.name}
                  onBlur={(e) => dispatch(updateField("name", e.target.value))}
                />
              </>
              <>
                <p className="text-[#3A3A3A] font-semibold mt-2">CPF</p>
                <Input
                  className="border-primary-blue"
                  defaultValue={currentEmployer.cpf}
                  onBlur={(e) => dispatch(updateField("cpf", e.target.value))}
                />
              </>
              <>
                <p className="text-[#3A3A3A] font-semibold mt-2">RG</p>
                <Input
                  className="border-primary-blue"
                  defaultValue={currentEmployer.rg}
                  onBlur={(e) => dispatch(updateField("rg", e.target.value))}
                />
              </>
            </div>
            <div className="w-full p-2 lg:w-1/2">
              <>
                <p className="text-[#3A3A3A] font-semibold mt-2">Sexo</p>
                <Radio.Group
                  name="radiogroup"
                  defaultValue={currentEmployer.gender}
                  onChange={(e) =>
                    dispatch(updateField("gender", e.target.value))
                  }
                >
                  <Radio value={"M"}>Masculino</Radio>
                  <Radio value={"F"}>Feminino</Radio>
                </Radio.Group>
              </>
              <>
                <p className="text-[#3A3A3A] font-semibold mt-2">
                  Data de nascimento
                </p>
                <DatePicker
                  className="w-full border-primary-blue"
                  defaultValue={
                    currentEmployer.birthday
                      ? dayjs(currentEmployer.birthday)
                      : dayjs()
                  }
                  format={dateFormat}
                  onChange={(value) => {
                    dispatch(
                      updateField("birthday", dayjs(value).format(dateFormat))
                    );
                  }}
                />
              </>
              <>
                <p className="text-[#3A3A3A] font-semibold mt-2">Cargo</p>
                <Select
                  defaultValue={currentEmployer.role}
                  bordered={false}
                  className="w-full border-primary-blue border-[1px] rounded-md"
                  options={roleOptions}
                  onChange={(value) => {
                    dispatch(updateField("role", value));
                  }}
                />
              </>
            </div>
          </Section>
          <Section>
            <div>
              <p className="text-[#3A3A3A]">
                Quais EPIs o trabalhador usa na atividade?
              </p>
            </div>
            <Section>
              <p className="text-[#3A3A3A]">Selecione a atividade</p>
              {currentEmployer.activities.length > 0 ? (
                currentEmployer.activities.map((activity, index) => (
                  <div
                    key={`${activity.id}-${index}`}
                    className="flex flex-col w-full"
                  >
                    <Checkbox
                      checked={activity?.usesEpi}
                      onChange={(e) => {
                        dispatch(
                          updateActivity({
                            ...activity,
                            epis: {},
                            usesEpi: e.target.checked,
                          })
                        );
                      }}
                    >
                      O trabalhador não usa EPI
                    </Checkbox>
                    <Select
                      defaultValue={activity.activity}
                      bordered={false}
                      className="w-full border-primary-blue border-[1px] rounded-md my-2"
                      options={activityOptions}
                      onChange={(value) => {
                        dispatch(updateField("role", value));
                      }}
                    />
                    {!activity.usesEpi && (
                      <div className="lg:flex lg:items-end lg:justify-between">
                        <div>
                          <p className="text-[#3A3A3A]">Selecione o EPI</p>
                          <Select
                            defaultValue={activity.epis?.name}
                            bordered={false}
                            className="w-full border-primary-blue border-[1px] rounded-md"
                            options={epiOptions}
                            onChange={(value) => {
                              setTempEpi((prev) => ({ ...prev, name: value }));
                            }}
                          />
                        </div>
                        <div>
                          <p className="text-[#3A3A3A]">
                            Informe o número do CA
                          </p>
                          <Input
                            className="border-primary-blue"
                            defaultValue={activity?.epis?.code || ""}
                            onBlur={(e) => {
                              setTempEpi((prev) => ({
                                ...prev,
                                code: e.target.value,
                              }));
                            }}
                          />
                        </div>
                        <Button
                          text="Adicionar EPI"
                          className="my-2 lg:my-0"
                          onClick={() => {
                            dispatch(
                              updateActivity({
                                ...activity,
                                epis: tempEpi,
                              })
                            );
                            setTempEpi(defaultEpi);
                          }}
                        />
                      </div>
                    )}
                    <div className="my-2 w-full h-[1px] bg-gray-300" />
                  </div>
                ))
              ) : (
                <p className="text-[#3A3A3A] text-xs">Nenhuma atividade</p>
              )}
            </Section>
            <Button
              text="Adicionar outra atividade"
              transparent
              full
              className="my-2"
              onClick={() => {
                dispatch(insertActivity({ ...defaultActivity, id: uuidv4() }));
              }}
            />
          </Section>
        </div>
      </div>
    </div>
  );
};

export default EmployerForm;