import React from "react";
import "./Counter.css";
import { FaAlgolia, FaHeart, FaPlusCircle, FaPlusSquare } from "react-icons/fa";
const Counter = () => {
  return (
    <>
      <section className="container">
        <div className="funfact-inner-box">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="single-funfact-card">
                <div className="icon d-flex align-items-center justify-content-center">
                  <FaHeart />
                </div>
                <h3>
                  <span className="odometer" data-count="20">
                    5000
                  </span>
                </h3>
                <p className="counter-p">ডাক্তার</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="single-funfact-card">
                <div className="icon d-flex align-items-center justify-content-center">
                  <FaPlusCircle />
                </div>
                <h3>
                  <span className="odometer" data-count="99">
                    3400
                  </span>
                </h3>
                <p className="counter-p">হাসপাতাল</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="single-funfact-card">
                <div className="icon d-flex align-items-center justify-content-center">
                  <FaPlusSquare />
                </div>
                <h3>
                  <span className="odometer" data-count="700">
                    3400
                  </span>
                </h3>
                <p className="counter-p">ডায়াগনস্টিক সেন্টার</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="single-funfact-card">
                <div className="icon  d-flex align-items-center justify-content-center">
                  <FaAlgolia />
                </div>
                <h3>
                  <span className="odometer" data-count="50">
                    4.9
                  </span>
                </h3>
                <p className="counter-p">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
