import React, { Component } from 'react';
import timezones from '../data/timezones';
import map from 'lodash/map';

class SignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          email: '',
          password: '',
          passwordConfirmation: '',
          timezone: ''

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
      e.preventDefault();
      console.log(this.state);
    }

    render() {
        const options = map(timezones, (val, key) =>
          <option key={key} value={val}>{key}</option>
        );
        return(
            <form onSubmit={this.onSubmit}>
              <h1>Join Us!</h1>
              <div className="form-group">
                <label className="control-label">UserName</label>
                <input
                  value={this.state.username}
                  onChange={this.onChange}
                  type="text"
                  name="username"
                  className="form-control"
                  />
              </div>
              <div className="form-group">
                <label className="control-label">Eamil</label>
                <input
                  value={this.state.email}
                  onChange={this.onChange}
                  type="text"
                  name="email"
                  className="form-control"
                  />
              </div>
              <div className="form-group">
                <label className="control-label">Password</label>
                <input
                  value={this.state.password}
                  onChange={this.onChange}
                  type="text"
                  name="password"
                  className="form-control"
                  />
              </div>
              <div className="form-group">
                <label className="control-label">PasswordConfirmation</label>
                <input
                  value={this.state.passwordConfirmation}
                  onChange={this.onChange}
                  type="text"
                  name="passwordConfirmation"
                  className="form-control"
                  />
              </div>

              <div className="form-group">
                <label className="control-label">PasswordConfirmation</label>
                <select
                  value={this.state.timezone}
                  onChange={this.onChange}
                  name="timezone"
                  className="form-control"
                  >
                  <option value="" disabled>Choose Your Timezone</option>
                  {options}
                </select>
              </div>
              <div className="form group">
                <button className="btn btn-primary btn-lg">
                  SignUp
                </button>
              </div>
            </form>
        );
    }
}

export default SignupForm;
