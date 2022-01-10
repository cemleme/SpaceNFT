import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const buttonMotion = {
  rest: { backgroundColor: "#000000", duration: 0.2, type: "tween" },
  hover: {
    backgroundColor: "#ffffff",
    transition: {
      duration: 0.2,
      type: "tween",
    },
  },
};

const textMotion = {
  rest: { color: "#fff", duration: 0.2, type: "tween" },
  hover: {
    color: "#000",
    transition: {
      duration: 0.2,
      type: "tween",
    },
  },
};

export const CardButton = (props) => {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest">
      <Button variants={buttonMotion}>
        <Title1 variants={textMotion}>{props.title}</Title1>
      </Button>
    </motion.div>
  );
};
const Button = styled(motion.div)`
  cursor: pointer;
  border-width: 1px;
  border-color: #ffffff;
  border-style: solid;
  width: 113px;
  height: 31px;
`;
const Title1 = styled(motion.div)`
  text-align: center;
  font-size: 14px;
  margin-top: 6px;
  font-family: Rajdhani;
  font-weight: 600;
  letter-spacing: 0.96px;
`;
