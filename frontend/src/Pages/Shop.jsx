import React from 'react'
import Hero from '../Components/Hero.jsx/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections.jsx/NewCollections'
import NewLetter from '../Components/NewLetter/NewLetter'

const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <NewLetter />
    </div>
  )
}

export default Shop