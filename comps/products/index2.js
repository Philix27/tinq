import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import styles from './projects.module.css'
import { projects } from './constants';
import { HeaderThree, Tag, TagList, TitleContent, } from './projectsStyles';


export default function Projects() {

  const listic = [
    projects[0],
    projects[1],
    projects[2],
    projects[3],
    projects[4],
    projects[5],
  ];
    return (
      <>
        <div className='section' id="projects">
       
          <h1 className='sectionTitle'>Products</h1>
        
             <div className={styles.gridContainer}>
      {listic.map(({
    title,
    image,
    detailsPage,
    id,
  }) => (
        <motion.div
          key={id}
          className={styles.card}
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{duration: 1.7, delay: 1, type: "tween", }}>
          <a href={detailsPage} ><img className={styles.img} src={image} /></a>
        {/* <BlogCard> */}
        <TitleContent>
          <HeaderThree >{title}</HeaderThree>
        </TitleContent>
        
       {/* </BlogCard> */}
       </motion.div>
      ))}
    </div>
           
         </div>
        <div className='section'>
          <Link href="/projects">
            <a className='btn'>Start Shopping</a>
          </Link>
         </div>
      </>
    )
}
