import React from "react";
import "./TopDoctor.css";
import { Link } from "react-router-dom";
import doctor from "./team1.jpg";
import Rating from 'react-rating';
const TopDoctor = () => {
  return (
    <>
      <div className="container mt-5 doctor">
        <div className="doctor-title my-4 text-center">
          <h2>শীর্ষ ডাক্তার</h2>
        </div>
        <div className="row row-cols-2 row-cols-md-4  row-cols-lg-4 g-4">
          <div className="col">
            <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
              <Link to="/usd/generate">
                <img
                  src={doctor}
                  className="card-img-top services-zoom"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <Link to="/usd/generate">
                  <h3>USD Generate</h3>
                </Link>
                <p>
                  Unlock the Power of Daily Rewards with Your First Deposit!
                  Start
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-lg overflow-hidden bg-body rounded border-0">
              <Link to="/coin/mining">
                <img
                  src={doctor}
                  className="card-img-top services-zoom"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <Link to="/coin/mining">
                  <h3>Coin Mining</h3>
                </Link>
                <p>
                  It is time for you to take the first step towards financial
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
              <Link to="/fdp">
                <img
                  src={doctor}
                  className="card-img-top services-zoom"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <Link to="/fdp">
                  <h3>Fixed Deposit Package</h3>
                </Link>
                <p>
                  Purchase a specific service for a fixed number of days to
                  unlock
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
              <Link to="/entertainment">
                <img
                  src={doctor}
                  className="card-img-top services-zoom"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <Link to="/entertainment">
                  <h3>Entertainment</h3>
                </Link>
                <p>It is an entertainment universe, every human being needs</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
              <Link to="/entertainment">
                <img
                  src={doctor}
                  className="card-img-top services-zoom"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <Link to="/entertainment">
                  <h3>Entertainment</h3>
                </Link>
                <p>It is an entertainment universe, every human being needs</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
              <Link to="/entertainment">
                <img
                  src={doctor}
                  className="card-img-top services-zoom"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <Link to="/entertainment">
                  <h3>Entertainment</h3>
                </Link>
                <p>It is an entertainment universe, every human being needs</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
              <Link to="/entertainment">
                <img
                  src={doctor}
                  className="card-img-top services-zoom"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <Link to="/entertainment">
                  <h3>Entertainment</h3>
                </Link>
                <p>It is an entertainment universe, every human being needs</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
              <Link to="/entertainment">
                <img
                  src={doctor}
                  className="card-img-top services-zoom"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <Link to="/entertainment">
                  <h3>Entertainment</h3>
                </Link>
                <p>It is an entertainment universe, every human being needs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3 text-center">
          <Link to='/all/doctor'>
          <button className="button-92">সবগুলো দেখ</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopDoctor;
