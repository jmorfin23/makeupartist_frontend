import React from "react";
import { updatePassword } from "../../actions/adminActions.js";
import { withRouter } from "react-router-dom";
import { APP_ERROR } from "../../actions/types.js";
import { useSelector, useDispatch } from "react-redux";

const Passwords = props => {
  const isUpdated = useSelector(state => state.user.password_updated);
  const dispatch = useDispatch();

  const submitNewPassword = e => {
    e.preventDefault();

    // check passwords match
    if (e.target.password.value !== e.target.password2.value)
      return dispatch({ type: APP_ERROR, payload: "Passwords do not match." });

    // action to change password
    dispatch(updatePassword(e.target.password.value, props.match.params.token));
  };

  if (isUpdated) {
    props.history.push("/admin/login");
  }

  return (
    <div className="reset">
      <h3>New Password</h3>
      <form onSubmit={e => submitNewPassword(e)}>
        <div className="form-group">
          <label>New Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            required="required"
            placeholder="new password"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            name="password2"
            type="password"
            className="form-control"
            required="required"
            placeholder="new password"
          />
        </div>
        <div className="center">
          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Passwords);
