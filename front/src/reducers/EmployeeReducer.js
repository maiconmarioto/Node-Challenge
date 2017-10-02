import {
  FETCH_EMPLOYEES,
  CREATE_EMPLOYEE,
  DOING_REQUEST
} from '../actions/EmployeeActions';

const INITIAL_STATE = { all: [], employee: null, status: 0 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        all: action.payload,
        status: 0
      };
    case CREATE_EMPLOYEE:
      return {
        ...state,
        all: state.all.concat(action.payload.employee),
        employee: action.payload.employee,
        status: 0
      };
    case DOING_REQUEST:
      return {
        ...state,
        status: 1
      };
    default:
      return state;
  }
};
