import { configureStore } from '@reduxjs/toolkit';
import employerReducer from './reducers/employerReducer';

const rootReducer = configureStore({
    reducer: {
        employerReducer
    }
})

export default rootReducer