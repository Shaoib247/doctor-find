import React from "react";
import Slider from "react-slick";
import "./Sliders.css";
import slider1 from "./slider.jpg";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";
import { Link } from "react-router-dom";
const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true

  };

  return (
    <>
      <div className="">
        <section className="slider">
          <div className="hero-slider">
            <Slider {...settings}>
              <div>
                <div
                  className="single-slider"
                  style={{
                    backgroundImage: `url(${slider1})`,
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="text">
                          <h1>
                          ডাক্তার খুঁজুন
                          </h1>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris sed nisl pellentesque, faucibus libero
                            eu, gravida quam.{" "}
                          </p> */}
                          <div className="button">
                            <Link href="/find/doctor" className="btn">
                            অনুসন্ধান 
                            </Link>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div>
                <div
                  className="single-slider"
                  style={{
                    backgroundImage: `url(${slider2})`,
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="text">
                          <h1>
                          ডায়াগনস্টিক সেন্টার খুঁজুন
                          </h1>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris sed nisl pellentesque, faucibus libero
                            eu, gravida quam.{" "}
                          </p> */}
                          <div className="button">
                            <Link href="/find/diagnostic/center" className="btn">
                            অনুসন্ধান
                            </Link>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div>
                <div
                  className="single-slider"
                  style={{
                    backgroundImage: `url(${slider3})`,
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="text">
                          <h1>
                          আমরা চিকিৎসা সেবা প্রদান করি যা আপনি বিশ্বাস করতে পারেন!
                          </h1>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris sed nisl pellentesque, faucibus libero
                            eu, gravida quam.{" "}
                          </p> */}
                          <div className="button">
                            <Link href="/all/doctor" className="btn">
                            ডাক্তার
                            </Link>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sliders;
