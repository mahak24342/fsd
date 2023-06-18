import React from "react"
import Heading from "../common/heading"

import FeaturedCard from "../Featured/FeaturedCard"
import      "../Featured/fuck.css"
const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Featured Property Types' subtitle='Find All Type of Property.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured