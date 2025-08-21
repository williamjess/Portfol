import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3 style={{ textAlign: "justify" }}>
            <br />

            <p>
              Hi, I'm <span className="purple">William Jess</span> from{" "}
              <span className="purple">Belfast, Northern Ireland.</span>
            </p>

            <br />

            <p>
              I'm a Site Operations Engineer currently working at ESO, and I'm interested
              in SRE, Cloud Operations Engineer and Systems Engineer roles.
            </p>

            <br />

            <p>
              Feel free to review my tech stack below and visit my{" "}
              <a
                href="https://github.com/williamjess"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="purple">Github</span>
              </a>{" "}
              profile, or send me a message via email or linkedin to assess my fit for any role.
            </p>
          </h3>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

