import React from "react";
import Navbar from "../Navbar/Navbar";
import ItemComponent from "../itemComponent.js/ItemComponent";
import ElectronicsData from "./ElectronicsData";

export default function Electronics() {
  return (
    <div>
      <Navbar />
      <ItemComponent
        data={ElectronicsData}
        heading="Add Your Favourite Item in the Cart"
      />
    </div>
  );
}
