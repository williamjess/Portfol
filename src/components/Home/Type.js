import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Site Reliability Engineering",
          "Cloud Ops",
          "Incident Management and Response",
          "",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        delay: 20,
      }}
    />
  );
}

export default Type;
