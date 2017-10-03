import 'regenerator-runtime/runtime';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_ERROR,
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_ERROR,
  DOING_REQUEST
} from '../actions/type';

const ROOT_URL = 'http://localhost:3000';

function* createEmployee(action) {
  try {
    const url = `${ROOT_URL}/employees`;
    const response = yield call(axios.post, url, {
      name,
      lastName,
      participation
    });
    yield put({
      type: CREATE_EMPLOYEE_SUCCESS,
      payload: response.data
    });
  } catch (e) {
    yield put({ type: CREATE_EMPLOYEE_ERROR, message: e.message });
  }
}

function* fetchEmployees(action) {
  try {
    const url = `${ROOT_URL}/employees`;
    const response = yield call(axios.get, url);
    yield put({
      type: FETCH_EMPLOYEES_SUCCESS,
      payload: response.data
    });
  } catch (e) {
    yield put({ type: FETCH_EMPLOYEES_ERROR, message: e.message });
  }
}

function* employeeSaga() {
  yield takeEvery(CREATE_EMPLOYEE, createEmployee);
  yield takeEvery(FETCH_EMPLOYEES, fetchEmployees);
}

export default employeeSaga;
