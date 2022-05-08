import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Navbar.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'


export default function Navbar() {
    return (
        <>    
        <div className={styles.nav}>

           {/* <input type="checkbox" id="check" className={styles.check} />
            <div className={styles.bars}>
                <label htmlFor="check" >
                <FaBars />
                </label>
            </div> */}

           <div className={styles.nav_start}>
                    {/* <Link href="/">
                        <a>
                        <img className={styles.logo}
                            src="/images/logo.png"
                            width={100} height={45} />
                        </a>
                    </Link> */}
          <Link href="/"> 
          <a className={styles.link}>
          <Image className={styles.logo} 
            src="/images/logo.png" 
            width={90} height={45}/>
            </a>
            </Link> 
               <div className={styles.nav_bg} >
                
                <ul className={styles.nav_start_list}>       
                        <li className={styles.nav_start_list_item}>
                            <div className={styles.bars_close}>
                                <label htmlFor="check" >
                                <FaTimes />
                                </label>
                            </div>
                        </li>
                        
                        {/* <li className={styles.nav_start_list_item}>
                            <Link href="/team"><a className={styles.link}>Blog Category</a></Link>
                        </li>
                         <li className={styles.nav_start_list_item}>
                            <Link href="/socials"><a className={styles.link}>Future Topics</a></Link>
                        </li> */}
                       
                    </ul>
               </div>

           </div>
          
        </div>
        </>
    )
}
