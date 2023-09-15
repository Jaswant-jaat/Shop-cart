import React from "react";
import Navbar from "../Navbar/Navbar";
import ItemComponent from "../itemComponent.js/ItemComponent";
import FashionData from "./FashionData";

export default function Fashion() {
  return (
    <div>
      <Navbar />
      <ItemComponent
        data={FashionData}
        heading="Add Your Favourite Item in the Cart"
      />
    </div>
  );
}
