const mongoose = require('mongoose');
const Employee = require('../models/employee');

const getAllEmployees = (req, res) => {
  const query = Employee.find({});
  query.exec(function(error, employees) {
    if (error) {
      return res.send(error);
    }
    return res.json(employees);
  });
};

const saveEmployee = (req, res) => {
  const newEmployee = new Employee(req.body);
  newEmployee.save(function(error, employee) {
    if (error) return res.status(400).send(error);
    return res.json({
      status: 1,
      message: 'Employee added successfully',
      employee
    });
  });
};

module.exports = {
  getAllEmployees,
  saveEmployee
};
