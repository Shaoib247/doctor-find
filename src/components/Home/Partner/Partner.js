import React from "react";
import "./Partner.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import image1 from "./partner-1.png";
import image2 from "./partner-2.png";
import image3 from "./partner-3.png";
import image4 from "./partner-4.png";
import image5 from "./partner-5.png";
const Partner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <> 
      <section className="partner mt-5">
        <h1>আমাদের অংশীদার</h1>
        <Slider {...settings}>
        <div>
        <div className="p-1 w-100 h-100 ">
            <div className="card h-100">
                <img
                  src={image1}
                  className="card-img-top services-zoom"
                  alt="..."
                />
            </div>
          </div>
        </div>
        <div>
        <div className="p-1 w-100 h-100 ">
            <div className="card h-100">
                <img
                  src={image1}
                  className="card-img-top services-zoom"
                  alt="..."
                />
            </div>
          </div>
        </div>
        <div>
        <div className="p-1 w-100 h-100 ">
            <div className="card h-100">
                <img
                  src={image1}
                  className="card-img-top services-zoom"
                  alt="..."
                />
            </div>
          </div>
        </div>
        <div>
        <div className="p-1 w-100 h-100 ">
            <div className="card h-100">
                <img
                  src={image1}
                  className="card-img-top services-zoom"
                  alt="..."
                />
            </div>
          </div>
        </div>
        <div>
        <div className="p-1 w-100 h-100 ">
            <div className="card h-100">
                <img
                  src={image1}
                  className="card-img-top services-zoom"
                  alt="..."
                />
            </div>
          </div>
        </div>
        <div>
        <div className="p-1 w-100 h-100 ">
            <div className="card h-100">
                <img
                  src={image1}
                  className="card-img-top services-zoom"
                  alt="..."
                />
            </div>
          </div>
        </div>
        <div>
        <div className="p-1 w-100 h-100 ">
            <div className="card h-100">
                <img
                  src={image1}
                  className="card-img-top services-zoom"
                  alt="..."
                />
            </div>
          </div>
        </div>
        <div>
        <div className="p-1 w-100 h-100 ">
            <div className="card h-100">
                <img
                  src={image1}
                  className="card-img-top services-zoom"
                  alt="..."
                />
            </div>
          </div>
        </div>
        <div>
        <div className="p-1 w-100 h-100 ">
            <div className="card h-100">
                <img
                  src={image1}
                  className="card-img-top services-zoom"
                  alt="..."
                />
            </div>
          </div>
        </div>
        <div>
        <div className="p-1 w-100 h-100 ">
            <div className="card h-100">
                <img
                  src={image1}
                  className="card-img-top services-zoom"
                  alt="..."
                />
            </div>
          </div>
        </div>
            
        
        </Slider>
      </section>
    </>
  );
};

export default Partner;
