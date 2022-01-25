import React from 'react'
import Link from 'next/link';
import styles from './Privacypolicy.module.scss'




const PrivacyPolicy = function () {
   
    return (
        <div>
            <div className={styles.privacy}>
            <p className={styles.collection} >This Privacy policy describes our collection, use, disclosure, 
            retention and protection of
             your personal information. It applies to kwekmarket.com, kwekmarket and anywhere this tagged
              "kwekmarket Privacy" appears and to our kwekmarket app service, or tool (collectively "Services")
               where this Privacy policy is referenced regardless of how you access or use them including
                through mobile devices. By using our Services, and/or registering for database with us, you 
                are accepting the terms of this Privacy policy and term of use, and you are consenting to our
                 collection, use, disclosure, retention and protection of your personal information as 
                 described in this Privacy policy.</p>

            <p>Please also note that this privacy policy is subject to change when need be thanks.</p>
            <h4>Database Equipment Information</h4>
            <p>Using our services, a valid email address depending on the services chosen, use be
                 provided. We may collect additional information in the closed channel like; message 
                 conversations, fee payment information, telephone/mobile phone number, physical address
                  and front view image of your shop or kiosk. For our security measures and for a test of
                   activeness, these items may need to be monitored by certain kwekmarket administrators
                    constantly. <br />
            The name associated with your kwekmarket database is publicly displayed and connected to your
             kwekmarket activity. Other people may see the date you joined; ratings; reviews for items
              sold, your profile information, items you listed for sale, your shop pages and policies, 
              your favorite followers and those you follow and comments the comments you posting our 
              community spaces.
            </p>
            <h4>The received database equipped information.</h4>
            <p>Depending on which services you choose to use, additional information such as a shop name,
                 image of your shop's front view, fee payment information, telephone number, 
                your postal address will be necessary for us to provide the necessary services.
                 You may not be required to provide us with this information to sign up but we will
                  need them in order for us to provide you a particular service. As a buyer for example, 
                  we need your location to keep locked the flow of market in your said location. 
                  As a kwekmarket seller, if you if you choose to make use of our payment services, 
                  we may require information on your payment card, bank account information or any proof 
                  of identification of payment required to provide our services to you and to comply with
                   applicable law and sanctions. We will not store payment card information. Kwekmarket may 
                   contact individual shop owner’s confidentiality to request more about their shops
               items listed through the services or to ensure acceptance with our rules and applicable laws.</p>
            <h4>Your hand as a database owner.</h4>
            <p>Certified users have control over their information. You can edit or remove any ads under the
                 billing payment policy, you may change or correct any optional information 
                that you no longer need to be publicly displayed.</p>
                <h4>Messages from Kwekmarket.</h4>
                <p>Seldomly, kwekmarket may need to contact you. Primarily these messages are delivered by 
                    mail or to your kwekmarket inbox. Every database is required a valid email address to
                    receive messages. We may need to contact you by telephone/mobile number to provide support
                    for survey or for transaction related purposes.</p>
                <h4>Kwekmarket Community.</h4>
                <p>We have designed the community an update flowing on as another kwekmarket user may follow 
                your public activity on the site to receiving updates such as when you add an item to your
                 public favorites. You may choose to ale activities private through your database settings.
                  After a user has begun following your activity, your option to block that member will be
                   accessed before granted, reason because we have disagreed to agree unless your reasons
                    are well stated.</p>
                <h4>Disclosure sharing and usage of information. </h4>
                <p>
                Kwekmarket will never disclose your email address or other personal information to any 
                third-party without your consent, except as specified in this policy. It is necessary 
                for us to process your personal information in certain ways in order to provide the 
                services to you in accordance with an agreement between you and us e.g giving a seller
                 your contact information to keep track their best customers.</p>

<p>We use your information to provide and improve the service and our products for billing and payments,
 for identification, authentication and confirmation. Also, targeted offline and online marketing to
  contact members or interested parties. We or our sellers may advertise our services or our sellers'
   products through a variety of media, as part of this, we may with advertising partners such as
    Facebook or Google or Twitter or Instagram kwekmarketmall may release your personal information
     to a third-parties on limited circumstances or occurrence for example, lawful requests by public
      authorities including to meet legitimate national security or law enforcement requirements; when
       we believe in good faith that such disclosure is necessary to comply with the law, prevent 
       imminent physical harms or financial loss, or investigate, prevent, or take action regarding 
       illegal activities, suspected fraud threats to our property, or violation of kwekmarket term
        of useWe have designed the community an update flowing on as another kwekmarket user may 
        follow your public activity on the site to receiving updates such as when you add an item 
        to your public favorites. You may choose to ale activities private through your database 
        settings. After a user has begun following your activity, your option to block that member
         will be accessed before granted, reason because we have disagreed to agree unless your reasons 
         are well stated.
                </p>
                <h4>Data Retention. </h4>
                <p>Your information is available as long as it’s necessary for purposes set out in this
                     policy for as long as your database is active or as needed to provide the services to
                      you. Kwekmarket retains and uses your information to the extent compulsory to abide
                       with our legal bounds, resolve disputes and force our agreements.</p>

<p><b>Please note:</b> Closing your account will not free your email address, username, or shop name (if any) for 
reuse on a new account.</p>
<h4>Privacy Policy Changes.</h4>
<p>
We may amend or update this policy from time to time. If we believe that the changes are material, we'll 
let you know by doing one or more of the following depending;<br />
1. Posting the changes on or through the services<br />
2. Sending you mails or messages about the change. We will also give you the opportunity to consent to 
these changes. </p>

<p>By this, you can decide whether you want to continue using the services or not.</p>

<p>
    <b>Contact us:</b> 
    
    <Link href="mailto:support@kwekmarketmall.com">
        <a className={styles.link}>support@kwekmarketmall.com</a>
    </Link>
</p>

<p>If you have questions or suggestions about personal information, you can contact kwekmarket support team
 by sending mail to <Link href="mailto:support@kwekmarketmall.com"><a className={styles.linka}>support@kwekmarketmall.com.</a></Link>

</p>
<h4>Kwekmarket, We’ll take you there!</h4>
            </div>
        </div>
    );
};

export default PrivacyPolicy