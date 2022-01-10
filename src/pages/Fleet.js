import React from "react";
import { ShipCard } from "../components/ShipCard.js";
export const Fleet = () => {
  return (
    <>
      <div className="pageTitle"> Fleet </div>
      <div className="shipGrid">
        <ShipCard />
        <ShipCard />
        <ShipCard />
        <ShipCard />
      </div>
    </>
  );
};
