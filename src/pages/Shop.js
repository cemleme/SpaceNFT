import React, { useState } from "react";
import styled from "styled-components";
import {ShopCard} from '../components/ShopCard.js'
export const Shop = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <ShopRoot>
      <ShopCard />
      <ShopCard />
      <ShopCard />
    </ShopRoot>
  );
};
const ShopRoot = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;