import { expect } from '../TestHelper';
import {
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_ERROR,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_ERROR
} from '../../src/actions/type';
import employeeReducer from '../../src/reducers/EmployeeReducer';

describe('Employees Reducer', () => {
  const obj = { all: [], employee: null, status: 0, message: '' };
  const action = { type: undefined, payload: obj };
  it('handles actions with unknown type', () => {
    expect(employeeReducer([], action)).to.eql([]);
  });

  it('handles action of type CREATE_EMPLOYEE_SUCCESS', () => {
    const emp = { name: 'Name', lastName: 'Lastname', participation: 35 };

    const state = { all: [], employee: null, status: 0, message: '' };
    const response = { all: [emp], employee: emp, status: 0, message: '' };

    const action = {
      type: CREATE_EMPLOYEE_SUCCESS,
      payload: { employee: emp }
    };
    expect(employeeReducer(state, action)).to.eql(response);
  });
  it('handles action of type CREATE_EMPLOYEE_ERROR', () => {
    const action = {
      type: CREATE_EMPLOYEE_ERROR,
      message: 'some message'
    };
    expect(employeeReducer([], action)).to.eql({
      status: 0,
      message: action.message
    });
  });

  it('handles action of type FETCH_EMPLOYEES_SUCCESS', () => {
    const state = { all: [] };

    const action = {
      type: FETCH_EMPLOYEES_SUCCESS,
      payload: [1, 2, 3]
    };
    expect(employeeReducer(state, action)).to.eql({
      status: 0,
      message: '',
      all: action.payload
    });
  });
  it('handles action of type FETCH_EMPLOYEES_ERROR', () => {
    const action = {
      type: FETCH_EMPLOYEES_ERROR,
      message: 'some message'
    };
    expect(employeeReducer([], action)).to.eql({
      status: 0,
      message: action.message
    });
  });
});
