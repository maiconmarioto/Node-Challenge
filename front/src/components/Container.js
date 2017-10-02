import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import Chart from './Chart';
import Title from './common/Title';
import { fetchEmployees } from '../actions/EmployeeActions';

class Container extends Component {
  componentWillMount() {
    this.props.fetchEmployees();
  }

  render() {
    return (
      <div className="container">
        <div className="pad-3-1">
          <div className="text-center">
            <h3>DADOS</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipliscing elit.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 p-top-40">
              <Table
                tableData={this.props.employees}
                tableRows={['Nome', 'Sobrenome', 'Participação']}
              />
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5 p-top-40 text-center">
              <Chart chartData={this.props.employees} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { employees: state.employees.all };
}

export default connect(mapStateToProps, { fetchEmployees })(Container);
