import React from "react";
import styled from "styled-components";
import "./TopMenu.css";
import {MenuButton} from './components/MenuButton.js';

export const TopMenu = () => {
  return (
      <Menu>
        <Group>
          <MenuButton title='HOME' link="/home" />
          <MenuButton title='EXPLORE' link='/explore' />
          <MenuButton title='FLEET' link='/fleet' />
          <MenuButton title='REFINERY' link='/refinery' />
          <MenuButton title='INVENTORY' link='/inventory' />
          <MenuButton title='SHOP' link='/shop' />
          <MenuButton title='CONNECT' link='/connect' />
        </Group>
        <Linebelow />
      </Menu>
  );
};
const Menu = styled.div`
  position: absolute;
  top: 20px;
  left: 40px;
  height: 44.2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Group = styled.div`
  height: 43.7px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 0.54px;
  padding-right: 0.54px;
  align-items: center;
`;
const Menu__line = styled.img`
  width: 100%;
  height: 1px;
`;
const Linebelow = styled.div`
  height: 1px;
  width: 95%;
  background-color: #ffffff11;
  position: absolute;
  bottom: 0px;
  left: 0;
`;
