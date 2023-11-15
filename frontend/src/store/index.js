import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employeeReducer';
import employerFormReducer from './reducers/employerFormReducer';

const rootReducer = configureStore({
    reducer: {
        employeeReducer,
        employerFormReducer
    }
})

export default rootReducer