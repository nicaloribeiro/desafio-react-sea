import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import leftArrow from "/src/assets/leftArrow.svg";
import {
  disableEditing,
  updateEmployee,
  createEmployee,
} from "/src/store/reducers/employeeReducer";
import {
  resetForm,
  updateField,
  updateActivity,
  insertActivity,
  insertDocument,
} from "/src/store/reducers/employeeFormReducer.js";

import Section from "/src/components/Section";
import { Form, Checkbox, DatePicker, Input, Radio, Select, Switch } from "antd";
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
import { toast } from "react-toastify";

const EmployerForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const fileInputRef = useRef(null);

  const [tempEpi, setTempEpi] = useState(defaultEpi);

  const currentStep = useSelector((state) => state.employeeReducer.currentStep);
  const currentEmployer = useSelector((state) => state.employerFormReducer);
  const employeesIds = useSelector(
    (state) => state.employeeReducer.steps[currentStep].employees
  ).map((employee) => employee.id);
  const userId = currentEmployer.id || uuidv4();

  const employeeExists = (employee, employeesList) => {
    return employeesList.some((id) => id === employee.id);
  };

  const submitEmployee = async (employee) => {
    try {
      const hasEmployer = employeeExists(employee, employeesIds);
      if (hasEmployer) {
        dispatch(updateEmployee(employee));
        toast.success("Funcionário atualizado!");
      } else {
        dispatch(createEmployee(employee));
        toast.success("Funcionário cadastrado!");
      }
      dispatch(resetForm());
    } catch (error) {
      toast.error("Hou um problema ao cadastrar o funcionário :(");
    }
  };

  return (
    <div className="lg:w-2/3 pt-10 lg:pt-0 lg:pl-10 lg:pb-[60px] overflow-y-auto ">
      <div className="flex flex-col bg-white rounded-[20px] h-ful ">
        <div className="flex items-center pl-[19px] bg-primary-blue rounded-t-[20px] h-[55px]">
          <img
            src={leftArrow}
            className="w-6 h-6 hover:cursor-pointer"
            onClick={() => {
              dispatch(disableEditing({ step: currentStep }));
              dispatch(resetForm());
            }}
          />
          <p className="ml-2 text-2xl">Adicionar Funcionário</p>
        </div>
        <div className="p-4">
          <Form
            form={form}
            initialValues={form}
            onFinish={() => submitEmployee({ ...currentEmployer, id: userId })}
          >
            <Section>
              <p className="text-[#3A3A3A]">
                O trabalhador está ativo ou inativo?
              </p>
              <Form.Item name="isActive" className="p-0 m-0">
                <Switch
                  checked={currentEmployer.isActive}
                  checkedChildren="Ativo"
                  unCheckedChildren="Inativo"
                  className="mx-2 bg-gray-300"
                  onChange={(checked) =>
                    dispatch(updateField({ field: "isActive", value: checked }))
                  }
                />
              </Form.Item>
            </Section>
            <Section className="flex-col my-2 lg:flex lg:flex-row">
              <div className="w-full p-2 lg:w-1/2">
                <>
                  <p className="text-[#3A3A3A] font-semibold">Nome</p>
                  <Form.Item
                    name="nome"
                    rules={[
                      { required: true, message: "O nome é obrigatório!" },
                    ]}
                    className="p-0 m-0"
                  >
                    <Input
                      className="border-primary-blue"
                      defaultValue={currentEmployer.name}
                      onBlur={(e) =>
                        dispatch(
                          updateField({ field: "name", value: e.target.value })
                        )
                      }
                    />
                  </Form.Item>
                </>
                <>
                  <p className="text-[#3A3A3A] font-semibold mt-2">CPF</p>
                  <Form.Item
                    name="cpf"
                    rules={[
                      { required: true, message: "O CPF é obrigatório!" },
                    ]}
                    className="p-0 m-0"
                  >
                    <Input
                      className="border-primary-blue"
                      defaultValue={currentEmployer.cpf}
                      onBlur={(e) =>
                        dispatch(
                          updateField({ field: "cpf", value: e.target.value })
                        )
                      }
                    />
                  </Form.Item>
                </>
                <>
                  <p className="text-[#3A3A3A] font-semibold mt-2">RG</p>
                  <Form.Item
                    name="rg"
                    rules={[{ required: true, message: "O RG é obrigatório!" }]}
                    className="p-0 m-0"
                  >
                    <Input
                      className="border-primary-blue"
                      defaultValue={currentEmployer.rg}
                      onBlur={(e) =>
                        dispatch(
                          updateField({ field: "rg", value: e.target.value })
                        )
                      }
                    />
                  </Form.Item>
                </>
              </div>
              <div className="w-full p-2 lg:w-1/2">
                <>
                  <p className="text-[#3A3A3A] font-semibold mt-2">Sexo</p>
                  <Form.Item
                    name="sexo"
                    rules={[
                      { required: true, message: "O sexo é obrigatório!" },
                    ]}
                    className="p-0 m-0"
                  >
                    <Radio.Group
                      name="radiogroup"
                      defaultValue={currentEmployer.gender}
                      onChange={(e) =>
                        dispatch(
                          updateField({
                            field: "gender",
                            value: e.target.value,
                          })
                        )
                      }
                    >
                      <Radio value={"M"}>Masculino</Radio>
                      <Radio value={"F"}>Feminino</Radio>
                    </Radio.Group>
                  </Form.Item>
                </>
                <>
                  <p className="text-[#3A3A3A] font-semibold mt-2">
                    Data de nascimento
                  </p>
                  <Form.Item
                    name="dataNasc"
                    rules={[
                      {
                        required: true,
                        message: "A data de nascimento é obrigatória!",
                      },
                    ]}
                    className="p-0 m-0"
                  >
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
                          updateField({
                            field: "birthday",
                            value: dayjs(value).format(dateFormat),
                          })
                        );
                      }}
                    />
                  </Form.Item>
                </>
                <>
                  <p className="text-[#3A3A3A] font-semibold mt-2">Cargo</p>
                  <Form.Item
                    name="cargo"
                    rules={[
                      { required: true, message: "O cargo é obrigatório!" },
                    ]}
                    className="p-0 m-0"
                  >
                    <Select
                      defaultValue={currentEmployer.role}
                      bordered={false}
                      className="w-full border-primary-blue border-[1px] rounded-md"
                      options={roleOptions}
                      onChange={(value) => {
                        dispatch(updateField({ field: "role", value }));
                      }}
                    />
                  </Form.Item>
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
                              value: {
                                ...activity,
                                epis: {},
                                usesEpi: e.target.checked,
                              },
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
                          dispatch(
                            updateActivity({
                              value: { ...activity, activity: value },
                            })
                          );
                        }}
                      />
                      {!activity.usesEpi && (
                        <div className="lg:flex lg:items-end lg:justify-between">
                          <div>
                            <p className="text-[#3A3A3A]">Selecione o EPI</p>
                            <Form.Item
                              rules={[
                                {
                                  required: true,
                                  message: "O EPI é obrigatório!",
                                },
                              ]}
                              className="p-0 m-0"
                            >
                              <Select
                                defaultValue={activity.epis?.name}
                                bordered={false}
                                className="w-full border-primary-blue border-[1px] rounded-md"
                                options={epiOptions}
                                onChange={(value) => {
                                  setTempEpi((prev) => ({
                                    ...prev,
                                    name: value,
                                  }));
                                }}
                              />
                            </Form.Item>
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
                                  value: { ...activity, epis: tempEpi },
                                })
                              );
                              setTempEpi(defaultEpi);
                              toast.info("EPI adicionada");
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
                  dispatch(
                    insertActivity({
                      value: { ...defaultActivity, id: uuidv4() },
                    })
                  );
                }}
              />
            </Section>
            <Section className="my-2">
              <div>
                <p className="text-[#3A3A3A]">
                  Adicione Atestado de Saúde Ocupacional (opcional):
                </p>
              </div>
              <Section>
                <div>
                  <p className="text-[#3A3A3A] text-xs text-ellipsis">
                    {currentEmployer.document?.name || "Sem documentos"}
                  </p>
                </div>
              </Section>

              <Button
                htmlFor="fileInput"
                onClick={() => {
                  fileInputRef.current.click();
                }}
                transparent
                full
                className="my-2"
                text="Selecionar arquivo"
              />
            </Section>
            <Button
              //   onClick={async () => {
              //     await submitEmployee({ ...currentEmployer, id: userId });
              //   }}
              type="submit"
              transparent
              full
              className="my-2"
              text="Salvar"
            />
          </Form>
          <input
            className="hidden"
            ref={fileInputRef}
            type="file"
            id="fileInput"
            onChange={() => {
              const input = document.getElementById("fileInput");
              const file = input.files[0];
              dispatch(insertDocument({ document: { name: file.name } }));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployerForm;
