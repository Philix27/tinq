// import Image from 'next/image';

import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import styles from './styles.module.css'
import { socialContents } from './constants';


export default function Socials() {
    return (
      <div className='section social' id="social">
          <div className='sectionTitle' >Flashcards</div >
        
        <div className='gridContainer'>
      {socialContents.map(({
    title,
    image,
    id,
  }) => (
        <motion.div
          key={id}
          className='card'
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{duration: 1.7, delay: 1, type: "spring", stiffness:"110"}}>          
          
            <img className='img' src={image} />
       
          <div >
          <h3 className='cardTitle'>{title}</h3>
        </div>
       
      
       </motion.div>
      ))}
    </div>
           
        </div>
        //  </div>
    )
}
