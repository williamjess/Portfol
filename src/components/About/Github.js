import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        2024 <strong className="purple"> Coding</strong>
      </h1>
      <GitHubCalendar
        username="williamjess"
        blockSize={25}
        blockMargin={9}
        color="#FF3232 "
        fontSize={36}
      />
    </Row>
  );
}

export default Github;
