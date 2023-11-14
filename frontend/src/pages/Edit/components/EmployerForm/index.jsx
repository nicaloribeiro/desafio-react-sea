import { useDispatch, useSelector } from "react-redux";
import leftArrow from "/src/assets/leftArrow.svg";
import { disableEditing } from "/src/store/actions/employerActions";
import { resetForm, updateField } from "/src/store/actions/employerFormActions";
import Section from "/src/components/Section";
import { DatePicker, Input, Radio, Select, Switch } from "antd";
import dayjs from "dayjs";
import { useId } from "react";

const dateFormat = "DD/MM/YYYY";

const EmployerForm = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.employerReducer.currentStep);
  const currentEmployer = useSelector((state) => state.employerFormReducer);
  console.log(currentEmployer);
  const userId = currentEmployer.id || useId();

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
        <div className="p-4">
          <Section>
            <p className="text-black">O trabalhador está ativo ou inativo?</p>
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
                  value={currentEmployer.cpf}
                  onBlur={(e) => dispatch(updateField("cpf", e.target.value))}
                />
              </>
              <>
                <p className="text-[#3A3A3A] font-semibold mt-2">RG</p>
                <Input
                  className="border-primary-blue"
                  value={currentEmployer.rg}
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
                  onChange={(e) => dispatch(updateField("gender", e.target.value))}
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
                  options={[
                    { value: "", label: "Selecione", disabled: true },
                    { value: "role_01", label: "Role 01" },
                    { value: "role_02", label: "Role 02" },
                    { value: "role_03", label: "Role 03" },
                    { value: "role_04", label: "Role 04" },
                  ]}
                  onChange={(value) => {
                    dispatch(updateField("role", value));
                  }}
                />
              </>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default EmployerForm;
