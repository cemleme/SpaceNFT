import React from "react";
import styled from "styled-components";
export const ShipStats = () => {
  return (
    <Stats>
      <StatRow>
        <StatData>
          <StatTitle>HP</StatTitle>
          <StatValue>
            10 / 400
          </StatValue>
        </StatData>
        <SeperatorLine />
      </StatRow>
      <StatRow>
        <StatData>
          <StatTitle>ATTACK</StatTitle>
          <StatValue>25</StatValue>
        </StatData>
        <SeperatorLine />
      </StatRow>
      <StatRow>
        <StatData>
          <StatTitle>SHIELD</StatTitle>
          <StatValue>100</StatValue>
        </StatData>
        <SeperatorLine />
      </StatRow>
      <StatRow>
        <StatData>
          <StatTitle>SPEED</StatTitle>
          <StatValue>5</StatValue>
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
  width: 43.23px;
  height: 26.79px;
  font-size: 14px;
  font-family: Rajdhani;
  font-weight: 500;
  letter-spacing: 0.64px;
`;
const StatData = styled.div`
  width: 127.04px;
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
