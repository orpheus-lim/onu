import React from 'react';

class Header extends React.Component {
    render() {
      const logoutButton = (
          <li>
              <a>
                  <i className="material-icons">lock_open</i>
              </a>
          </li>
      );

              return (
                  <nav>
                      <div className="nav-wrapper black">
                          <a className="brand-logo center">온숨</a>
                          <div className="right">
                              <ul>
                                  { this.props.isLoggedIn ? logoutButton : null }
                              </ul>
                          </div>
                      </div>
                  </nav>
              );
          }
        }
Header.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    onLogout: React.PropTypes.func
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");}
};

export default Header;
