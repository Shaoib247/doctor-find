import React from "react";
import { FaGoogle} from 'react-icons/fa';
import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="my-lg-5 my-md-5 my-sm-2 container login-section">
        <div className="w-lg-50 w-xl-75 w-md-75 w-sm-100 m-auto">
          <div className="w-lg-50 w-xl-75 w-md-75 w-sm-100 w-xl-75 m-auto shadow-lg p-5 mb-5 bg-body rounded py-5">
            <h2 className="text-center mb-3">Login</h2>
            <form>
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
                <button class="btn btn-info login-google" type="button">
                    <FaGoogle />
                  Login with Google
                </button>
                <button type="submit" class="btn btn-primary">
                Login
              </button>
              </div>
            
            </form>
            <p>একটি অ্যাকাউন্ট নেই ? <Link to='/signup'>Signup</Link> </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
