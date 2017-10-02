import axios from 'axios';

export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const DOING_REQUEST = 'DOING_REQUEST';

const ROOT_URL = 'http://localhost:3000';

export function fetchEmployees() {
  const url = `${ROOT_URL}/employees`;

  return dispatch => {
    axios.get(url).then(response =>
      dispatch({
        type: FETCH_EMPLOYEES,
        payload: response.data
      })
    );
  };
}

export function doingRequest() {
  return {
    type: DOING_REQUEST
  };
}

export const createEmployee = ({ name, lastName, participation }) => {
  const url = `${ROOT_URL}/employees`;

  return dispatch => {
    axios.post(url, { name, lastName, participation }).then(response =>
      dispatch({
        type: CREATE_EMPLOYEE,
        payload: response.data
      })
    );
  };
};
