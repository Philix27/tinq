import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import styles from './projects.module.css'
import { projects } from './constants';
import { HeaderThree,  TitleContent, } from './projectsStyles';


export default function ProjectsGroup({ category }) {
  const projectll = projects.filter((project)=> {
                return project.group == category;
              });
  
    return (
      <div className='section'>

       

             <div className={styles.gridContainer}>
            {
    projectll.map(({
    title,
    description,
    detailsPage,
    image,
    tags,
        id,
    }) => (
     
        <motion.div
          key={id}
          className={styles.card}
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{duration: 1.7, delay: 1, type: "tween", }}>
          {/* transition={{duration: 1.7, delay: 1, type: "spring", stiffness:"110"}}> */}
          {/* <Image src={image} width={500} height={300}/> */}
        
           {/* <Link href=`/project/1${id}`><a><Img src={image} /> </a></Link> */}
           <Link href={detailsPage}><a><img className={styles.img} src={image} /> </a></Link>
        
        <TitleContent>
          <HeaderThree >{title}</HeaderThree>
        </TitleContent>
          <div style={{padding: "0px 20px"}}>
            <div className='sectionText'>{description}</div>
            {/* <CardInfo>{description}</CardInfo> */}
        </div>
       
       </motion.div>
      ))}
    </div>
           
          
      </div>
    )
}
