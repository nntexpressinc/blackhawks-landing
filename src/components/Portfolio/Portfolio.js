import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ServicesCard from "../Services/ServicesCard";
import editor from "../../Assets/Projects/codeEditor.png";
import { artifex, biznes, daladan, daladanadmin, hrai, pahlavonuz } from "../../img";
function Portfolio() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Portfolio</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ServicesCard
              imgPath={pahlavonuz}
              isBlog={false}
              title="Pahlavon.uz"
              description="A site that uses React.js and Material-UI to introduce heavy spec techniques and is the brand face of the Pahlovon company."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ServicesCard
              imgPath={hrai}
              isBlog={false}
              title="HR AI"
              description="A platform develop and integrated with React.JS, Django Rest framework and AI. THIS platform is a system that identifies interests and connects with courses by creating a MindMAP."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ServicesCard
              imgPath={artifex}
              isBlog={false}
              title="ARTIFEX DE COLOR"
              description="A complete CRM platform that monitors product delivery from customers. It includes from preparation to sale of products."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ServicesCard
              imgPath={daladan}
              isBlog={false}
              title="Dalada"
              description="A platform created to introduce the company's brand and its services to customers."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ServicesCard
              imgPath={daladanadmin}
              isBlog={false}
              title="Dalada ADMIN"
              description="A platform created to introduce the company's brand and its services to customers. We have also created an additional admin service for this project."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ServicesCard
              imgPath={biznes}
              isBlog={false}
              title="Biznes armiya"
              description="A platform that digitizes the office system. Through this, workers can be monitored and Tender can be played with them. And the internal currency was introduced and used in the form of VAB."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Portfolio;
