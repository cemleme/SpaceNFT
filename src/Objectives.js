import React, { FC, useState, useEffect } from "react";
import { Animator } from "@arwes/animation";
import { Card, Button, Text, FrameBox } from "@arwes/core";

const Objectives = () => {
  const [activate, setActivate] = useState(true);
  useEffect(() => {
    console.log("cem fleet useEffect");
    const timeout = setTimeout(() => setActivate(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Animator animator={{ activate, manager: "stagger" }}>
        <FrameBox
          animator={{ activate }}
          palette="secondary"
          linesWidths={[2, 0, 4, 0]}
        >
          <Text>Objectives Page</Text>
        </FrameBox>
      </Animator>
    </>
  );
};

export default Objectives;
