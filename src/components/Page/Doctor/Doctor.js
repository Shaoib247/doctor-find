import React from "react";
import "./Doctor.css";
import bannar from "./bg.jpg";
import { Link } from "react-router-dom";
import doctor from "./team1.jpg";
const Doctor = () => {
  return (
    <>
      <section className="">
        <div className="doctor-banner text-center " style={{
                    backgroundImage: `url(${bannar})`,
                  }}>
          <div className="doctor-overlay">
            <div className="container  py-5 px-1">
              <div className="slider-content about-top px-2">
                <h1>ডাক্তার</h1>
                <p>
                  Become a Yume One! Let's work together to push the boundaries
                  of what's possible in the world of finance with our dynamic,
                  global community of crypto enthusiasts. Shape the future of
                  crypto together and be at the forefront of it all.
                </p>
              </div>
            </div>
          </div>
        </div>
       
        <div className="doctor-filter my-3">
          <div class="container text-center">
            <div class="row row-cols-3">
            <div class="col"> <p>লোকেশন : 
                <input type="text" class="form-control doctor-filter-input"  placeholder="লোকেশন">
                </input></p> </div>
              <div class="col">
                <p>রেটিং : 
                <select class="form-select doctor-filter-form-select" aria-label="Default select example">
                  <option selected disabled>সিলেক্ট করুন </option>
                  <option value="1">সর্বনিম্ন রেটিং</option>
                  <option value="2">সর্বোচ্চ রেটিং</option>
                </select>

                </p>
               
              </div>
             
              <div class="col">
                <p>ভিজিট :  <select class="form-select doctor-filter-form-select" aria-label="Default select example">
                  <option disabled>সিলেক্ট করুন</option>
                  <option value="1">সর্বনিম্ন ভিজিট</option>
                  <option value="2">সর্বোচ্চ ভিজিট</option>
                </select>
                </p>
               
              </div>
            </div>
          </div>
          <hr />
        </div>


        <div className="container my-5">
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
      </div>

      </section>
    </>
  );
};

export default Doctor;
