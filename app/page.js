

import React from 'react'
import './globals.css'
  //import Paris from '../components/Paris'
//import Navbar from '../components/Navbar'
//import Header from '../components/Header'
//import Hero from '../components/Hero'
import Awards from '@components/Awards'
import Team from '@components/Team'
import Fin from '@components/Fin'
import Location from '@components/Location'
import Featured from '@components/Featured/Featured'
import Price from '@components/price/Price'
import Recent from '@components/recent/Recent'
const page = () => {
  return (
    <div className="bg-primary-black overflow-hidden">page
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Fin/>
      <Location/>
      <Recent/>
  <Price/>
      <Featured/>
      <Awards/>
      <Team/>
      <i class="fa fa-facebook" aria-hidden="true"></i>
    </div>
  )
}

export default page