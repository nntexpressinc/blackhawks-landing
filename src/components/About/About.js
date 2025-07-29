import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/26129984_lel.jpg";
import { home3 } from "../../img";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { consultation, deliberation, evalution, finish, solution, aboutbla } from "../../img";


const dataRoadmap = [
  {
    id: 1,
    icon:consultation,
    title: "Why BLACKHAWKS EXPRESS INC?",
    desc: `- BLACKHAWKS EXPRESS INC is considered as one of the active participants of the transportation industry in the US. We provide effective logistic services to the hundreds of businesses operating in the country, helping them move freight from one place to the other.`,
  },
  {
    id: 2,
    icon:deliberation,
    title: "Responsibility",
    desc: `- In fact, a recent survey conducted by our partners, an audit company, emphasized that more than 100 brokers of the US heavily rely and depend on trucking provided by our company for the transportation of goods.`,
  },
  {
    id: 3,
    icon:solution,
    title: "Fidelity",
    desc: `- The majority of the essential goods — food, medicine, everyday goods, and other essential items — are being transported via our company. Our heavy trucks carry thousands of pounds of these essential goods across the country every day.`,
  },
  {
    id: 4,
    icon:evalution,
    title: "Professional Team",
    desc: `- Creating new relationships can be challenging, so we create a stress-free experience by assigning one of our highly-knowledgable teams to work with the specific needs of your company. This team understands you and your requirements, which allows you to focus on your business versus managing multiple shippers.`,
  },
  
];

function About() {
  return (
    <Container fluid className="about-section screen">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              textAlign: "start",
              justifyContent: "start",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <p className="clamp2" style={{ color: "white"}}>WELCOME TO</p>
            <h1 className="clamp2" style={{ paddingBottom: "20px", color: "white"}}>
            BLACKHAWKS EXPRESS INC
            </h1>
            <p className="clamp4" style={{ color: "white"}}>
            Every time that we work with you, we deliver many years of freight transportation experience to your business; we simply put it to work for you. We provide tailored solutions for each client and solve any logistics task.

Our main goal is to perform always flexible, fast, and cost-efficient delivery. That is why we have gathered an experienced team that can handle any task. We only employ professionals who are put through a rigorous pre-screening process that includes a comprehensive background check, all the previous along with qualified dispatch who will deliver your freight anywhere in the United States of America.<br /> <br />
We have as our best core value, the responsibility to operate safely, we are always up for innovation and improvement, and our eyes are always looking forward for better and smarter logistics solutions for any type of business.

The same as you, we believe that time is money and we value your cargo, that is why we narrow the timeframe of each delivery.
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "150px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={aboutbla} alt="about" className="img-fluid" style={{ borderRadius: "12px",  }} />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              textAlign: "start",
              justifyContent: "start",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <p className="clamp2" style={{ color: "white", textAligin: "center", width: "full"}}>Semi-Trailer Trucks</p>
            <h1 className="clamp1" style={{ paddingBottom: "10px" , color: "white"}}>
            Our Fleet
            </h1>
            <p className="clamp4" style={{ color: "white"}}>
            Also called 18-wheelers, big rigs, or tractor-trailers, they are popular fleet trucks that come in many different shapes and sizes. A semi-trailer truck is the combination of a tractor unit and one or more semi-trailers to carry freight. They often carry freight like cars, building materials, machinery, and more across the country.
              <br />
              <br />
              We have ​53’ Dry Van, Box Delivery, Car Carrier, Single Drop, Double Drop, Removable Gooseneck, Straight Flatbed, Refrigerated, Tanker trailer, Straight Tanker.
              <br />
              <br />
              Our Trucks Brands: General Freight, Motor Vehicles, Tow Away, Machinery or Large Objects, Chemicals.
            </p>
            <br />
            <p className="clamp2" style={{ color: "white", textAligin: "center", width: "full"}}>Safety and Security</p>
            <p className="clamp4" style={{ color: "white"}}>
            Safety has always come first at BLACKHAWKS EXPRESS INC because it saves lives, reduces potential freight damage and gives our customers the high-quality service they have come to expect with us.
            <br />
              <br />
              Our philosophy of safety starts with a commitment to standards of behaviors across our entire network. We begin with strict owner-operator qualification requirements. We also provide safety orientation and ongoing training opportunities for both agents and owner-operators leased to BLACKHAWKS EXPRESS INC However, our safety-first culture extends far beyond that.              <br />
              <br />
              BLACKHAWKS EXPRESS INC Safety Officers are designated at every independent agency, and they support us in providing education, training and awareness programs.            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              textAlign: "start",
              justifyContent: "start",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Timeline roadmaps={dataRoadmap} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;

const Timeline = ({ roadmaps }) => {
  const centeredIconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#11426a",
    color: "#fff",
  };
  return (
    <VerticalTimeline>
      {roadmaps.map((item, idx) => (
        <VerticalTimelineElement
          key={idx}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            color: "#fff",
            border: "1px solid #11426a",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #11426a" }}
          // date="2011 - present"
          iconStyle={centeredIconStyle}
          icon={<img className="w-[20px] colorr" src={item.icon} alt="icon" />}
        >
          <h3 className="vertical-timeline-element-title">{item?.title}</h3>
          <p
            className="text-[16px] font-[500] text-[#11426a]"
            dangerouslySetInnerHTML={{
              __html: item.desc,
            }}
          ></p>
        </VerticalTimelineElement>
      ))}

      {/* <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      /> */}
    </VerticalTimeline>
  );
};
