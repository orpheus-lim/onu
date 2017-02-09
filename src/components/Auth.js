import React from 'react';
import { Link } from 'react-router';

import './Auth.css';

class Auth extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
      const inputBoxes = (
            <div>
                <div className="input-field col s12 username">
                    <label>아이디</label>
                    <input
                    name="username"
                    type="text"
                    className="validate"
                    onChange={this.handleChange}
                    value={this.state.username}/>
                </div>
                <div className="input-field col s12">
                    <label>비밀번호</label>
                    <input
                    name="password"
                    type="password"
                    className="validate"
                    onChange={this.handleChange}
                    value={this.state.password}/>
                </div>
            </div>
        );

       const loginView = (
           <div>
               <div className="card-content">
                   <div className="row">
                       {inputBoxes}
                       <a className="waves-effect waves-light btn">온숨시작</a>
                   </div>
               </div>
               <div className="footer">
                   <div className="card-content">
                       <div className="right" >
                       처음 방문하셨나요? <Link to="/register">회원가입</Link>
                       </div>
                   </div>
               </div>

           </div>
       );

       const registerView = (
           <div className="card-content">
               <div className="row">
                   {inputBoxes}
                   <a className="waves-effect waves-light btn">CREATE</a>
               </div>
           </div>
       );

        return (
          <div className="container auth">
              <Link className="logo" to="/">ONSOOM</Link>
              <div className="card">
                  <div className="header blue white-text center">
                      <div className="card-content">{this.props.mode ? "로그인" : "회원가입"}</div>
                  </div>
                  {this.props.mode ? loginView : registerView }
              </div>
          </div>
        );
    }
}

Auth.propTypes = {
    mode: React.PropTypes.bool,
    onLogin: React.PropTypes.func,
    onRegister: React.PropTypes.func
};

Auth.defaultProps = {
    mode: true,
    onLogin: (id, pw) => { console.error("login function not defined"); },
    onRegister: (id, pw) => { console.error("register function not defined"); }
};

export default Auth;
