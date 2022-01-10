import React, { useState } from "react";
import styled from "styled-components";
import "./MenuButton.css";
import {
  NavLink
} from "react-router-dom";


export const MenuButton = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <NavLink
      to={props.link}
      className="menuButton"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={({ isActive }) => {
              return {
                color: isActive ? "white" : ""
              };
            }}
    >
      {props.title}
    </NavLink>
  );
};
