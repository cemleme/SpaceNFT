import React, { useState, useEffect } from "react";
import { Animator } from "@arwes/animation";
import { FrameBox, Button, FrameCorners, Text, Card } from "@arwes/core";
import Modal from "react-modal";
import useContract from "./hooks/useContract";
import { useMoralis } from "react-moralis";

Modal.setAppElement("#root");

const Shop = () => {
  const { contract } = useContract();
  const { account } = useMoralis();
  const [activate, setActivate] = useState(true);

  const buySinglePack = async () => {
    await contract.methods
      .buySingleBooster()
      .send({ from: account, value: "1000000000000000000" });
  };

  const buyThreeShipPack = async () => {
    await contract.methods
      .buyThreeShipBooster()
      .send({ from: account, value: "2000000000000000000" });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setActivate(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Animator animator={{ activate, manager: "stagger" }}>
        <FrameBox
          animator={{ root: true }}
          palette="secondary"
          linesWidths={[2, 0, 4, 0]}
        >
          <div style={{ display: "flex" }}>
            <Card
              animator={{ root: true }}
              image={{
                src: `/sprites/commander1.png`,
                alt: "Booster Pack - Single Ship",
              }}
              title="Booster Pack - Single Ship!"
              options={
                <Button palette="secondary" onClick={buySinglePack}>
                  <Text>Buy - 1 AVAX </Text>
                </Button>
              }
              style={{ maxWidth: 400, margin: "5px" }}
            >
              <Text>
                Random ship. Can result in either Battleship, Defender or Scout.{" "}
                <br />
                The stats will be randomly decided. <br />
              </Text>
            </Card>

            <Card
              animator={{ root: true }}
              image={{
                src: `/sprites/commander1.png`,
                alt: "Booster Pack - Three Ships",
              }}
              title="Booster Pack - Three Ships!"
              options={
                <Button palette="secondary" onClick={buyThreeShipPack}>
                  <Text>Buy - 2 AVAX </Text>
                </Button>
              }
              style={{ maxWidth: 400, margin: "5px" }}
            >
              <Text>
                Three ships from each type (Battleship, Defender or Scout).{" "}
                <br />
                The stats will be randomly decided. <br />
              </Text>
            </Card>
          </div>
        </FrameBox>
      </Animator>
    </>
  );
};

export default Shop;
