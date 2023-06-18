import React from "react"
import img from "../images/city-1.jpg"
import Back from "../common/back"
import "../Featured/fuck.css"
import FeaturedCard from "../Featured/FeaturedCard"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services