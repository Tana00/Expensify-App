import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

const Login = () => (
  <div>
    <p>Please login to start using the app</p>
    <button onClick={startLogin}>Login Now</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(Login);
