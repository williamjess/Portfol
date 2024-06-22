import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";

import suicide from "../../Assets/Projects/suicide.png";


import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've made recently. 
          <br></br>
          I always have something in the works though.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CryptoBuff"
              description="Fully functioning Cryptocurrency tracking application using React, TailwindCSS and Rechart. Relays data in text and chart form,
              permits user pagination, sorting and saving of items. Updates in real time using data pulled from free CoinGecko API, and hosted on Vercel."
              ghLink="https://github.com/williamjess/CryptoBuff"
              demoLink="https://crypto-buff.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DotaJet"
              description="Prototype framework for a Dota2 coaching and information website. Allows players to sign up, store data, be paired with a coach in order to improve 
              their technical skills. Implented using Nextjs, TypeScript, JavaScript, TailWind for CSS, and Vercel. "
              ghLink="https://github.com/williamjess/DotaJet"
              demoLink="https://dota-jet.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="BookHub"
              description="Fullstack book indexing application for ranking and finding books. Implemented using Python, Mongodb, and Angular, users
              can register, rank and change book records and reviews fetched from Amazons API.
              Full backend CRUD functionality and book review publication through social media integration.
              User login and account security using Firebase and 2FA."
              ghLink="https://github.com/williamjess/BookHub"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
           
              imgPath={leaf}
              isBlog={false}
              
              title="Counted"
              description="Mobile app for tracking calories and calculating BMI values. Implemented using Android Studio, Kotlin, Java, and Firebase.
              Has API features for dietary record keeping, gonna add barcode scanning soon."
              ghLink="https://github.com/williamjess/Counted"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Tron"
              description="Tron themed AI chat app with an OpenAI API and Node.js. Just for fun, a tron themed CLI, designed to emulate scifi artificial intelligence."
              ghLink="https://github.com/williamjess/Tron"
              
            />
          </Col>

      

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
