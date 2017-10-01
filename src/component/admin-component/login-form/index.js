import React from 'react';
import './_login-form.scss';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onComplete } = this.props;
    onComplete(this.state);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.handleSubmit}
      >
        <input
          className="login-input"
          name="username"
          type="text"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          className="login-input"
          name="password"
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button className="login-button" type="submit">Login</button>
      </form>
    );
  }
}

export default UserForm;
