import React from 'react';
import Styles from './use.module.scss';

import Image from 'next/image'

const use = () => {
    return (
        <div className={Styles.Use}>
            <div className={Styles.UseDesc}>
                <h2 className={Styles.UseDesc_text}>
                How it Works
                </h2>
            </div>
            <div className={Styles.UseList}>
                <div className={Styles.UseList_content}>
                    <div className={Styles.UseList_contentLogo}>
                        <Image src="/svg/Feature-icon-1.svg" height="72px" width="72px" /><Image src="/svg/Line-Indicator-1.svg" height="22.22px" width="227.96px" />
                    </div>
                    <div className={Styles.UseList_contentText}>
                        <h3 className={Styles.UseList_contentText__head}>
                        Ideate
                        </h3>
                        <p className={Styles.UseList_contentText__sub}>
                        Turn your idea from concept to MVP
                        </p>
                    </div>
                </div>
                <div className={Styles.UseList_content}>
                    <div className={Styles.UseList_contentLogo}>
                        <Image src="/svg/Feature-icon-2.svg" height="72px" width="72px" /><Image src="/svg/Line-Indicator-2.svg" height="18.12px" width="227.96px" />
                    </div>
                    <div className={Styles.UseList_contentText}>
                        <h3 className={Styles.UseList_contentText__head}>
                        Design
                        </h3>
                        <p className={Styles.UseList_contentText__sub}>
                        Sketch out the product to align the user needs
                        </p>
                    </div>
                </div>
                <div className={Styles.UseList_content}>
                    <div className={Styles.UseList_contentLogo}>
                        <Image src="/svg/Feature-icon-3.svg" height="72px" width="72px" /><Image src="/svg/Line-Indicator-3.svg" height="22.22px" width="227.96px" />
                    </div>
                    <div className={Styles.UseList_contentText}>
                        <h3 className={Styles.UseList_contentText__head}>
                        Develop
                        </h3>
                        <p className={Styles.UseList_contentText__sub}>
                        Convert the designs into a live application
                        </p>
                    </div>
                </div>
                <div className={Styles.UseList_content}>
                    <div className={Styles.UseList_contentLogo}>
                        <Image src="/svg/Feature-icon-3.svg" height="72px" width="72px" />
                    </div>
                    <div className={Styles.UseList_contentText}>
                        <h3 className={Styles.UseList_contentText__head}>
                        Deploy
                        </h3>
                        <p className={Styles.UseList_contentText__sub}>
                        Launching the application to the market
                        </p>
                    </div>
                </div>
            </div>
            <div className={Styles.useRegister}>
            <div className={Styles.useRegister_content}>
                <div className={Styles.useRegister_contentText}>
                    <h1 className={Styles.useRegister_contentText__head}>
                    Sell Big, Sell Fast
                    </h1>
                    <button className={`btn bg-primary ${Styles.useRegister_contentText__sub}`}>
                    Register Now
                    </button>
                </div>
                <div className={Styles.useRegister_contentImage}>
                    <Image src="/images/electronics.png" width="1016px" height="397px" />
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default use
