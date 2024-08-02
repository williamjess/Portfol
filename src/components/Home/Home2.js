import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            <br />
            <br />
            <br />
            <br /><br /><br />

              Quick <span className="purple"> facts </span> about me
            </h1>
            <p className="home-about-body">
           
             
              <br />I'm proficient in 
              <i>
                <b className="purple"> Python, TypeScript, and Java.  </b>
              </i>
              <br />
              <br />
              My interests are  &nbsp;
              <i>
                <b className="purple">Full Stack Development </b> and
                 anything related to {" "}
                <b className="purple">
                  Data Engineering and Analysis. 
                
                </b>
              </i>
              <br />
              <br />
              My private interests are 
             <i> <b className="purple">Fitness, Cybersecurity, </b> </i>
              <i>
                <b className="purple">
                  {" "}
                  Fintech,
                </b>
              </i>
              &nbsp; and 
              <i>
                <b className="purple"> Medical Technology Engineering,</b>
              </i>
              &nbsp; specifically 
              <i>
                <b className="purple"> Prosthetics Programming.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
           
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            
            <p>
              Feel free to <a href="mailto:williamjessdev@gmail.com" ><span className="purple"> email</span></a> or connect with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/williamjess"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/william-jess-4a982a97/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/lwlin_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
