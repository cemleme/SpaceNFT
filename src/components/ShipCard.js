import React from "react";
import styled from "styled-components";
import {CardButton} from '../components/CardButton.js';
import {ShipStats} from '../components/ShipStats.js';
import { motion } from "framer-motion";

const imageMotion = {
  rest: { scale:1, duration: 0.2, type: "tween" },
  hover: {
    scale:1.1,
    transition: {
      duration: 0.2,
      type: "tween",
    },
  },
};

export const ShipCard = () => {
  return (
    <ShipCardRoot initial="rest" whileHover="hover" animate="rest">
      <ContentBG>
        <Title>Test Range</Title>
        <Group>
          <ShipStats />
          <Buttons>
            <CardButton title='METADATA2' />
            <CardButton title='UPGRADE' />
            <CardButton title='ADD TO FLEET' />
            <CardButton title='INSPECT 3D' />
          </Buttons>
        </Group>
      </ContentBG>
      <CardImage
        variants={imageMotion}
        src={`/sprites/commander1.png`}
      />
    </ShipCardRoot>
  );
};
const ShipCardRoot = styled(motion.div)`
  width: 300px;
  height: 472px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 4px -2px #0ff;
`;
const ContentBG = styled.div`
  background-color: #ffffff06;
  height: 454px;
  position: absolute;
  top: 0;
  left: -1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0px;
  padding: 9px;
`;
const Title = styled.div`
  color: #ffffff;
  width: 299px;
  font-size: 22px;
  font-family: Rajdhani;
  font-weight: 700;
  letter-spacing: 1.12px;
  padding-left: 15px;
`;
const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Buttons = styled.div`
  height: 178px;
  overflow: hidden;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 9px;
  padding-left: 8px;
`;
const CardImage = styled(motion.img)`
  width: 367px;
  height: 249px;
  position: absolute;
  top: -11px;
  left: -9px;
`;