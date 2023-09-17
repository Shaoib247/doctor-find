import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./logo.webp";
const Header = () => {
  return (
    <>
      <header className="main-header-area">
        <div className="topbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-list">
                  <li>
                    <a href="emergency-services.html">
                      <i className="flaticon-emergency-call-1"></i>জরুরী 24
                      ঘন্টা
                    </a>
                  </li>
                  <li>
                    <a href="patients-and-visitors.html">
                      <a href="tel:0485443322">
                      <i className="flaticon-telephone"></i> (04) 8544 3322
                    </a>
                    </a>
                  </li>
                  {/* <li>
                    <a href="find-doctor.html">
                      <i className="flaticon-loupe"></i> Find a doctor
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-action">
                  <li>
                    <Link to='/login'>Login </Link>
                    <Link to='/signup'> / Signup</Link>
                  </li>
                  <li className="dropdown language-option">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      id="language1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="flaticon-worldwide"></i>
                      <span className="lang-name"></span>
                    </button>
                    <div
                      className="dropdown-menu language-dropdown-menu"
                      aria-labelledby="language1"
                    >
                      <Link className="dropdown-item" href="#">
                        <img src="assets/images/uk.png" alt="flag" />
                        English
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <img src="assets/images/china.png" alt="flag" />
                        简体中文
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <img src="assets/images/uae.png" alt="flag" />
                        العربيّة
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Navbar bg="light" expand="lg" sticky="top">
          <Container fluid className="">
            <Navbar.Brand >
              <Link to='/'>
              <img
                src={logo}
                width="200"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              </Link>
          
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <Link to="/">হোম</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/find/doctor'>ডাক্তার খুঁজুন </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/find/diagnostic/center'>ডায়াগনস্টিক সেন্টার খুঁজুন</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/all/hospital'>হাসপাতাল</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/all/doctor">ডাক্তার</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/all/diagnostic/center'>ডায়াগনস্টিক সেন্টার</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/about'>সম্পর্কিত</Link>
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="খুঁজুন"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">খুঁজুন</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
