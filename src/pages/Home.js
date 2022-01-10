import React from "react";
import styled from "styled-components";

export const Home = () => {
  return (
    <HomePageWelcomeRoot>
      <Title>GRB GALAXY - NFT GAME</Title>
      <Home_description>
        GRB Galaxy is developed for Moralis - Avalanche Hackathon 2021 - with a
        roadmap for future development in mind. Connect with your wallet and
        start exploring the galaxy.
      </Home_description>
      <BF5downarrow
        src={
          "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/993b7b24-5037-410d-8637-2970344ece8d.svg?alt=media&token=e1b1cf79-5a75-415a-97fa-3f9b92bcc3cb"
        }
      />
      <Connect>CONNECT</Connect>
    </HomePageWelcomeRoot>
  );
};
const HomePageWelcomeRoot = styled.div`
  width: 100%;
  margin-top:50px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: #ffffff;
  text-align: center;
  font-size: 40px;
  font-family: Rajdhani;
  font-weight: 500;
  letter-spacing: 4.8px;
  width: 683px;
  height: 96.36px;
  margin-bottom: 32px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0px;
  padding-top: 23.82px;
  padding-bottom: 23.82px;
  padding-left: 3.98px;
  padding-right: 2.02px;
`;
const Home_description = styled.div`
  color: #ffffff;
  width: 60%;
  text-align: center;
  font-size: 20px;
  font-family: Rajdhani;
  font-weight: 500;
  letter-spacing: 0.24px;
  margin-bottom: 50px;
`;
const Connect = styled.div`
  color: #ffffff;
  font-size: 22px;
  font-family: Rajdhani;
  font-weight: 500;
  letter-spacing: 0.84px;
`;
const BF5downarrow = styled.img`
  margin-bottom: 50px;
`;
