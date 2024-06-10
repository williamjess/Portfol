import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      
      <Card.Body>
        
        <blockquote className="blockquote mb-0">
          <h3 style={{ textAlign: "justify",  }}>
          
            
          <br /> 
 
          <br />
           <p> Hi, I'm <span className="purple">William Jess </span>
            from <span className="purple"> Belfast, Northern Ireland.</span> </p>
            <br />    
            <p>I'm a Computer Science graduate from Ulster University.</p>
            <br />
            I make <span className="purple"> fullstack applications</span>, and am currently open to full time roles.
          </h3>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
