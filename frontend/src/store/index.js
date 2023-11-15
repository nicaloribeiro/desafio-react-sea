import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employeeReducer';
import employerFormReducer from './reducers/employeeFormReducer';

const store = configureStore({
    reducer: {
        employeeReducer,
        employerFormReducer
    }
})

export default store