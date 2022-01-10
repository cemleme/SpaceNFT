import React from "react";
import styled from "styled-components";
export const ShipStats = (props) => {
  return (
    <Stats>
      <StatRow>
        <StatData>
          <StatTitle>HEALTH</StatTitle>
          <StatValue>
             {props.stats.hp}
          </StatValue>
        </StatData>
        <SeperatorLine />
      </StatRow>
      <StatRow>
        <StatData>
          <StatTitle>ATTACK</StatTitle>
          <StatValue>{props.stats.attack}</StatValue>
        </StatData>
        <SeperatorLine />
      </StatRow>
      <StatRow>
        <StatData>
          <StatTitle>TRAVEL SPEED</StatTitle>
          <StatValue>{props.stats.travelSpeed}</StatValue>
        </StatData>
        <SeperatorLine />
      </StatRow>
      <StatRow>
        <StatData>
          <StatTitle>MINING SPEED</StatTitle>
          <StatValue>{props.stats.miningSpeed}</StatValue>
        </StatData>
        <SeperatorLine />
      </StatRow>
    </Stats>
  );
};

const Stats = styled.div`
  height: 154px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StatRow = styled.div`
  height: 29.76px;
  margin-bottom: 10.43px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const StatTitle = styled.div`
  color: #ffffff;
  width: auto;
  height: 26.79px;
  font-size: 12px;
  font-family: Rajdhani;
  font-weight: 500;
  letter-spacing: 0.64px;
`;
const StatData = styled.div`
  margin-left: 7.32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const SeperatorLine = styled.img`
  background-color: #ffffff22;  
width: 145px;
  height: 1px;
  align-self: stretch;
`;
const StatValue = styled.div`
  color: #ffffff;
  text-align: right;
  width: 57.87px;
  height: 26.79px;
  font-size: 14px;
  font-family: Rajdhani;
  font-weight: 500;
  letter-spacing: 0.64px;
`;
