"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'
import styles from '../styles/index'
const Navbar = () => {
  return (
    <div className='bg-primary-black overflow-hidden'>
        <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`${styles.xPaddings} py-8 relative`}>
            navar
        </motion.nav>
    </div>
  )
}

export default Navbar