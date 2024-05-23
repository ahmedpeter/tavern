import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div class="ms-content-wrapper ms-auth">
      <div class="ms-auth-container">
        <div class="ms-auth-col">
          <div class="ms-auth-bg"></div>
        </div>
        <div class="ms-auth-col">
          <div class="ms-auth-form">
            <form class="needs-validation" novalidate="">
              <h3>Reset my Password</h3>
              <p>Provide your telephone and we will send you an OTP</p>
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
                    Please provide your registered telephone.
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="d-block mt-3">
                  <Link to="/login" class="btn-link">
                    Suddenly remember it?
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
};

export default ResetPassword;
