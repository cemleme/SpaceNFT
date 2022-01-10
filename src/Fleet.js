import React, { useState, useEffect } from "react";
import ShipCard from "./ShipCard";
import ShipModal from "./ShipModal";
import { Animator } from "@arwes/animation";
import { FrameBox, Button, FrameCorners, Text } from "@arwes/core";
import Modal from "react-modal";
import useContract from "./hooks/useContract";
import { useMoralis } from "react-moralis";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#000",
  },
  overlay: {
    backgroundColor: "#000000aa",
  },
};

Modal.setAppElement("#root");

const Fleet = () => {
  const { contract } = useContract();
  const { account } = useMoralis();

  const [inspect, setInspect] = useState(false);
  const [inspectedShip, setInspectedShip] = useState(null);
  const [activate, setActivate] = useState(true);
  const [shipCount, setShipCount] = useState(0);

  const updateShipCount = async () => {
    if (!contract) return;
    const shipCount = await contract.methods.balanceOf(account).call();
    console.log('cem shipCount', shipCount);
    setShipCount(shipCount);
  };

  const createCommander = async () => {
    await contract.methods.createCommander().send({from: account});
    setShipCount(1);
  };

  useEffect(() => {
    updateShipCount();
    const timeout = setTimeout(() => setActivate(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    updateShipCount();
  }, [contract]);

  useEffect(async () => {
    if (shipCount === 0) return;
    let calls = [];
    for (let i = 0; i < shipCount; i++) {
      calls.push(contract.methods.userShips(account, i).call());
    }
    const shipIds = await Promise.all(calls);
    calls = [];
    for (let i = 0; i < shipCount; i++) {
      calls.push(contract.methods.spaceships(shipIds[i]).call());
    }
    const shipsData = await Promise.all(calls);

    const fleet = []
    for (let i = 0; i < shipsData.length; i++) {
      const shipData = {...shipsData[i]};
      shipData.id = shipIds[i];

      if(shipData.shiptype === '0'){
        shipData.modelName = 'commander';
      }
      else if(shipData.shiptype === '1'){
        shipData.modelName = 'battleship';
      }
      else if(shipData.shiptype === '2'){
        shipData.modelName = 'defender';
      }
      else if(shipData.shiptype === '3'){
        shipData.modelName = 'scout';
      }

      shipData.skinName = shipData.modelName + (parseInt(shipData.skin) + 1).toString();

      shipData.color = 'red';
      shipData.title = shipData.modelName;

      fleet.push(shipData);
    }

    setFleetData(fleet);

  }, [contract, shipCount]);

  function closeModal() {
    setInspect(false);
  }

  const [fleetData, setFleetData] = useState([]);

  const inspectShip = (shipName) => {
    setInspectedShip(shipName);
    setInspect(true);
  };

  return (
    <>
      <Animator animator={{ activate, manager: "stagger" }}>
        <FrameBox
          animator={{ root: true }}
          palette="secondary"
          linesWidths={[2, 0, 4, 0]}
        >
          {shipCount == 0 && (
            <Button
              hover
              FrameComponent={FrameCorners}
              className="menuButton"
              onClick={createCommander}
            >
              <Text>Create your commander!</Text>
            </Button>
          )}
          <div className="gridCard" style={{width:'80%'}}>
            {fleetData.map((ship) => (
              <ShipCard
                key={ship.id}
                id={ship.id}
                shipData={ship}
                onInspect={() => inspectShip(ship.skinName)}
              />
            ))}
          </div>
        </FrameBox>
      </Animator>

      <Modal isOpen={inspect} onRequestClose={closeModal} style={customStyles}>
        <Animator animator={{ inspect, manager: "stagger" }}>
          <FrameBox style={{ width: 510, height: 310 }}>
            {inspectedShip && <ShipModal shipName={inspectedShip} />}
          </FrameBox>
        </Animator>
      </Modal>
    </>
  );
};

export default Fleet;
