import React from "react";
import Navbar from "../Navbar/Navbar";
import GadgetsData from "./GadgestData";
import "./Gadgets.css";
import ItemComponent from "../itemComponent.js/ItemComponent";

export default function Gadgets() {
  return (
    <>
      <Navbar />
      <ItemComponent
        data={GadgetsData}
        heading="Add Your Favourite Item in the Cart"
      />
    </>
  );
}
