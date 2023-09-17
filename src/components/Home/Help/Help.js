import React from "react";
import "./Help.css";
import image from './section-img.png'
const Help = () => {
  return (
    <>
      <section class="Feautes section my-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>আমরা আপনাকে এবং আপনার পরিবারকে সাহায্য করার জন্য সর্বদা প্রস্তুত</h2>
                <img src={image} alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-12">
              <div class="single-features">
                <div class="signle-icon">
                  <i class="icofont icofont-ambulance-cross"></i>
                </div>
                <h3>Emergency Help</h3>
                <p>
                  Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                  vulputate.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="single-features">
                <div class="signle-icon">
                  <i class="icofont icofont-medical-sign-alt"></i>
                </div>
                <h3>Enriched Pharmecy</h3>
                <p>
                  Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                  vulputate.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="single-features last">
                <div class="signle-icon">
                  <i class="icofont icofont-stethoscope"></i>
                </div>
                <h3>Medical Treatment</h3>
                <p>
                  Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                  vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Help;
