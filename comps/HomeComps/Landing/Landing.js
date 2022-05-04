import styles from './Landing.module.css'

export const HomeLanding = () => {

    return (
      <div id='home' className={styles.container}> 
       <div className={styles.content}>
              <h1 className={styles.sectionTitle} >
                <span className={styles.black}>smatt</span>
                <span className={styles.red}>Life</span>
                </h1 >
           
          <p className={styles.smallText}>
           Live Life Better...
          </p> 
         
          
          
        </div> 
      </div>
    )
}


