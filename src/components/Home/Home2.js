import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { home1, ups, coyote, tql, fedex, hunt, relay, robinson, xpo } from "../../img";
import "./home.css"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <div class="marquee marquee--8">
        <img
          class="marquee__item marquee__item2"
          src={ups}
          width="100vh"
          height="100vh"
          alt=""
        />
        <img
          class=" marquee__item "
          src={coyote}
          width="100vh"
          height="100vh"
          alt=""
        />
        <img
          class="marquee__item "
          src={tql}
          width="100vh"
          height="100vh"
          alt=""
        />
        <img
          class=" marquee__item"
          src={fedex}
          width="100vh"
          height="100vh"
          alt=""
        />
        <img
          class="marquee__item"
          src={hunt}
          width="100vh"
          height="100vh"
          alt=""
        />
        <img
          class=" marquee__item "
          src={relay}
          width="100vh"
          height="100vh"
          alt=""
        />
        <img
          class=" marquee__item "
          src={xpo}
          width="100vh"
          height="100vh"
          alt=""
        />
        <img
          class="marquee__item"
          src={robinson}
          width="100vh"
          height="100vh"
          alt=""
        />
      </div>
      <Container>
        <Row>
          <h1 className="clamp1">
            WELCOME TO{" "}
            <span className="clamp1"> BLACKHAWKS EXPRESS INC</span>
          </h1>
          <Col md={6} className="home-about-description">
            <p className="clamp4cc home-about-body px-4">
            A leading carrier company specializing in transportation solutions. We're dedicated to simplifying and optimizing workflows through our knowledge and solid experience. With a focus on practicality and efficiency, we help businesses across various industries streamline their operations, saving time and resources
              <br />
              <br />
              At BLACKHAWKS EXPRESS INC, our goal is simple: to empower organizations with the tools they need to thrive in today's dynamic hauling business. Through our proven expertise and commitment to innovation, we've successfully modernized countless businesses, delivering tangible results and measurable improvements.
            </p>
          </Col>
          <Col md={6} className="myAvtar ">
            <img src={home1} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
