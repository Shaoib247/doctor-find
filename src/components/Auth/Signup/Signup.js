import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <section className="my-5 container">
        <div className="w-75 m-auto login-section">
          <div className="w-75 m-auto shadow-lg p-5 mb-5 bg-body rounded py-5">
            <h2 className="text-center mb-3">Signup</h2>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="d-grid gap-2 my-3">
                <button type="submit" class="btn btn-primary">
                  Signup
                </button>
              </div>
            </form>
            <Link to='/login'>
            Already have an account?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
