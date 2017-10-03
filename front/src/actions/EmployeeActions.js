import axios from 'axios';
import {
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_ERROR,
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_ERROR,
  DOING_REQUEST
} from './type';

export const ROOT_URL = 'http://localhost:3000';

export function fetchEmployees() {
  return {
    type: FETCH_EMPLOYEES
  };
}

export function doingRequest() {
  return {
    type: DOING_REQUEST
  };
}

export const createEmployee = ({ name, lastName, participation }) => {
  return {
    type: CREATE_EMPLOYEE,
    payload: { name, lastName, participation }
  };
};
