import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FrameCorners, Button, Text } from "@arwes/core";
import { useMoralis } from "react-moralis";

const Menu = () => {
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
    <>
      <FrameCorners animator={{ activate }}>
        <div className="flexvertical">
          <Button
            hover
            FrameComponent={FrameCorners}
            className="menuButton"
            onClick={() =>
              dispatch({ type: "menuSelectPage", pageName: "HOME" })
            }
          >
            <Text>Home</Text>
          </Button>
          <Button
            hover
            FrameComponent={FrameCorners}
            className="menuButton"
            onClick={() =>
              dispatch({ type: "menuSelectPage", pageName: "OBJECTIVES" })
            }
          >
            <Text>Objectives</Text>
          </Button>
          <Button
            hover
            FrameComponent={FrameCorners}
            className="menuButton"
            onClick={() =>
              dispatch({ type: "menuSelectPage", pageName: "FLEET" })
            }
          >
            <Text>Fleet</Text>
          </Button>
          <Button
            hover
            FrameComponent={FrameCorners}
            className="menuButton"
            onClick={() =>
              dispatch({ type: "menuSelectPage", pageName: "SHOP" })
            }
          >
            <Text>Buy Ship</Text>
          </Button>
          {isAuthenticated && (
            <Button
              FrameComponent={FrameCorners}
              className="menuButton"
              onClick={() => logout()}
            >
              <Text>Logout</Text>
            </Button>
          )}
          {!isAuthenticated && (
            <Button
              FrameComponent={FrameCorners}
              className="menuButton"
              onClick={() => login()}
            >
              <Text>Login</Text>
            </Button>
          )}
        </div>
      </FrameCorners>
    </>
  );
};

export default Menu;
