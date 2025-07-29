import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <Container fluid className="about-section screen">
        <Container>
          <Row md={12}>
            <h1 className="purple clamp1" style={{ paddingBottom: "20px" }}>
              Terms of Service
            </h1>
          </Row>
          <Row>
            <Col>
              <p style={{ textAlign: "left", color: "#fff", marginBottom: "8px" }}>
                Include a link to your online SMS Terms & Conditions or this information can be in your privacy policy. The Terms & Conditions must include information on the types of messages the user can expect to receive (example appointment reminders, order alerts, account notifications etc). The Terms & Conditions must also include:
              </p>
              <ul style={{ textAlign: "left", color: "#fff", marginBottom: "8px" }}>
                <li>Messaging frequency may vary.</li>
                <li>Message and data rates may apply.</li>
              </ul>
              <p style={{ textAlign: "left", color: "#fff", marginBottom: "8px" }}>
                To opt out at any time, text STOP. For assistance, text HELP or visit our website at www.nntexpress.com. Visit <a href="https://nntexpress.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>https://nntexpress.com</a> for privacy policy and <a href="https://nntexpress.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>https://nntexpress.com</a> for Terms of Service.
              </p>
              <p style={{ textAlign: "left", color: "#fff", marginBottom: "8px" }}>
                Example language:
              </p>
              <p style={{ textAlign: "left", color: "#fff", marginBottom: "8px" }}>
                SMS Terms of Service
              </p>
              <p style={{ textAlign: "left", color: "#fff", marginBottom: "8px" }}>
                By opting into SMS from a web form or other medium, you are agreeing to receive SMS messages from BLACKHAWKS EXPRESS INC. This includes SMS messages for appointment scheduling, appointment reminders, post-visit instructions, lab notifications, and billing notifications. Message frequency varies. Message and data rates may apply. See privacy policy at <a href="https://nntexpress.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>https://nntexpress.com</a>. Message HELP for help. Reply STOP to any message to opt out.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default TermsOfService;