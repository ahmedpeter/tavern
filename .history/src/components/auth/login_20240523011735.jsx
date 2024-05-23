import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div class="ms-content-wrapper ms-auth">
      <div class="ms-auth-container">
        <div class="ms-auth-col">
          <div class="ms-auth-bg"></div>
        </div>
        <div class="ms-auth-col">
          <div class="ms-auth-form">
            <form class="needs-validation" novalidate="">
              <h3>Login to Account</h3>
              <p>Please enter your email and password to continue</p>
              <div class="mb-3">
                <label for="validationCustom08">Telephone Number</label>
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control"
                    id="validationCustom08"
                    placeholder="0801 234 5678"
                    required=""
                  />
                  <div class="invalid-feedback">
                    Please provide your phone number.
                  </div>
                </div>
              </div>
              <div class="mb-2">
                <label for="validationCustom09">Password</label>
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control"
                    id="validationCustom09"
                    placeholder="Password"
                    required=""
                  />
                  <div class="invalid-feedback">Please provide a password.</div>
                </div>
              </div>
              <div class="form-group">
                <label class="ms-checkbox-wrap">
                  <input class="form-check-input" type="checkbox" value="" />{" "}
                  <i class="ms-checkbox-check"></i>
                </label>{" "}
                <span> Remember Password </span>
                <label class="d-block mt-3">
                  <Link to="/reset-password" class="btn-link">
                    Forgot Password?
                  </Link>
                </label>
              </div>
              <button class="btn btn-primary mt-4 d-block w-100" type="submit">
                Sign In
              </button>
              <p class="mb-0 mt-3 text-center">
                Don't have an account?{" "}
                <a class="btn-link" href="default-register.html">
                  Create Account
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
