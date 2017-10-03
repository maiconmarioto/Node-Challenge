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

    this.state = {
      name: '',
      nameError: 0,
      lastName: '',
      lastNameError: 0,
      participation: '',
      participationError: 0
    };
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

    this.setState({ nameError: 0, lastNameError: 0, participationError: 0 });

    const { name, lastName, participation } = this.state;
    if (!name) {
      document.getElementById('name').focus();
      this.setState({ nameError: 1 });
    }
    if (!lastName) {
      document.getElementById('lastName').focus();
      this.setState({ lastNameError: 1 });
    }
    if (!participation || !isNaN(participation)) {
      document.getElementById('participation').focus();
      this.setState({ participationError: 1 });
    }

    if (name && lastName && participation) {
      this.props.createEmployee({ name, lastName, participation });
    }
  }

  render() {
    return (
      <Form>
        <Input
          placeholder="Nome"
          type="text"
          id="name"
          onChange={this.onNameChange}
          value={this.state.name}
          error={this.state.nameError}
        />
        <Input
          placeholder="Sobrenome"
          type="text"
          id="lastName"
          onChange={this.onLastNameChange}
          value={this.state.lastName}
          error={this.state.lastNameError}
        />
        <Input
          placeholder="Participação"
          type="number"
          id="participation"
          onChange={this.onParticipationChange}
          value={this.state.participation}
          error={this.state.participationError}
        />

        <Button
          text="ENVIAR"
          id="sendButton"
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
