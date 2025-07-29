import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import AboutSection from "./AboutSection";
import ValuesSection from "./ValuesSection";
import GoalSection from "./GoalSection";
import ServiceSection from "./ServiceSection";
import "./home.css";
import Video from "../../Assets/next_step.mp4";
import { home3 } from "../../img";

function Home() {
  return (
    <section className="home-section ">

      <Container fluid id="home" className="text-white">
        {/* <Particle /> */}
        <Container className="home-content screen">
          <Row>
          <Col md={7} className="home-header">
            <div>
              <p className="clamp2 text-white">A COMPANY PROFILE OF</p>
              <h1 className="clamp shimmer">
                BLACKHAWKS EXPRESS INC
              </h1>
            </div>
            <h1 className="shimmer1 heading text-start clamp3 text-top text-white">
              A leading carrier company specializing in transportation solutions.
            </h1>
          </Col>

            <Col md={5} className="d-flex align-items-center pb-5">
              <img src={home3} className="img-fluid" alt="avatar" style={{ marginTop: '60px' }}/>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}></Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
      <AboutSection />
      <ValuesSection />
      <GoalSection />
      <ServiceSection />
    </section>
  );
}

export default Home;
