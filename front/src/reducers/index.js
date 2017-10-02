import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import EmployeeReducer from './EmployeeReducer';
// import authReducer from './AuthReducer';

const rootReducer = combineReducers({
  employees: EmployeeReducer
});

export default rootReducer;
