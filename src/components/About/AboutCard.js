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
              I'm a Computer Science graduate from Ulster University, and I'm
              currently open to full-time roles at Junior or Entry-Level.
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
              profile to assess my fit for any role.
            </p>
          </h3>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

