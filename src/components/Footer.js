import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {
  AiFillInstagram,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import {
  FaFacebook,
  FaFax,
  FaPhoneAlt,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TfiEmail, TfiPrinter } from "react-icons/tfi";
import { mainLogo } from "../img";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" style={{ backgroundColor: "#f5f5f5", color: "#333" }}>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12}>
              <p className="clamp4c" style={{ fontFamily: "'Roboto', sans-serif" }}>REACH US</p>
              <h1 className="clamp2c" style={{ fontFamily: "'Roboto', sans-serif" }}>Anytime, Anywhere</h1>
            </Col>
            <Col lg={4} md={6} sm={12} className="home-about-social">
              <div >
                <img src={mainLogo} className="footer-logo mt-2" alt="brand" />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="home-about-social">
              <ul className="home-about-social-links d-flex gap-3 flex-column">
                
                <Row className="social-icons d-flex flex-row justify-content-center align-items-center">
                  <Col xs={2}>
                    <TfiEmail size={20} color={"#100551"} />
                  </Col>
                  <Col>
                    <h6 className="p-0 m-0 clamp4c text-start" style={{ fontFamily: "'Roboto', sans-serif" }}>
                      info@blackhawks-express.com
                    </h6>
                  </Col>
                </Row>
                <Row className="social-icons d-flex flex-row justify-content-center align-items-center">
                  <Col xs={2}>
                    <FaPhoneAlt size={20} color={"#100551"} />
                  </Col>
                  <Col>
                    <h6 className="p-0 m-0 clamp4c text-start" style={{ fontFamily: "'Roboto', sans-serif" }}>
                      (916) 379-7971
                    </h6>
                  </Col>
                </Row>
                <Row className="social-icons d-flex flex-row justify-content-center align-items-center">
                  <Col xs={2}>
                    <TfiPrinter size={20} color={"#100551"} />
                  </Col>
                  <Col>
                    <h6 className="p-0 m-0 clamp4c text-start" style={{ fontFamily: "'Roboto', sans-serif" }}>
                      (916) 256-2769
                    </h6>
                  </Col>
                </Row>
                <Row className="social-icons d-flex flex-row justify-content-center align-items-center">
                  <Col xs={2}>
                    <IoMdHome size={25} color={"#100551"} />
                  </Col>
                  <Col>
                    <h6 className="p-0 m-0 clamp4c text-start" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    424 Fuchsia Court <br />Roseville CA 95747
                    </h6>
                  </Col>
                </Row>
              </ul>
            </Col>
            <Col md={4} className="home-about-social d-flex justify-content-center">
              <Nav className="d-flex flex-column justify-content-center align-items-md-start align-items-sm-start">
                <Nav.Item>
                  <Nav.Link className="clamp4c" as={Link} to="/" style={{ color: "#333" }}>
                    <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="clamp4c" as={Link} to="/about" style={{ color: "#333" }}>
                    <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="clamp4c" as={Link} to="/logistics" style={{ color: "#333" }}>
                    <RiCustomerService2Fill style={{ marginBottom: "2px" }} /> Services
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="clamp4c" as={Link} to="/contact" style={{ color: "#333" }} >
                    <ImBlog style={{ marginBottom: "2px" }} /> Contact
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="line-style" style={{ borderTop: "1px solid #333" }}></div>
      <Row className="mt-4">
        <Col md={6} className="footer-copywright">
          <h3 style={{ fontFamily: "'Roboto', sans-serif"}}>Copyright © {year} BLACKHAWKS EXPRESS INC</h3>
        </Col>
        <Col md={6}></Col>
      </Row>
    </Container>
  );
}

export default Footer;

