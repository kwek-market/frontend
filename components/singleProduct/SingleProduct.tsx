import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from './SingleProduct.module.scss'

const SingleProduct = function () {
    return (
        <div className={styles.product}>
            
                 

                <div className={styles.holder}>
                    <div className={styles.key}>
                    <Image src="/images/key.png" width="30" height="20" className={styles.key} />
                    </div>
                    <div className={styles.greenly}>
                         <div className={styles.green}><Link href="/">
                                <a className={styles.link}>
                                <Image src="/images/buttonGreen.png" width="149" height="64" className={styles.green} />
                                </a>
                            </Link>
                         </div>
                            <div className={styles.white}><Link href="/">
                                <a className={styles.link}>
                                <Image src="/images/buttonWhite.png" width="110" height="64" className={styles.white} />
                                </a>
                            </Link></div>
                    </div>
                </div>
                <div className={styles.single}>
                <div className={styles.images}>
                <div className={styles.mask}>
                    <Image src="/images/mask.png" width="722" height="693.41" className={styles.img} />
                </div>
                <div className={styles.masky}>
                <div>
                    <Image src="/images/masky.png" width="163.22" height="156.54" className={styles.img} />
                </div>
                <div>
                    <Image src="/images/masky.png" width="163.22" height="156.54" className={styles.img} />
                </div>
                <div>
                    <Image src="/images/masky.png" width="163.22" height="156.54" className={styles.img} />
                </div>
                <div>
                    <Image src="/images/masky.png" width="163.22" height="156.54" className={styles.img} />
                </div>
                </div>
                </div>

                
                <div className={styles.element}>
                    
                    <div>
                        <h4>Women's Fashion Shiny High Heels</h4>
                        <div className={styles.review}>
                            <p><b>Product Code:</b> MODA124323</p>

                        <div className={styles.revs}>
                        <div className={styles.box_productRating}>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                      </div>
                            <p className={styles.six}>(6 Reviews)</p>
                        </div></div>
                    </div>
                    <h2 >$25.00</h2>
                    <p className={styles.name}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. 
                    </p>

                    <div className={styles.colors}>
                        <p>COLOR: </p>
                        <div className={styles.paint}><div className={styles.yellow}></div>
                        <div className={styles.maroon}></div>
                        <div className={styles.pink}></div></div>
                    </div>
                    <div className={styles.size}>
                        <p>SIZE:</p>
                        <div className={styles.fort}>
                        <div className={styles.forty}>40</div>
                        <div className={styles.fortyone}>41</div>
                        <div className={styles.fortythree}>43</div>
                        <div className={styles.fortyfour}>44</div>
                        <div className={styles.fortyfive}>45</div></div>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.share}>
                        <p className={styles.shareon}>Share on:</p>
                        <div>
                            <div className={styles.book}>
                            <div className={styles.facebook}>
                             <Link href="/">
                                <a className={styles.link}>
                                <Image src="/images/facebooktime.png" width="121" height="42" className={styles.facebook} />
                                </a>
                             </Link></div>
                            <div className={styles.twitter}><Link href="/">
                                <a className={styles.link}>
                                <Image src="/images/tweet.png" width="121" height="42" className={styles.twitter} />
                                </a>
                            </Link></div>
                            <div className={styles.whatsapp}><Link href="/">
                                <a className={styles.link}>
                                <Image src="/images/whatsapp.png" width="121" height="42" className={styles.whatsapp} />
                                </a>
                            </Link></div>
                            <div className={styles.copy}><Link href="/">
                                <a className={styles.link}>
                                <Image src="/images/copy.png" width="121" height="42" className={styles.copy} />
                                </a>
                            </Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct