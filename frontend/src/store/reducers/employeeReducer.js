import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import employeesService from "/src/services/employees";

const initialState = {
  loading: false,
  currentStep: 0,
  steps: {
    0: {
      employees: [],
      isDone: false,
      isEditing: false,
    },
  },
};

export const createEmployee = createAsyncThunk(
  "employee/createEmployee",
  async (employee) => {
    const employeeCreated = await employeesService.create(employee);
    return { employee: employeeCreated };
  }
);

export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (employee) => {
    const employeeUpdate = await employeesService.update(employee);
    return { employee: employeeUpdate };
  }
);

export const getAllEmployees = createAsyncThunk(
  "employee/getAllEmployees",
  async () => {
    const employees = await employeesService.getAll();
    return { employees };
  }
);

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(createEmployee.rejected, (state) => {
        state.loading = true;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        const { employee } = action.payload;
        const { currentStep } = state;
        state.steps[currentStep].employees.push(employee);
        state.steps[currentStep].isEditing = false;
        state.loading = false;
      })
      .addCase(updateEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateEmployee.rejected, (state) => {
        state.loading = true;
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const { employee } = action.payload;
        const { currentStep } = state;
        const updatedEmployees = updateEmployeeHanlder(
          employee,
          state.steps[currentStep].employees
        );
        state.steps[currentStep].employees = updatedEmployees;
        state.steps[currentStep].isEditing = false;
        state.loading = false;
      })
      .addCase(getAllEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllEmployees.rejected, (state) => {
        state.loading = true;
      })
      .addCase(getAllEmployees.fulfilled, (state, action) => {
        const { employees } = action.payload;
        state.steps[0].employees = employees;
      });
  },
});

export default employeeSlice.reducer;
export const {
  updateStepIsDone,
  nextStep,
  prevStep,
  enableEditing,
  disableEditing,
} = employeeSlice.actions;
