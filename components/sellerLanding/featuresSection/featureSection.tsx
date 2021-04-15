import React from 'react';
import Styles from './featureSection.module.scss';
import Testimonials from '../Testimonials/testimonials'

import Image from 'next/image'

const featureSection = () => {
    return (
        <div className={Styles.features}>
            <div className={Styles.features_question}>
                <h2 className={Styles.features_questionHead}>
                Why Choose KwekMarketMall?
                </h2>
            </div>
            <div className={Styles.features_answer}>
                <div className={Styles.features_answerContent}>
                    <div className={Styles.features_answerContent__elipse}>
                    <Image src="/images/Ellipse.png" height="65px" width="65px" />
                    </div>
                    <div className={Styles.features_answerContent__text}>
                        <h4 className={Styles.features_answerContent__textHead}>
                        Effective Buyers Leveraging
                        </h4>
                        <p className={Styles.features_answerContent__textSub}>
                        Reach millions of buyers in every state in Nigeria easily, get your store on KwekMarket today!
                        </p>
                    </div>

                </div>
                <div className={Styles.features_answerContent}>
                    <div className={Styles.features_answerContent__elipse}>
                        <Image src="/images/Ellipse.png" height="65px" width="65px" />
                    </div>
                    <div className={Styles.features_answerContent__text}>
                        <h4 className={Styles.features_answerContent__textHead}>
                        24hrs delivery optimization
                        </h4>
                        <p className={Styles.features_answerContent__textSub}>
                        Reach millions of buyers in every state in Nigeria easily, get your store on KwekMarket today!
                        </p>
                    </div>

                </div>
                <div className={Styles.features_answerContent}>
                    <div className={Styles.features_answerContent__elipse}>
                        <Image src="/images/Ellipse.png" height="65px" width="65px" />
                    </div>
                    <div className={Styles.features_answerContent__text}>
                        <h4 className={Styles.features_answerContent__textHead}>
                        Effective customer support
                        </h4>
                        <p className={Styles.features_answerContent__textSub}>
                        Reach millions of buyers in every state in Nigeria easily, get your store on KwekMarket today!
                        </p>
                    </div>

                </div>
                <div className={Styles.features_answerContent}>
                    <div className={Styles.features_answerContent__elipse}>
                        <Image src="/images/Ellipse.png" height="65px" width="65px" />
                    </div>
                    <div className={Styles.features_answerContent__text}>
                        <h4 className={Styles.features_answerContent__textHead}>
                        Organized Online Outlet
                        </h4>
                        <p className={Styles.features_answerContent__textSub}>
                        Reach millions of buyers in every state in Nigeria easily, get your store on KwekMarket today!
                        </p>
                    </div>

                </div>
                <div className={Styles.features_answerContent}>
                    <div className={Styles.features_answerContent__elipse}>
                        <Image src="/images/Ellipse.png" height="65px" width="65px" />
                    </div>
                    <div className={Styles.features_answerContent__text}>
                        <h4 className={Styles.features_answerContent__textHead}>
                        Swift transaction
                        </h4>
                        <p className={Styles.features_answerContent__textSub}>
                        Reach millions of buyers in every state in Nigeria easily, get your store on KwekMarket today!
                        </p>
                    </div>

                </div>
                <div className={Styles.features_answerContent}>
                    <div className={Styles.features_answerContent__elipse}>
                        <Image src="/images/Ellipse.png" height="65px" width="65px" />
                    </div>
                    <div className={Styles.features_answerContent__text}>
                        <h4 className={Styles.features_answerContent__textHead}>
                        Optimized Logistic Service
                        </h4>
                        <p className={Styles.features_answerContent__textSub}>
                        Reach millions of buyers in every state in Nigeria easily, get your store on KwekMarket today!
                        </p>
                    </div>

                </div>

            </div>
            <div>
                <Testimonials />
            </div>
            
        </div>
    )
}

export default featureSection;