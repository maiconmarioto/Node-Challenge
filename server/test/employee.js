const mongoose = require('mongoose');
const Employee = require('../app/models/employee');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Employees', () => {
  beforeEach(done => {
    Employee.remove({}, error => {
      done();
    });
  });

  describe('/GET employees', () => {
    it('Should return all employees', done => {
      chai
        .request(server)
        .get('/employees')
        .end((error, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  describe('/POST employee', () => {
    it("shouldn't return the POST of th created Employee, once the field lastName was not defined", done => {
      const employee = { name: 'Maicon', participation: 20 };
      chai
        .request(server)
        .post('/employees')
        .send(employee)
        .end((error, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.have.property('lastName');
          res.body.errors.lastName.should.have.property('kind').eql('required');
          done();
        });
    });

    it('Should create a employee', done => {
      const employee = {
        name: 'Maicon',
        lastName: 'Marioto',
        participation: 20
      };
      chai
        .request(server)
        .post('/employees')
        .send(employee)
        .end((error, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have
            .property('message')
            .eql('Employee added successfully');
          res.body.employee.should.have.property('name');
          res.body.employee.should.have.property('lastName');
          res.body.employee.should.have.property('participation');
          res.body.employee.should.have.property('createdAt');
          done();
        });
    });
  });
});
