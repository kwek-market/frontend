import React from 'react'
import Link from 'next/link';
import styles from './ReturnPolicy.module.scss'

const ReturnPolicy = function () {
    return (
        <div>
            <div className = {styles.return}>
                <h4>Kwek Return Policy</h4>
                <p>Please note this policy is
                     subject to change with time, 
                     so we’ll always update on new change</p>
              <h4>Returns of products and Acceptance</h4>
              <p>
              •	Kwekmarket(from here represented as “We” and or
               “Us”) is a peer-to-peer market place, meaning
                we only oversee the trade between the buyer 
                and seller. Hence,<br />
                • Acceptance of returned goods shall be in the discretion of the
 seller.<br />
 • We are only going to intervene If buyer and seller are unable
 to reach a consensus.<br />
 • We are going to look at the argument provided by both the 
seller and buyer and then make a final fair Judgement.
              </p>
              <h4>Refunds</h4>
              <p>• Refunds shall be handled by us.<br />
              • Refunds are only granted when the seller can’t replace the
 goods purchased with a new one.<br />
 • Refunds are only granted when the seller agrees to it.</p>
<h4>When can a buyer return goods?</h4>
<p>Please make sure to read sellers personal store return 
    policy (as they may ask buyer to pay for the return shipping fee and other
     clauses)<br />
     • Goods can be returned when product is not as described by the seller<br />
     • Goods canbe returned when there is a mistake in order quantity (if agreed upon by
 the seller) <br />
 • Goods can be returned when there is a difference in size, color and quantity<br />
 • It is within a period of no later than 14 days after purchase.</p>
<h4>Kwekmarket, We’ll take you there!</h4>
            </div>
        </div>
    )
}

export default ReturnPolicy