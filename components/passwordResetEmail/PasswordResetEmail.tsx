import React from 'react';
import Head from 'next/head';
import styles from './PasswordResetEmail.module.scss'
import Link from 'next/link';
import Image from "next/image";



const PasswordEmail = function () {
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
                                <h4>Password reset</h4>
                                 <p className={styles.hall}>
                                  If you've lost your password and wish to reset it,
                                   click the button below
                                  </p>
                                <div className={styles.button}>
                                    <button>Reset your Password</button>
                                </div>
                                <p className={styles.click}>
                                If you did not request a password reset, you can
                                 safely ignore this email. Only a person with access
                                  to your email can reset your password
                                </p>
                                
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

export default PasswordEmail