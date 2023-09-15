import React from 'react'
import Navbar from '../Navbar/Navbar'
import ItemComponent from '../itemComponent.js/ItemComponent'
import ElectronicsData from '../Electronics/ElectronicsData'
import GadgetsData from '../Gadgets/GadgestData'
import FashionData from '../Fashion/FashionData'

export default function Home() {
  return (
    <>
    <Navbar />
    <ItemComponent data={ElectronicsData} heading = "Welcome to Shopcart" />
    <ItemComponent data={GadgetsData} />
    <ItemComponent data={FashionData} />
    </>
  )
}
