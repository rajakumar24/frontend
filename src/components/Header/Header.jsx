import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { NavLink, Link } from "react-router-dom";
import "./Header.css"

class Header extends React.Component {
  onlogoutClick = () => {
    this.props.clearCurrentUser();
    this.props.logoutUser();
  };

  render() {
    // const { name } = this.props.profileData.user;
    const authLinks = (
      <React.Fragment>
        <NavLink className="bg-warning nav-item nav-link" to="/agent/dashboard">
        <span style={{ color: "white" }}>Dashboard</span>
        </NavLink>
        <NavLink
          onClick={this.onlogoutClick}
          className="nav-item nav-link"
          to="/"
        >
           <span style={{ color: "white" }}>Logout</span>
        </NavLink>
      </React.Fragment>
    );
    const guestLinks = (
      <React.Fragment>
        <NavLink className="nav-item nav-link" to="/registration">
        <span style={{ color: "white" }}>Register</span>
        </NavLink>
        <NavLink className="nav-item nav-link" to="/login">
        <span style={{ color: "white" }}>Login</span>
        </NavLink>
      </React.Fragment>
    );

    return (
      <header style={{ width: "100%" }} className="bg-dark">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand" to="/">
            <h3 style={{ color: 'white' }}><span style={{ color: "yellow" }}>Ge</span><span className="container1">tRightProperty</span></h3>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <NavLink className="nav-item nav-link" to="/home">
                   <span style={{ color: "white" }}>Home</span>
                </NavLink>
                <NavLink className="nav-item nav-link" to="/properties-list">
                  <span style={{ color: "white" }}>Properties List</span>
                </NavLink>

                <NavLink className="nav-item nav-link" to="/about">
                <span style={{ color: "white" }}>About</span>
                </NavLink>
                <NavLink className="nav-item nav-link" to="/contact">
                <span style={{ color: "white" }}>Contact</span>
                </NavLink>
                {/* <NavLink className="nav-item nav-link" to="/Admin">
                Admin
                </NavLink> */}
                {this.props.auth.isAuthenticated ? authLinks : guestLinks}
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(Header);
