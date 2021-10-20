import React from "react";
import Image from "next/image";
import styles from "./productDesc.module.scss";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const ProductDesc = () => {
  return (
    <div className={styles.desc_container}>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Description" key="1">
          <div className={styles.tab_content}>
            <p className={styles.descP}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className={styles.checked}>
              <div className={styles.cheaked_content}>
                <i className="fas fa-check"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className={styles.cheaked_content}>
                <i className="fas fa-check"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className={styles.cheaked_content}>
                <i className="fas fa-check"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className={styles.cheaked_content}>
                <i className="fas fa-check"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <p className={styles.descP}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </TabPane>
        <TabPane tab="Additional" key="2">
          <div className={styles.tab_content}>
            <div className={styles.add_add}>
              <p>
                SKU: <span>Black, Brown, Coffee</span>
              </p>
              <p>
                Fastening: <span>N/A</span>
              </p>
              <p>
                Heel Type: <span>Pencil Heels</span>
              </p>
              <p>
                Shoe Type [P]: <span>Women Casual Shoes</span>
              </p>
              <p>
                Color: <span>Yellow, Red and Pink</span>
              </p>
              <p>
                Size: <span>41, 42, 43, and 44</span>
              </p>
              <p>
                Main Material: <span>Rubber</span>
              </p>
              <p>
                Weight (kg): <span>0.7</span>
              </p>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Shipping & Returns" key="3">
          <div className={styles.tab_content}>
            <div className={styles.sr_content}>
              <div className={styles.contentbox}>
                <div className={styles.img}>
                  <Image src="/svg/dev.svg" width="40" height="40" />
                </div>
                <div className={styles.info}>
                  <p className={styles.head}>Delivery</p>
                  <p className={styles.sub}>
                    Estimated delivery time: 1 - 9 days
                  </p>
                </div>
              </div>
              <div className={styles.contentbox}>
                <div className={styles.img}>
                  <Image
                    src="/svg/returnsvg.svg"
                    width="40"
                    height="40"
                    className={styles.img}
                  />
                </div>
                <div className={styles.info}>
                  <p className={styles.head}>7 Days Return Guarantee</p>
                  <p className={styles.sub}>
                    For more information on the return shipping options, go to{" "}
                    <a>Kwek return Policy</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Reviews" key="4">
          <div className={styles.tab_content}>
            <div className={styles.reviewContent}>
              <div className={styles.review_content}>
                <p className={styles.rating_head}>Average Rating:</p>
                <div className={styles.box_productRating}>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                </div>
              </div>
              <div className={styles.review_content}>
                <div className={styles.reviewer}>
                  <Image
                    src="/images/store.png"
                    width="80"
                    height="80"
                    className={styles.img}
                  />
                  <div className={styles.reviewer_content}>
                    <div className={styles.user}>
                      <div className={styles.infouser}>
                        <p className={styles.name}>James Afuye</p>
                        <p className={styles.date}>
                          Novemeber 9, 2020 at 3:20 pm
                        </p>
                      </div>
                      <div className={styles.box_productRating}>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                      </div>
                    </div>
                    <p className={styles.reviewer_review}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.review_content}>
                <div className={styles.reviewer}>
                  <Image
                    src="/images/store.png"
                    width="80"
                    height="80"
                    className={styles.img}
                  />
                  <div className={styles.reviewer_content}>
                    <div className={styles.user}>
                      <div className={styles.infouser}>
                        <p className={styles.name}>James Afuye</p>
                        <p className={styles.date}>
                          Novemeber 9, 2020 at 3:20 pm
                        </p>
                      </div>
                      <div className={styles.box_productRating}>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                      </div>
                    </div>
                    <p className={styles.reviewer_review}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.formbox}>
                <div className={styles.form_content}>
                  <p className={styles.form_head}>Add a Review</p>
                  <p className={styles.form_sub}>
                    Your email address will not be published, Required fields
                    are marked *
                  </p>
                </div>
                <form className={styles.form}>
                  <div className={styles.ratebox}>
                    <p>Your Rating:</p>
                    <div className={styles.box_productRating}>
                      <span className="material-icons">star</span>
                      <span className="material-icons">star</span>
                      <span className="material-icons">star</span>
                      <span className="material-icons">star</span>
                      <span className="material-icons">star</span>
                    </div>
                  </div>
                  <div className={styles.inputs}>
                    <textarea
                      placeholder="Comment *"
                      name="Comment"
                      required
                    ></textarea>
                    <div className={styles.input_grid}>
                      <div>
                        <input
                          placeholder="Name *"
                          name="Name"
                          type="text"
                          required
                        />
                      </div>
                      <div>
                        <input
                          placeholder="Email *"
                          name="Email"
                          type="email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.button}>
                    <button type="submit">SUBMIT</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ProductDesc;
