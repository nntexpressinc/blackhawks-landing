import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <Container fluid className="about-section screen">
        <Container>
          <Row md={12}>
            <h1 className="purple clamp1" style={{ paddingBottom: "20px" }}>
              Privacy Policy
            </h1>
          </Row>
          <Row>
            <Col>
              <p style={{ textAlign: "left", color: "#fff", marginBottom: "8px" }}>
                Please include a website link to your online privacy policy. To be compliant with carrier policies, your privacy policy MUST include the following:
              </p>
              <ul style={{ textAlign: "left", color: "#fff", marginBottom: "8px" }}>
                <li>What personal information is collected</li>
                <li>How personal information is used</li>
                <li>Who personal information is shared with</li>
                <li>Privacy policy must include clear language that SMS consent is not shared with third parties, for example: "SMS consent is not shared with third parties for marketing purposes."</li>
              </ul>
              <p style={{ textAlign: "left", color: "#fff", marginBottom: "8px" }}>
                Ensure that your privacy policy is easily accessible and prominently included on web forms, such as by adding a link near the consent language. As a best practice, also include a link to your privacy policy in the footer of every page on your website.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;