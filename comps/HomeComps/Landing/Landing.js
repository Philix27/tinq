import styles from './Landing.module.css'

export const HomeLanding = () => {

    return (
      <div id='home' className={styles.container}> 
       <div className={styles.content}>
              <h1 className={styles.sectionTitle} >
                <span className={styles.white}>Tinq</span>
                {/* <span className={styles.red}>Life</span> */}
                </h1 >
           
          <p className={styles.smallText}>
           For yourself...
          </p> 
         
          
          
        </div> 
      </div>
    )
}


