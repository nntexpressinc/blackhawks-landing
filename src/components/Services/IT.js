import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ServicesCard from "./ServicesCard";
import { services1, services2, services3, services4 } from "../../img";
import { useNavigate } from "react-router-dom";

function ITServices() {
  const navigate =useNavigate()
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          <strong className="purple">IT Services </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col onClick={()=>navigate('/contact')} md={6} lg={5} className="project-card">
            <ServicesCard
              imgPath={services4}
              isBlog={false}
              title="Web development"
              description="We create top-quality websites, ranging from corporate sites to web applications."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

       

          <Col onClick={()=>navigate('/contact')} md={6} lg={5} className="project-card">
            <ServicesCard
              imgPath={services2}
              isBlog={false}
              title="CRM system"
              description="We automate business processes and develop electronic management systems"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={6} lg={5} className="project-card">
            <ServicesCard
              imgPath={editor}
              isBlog={false}
              title="Branding"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          {/*           
          <Col md={6} lg={5} className="project-card">
            <ServicesCard
              imgPath={editor}
              isBlog={false}
              title="UI&UX"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
 */}

          <Col onClick={()=>navigate('/contact')} md={6} lg={5} className="project-card">
            <ServicesCard
              imgPath={services1}
              isBlog={false}
              title="Mobile apps"
              description="We provide development and technical support for mobile applications of any complexity."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col onClick={()=>navigate('/contact')} md={6} lg={5} className="project-card">
            <ServicesCard
              imgPath={services3}
              isBlog={false}
              title="Artificial Intelligence"
              description="Development of intelligent systems with human-like capabilities"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ITServices;
