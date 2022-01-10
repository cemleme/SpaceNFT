import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./ShopCard.css";


const contentMotion = {
    rest: { scale: 1, opacity: 0.7, duration: 0.2, type: "tween" },
    hover: {
      scale: 1.2,
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
      }
    }
  };

  const overlayMotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    }
  };

export const ShopCard = () => {
  return (
    <ShopItem initial="rest" whileHover="hover" animate="rest">
      <ShopImageHolder>
        <ShopImage
          src={
            "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/f18565ef-5719-4535-9e98-0ccfa6b9ea18.png?alt=media&token=6dae48eb-8012-4a5f-979c-ec4b15b926cd"
          }
        />

      <Overlay variants={overlayMotion} />
      </ShopImageHolder>

      <motion.div className="shopCardTitle" variants={contentMotion}>
        combat vehicles
      </motion.div>
    </ShopItem>
  );
};
const ShopItem = styled(motion.div)`
  cursor: pointer;
  width: 250px;
  height: 160px;
  position: relative;
  overflow: hidden;
`;
const ShopImageHolder = styled.div`
  width: 250px;
  height: 160px;
  position: absolute;
  top: 0;
  left: 0;
`;
const ShopImage = styled.img`
  width: 100%;
  height: 100%;
`;
const Overlay = styled(motion.div)`
  background-color: #c4c4c433;
  width: 250px;
  height: 160px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
