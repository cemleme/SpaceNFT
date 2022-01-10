import React, { useState, useEffect } from "react";
import { Card, Button, Text, FrameBox } from "@arwes/core";
import {
  GiPowerLightning,
  GiBoltShield,
  GiGasPump,
  GiLaserburn,
} from "react-icons/gi";
import ReactTooltip from "react-tooltip";
import useContract from "./hooks/useContract";

const ShipCard = (props) => {
  const { contract } = useContract();
  const [inspect, setInspect] = useState(false);
  const [activate, setActivate] = useState(true);
  const [shipData, setShipData] = useState(null);

  useEffect(async () => {
    if (!contract) return;
    const tokenURI = await contract.methods.tokenURI(props.id).call();
    console.log("cem tokenURI", tokenURI);
    const metadataURI = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/");
    const metadataJSON = await fetch(metadataURI);
    const metadata = await metadataJSON.json();
    const imageURI = metadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");

    setShipData({
      title: metadata.name,
      attack: metadata.attributes[3].value,
      shield: metadata.attributes[4].value,
      speed: metadata.attributes[5].value,
      fuelCapacity: metadata.attributes[6].value,
      image: imageURI,
      metadata: metadataURI,
    });

    console.log("cem", metadata);
  }, [contract]);

  useEffect(() => {
    setShipData(props.shipData);
    const timeout = setTimeout(() => setActivate(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const openMetadata = () => {
    console.log('cem',shipData.metadata)
    window.open(shipData.metadata, "_blank");
  }

  return (
    shipData && (
      <Card
        animator={{ root: true }}
        image={{
          src: shipData.image
            ? shipData.image
            : `/sprites/${shipData.skinName}.png`,
          alt: shipData.title,
        }}
        title={shipData.title}
        options={
          <Button palette="secondary" onClick={props.onInspect}>
            <Text>Inspect 3D</Text>
          </Button>
        }
        style={{ maxWidth: 400, width: 300, margin: "5px" }}
      >
        <div className="shipIcons">
          <Text>
            <span data-tip="Attack per Level">
              <GiLaserburn /> {shipData.attack}
            </span>
          </Text>
          <Text>
            <span data-tip="Shield per Level">
              <GiBoltShield /> {shipData.shield}
            </span>
          </Text>
          <Text>
            <span data-tip="Speed per Level">
              <GiPowerLightning /> {shipData.speed}
            </span>
          </Text>
          <Text>
            <span data-tip="Fuel per Level">
              <GiGasPump /> {shipData.fuelCapacity}
            </span>
          </Text>
          <ReactTooltip />
        </div>

        <Text>
          Level: {props.shipData.level}
          <br />
          Experience: {props.shipData.experience}
          <br />
          Fuel: {props.shipData.fuel}
          <br />
        </Text>

        {shipData.metadata && <div className="buttonMetadata">
          <Button palette="primary" onClick={openMetadata} animator={{ root: true }}>
            <Text>NFT Metadata</Text>
          </Button>
        </div>}
      </Card>
    )
  );
};

export default ShipCard;
