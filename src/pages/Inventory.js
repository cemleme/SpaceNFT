import React, { useState, useEffect } from "react";
import { ShipCard } from "../components/ShipCard.js";
import ShipModal from "../components/ShipModal";
import Modal from "react-modal";
import useContract from "../hooks/useContract";
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

export const Inventory = () => {
  const { contract } = useContract();
  const { account } = useMoralis();

  const [inspect, setInspect] = useState(false);
  const [inspectedShip, setInspectedShip] = useState(null);
  const [userShips, setUserShips] = useState([]);

  const updateUserShips = async () => {
    if (!contract) return;
    const userShips = await contract.methods.getUserShips(account).call();
    console.log(" shipCount", userShips);
    setUserShips(userShips);
  };

  useEffect(() => {
    updateUserShips();
  }, [contract]);

  useEffect(async () => {
    if (userShips.length === 0) return;
    let calls = [];
    for (let i = 0; i < userShips.length; i++) {
      calls.push(contract.methods.spaceshipData(userShips[i]).call());
    }
    const shipsData = await Promise.all(calls);
    
    for (let i = 0; i < shipsData.length; i++) {
      const shipData = shipsData[i];

      shipData.id = userShips[i];

      if (shipData.shipType === "0") {
        shipData.modelName = "commander";
      } else if (shipData.shipType === "1") {
        shipData.modelName = "battleship";
      } else if (shipData.shipType === "2") {
        shipData.modelName = "defender";
      } else if (shipData.shipType === "3") {
        shipData.modelName = "scout";
      }

      shipData.skinName = shipData.modelName + (parseInt(shipData.skin) + 1).toString();

      shipData.color = "red";
      shipData.title = shipData.modelName;
    }

    console.log(" shipsData 2", shipsData);

    setFleetData(shipsData);
  }, [contract, userShips]);

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
      <div className="shipGrid">
        {fleetData.map((ship) => (
          <ShipCard
            key={ship.id}
            id={ship.id}
            shipData={ship}
            onInspect={() => inspectShip(ship.skinName)}
          />
        ))}
      </div>

      <Modal isOpen={inspect} onRequestClose={closeModal} style={customStyles}>
        {inspectedShip && <ShipModal shipName={inspectedShip} />}
      </Modal>
    </>
  );
};