import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ValuesSection() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} xs={{ order: 1 }} className="home-about-description">
            <h1 className="purple clamp1" style={{ fontWeight: "bold" }}></h1>
          </Col>
        </Row>
        <Row>
          <Col
            md={6}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start align-items-center flex-column"
          >
            <h1 className="clamp2cc">Climate Controlled Freight</h1>
            <p className="home-about-body clamp4cc">
            In the fast-paced world of logistics, precision and reliability are paramount, especially when it comes to handling temperature-sensitive cargo.
            </p>
          </Col>
          <Col
            md={6}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start align-items-center flex-column"
          >
            <h1 className="clamp2cc">Specialized Freight & Transportation</h1>
            <p className="home-about-body clamp4cc">
              {" "}
              Our experienced logistics firm is dedicated to ensuring the precise handling of your perishable shipments, maintaining the necessary temperature-monitored shipping strategies throughout the process.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default ValuesSection;
