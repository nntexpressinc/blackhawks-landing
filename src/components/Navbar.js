import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { CiCircleChevDown } from "react-icons/ci";
import { motion } from "framer-motion";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { mainLogo } from "../img";

function NavBar() {
  const navigate = useNavigate();
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const servicesData = [
    {
      id: 2,
      title: "LOGISTICS SERVICES",
      icon: <CgFileDocument />,
      link: "/logistics",
    },
  ];
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  const handleClickServices = (service) => {
    navigate(`${service.link}`);
    updateExpanded(false);
    setIsOpen(false);
  };

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "sticky"}
    >
      <Container>
      <Navbar.Brand href="/" className="d-flex">
          <img src={mainLogo} className="main-logo" style={{ width: "160px", height: "110px"}}  alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/logistics"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Services
              </Nav.Link>
            </Nav.Item>
            <motion.div
            className="d-md-none mobile-services-container"
              initial={{ height: 0, scale: 0 }}
              animate={{ height: isOpen ? 100 : 0, scale: isOpen ? 1 : 0 }}
            >
              {servicesData.map((item, idx) => (
                <p
                  className="text-center cursor-pointer mobile-services"
                  onClick={() => handleClickServices(item)}
                  key={idx}
                >
                  {item.title}
                </p>
              ))}
            </motion.div>
            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/portfolio"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Portfolio
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/vacancies"
                onClick={() => updateExpanded(false)}
              >
                <CgGitFork style={{ marginBottom: "2px" }} /> Vacancies
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blog"
                onClick={() => updateExpanded(false)}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blog
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Vacancies
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;