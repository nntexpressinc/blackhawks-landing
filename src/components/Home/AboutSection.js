import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { home2, home3, home4, aboutsection } from "../../img";

function AboutSection() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} xs={{ order: 1 }} className="myAvtar ">
            <img src={aboutsection} className="img-fluid" alt="avatar" />
          </Col>
          <Col md={8} xs={{ order: 2 }} className="home-about-description">
            <h1 className="clamp1" style={{ fontWeight: "bold" }}>
              CAR HAULING<span className="purple"></span>
            </h1>
            <p className="clamp4cc home-about-body px-4">
            Company BLACKHAWKS EXPRESS INC with a solid experience is a car carrier with its own fleet of trucks as well. We are able to ship your car door-to-door on our own trucks whenever possible. We can also get your vehicle delivered quicker by brokering it to one of our partner carriers without compromising safety and the excellent customer service.
              <br />
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={8} xs={{ order: 1 }} className="home-about-description">
            <h1 className="clamp1" style={{ fontWeight: "bold" }}>
              GROUND SHIPPING<span className="purple"></span>
            </h1>
            <p className="clamp4cc home-about-body px-4">
            The company BLACKHAWKS EXPRESS INC coordinates fleets of LTL and truckload vehicles for any sized shipment.

Whether you’re moving goods across town or across borders, trust our reliable less-than-truckload and truckload services to be on time, and on budget.

We offer an extensive array of services to meet all your organization’s needs for moving and specialty transportation.
            </p>
          </Col>
          <Col md={4} xs={{ order: 2 }} className="myAvtar">
            <img src={home2} className="img-fluid" alt="avatar" />
          </Col>
        </Row>

        <Row>
          <Col md={4} xs={{ order: 1 }} className="myAvtar">
            <img src={home4} className="img-fluid" alt="avatar" />
          </Col>
          <Col md={8} xs={{ order: 2 }} className="home-about-description">
            <h1 className="clamp1" style={{ fontWeight: "bold" }}>
              FLATBED AND STEPDECK<span className="purple"></span>
            </h1>
            <p className="clamp4cc home-about-body px-4">
            Vital for transporting large cargo such as construction materials, metal, household goods, and oversized and heavy equipment across our roadways, flatbed trucking is one of the most common methods used in open deck freight.Transporting loads of this scale requires significant attention to detail when securing and shipping, beginning with selecting the right types of flatbed trailers.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default AboutSection;
