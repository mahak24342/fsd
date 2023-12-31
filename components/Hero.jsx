import React from "react"
//import Heading from "../../common/Heading"
import "../styles/hero.css"

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className='container'>
          <input title='Search Your Next Home ' placeholder='Find new & featured property located in your local city.' />

          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Hero