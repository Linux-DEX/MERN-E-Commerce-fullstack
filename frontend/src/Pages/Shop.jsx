import React from 'react'
import Hero from '../Components/Hero.jsx/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections.jsx/NewCollections'

const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
    </div>
  )
}

export default Shop