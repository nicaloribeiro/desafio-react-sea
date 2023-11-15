export const dateFormat = "DD/MM/YYYY";

export const defaultEpi = {
  name: "",
  code: "",
};

export const defaultActivity = {
  usesEpis: false,
  activity: "",
  epis: {},
};

export const activityOptions = [
  { value: "", label: "Atividade", disabled: true },
  { value: "activity_01", label: "Activity 01" },
  { value: "activity_02", label: "Activity 02" },
  { value: "activity_03", label: "Activity 03" },
  { value: "activity_04", label: "Activity 04" },
];

export const roleOptions = [
  { value: "", label: "Selecione", disabled: true },
  { value: "role_01", label: "Role 01" },
  { value: "role_02", label: "Role 02" },
  { value: "role_03", label: "Role 03" },
  { value: "role_04", label: "Role 04" },
];

export const epiOptions = [
  { value: "", label: "Selecione", disabled: true },
  { value: "epi_01", label: "Epi 01" },
  { value: "epi_02", label: "Epi 02" },
  { value: "epi_03", label: "Epi 03" },
  { value: "epi_04", label: "Epi 04" },
];
