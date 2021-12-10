import React from 'react';
import Image from 'next/image';
import { Carousel } from 'antd';
import styles from './productHead.module.scss';

const SampleNextArrow = function (props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: 80, height: 80, zIndex: 10, marginRight: 20 }}
      onClick={onClick}
    >
      <Image src="/svg/right-chevron2.svg" width="80" height="80" />
    </div>
  );
};

const SamplePrevArrow = function (props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: 80, height: 80, zIndex: 10, marginLeft: 20 }}
      onClick={onClick}
    >
      <Image src="/svg/right-chevron1.svg" width="80" height="80" />
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const ProductHead = function () {
  return (
    <div className={styles.product_container}>
      <div className={styles.product_carousel}>
        <Carousel arrows {...settings} autoplay dots={false}>
          <div>
            <Image className={styles.carousel_img} src="/images/shoe.png" width="848" height="765" />
          </div>
          <div>
            <Image className={styles.carousel_img} src="/images/shoe.png" width="848" height="765" />
          </div>
          <div>
            <Image className={styles.carousel_img} src="/images/shoe.png" width="848" height="765" />
          </div>
          <div>
            <Image className={styles.carousel_img} src="/images/shoe.png" width="848" height="765" />
          </div>
        </Carousel>
        <div className={styles.carousel_sub}>
          <div>
            <button className={styles.img_sub}>
              <Image className={styles.carousel_img} src="/images/shoe.png" width="200" height="200" />
            </button>
          </div>
          <div>
            <button className={styles.img_sub}>
              <Image className={styles.carousel_img} src="/images/shoe.png" width="200" height="200" />
            </button>
          </div>
          <div>
            <button className={styles.img_sub}>
              <Image className={styles.carousel_img} src="/images/shoe.png" width="200" height="200" />
            </button>
          </div>
          <div>
            <button className={styles.img_sub}>
              <Image className={styles.carousel_img} src="/images/shoe.png" width="200" height="200" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.product_desc}>
        <div className={styles.navigation}>
          <Image src="/svg/house.svg" width="20" height="20" />
          <i className="fas fa-angle-right" />
          <a>Fashion</a>
          <i className="fas fa-angle-right" />
          <a>Shoes</a>
          <i className="fas fa-angle-right" />
          <a>Women's Fashion Shiny High Heels</a>
        </div>
        <p className={styles.productTitle}>Women's Fashion Shiny High Heels</p>
        <div className={styles.product_subDesc}>
          <p className={styles.product_seller}>
            Seller: <span>Moda Stores</span>
          </p>
          <p className={styles.product_Code}>Product Code: MODA124323</p>
        </div>
        <p className={styles.product_price}>$25.00</p>
        <div className={styles.box_productRating}>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <small>(6 Reviews)</small>
        </div>
        <p className={styles.product_subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{' '}
        </p>
        <div className={styles.product_options_color}>
          <p>COLOR:</p>
          <div className={styles.colorbox}>
            <button />
            <button />
            <button />
          </div>
        </div>
        <div className={styles.product_option_size}>
          <p>SIZE:</p>
          <div className={styles.product_sizebox}>
            <button>40</button>
            <button>41</button>
            <button>43</button>
            <button>44</button>
            <button>45</button>
          </div>
        </div>
        <div className={styles.product_option_order}>
          <div className={styles.product_qty}>
            <p>QTY:</p>
            <div className={styles.product_addToCart}>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
          <div className={styles.product_buttonbox}>
            <a className={styles.butnowButton}>
              <i className="fas fa-shopping-cart" />
              <p>Buy Now</p>
            </a>
            <a className={styles.product_saveButton}>
              <i className="far fa-heart" />
              <p>Save for Later</p>
            </a>
          </div>
        </div>
        <div className={styles.product_option_details}>
          <div className={styles.orderbox}>
            <Image src="/svg/pickup.svg" width="40" height="40" />
            <p>Pickup & Pay on Collection Available</p>
          </div>
          <div className={styles.debox}>
            <Image src="/svg/cod.svg" width="40" height="40" />
            <p>Pay on Delivery</p>
          </div>
        </div>
        <div className={styles.product_option_share}>
          <p>Share:</p>
          <div className={styles.socialbox}>
            <a>
              <i className="fab fa-facebook-f" />
              <p>Facebook</p>
            </a>
            <a>
              <i className="fab fa-twitter" />
              <p>Twitter</p>
            </a>
            <a>
              <i className="fab fa-whatsapp" />
              <p>Whatsapp</p>
            </a>
            <a>
              <i className="fas fa-link" />
              <p>Copy Link</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHead;
