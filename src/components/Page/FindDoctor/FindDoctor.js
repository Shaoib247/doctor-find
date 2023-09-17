import React from "react";
import bannar from "./bg.jpg";
const FindDoctor = () => {
  return (
    <>
      <section className="mb-5 ">
        <div
          className="doctor-banner text-center "
          style={{
            backgroundImage: `url(${bannar})`,
          }}
        >
          <div className="doctor-overlay">
            <div className="container  py-5 px-1">
              <div className="slider-content about-top px-2">
                <h1>ডাক্তার অনুসন্ধান</h1>
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
        <section className="my-lg-5 my-md-5 my-sm-2 container login-section">
          <div className="w-lg-50 w-xl-75 w-md-75 w-sm-100 m-auto">
            <div className="w-lg-50 w-xl-75 w-md-75 w-sm-100 w-xl-75 m-auto shadow-lg p-5 mb-5 bg-body rounded py-5">
              <h2 className="text-center mb-3">অনুসন্ধান</h2>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    রোগের নাম
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="রোগের নাম"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    লোকেশন
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="লোকেশন।"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    সর্বোচ্চ ভিজিট
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="সর্বোচ্চ ভিজিট "
                  />
                </div>
                <div class="d-grid gap-2 my-3">
                  <button type="submit" class="btn btn-primary">
                    অনুসন্ধান
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default FindDoctor;
