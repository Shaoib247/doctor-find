import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="mt-5 newsletter">
        <footer className="bg-light text-center">
          <div className="container p-4 pb-0">
            <section className="">
              <form action="">
                <div className="row d-flex justify-content-center">
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>আমাদের নিউজলেটার জন্য সাইন আপ করুন</strong>
                    </p>
                  </div>

                  <div className="col-md-5 col-12">
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form5Example2"
                        className="form-control"
                        placeholder="ইমেইল ঠিকানা"
                      />
                    </div>
                  </div>

                  <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-4">
                      সাবস্ক্রাইব
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Newsletter;
