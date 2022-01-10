import React from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from "../svg/iconObjective.svg";
import { motion } from "framer-motion";

const iconMotion = {
  rest: { width:20, height:25, duration: 0.2, type: "tween" },
  hover: {
    width:22,
    height:27,
    transition: {
      duration: 0.2,
      type: "tween",
    },
  },
};

export const IconObjective = (props) => {

const onClickIcon = () => {
    alert('cemcem');
}

  return (
      <motion.svg onClick={onClickIcon} initial="rest" whileHover="hover" animate="rest" variants={iconMotion}>
        <Icon />
      </motion.svg>
  );
};
