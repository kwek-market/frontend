import React from 'react';
import Head from 'next/head';
import styles from './VerificationEmail.module.scss'
import Link from 'next/link';
import Image from "next/image";



const Email = function () {
    return (

        <div>
            <div className={styles.overall}>
            <div className={styles.template}>
            <table className={styles.email}>
                <tr>
                    <td>
                        <table className={styles.table}>
                            <tr>
                                <td className={styles.data}>
                                <Link href="/"><a className={styles.link}>
                                <Image src="/images/logo.png" width="206" height="24.08" className={styles.logo}/>
                                </a>
                                </Link>
                                <div className={styles.pink}>
                                    <Image src="/images/pinky.png" width="162" height="75"  />
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.verify}>
                                <h4>Email Confirmation</h4>
                                 <p className={styles.hall}>
                                  <p className={styles.click}>Hey Alison,</p>
                                  You are almost ready to start enjoying Kwekmarkethall.
                                   SImply click the big blue button to verify your email address
                                  </p>
                                <div className={styles.button}>
                                    <button>Verify email address</button>
                                </div>
                                
                                <div className={styles.border}></div>
                                
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.datarow}>
                                <p className={styles.column}>Stay in Touch</p>
                                <div className={styles.touch}>
                                <div className={styles.facebook}>
                                <Link href="/"><a className={styles.link}>
                                <Image src="/images/facebook.png" width="40" height="40"  />
                                </a>
                                </Link>
                                </div>
                                <div className={styles.instagram}>
                                <Link href="/"><a className={styles.link}>
                                <Image src="/images/instagram.png" width="40" height="40"  />
                                </a>
                                </Link>
                                </div>
                                <div className={styles.twitter}>
                                <Link href="/"><a className={styles.link}>
                                <Image src="/images/twitter.png" width="40" height="40"  />
                                </a>
                                </Link>
                                </div>
                                </div>
                                 
                                </td>
                            </tr>
                        </table>

                        
                    </td>
                </tr>
            </table>
            </div>
            </div>
            
        </div>
    )
}

export default Email