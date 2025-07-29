import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ServicesCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>
          <h1 className="clamp2">{props.title}</h1>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <p className="clamp4cc">{props.description}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ServicesCard;
