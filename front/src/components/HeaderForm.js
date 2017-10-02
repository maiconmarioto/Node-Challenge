import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import Form from './common/Form';
import Input from './common/Input';
import Button from './common/Button';
import { createEmployee } from '../actions/EmployeeActions';

class HeaderForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', lastName: '', participation: '' };
  }

  @autobind
  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  @autobind
  onLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  @autobind
  onParticipationChange(e) {
    this.setState({ participation: e.target.value });
  }

  @autobind
  onSendClick(e) {
    e.preventDefault();
    const { name, lastName, participation } = this.state;
    this.props.createEmployee({ name, lastName, participation });
  }

  render() {
    debugger;
    return (
      <Form>
        <Input
          placeholder="Nome"
          type="text"
          name="name"
          onChange={this.onNameChange}
          value={this.state.name}
        />
        <Input
          placeholder="Sobrenome"
          type="text"
          onChange={this.onLastNameChange}
          value={this.state.lastName}
        />
        <Input
          placeholder="Participação"
          type="text"
          onChange={this.onParticipationChange}
          value={this.state.participation}
        />

        <Button
          text="ENVIAR"
          onClick={this.onSendClick}
          disabled={this.props.status}
        />
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return { status: state.employees.status };
}

export default connect(mapStateToProps, { createEmployee })(HeaderForm);
