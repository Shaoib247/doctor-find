import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook , FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import logo from './logo.webp'
const Footer = () => {
  return (
    <>

      <footer className="text-center text-lg-start bg-white text-muted footer">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>সামাজিক নেটওয়ার্কগুলিতে আমাদের সাথে সংযুক্ত হন:</span>
          </div>
 
          <div>
            <Link href="" className="me-4 link-secondary">
           <FaFacebook />
            </Link>
            <Link href="" className="me-4 link-secondary">
              <FaTwitter />
            </Link>
            <Link href="" className="me-4 link-secondary">
              <FaGoogle />
            </Link>
            <Link href="" className="me-4 link-secondary">
              <FaInstagram />
            </Link>
            <Link href="" className="me-4 link-secondary">
              <FaLinkedin />
            </Link>
            <Link href="" className="me-4 link-secondary">
              <FaGithub />
            </Link>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i> 
                   <img
                src={logo}
                width="200"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <Link href="#!" className="text-reset">
                  ডাক্তার খুঁজুন
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                  ডায়াগনস্টিক সেন্টার খুঁজুন
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                  হাসপাতাল
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                  ডায়াগনস্টিক সেন্টার
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4"></h6>
                <p>
                  <Link href="#!" className="text-reset">
                  সম্পর্কিত
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                  privacy and policy
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                    FAQ
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                    Help
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> Dhaka,
                  NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> + 01 234
                  567 88
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> + 01 234
                  567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-2">
          © 2021 কপিরাইট:
          <Link className="text-reset fw-bold" href="#">
            doctor.com
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
