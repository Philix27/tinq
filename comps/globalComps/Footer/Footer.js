import React from 'react'
import styles from './Footer.module.css'
import { FaWhatsapp } from 'react-icons/fa'
import {
    AiOutlineMail,
    AiFillGithub,
    AiFillLinkedin,
    AiFillFacebook,
    AiFillTwitterSquare,
    AiFillPhone,
    AiOutlineInstagram,
    AiFillIs
} from 'react-icons/ai'

export default function Footer() {
    return (
        <div id="footer" className={styles.wrapper}>
        <div className={styles.container}  >
                           <ul className={styles.list_ul}>
                    <li>
                        <a className={styles.Linka} target="_blank" href="mailto:smatlife247@gmail.com">
                            <AiOutlineMail size={17} />
                            <span className={styles.contact_list}>Email</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.Linka}
                            target="_blank"
                            href="https://wa.me/2348108850572?text=Hi+Philix%2C+I%27m+just+visited+smatliife+website.">
                            <FaWhatsapp size={17} />
                            <span className={styles.contact_list}>Whatsapp</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.Linka}
                            href="tel:+2348108850572">
                            <AiFillPhone size={17} />
                            <span className={styles.contact_list}>Phone </span>
                        </a>
                    </li>
                    
                    <li>
                        <a className={styles.Linka} target="_blank" href="https://facebook.com/eligbue.felix.7">
                          <AiFillFacebook size={ 17}/>  
                            <span className={styles.contact_list}>Facebook</span>

                        </a>
                    </li>
                    <li>
                        <a className={styles.Linka} target="_blank" href="https://twitter.com/smattlife?s=09">
                         <AiFillTwitterSquare />   
                            <span className={styles.contact_list}>Twitter</span>

                        </a>
                    </li>
                    <li>
                        <a className={styles.Linka} target="_blank" href="https://www.instagram.com/invites/contact/?i=142ltdo3r8m1h&utm_content=o40bckr">
                            <AiOutlineInstagram size={17} />  
                            <span className={styles.contact_list}>Instagram</span>
                        </a>
                    </li>
                </ul>
            </div>
          
            
            <div className={styles.copyright}>
                {/* <p>Copyright &copy;.</p> */}
                <p>2022 Copyright &copy; All Rights Reserved</p>
            </div>
            </div>
    )
}
