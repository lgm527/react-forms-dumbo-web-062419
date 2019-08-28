// Code ControlledInput Component Here
import React from 'react';

export default class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

//consider this form:

<input type="text" name="firstName" value={this.state.firstName} />
<input type="text" name="lastName" value={this.state.lastName} />

//one way to handle the events:
handleFirstNameChange = event => {
  this.setState({
    firstName: event.target.value
  })
}

handleLastNameChange = event => {
  this.setState({
    lastName: event.target.value
  })
}

//better way to handle them:
handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}
