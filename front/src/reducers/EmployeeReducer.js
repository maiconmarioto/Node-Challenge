import {
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_ERROR,
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_ERROR,
  DOING_REQUEST
} from '../actions/type';

const INITIAL_STATE = { all: [], employee: null, status: 0, message: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        all: action.payload,
        status: 0,
        message: ''
      };
    case FETCH_EMPLOYEES_ERROR:
      return {
        ...state,
        status: 0,
        message: action.message
      };
    case CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        all: state.all.concat(action.payload.employee),
        employee: action.payload.employee,
        status: 0,
        message: ''
      };
    case CREATE_EMPLOYEE_ERROR:
      return {
        ...state,
        status: 0,
        message: action.message
      };
    case DOING_REQUEST:
      return {
        ...state,
        status: 1,
        message: ''
      };
    default:
      return state;
  }
};
