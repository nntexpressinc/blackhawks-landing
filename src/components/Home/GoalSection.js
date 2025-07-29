import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const GoalSection = () => {
  return (
    <Container fluid className="home-goals-section py-5" id="goals">
      <Container>
        <Row>
          <Col md={12} xs={{ order: 1 }} className="home-about-description ">
            <h1 className="purple clamp1" style={{ fontWeight: "bold" }}></h1>
          </Col>
        </Row>
        <Row>
          <Col
            md={3}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start gap-5 align-items-center flex-column flex-md-row"
          >
            <h1 className="clamp3">Refrigerated Transport Carrier</h1>
          </Col>
          <Col
            md={9}
            xs={{ order: 1 }}
            className="clamp4 home-about-description d-flex justify-content-start gap-5 align-items-center flex-column flex-md-row"
          >
            <div>
              <ul className="text-start">
                <li className="animate__animated animate__fadeInRight">
                  Refrigerated freight, also known as reefer freight, is a
                  shipping method where goods are transported in
                  temperature-controlled trailers. This is crucial for items
                  like food, pharmaceuticals, and other perishables that need to
                  be kept at specific temperatures to maintain their quality and
                  safety.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            md={3}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start gap-5 align-items-center flex-column flex-md-row"
          >
            <h1 className="clamp3">Frozen & Refrigerated Food Shipping</h1>
          </Col>
          <Col
            md={9}
            xs={{ order: 1 }}
            className="clamp4 home-about-description d-flex justify-content-start gap-5 align-items-center flex-column flex-md-row"
          >
            <div>
              <ul className="text-start">
                <li className="animate__animated animate__fadeInRight delay-2s">
                The equipment options for refrigerated freight are diverse, ranging from standard refrigerated trucks to advanced trailers with multi-temperature zones and real-time temperature monitoring systems. 
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            md={3}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start gap-5 align-items-center flex-column flex-md-row"
          >
            <h1 className="clamp3">ACTIVE AND EFFECTIVE</h1>
          </Col>
          <Col
            md={9}
            xs={{ order: 1 }}
            className="clamp4 home-about-description d-flex justify-content-start gap-5 align-items-center flex-column flex-md-row"
          >
            <div>
              <ul className="text-start">
                <li className="animate__animated animate__fadeInRight delay-4s">
                  BLACKHAWKS EXPRESS INC is considered as one of the active participants of
                  the transportation industry in the US. We provide effective
                  logistic services to the hundreds of businesses operating in
                  the country, helping them move freight from one place to the
                  other.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default GoalSection;
