import { expect } from '../TestHelper';
import { CREATE_EMPLOYEE, FETCH_EMPLOYEES } from '../../src/actions/type';
import {
  createEmployee,
  fetchEmployees
} from '../../src/actions/EmployeeActions';

describe('actions', () => {
  describe('createEmployee', () => {
    it('has the correct type', () => {
      const action = createEmployee({
        name: 'Name',
        lastName: 'Lastname',
        participation: 25
      });
      expect(action.type).to.equal(CREATE_EMPLOYEE);
      expect(typeof action.payload).to.equal('object');
    });
  });

  describe('fetchEmployee', () => {
    it('has the correct type', () => {
      const action = fetchEmployees();
      expect(action.type).to.equal(FETCH_EMPLOYEES);
    });
  });
});
