import React from 'react'
import Link from 'next/link';
import styles from './AboutUs.module.scss'


const AboutUs = function () {
    return (
        <div>
            <div className={styles.place}>
                <h4>Networking marketplace in your locals</h4>
                <p>
                Kwekmarket is the world marketplace for all local market sellers with quality 
                and affordable
                 goods and services. It's made up of people who appreciate simplicity in online
                  marketing.<br />
It is our mandate to bridge the gap between the internet and the local marketplace and so we are
 building a
 giant community of people of common interest for trade.<br />
We help our community realise their goal, bringing to life various ideas to a successful
 business. Our community connects buyers and sellers in different region across the nation that 
 are looking for a simple internet to marketplace interaction.</p>

<p>As a company, we strive to dominate with our guiding rules and to help spread creativity,
 transparency, innovation and growth.</p>
                
            </div>
        </div>
    )
}

export default AboutUs