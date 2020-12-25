import React from "react";
// import ForgetPassword from '../forgetpassword';
import { NavLink } from "react-router-dom";

const LoginPageUI = (props) => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-4 col-md-6 col-sm-8 offset-md-4 offset-sm-2 border p-3 pb-4">
          <form onSubmit={props.onFormSubmit}>
            <div className="title text-center display-4">Login</div>
            {props.children}
            <div className="form-group">
              <button className="btn btn-primary btn-block">Login</button>
            </div>
          </form>
          <NavLink className="nav-item nav-link" to="/forget-password">
            ForgetPassword?
          </NavLink>
        </div>
      </div>
      {/* <NavLink className="nav-item nav-link" to="/forget-password">
          ForgetPassword
        </NavLink> */}
    </div>
  );
};

export default LoginPageUI;
