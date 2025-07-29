import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { logisticimg } from "../../img"; // `logisticimg` o'zgaruvchisini import qo'shing

function Logistic() {
  return (
    <Container fluid className="project-section screen">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          <strong className="" style={{ color: "white"}}>Logistics Services </strong>
        </h1>
        <Row>
          <Col
            md={12}
            style={{
              textAlign: "start",
              justifyContent: "start",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <p className="clamp2" style={{ color: "white"}}>SERVICES Transport Solutions</p>
            <p className="clamp4" style={{ color: "white"}}>
            BLACKHAWKS EXPRESS INC stands out in the field of Transport Solutions.
We offer a wide range of customized solutions tailored to the specific needs of each shipment.
That's where BLACKHAWKS EXPRESS INC steps in, your trusted partner for cold chain management. 
            </p>
            <p className="clamp4" style={{ color: "white"}}>
              <strong>Our Services</strong>
              <ul>
                <li>
                  <strong>GROUND TRANSPORTATION</strong>
                  <br />
                  - 
                  Gain transparency and peace of mind with our integrated tracking tools and our vetted transport partners.
                </li>
                <br />
                <li>
                
                  <strong>CAR HAULING</strong>
                  
                  <br />Our auto shipping service has been crafted to handle heavy, oversized vehicles with precision and care. We offer you the choice of open flatbed trailers for those on a budget and enclosed trailers for those seeking extra protection for their vehicles during transport. Your vehicle is precious; we value it as much as you do.

Our transport services are backed by extensive experience, advanced technology, and a team of professional auto shipping specialists dedicated to ensuring your vehicle reaches its destination in pristine condition. BLACKHAWKS EXPRESS INC isn’t just another auto transport company; we’re your reliable partner in the world of auto shipping.

At BLACKHAWKS EXPRESS INC, we understand that auto shipping can seem overwhelming. But with us by your side, you can sit back and relax while we ensure a smooth and hassle-free transport process.
                </li>
                <br />
                <li>
                  <strong>DRY VANS HAUL</strong>
                  <br />
                  We are used to haul non-perishable goods that don’t require a climate-controlled environment. We are used in transporting many different items, as they can carry large shipments of up to 45,000 pounds. Here is a list of potential items and commodities that can be palletized and hauled by a dry van:
                  Packaged, non-perishable food and beverage<br />
                  Clothing<br />
                  Various electronics (those not affected by a non-temperature controlled environment)<br />
                  Machinery and parts<br />
                  Furniture<br />
                  Industrial equipment<br />
                  Automotive<br />
                  Cleaning products<br />
                  Beauty products<br />
                  Construction<br />
                  Healthcare equipment<br />

                </li><br />
                <li className="clamp4cc">
                  <strong>FLATBED AND STEPDECK</strong>
                  <br />- Vital for transporting large cargo such as construction materials, metal, household goods, and oversized and heavy equipment across our roadways, flatbed trucking is one of the most common methods used in open deck freight. Transporting loads of this scale requires significant attention to detail when securing and shipping, beginning with selecting the right types of flatbed trailers.

                  Though mastering the various types of flatbed trailers, legal flatbed dimensions, and more can be complicated, BLACKHAWKS EXPRESS INC is here to help you navigate the intricacies of this specialized mode of shipping.

You may contact with our specialists to talk about your unique needs today.   
                </li>
                {/* <li>
                  <strong>Advanced Analytics and Reporting</strong>
                  <br />
                  - Gain insights into your fleet’s performance with our
                  detailed analytics.
                  <br />- Make data-driven decisions to improve your operations.
                </li> */}
              </ul>
            </p>
          </Col>
          <Col
            md={12}
            style={{
              textAlign: "start",
              justifyContent: "start",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            {/* <p className="clamp4cc">
              <strong>Why Choose Us?</strong>
              <ul>
                <li>
                  Experienced Team: Our team of professionals has years of
                  experience in the logistics and transportation industry.
                </li>
                <li>
                  Cutting-Edge Technology: We use the latest technology to
                  provide top-notch dispatching services.
                </li>
                <li>
                  Customer-Centric Approach: Your satisfaction is our priority.
                  We tailor our services to meet your unique needs.
                </li>
                <li>
                  Cost-Effective Solutions: Optimize your operations and reduce
                  costs with our efficient dispatching services.
                </li>
              </ul>
            </p>
            <p className="clamp4cc">
              <strong>Get Started Today!</strong>
              <br />
              Ready to take your logistics operations to the next level? Contact
              us today to learn more about our services and how we can help you
              achieve your goals.
            </p> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Logistic;
