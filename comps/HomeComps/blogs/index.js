// import Image from 'next/image';

import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import styles from './styles.module.css'
import { projects } from './constants';


export default function Services() {
    return (
      <div className='section services' id="services">
          <div className='sectionTitle' >Blogs</div >        
        <div className='gridContainer'>
      {projects.map(({
    title,
    description,
    image,
    visit,
    id,
  }) => (
        <motion.div
          key={id}
          className='card'
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{duration: 1.7, delay: 1, type: "spring", stiffness:"110"}}> 
          {/* transition={{duration: 1.7, delay: 1, type: "tween", }}> */}
          {/* <Image src={image} width={500} height={300}/> */}
          <Link href={visit} target="_blank">
            <img className='img' src={image} />
          </Link>
        {/* <BlogCard> */}
          <h3 className='headerThree'>{title}</h3>
          <div style={{padding: "0px 20px"}}>
            <div className='sectionText'>{description}</div>
            {/* <CardInfo>{description}</CardInfo> */}
        </div>
       
       {/* </BlogCard> */}
       </motion.div>
      ))}
    </div>
           
        </div>
        //  </div>
    )
}
