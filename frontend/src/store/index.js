import { configureStore } from '@reduxjs/toolkit';
import employerReducer from './reducers/employerReducer';
import employerFormReducer from './reducers/employerFormReducer';

const rootReducer = configureStore({
    reducer: {
        employerReducer,
        employerFormReducer
    }
})

export default rootReducer