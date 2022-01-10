import React from "react";
import styled from "styled-components";
import { ReactComponent as IconCrystal } from "./Crystal.svg";
import { ReactComponent as IconMineral } from "./Mineral.svg";
import { useMoralis } from "react-moralis";

export const UserData = () => {
  const { isAuthenticated, account, logout } = useMoralis();
  return (
    <>
      {isAuthenticated && account && (
        <UserDataRoot>
          <Disconnect onClick={logout}>DISCONNECT</Disconnect>
          <UserAddress>
            {account.substring(0, 4)}...{account.substring(account.length - 4)}
          </UserAddress>
          <Assets>
            <Mineral>
              <MineralAmount>23434234234234</MineralAmount>
              <IconMineral />
            </Mineral>
            <Crystal>
              <CrystalAmount>2500</CrystalAmount>
              <IconCrystal />
            </Crystal>
            <Fuel>
              <FuelAmount>23434234234234</FuelAmount>
              <Mineral1
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/98d12377-0073-4eee-8c91-e9528a618316.png?alt=media&token=0b0e5941-c292-4acb-b864-b92c78a2bde9"
                }
              />
            </Fuel>
          </Assets>
        </UserDataRoot>
      )}
    </>
  );
};
const UserDataRoot = styled.div`
  position: absolute;
  top: 25px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: right;
  margin: auto;
`;
const UserAddress = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-family: Rajdhani;
  font-weight: 500;
  letter-spacing: 0.66px;
  margin-right: 10px;
  margin-left: auto;
`;
const Disconnect = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-family: Rajdhani;
  font-weight: 500;
  letter-spacing: 0.84px;
  margin-right: 10px;
  margin-left: auto;
`;
const Assets = styled.div`
  width: 244px;
  height: 160px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding-top: 16px;
  padding-bottom: 19px;
  padding-left: 52px;
  align-items: flex-end;
`;
const Mineral = styled.div`
  width: 232px;
  height: 37px;
  overflow: hidden;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  padding-left: 3px;
  padding-right: 3px;
  align-items: flex-start;
`;
const MineralAmount = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-family: Rajdhani;
  font-weight: 500;
  letter-spacing: 0.66px;
  margin-top: 3px;
`;
const Crystal = styled.div`
  width: 241px;
  overflow: hidden;
  margin-bottom: 24px;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 6px;
  align-items: flex-start;
`;
const CrystalAmount = styled.div`
  color: #ffffff;
  width: 47px;
  height: 23.42px;
  font-size: 16px;
  font-family: Rajdhani;
  font-weight: 500;
  letter-spacing: 0.66px;
  margin-top: 3.6px;
`;
const Fuel = styled.div`
  width: 232px;
  height: 35px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 1px;
  padding-bottom: 1px;
  align-items: flex-start;
`;
const FuelAmount = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-family: Rajdhani;
  font-weight: 500;
  letter-spacing: 0.66px;
  margin-top: 2px;
`;
const Mineral1 = styled.img`
  width: 40px;
  height: 40px;
  align-self: stretch;
`;
