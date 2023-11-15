import { createSlice } from "@reduxjs/toolkit";

const mockEpi = {
  name: "epi_01",
  code: "Epi code",
};

const mockActivities = {
  id: 1,
  usesEpi: false,
  activity: "activity_01",
  epis: mockEpi,
};

const mockEmployee = {
  id: 1,
  isActive: true,
  name: "John Doe",
  gender: "M",
  cpf: "09009090909",
  rg: "8987778",
  birthday: "01/01/2001",
  role: "Role 01",
  activities: [mockActivities],
  document: {},
};
const initialState = {
  currentStep: 0,
  steps: {
    0: {
      employees: [mockEmployee],
      isDone: false,
      isEditing: false,
    },
  },
};

const updateEmployeeHanlder = (employee, employeeList) => {
  const { id } = employee;
  return employeeList.map((currEmployee) => {
    if (currEmployee.id === id) return employee;
    return currEmployee;
  });
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    updateStepIsDone: (state, action) => {
      const { step, isDone } = action.payload;
      state.steps[step].isDone = isDone;
    },
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
    enableEditing: (state, action) => {
      const { step } = action.payload;
      state.steps[step].isEditing = true;
    },
    disableEditing: (state, action) => {
      const { step } = action.payload;
      state.steps[step].isEditing = false;
    },
    insertEmployee: (state, action) => {
      const { step, employee } = action.payload;
      state.steps[step].employees.push(employee);
    },
    updateEmployee: (state, action) => {
      const { step, employee } = action.payload;
      const updatedEmployees = updateEmployeeHanlder(
        employee,
        state.steps[step].employees
      );
      state.steps[step].employees = updatedEmployees;
    },
  },
});

export default employeeSlice.reducer;
export const {
  updateStepIsDone,
  nextStep,
  prevStep,
  enableEditing,
  disableEditing,
  insertEmployee,
  updateEmployee,
} = employeeSlice.actions;
