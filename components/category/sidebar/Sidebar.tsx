import React from "react";
import Image from "next/image";
import styles from "./Sidebar.module.scss";

const Sidebar = function () {
  const products = [1, 2, 3, 4, 5];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_content}>
        <p className={styles.header}>BROWSE CATEGORIES</p>
        <div className={styles.subMenu}>
          <p>Kids's Fashion</p>
          <p>Luggage & Travel</p>
          <p>Men's Fashion</p>
          <p>Shoe, Jewerly & Watch Accessories</p>
          <p>Weddings</p>
          <p>Women's Fashion</p>
          <p>Sport & Fitness Wears</p>
        </div>
      </div>
      <div className={styles.sidebar_content}>
        <p className={styles.header}>GENDER</p>
        <div className={styles.subMenu}>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>Baby</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>Boys</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>Girls</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>Men</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>Women</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>Unisex</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>Sport & Fitness wears</p>
          </div>
        </div>
      </div>
      <div className={styles.sidebar_content}>
        <p className={styles.header}>PRODUCT RATING</p>
        <div className={styles.subMenu}>
          <div className={styles.checkSub}>
            <input className={styles.inputRound} type="checkbox" />
            <div className={styles.box_productRating}>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
            </div>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputRound} type="checkbox" />
            <div className={styles.box_productRating2}>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <p>& Above</p>
            </div>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputRound} type="checkbox" />
            <div className={styles.box_productRating3}>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <p>& Above</p>
            </div>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputRound} type="checkbox" />
            <div className={styles.box_productRating4}>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <p>& Above</p>
            </div>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputRound} type="checkbox" />
            <div className={styles.box_productRating5}>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <p>& Above</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sidebar_content}>
        <p className={styles.header}>PRICE ( ₦ )</p>
        <div className={styles.subMenu}>
          <div className={styles.sliderBox}>
            <input type="range" min="1" max="100" className={styles.slider} />
          </div>
          <div className={styles.priceInput}>
            <input type="text" />
            <p>-</p>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className={styles.sidebar_content}>
        <p className={styles.header}>SIZE</p>
        <div className={styles.subMenu}>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>S</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>M</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>L</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>XL</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>XXL</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>XXXL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
