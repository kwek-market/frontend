import React from 'react';
import Styles from './heroSection.module.scss'
// import image
import Image from 'next/image'



const heroSection = () => {
    return (
        <div className={Styles.hero}>
          <div className={Styles.hero_split}>
              <div className={Styles.hero_textContent}>
                  <h1 className={Styles.hero_textContent__headText}>
                  Make Money & Grow your Business Online
                  </h1>
                  <p className={Styles.hero_textContent__subText}>
                  Reach millions of buyers in every state in Nigeria easily, get your store on KwekMarket today!

                  </p>
                  <button className={`btn bg-primary ${Styles.hero_button}`}>
                  Start your free trial
                  </button>

              </div>

              <div className={Styles.hero_image}>
                  <div className={Styles.hero_image1__div}>
                  <Image className={Styles.hero_image1} src="/images/smiling-people.png" width="210" height="210"  />
                  </div>
                  <div className={Styles.hero_image2__div}>
                  <Image className={Styles.hero_image2} src="/images/flower-girl.png" width="110" height="110"  />
                  </div>
                 
              </div>

            </div>
             
        </div>
       
      
    )
}

export default heroSection;