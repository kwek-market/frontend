import React from 'react'
import Link from 'next/link';
import styles from './Billing.module.scss'


const BillingPolicy = function () {
    return (
        <div>
            <div className={styles.billing}>
                <p>
                Kwekmarketmall has ensured a first week (7days) of free usage of our services by our newly 
                registered customers. Customers charges are required to be paid after. We at kwekmarketmall
                 will be rendering a 24hrs service for you in which everyone can access your database ads 
                 anytime until your subscription expire (maintenance fee).

<p>Categorizing our users, there is fee variance in other to ensure and render
     a perfect service to you.</p>
                </p>
                <p>At Kwekmarketmall , we have 4 categories of users. </p>
                <p>
                <ul><li>• Betterlife</li><br />
<li>• Boomer</li><br />
<li>• Express Premium (wholesalers, private labelling and 
    manufacturers)</li><br />
<li>• Franchise (retailers, wholesalers, private labelling and manufacturers)</li></ul>
                </p>
                <h4>Billing Policy for Betterlife</h4>
                <p>
                Users under this category will be able to post about 15 products each with 30days 
                expiration
                 but subject to be influenced by admin. There will be a charged fee of <span>N1500.</span> From the 
                 breakdown,
                  we will be providing you a standard 24hrs service for a token sum of <span>N50.</span>
Users are allowed to change products three times but can't exceed their total products for sale in total 
for that
 period of subscription range as it will request to terminate your current subscription in which you will 
 be required to upgrade your category of subscription or better still maintain your current ads until the
  end of the subscription.</p>

<p>Services we support you to offer your customers
<ul><li>• Warranty when available</li><br />
<li>• Successful customer monitoring system (Email Marketing)</li><br />
<li>• Special ads subscription</li></ul></p>
                
                <h4>Billing Policy for Boomer</h4>
                <p>
                Users under this category will be able to post about 45 products each with 30days 
                expiration. There will be a charged fee of <span>N4050.</span> From the breakdown, we will be 
                providing you a standard 24hrs service for a token 
                sum of <span>N135.</span><br />
Users are allowed to change products ten times but can't exceed their total products for sale in 
total for that period of subscription range as it will request to terminate your current subscription 
in which you will be required to upgrade your category of subscription or better still maintain your 
current ads until the end of the subscription.</p>



<p>Services we support you to offer your customers
<ul><li>• Warranty when available</li><br />
<li>• Successful customer monitoring system (Email Marketing)</li><br />
<li>• Special ads subscription</li><br />
<li>• Gift card utility</li></ul></p>
                
                <h4>Billing Policy for Express Premium</h4>
                <p>
                Users under this category will be able to post about 100 products (wholesales, private 
                labelling and manufacturers) each with 30days expiration. There will be a charged fee of 
               <span> N8250</span> (editable by admin). From the breakdown, we will be providing you a standard 24hrs
                 service for a token sum of <span>N135.</span>
Users are allowed to change products three times in case product is out of stock but can't exceed their 
total products for sale (100) in total for that period of subscription range as it will request to
 terminate your current subscription in which you will be required to upgrade your category of 
 subscription or better still maintain your current ads until the 
 end of the subscription.</p>

<p>Services we support you to offer your customers
<ul><li>• Warranty when available</li><br />
<li>• Successful customer monitoring system (Email Marketing)</li><br />
<li>• Special ads subscription (featured)</li><br />
<li>• Gift card utility</li><br />
<li>• Invoice generator</li></ul></p>
               
                <h4>Billing Policy for Franchise</h4>
                <p>
                All our services known, including our discrete ones are open to users under this category.
                </p>
                <h4>What happens to your database after exhausted subscription</h4>
                <p>
                We are aware at kwekmarketmall that you will continuously want to make use of our services,
                 so at the subscription, we will give you extra 3-days to enjoy our services plus another
                  2-days warning. Failure to subscribe after this five (5) days will render your database 
                  dormant. Dormant in that you will not be able access, advertise your ads until you 
                  subscribe again.<br />
To make our subscription durable, affordable and relaxing, we have set out different packages of 
subscription for you as follow:
                </p>
            </div>
        </div>
    );
};


export default BillingPolicy