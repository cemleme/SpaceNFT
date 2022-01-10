
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./TopMenu.css";
import {MenuButton} from './components/MenuButton.js';
import { useDispatch } from "react-redux";
import { useMoralis } from "react-moralis";

export const TopMenu = () => {

  const { web3, enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, logout } = useMoralis();
  const dispatch = useDispatch();
  const [activate, setActivate] = useState(true);
  
  useEffect(() => {
    if(isAuthenticated) switchNetwork();

    setActivate(false);
    const timeout = setTimeout(() => setActivate(true), 1000);
    return () => clearTimeout(timeout);
  }, [isAuthenticated]);

  const switchNetwork = async () => {
    if(!isWeb3Enabled){
        await enableWeb3();
    }

    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0xA869" }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await web3.currentProvider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0xA869",
                chainName: "Avalanche Testnet",
                rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
                nativeCurrency: {
                  name: "AVAX",
                  symbol: "AVAX",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://testnet.snowtrace.io/"],
              },
            ],
          });
        } catch (error) {
          alert(error.message);
        }
      }
    }
  }

  const login = async () => {
    await authenticate();
    switchNetwork();
  }


  return (
      <Menu>
        <Group>
          <MenuButton title='HOME' link="/home" nav={true} />
          <MenuButton title='EXPLORE' link='/explore' nav={true} />
          <MenuButton title='FLEET' link='/fleet' nav={true} />
          <MenuButton title='REFINERY' link='/refinery' nav={true} />
          <MenuButton title='INVENTORY' link='/inventory' nav={true} />
          <MenuButton title='SHOP' link='/shop' nav={true} />
          {!isAuthenticated && <MenuButton title='CONNECT' buttonHandler={() => login()}  />}
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
