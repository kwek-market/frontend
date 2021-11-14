import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import Link from 'next/link';
import Image from 'next/image';
import styles from './checkGrid.module.scss';
import CartTab from '../cartTab/CartTab';

const CheckGrid = function () {
  const [isModaloneVisible, setIsModaloneVisible] = useState(false);
  const [isModaltwoVisible, setIsModaltwoVisible] = useState(false);
  const [isModalthreeVisible, setIsModalthreeVisible] = useState(false);
  const [isModalfourVisible, setIsModalfourVisible] = useState(false);

  const showModalone = () => {
    setIsModaloneVisible(true);
  };

  const handleOk = () => {
    setIsModaloneVisible(false);
  };

  const handleCancel = () => {
    setIsModaloneVisible(false);
  };

  const showModaltwo = () => {
    setIsModaltwoVisible(true);
  };

  const handletwoOk = () => {
    setIsModaltwoVisible(false);
  };

  const handletwoCancel = () => {
    setIsModaltwoVisible(false);
  };

  const showModalfour = () => {
    setIsModalfourVisible(true);
  };

  const handlefourOk = () => {
    setIsModalfourVisible(false);
    setIsModalthreeVisible(false);
  };

  const handlefourCancel = () => {
    setIsModalfourVisible(false);
    setIsModalthreeVisible(false);
  };

  const showModalthree = () => {
    setIsModalthreeVisible(true);
  };

  const handlethreeCancel = () => {
    setIsModalthreeVisible(false);
  };

  return (
    <div>
      <CartTab />
      <div className={styles.checkout_container}>
        <div className={`${styles.first_box} `}>
          <div className={styles.billing_container}>
            <div className={styles.title_box}>
              <Image src="/svg/inactivetick.svg" width="32" height="32" />
              <p>1. BILLING DETAILS</p>
            </div>
            <form>
              <div className={styles.input_grid}>
                <div className={styles.input_box}>
                  <input type="text" name="First Name" placeholder="First Name" />
                </div>
                <div className={styles.input_box}>
                  <input type="text" name="Last Name" placeholder="Last Name" />
                </div>
              </div>
              <div className={styles.input_grid}>
                <div className={styles.select_box}>
                  <div className={styles.custom}>
                    <select>
                      <option selected>+234</option>
                      <option>+234</option>
                      <option>+234</option>
                    </select>
                    <i className="fas fa-angle-down" />
                  </div>
                  <input type="text" name="Phone Number" placeholder="Phone Number" />
                </div>
                <div className={styles.input_box}>
                  <input type="email" name="Email Address" placeholder="Email Address" />
                </div>
              </div>
              <div className={styles.one_input}>
                <textarea placeholder="Address" />
              </div>
              <div className={styles.one_input}>
                <div className={styles.custom}>
                  <select placeholder="State/Region">
                    <option selected disabled>
                      State/Region
                    </option>
                  </select>
                  <i className="fas fa-angle-down" />
                </div>
              </div>
              <div className={styles.one_input}>
                <div className={styles.custom}>
                  <select placeholder="City">
                    <option selected disabled>
                      City
                    </option>
                  </select>
                  <i className="fas fa-angle-down" />
                </div>
              </div>
              <button type="submit">Save & Continue</button>
            </form>
            <div className={styles.form_content}>
              <div className={styles.top_head}>
                <p className={styles.name}>Alison Eyo</p>
                <a className={styles.edit}>Edit Information</a>
              </div>
              <p className={styles.contact}>Suite 5, OGB Plaza, Obafemi Awolowo Way, Utako, Abutja</p>
              <p className={styles.contact}>+234 812 3456 7890</p>
            </div>
          </div>
          <div className={styles.delivery_container}>
            <div className={styles.title_box}>
              <Image src="/svg/inactivetick.svg" width="32" height="32" />
              <p>2. DELIVERY METHOD</p>
            </div>
            <p className={styles.sub}>How do you want your order to be delivered?</p>
            <div className={styles.option_box}>
              <div className={styles.option_grid}>
                <button className={styles.option_one}>
                  <Image src="/svg/bike.svg" width="56" height="56" />
                  <div className={styles.info}>
                    <p className={styles.head}>Deliver To Me</p>
                    <p className={styles.sub_text}>Delivered within 24hrs for $20</p>
                  </div>
                </button>
                <button className={styles.option_two}>
                  <Image src="/svg/location.svg" width="56" height="56" />
                  <div className={styles.info}>
                    <div className={styles.header}>
                      <p className={styles.head}>Pick-Up Station</p>
                      <button className={styles.pickupbtn} onClick={showModalone}>
                        Select Pickup Location
                      </button>
                    </div>
                    <p className={styles.sub_text}>
                      Select a pickup location in your area from our 33 locations nationwide
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <button type="submit">Save & Continue</button>
            <div className={styles.form_content}>
              <div className={styles.top_head}>
                <p className={styles.name}>Deliver to me</p>
                <a className={styles.edit}>Edit Information</a>
              </div>
              <p className={styles.contact}>Deliver within 24hrs for $20</p>
            </div>
          </div>
          <div className={styles.payment_container}>
            <div className={styles.title_box}>
              <Image src="/svg/inactivetick.svg" width="32" height="32" />
              <p>2. PAYMENT METHOD</p>
            </div>
            <div className={styles.payment_box}>
              <div className={styles.info_box}>
                <p className={styles.order_id}>KWEK3553767777</p>
                <p className={styles.price}>$539.96</p>
              </div>
              <div className={styles.option_grid}>
                <div className={styles.option_box}>
                  <input type="checkbox" className={styles.inputRound} onClick={showModalthree} />
                  <div className={styles.info}>
                    <p className={styles.head}>Bank Transfer</p>
                    <p className={styles.sub}>Make Payments using Bank Transfer</p>
                  </div>
                </div>
                <div className={styles.option_box}>
                  <input type="checkbox" className={styles.inputRound} onClick={showModaltwo} />
                  <div className={styles.info}>
                    <p className={styles.head}>Card</p>
                    <p className={styles.sub}>Make Payments using your Credit or Debit Card</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.second_box}>
          <p className={styles.title}>YOUR ORDER</p>
          <div className={styles.card_box}>
            <div className={styles.card}>
              <Image src="/images/store.png" width="144" height="144" className={styles.img} />
              <div className={styles.info}>
                <p className={styles.seller}>Seller: Nike Stores</p>
                <p className={styles.name}>Solid pattern in fashion summer dress</p>
                <div className={styles.item_info}>
                  <p className={styles.qty}>Qty: 1</p>
                  <p className={styles.price}>$129.99</p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image src="/images/store.png" width="144" height="144" className={styles.img} />
              <div className={styles.info}>
                <p className={styles.seller}>Seller: Nike Stores</p>
                <p className={styles.name}>Solid pattern in fashion summer dress</p>
                <div className={styles.item_info}>
                  <p className={styles.qty}>Qty: 1</p>
                  <p className={styles.price}>$129.99</p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image src="/images/store.png" width="144" height="144" className={styles.img} />
              <div className={styles.info}>
                <p className={styles.seller}>Seller: Nike Stores</p>
                <p className={styles.name}>Solid pattern in fashion summer dress</p>
                <div className={styles.item_info}>
                  <p className={styles.qty}>Qty: 1</p>
                  <p className={styles.price}>$129.99</p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image src="/images/store.png" width="144" height="144" className={styles.img} />
              <div className={styles.info}>
                <p className={styles.seller}>Seller: Nike Stores</p>
                <p className={styles.name}>Solid pattern in fashion summer dress</p>
                <div className={styles.item_info}>
                  <p className={styles.qty}>Qty: 1</p>
                  <p className={styles.price}>$129.99</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subtotal_box}>
            <p className={styles.head}>Subtotal</p>
            <p className={styles.price}>$519.96</p>
          </div>
          <div className={styles.charge_box}>
            <p className={styles.head}>Delivery Charges</p>
            <p className={styles.price}>$20.00</p>
          </div>
          <div className={styles.total_box}>
            <p className={styles.head}>Total</p>
            <p className={styles.price}>$539.96</p>
          </div>
        </div>
      </div>
      <Modal
        title="Pickup Location"
        className={styles.pickup_modal}
        visible={isModaloneVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ top: 20 }}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk} block>
            Use This Address
          </Button>,
        ]}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#1d1616',
              marginBottom: 0,
            }}
          >
            Find the Pickup Location nearest to you
          </p>
          <a
            style={{
              fontSize: 16,
              fontWeight: 600,
              marginLeft: 'auto',
              color: '#af1328',
            }}
          >
            Show All
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'center',
            paddingBottom: 10,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '48%',
              marginRight: '2%',
              display: 'flex',
              alignItems: 'center',
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            <select
              style={{
                borderColor: '#574240',
                borderRadius: 5,
                padding: 16,
                appearance: 'none',
                borderWidth: 1,
                width: '100%',
              }}
            >
              <option style={{ fontSize: 16, color: '#574240' }} selected disabled>
                Choose State
              </option>
            </select>
            <i style={{ position: 'absolute', right: 0, marginRight: 15 }} className="fas fa-angle-down" />
          </div>
          <div
            style={{
              position: 'relative',
              width: '48%',
              display: 'flex',
              alignItems: 'center',
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            <select
              style={{
                borderColor: '#574240',
                borderRadius: 5,
                padding: 16,
                appearance: 'none',
                borderWidth: 1,
                width: '100%',
              }}
            >
              <option style={{ fontSize: 16, color: '#574240' }} selected disabled>
                Choose City
              </option>
            </select>
            <i style={{ position: 'absolute', right: 0, marginRight: 15 }} className="fas fa-angle-down" />
          </div>
        </div>
        <div style={{ width: '100%', height: 300, overflowY: 'auto' }}>
          <button
            style={{
              backgroundColor: '#fdfcfc',
              borderWidth: 1,
              borderColor: 'rgba(191, 165, 163, 0.5)',
              borderRadius: 5,
              padding: 24,
              marginBottom: 16,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <div style={{}}>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 20,
                  marginBottom: 8,
                  color: '#af1328',
                  textAlign: 'left',
                }}
              >
                Pickup Location 1
              </p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/svg/lochouse.svg" width="24" height="24" />
                <p
                  style={{
                    fontSize: 16,
                    marginBottom: 4,
                    color: '#574240',
                    textAlign: 'left',
                    marginLeft: 12,
                  }}
                >
                  10, Medical Road, Computer Village, Ikeja
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 4 }}>
                <Image src="/svg/locphone.svg" width="18" height="18" />
                <p
                  style={{
                    fontSize: 16,
                    marginBottom: 0,
                    color: '#574240',
                    textAlign: 'left',
                    marginLeft: 12,
                  }}
                >
                  +1 324 5748 902
                </p>
              </div>
            </div>
          </button>
          <button
            style={{
              backgroundColor: '#fdfcfc',
              borderWidth: 1,
              borderColor: 'rgba(191, 165, 163, 0.5)',
              borderRadius: 5,
              padding: 24,
              marginBottom: 16,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <div style={{}}>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 20,
                  marginBottom: 8,
                  color: '#af1328',
                  textAlign: 'left',
                }}
              >
                Pickup Location 1
              </p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/svg/lochouse.svg" width="24" height="24" />
                <p
                  style={{
                    fontSize: 16,
                    marginBottom: 4,
                    color: '#574240',
                    textAlign: 'left',
                    marginLeft: 12,
                  }}
                >
                  10, Medical Road, Computer Village, Ikeja
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 4 }}>
                <Image src="/svg/locphone.svg" width="18" height="18" />
                <p
                  style={{
                    fontSize: 16,
                    marginBottom: 0,
                    color: '#574240',
                    textAlign: 'left',
                    marginLeft: 12,
                  }}
                >
                  +1 324 5748 902
                </p>
              </div>
            </div>
          </button>
          <button
            style={{
              backgroundColor: '#fdfcfc',
              borderWidth: 1,
              borderColor: 'rgba(191, 165, 163, 0.5)',
              borderRadius: 5,
              padding: 24,
              marginBottom: 16,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <div style={{}}>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 20,
                  marginBottom: 8,
                  color: '#af1328',
                  textAlign: 'left',
                }}
              >
                Pickup Location 1
              </p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/svg/lochouse.svg" width="24" height="24" />
                <p
                  style={{
                    fontSize: 16,
                    marginBottom: 4,
                    color: '#574240',
                    textAlign: 'left',
                    marginLeft: 12,
                  }}
                >
                  10, Medical Road, Computer Village, Ikeja
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 4 }}>
                <Image src="/svg/locphone.svg" width="18" height="18" />
                <p
                  style={{
                    fontSize: 16,
                    marginBottom: 0,
                    color: '#574240',
                    textAlign: 'left',
                    marginLeft: 12,
                  }}
                >
                  +1 324 5748 902
                </p>
              </div>
            </div>
          </button>
        </div>
      </Modal>
      <Modal
        title="Enter Card Details"
        className={styles.pickup_modal}
        visible={isModaltwoVisible}
        onOk={handletwoOk}
        onCancel={handletwoCancel}
        style={{ top: 20 }}
        footer={[
          <Button key="submit" type="primary" onClick={handletwoOk}>
            Pay now
          </Button>,
          <Button key="return" onClick={handletwoCancel}>
            Select another payment method
          </Button>,
        ]}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#1d1616',
              marginBottom: 0,
            }}
          >
            KWEK3553767777
          </p>
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              marginLeft: 'auto',
              color: '#af1328',
              marginBottom: 0,
            }}
          >
            $590.02
          </p>
        </div>
        <form>
          <div style={{ marginBottom: 10, width: '100%' }}>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#574240',
                marginBottom: 10,
              }}
            >
              Card Number
            </p>
            <input
              style={{
                paddingTop: 14,
                paddingBottom: 14,
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: 'rgba(191, 165, 163, 0.05)',
                borderWidth: 1,
                borderColor: 'rgba(191, 165, 163, 0.5)',
                borderRadius: 5,
                fontWeight: 600,
                fontSize: '16px',
                color: '#574240',
                appearance: 'none',
                width: '100%',
                outline: 'none',
              }}
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '100%',
            }}
          >
            <div style={{ marginTop: 20, marginBottom: 20, width: '48%' }}>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#574240',
                  marginBottom: 10,
                }}
              >
                Date
              </p>
              <input
                style={{
                  paddingTop: 14,
                  paddingBottom: 14,
                  paddingLeft: 20,
                  paddingRight: 20,
                  backgroundColor: 'rgba(191, 165, 163, 0.05)',
                  borderWidth: 1,
                  borderColor: 'rgba(191, 165, 163, 0.5)',
                  borderRadius: 5,
                  fontWeight: 600,
                  fontSize: '16px',
                  color: '#574240',
                  appearance: 'none',
                  width: '100%',
                  outline: 'none',
                }}
                placeholder="MM / YY"
              />
            </div>
            <div
              style={{
                marginTop: 20,
                marginBottom: 20,
                width: '48%',
                marginLeft: 'auto',
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#574240',
                  marginBottom: 10,
                }}
              >
                CVV
              </p>
              <input
                style={{
                  paddingTop: 14,
                  paddingBottom: 14,
                  paddingLeft: 20,
                  paddingRight: 20,
                  backgroundColor: 'rgba(191, 165, 163, 0.05)',
                  borderWidth: 1,
                  borderColor: 'rgba(191, 165, 163, 0.5)',
                  borderRadius: 5,
                  fontWeight: 600,
                  fontSize: '16px',
                  color: '#574240',
                  appearance: 'none',
                  width: '100%',
                  outline: 'none',
                }}
                placeholder="123"
              />
            </div>
          </div>
        </form>
      </Modal>
      <Modal
        title="Transfer"
        className={styles.pickup_modal}
        visible={isModalthreeVisible}
        onCancel={handlethreeCancel}
        style={{ top: 20 }}
        footer={[
          <Button key="submit" type="primary" onClick={showModalfour}>
            Proceed
          </Button>,
          <Button key="return" onClick={handlethreeCancel}>
            Select another payment method
          </Button>,
        ]}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#1d1616',
              marginBottom: 0,
            }}
          >
            KWEK3553767777
          </p>
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              marginLeft: 'auto',
              color: '#af1328',
              marginBottom: 0,
            }}
          >
            $590.02
          </p>
        </div>
        <form>
          <div style={{ marginBottom: 10, width: '100%' }}>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#574240',
                marginBottom: 10,
              }}
            >
              Full Name
            </p>
            <input
              style={{
                paddingTop: 14,
                paddingBottom: 14,
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: 'rgba(191, 165, 163, 0.05)',
                borderWidth: 1,
                borderColor: 'rgba(191, 165, 163, 0.5)',
                borderRadius: 5,
                fontWeight: 600,
                fontSize: '16px',
                color: '#574240',
                appearance: 'none',
                width: '100%',
                outline: 'none',
              }}
              placeholder="Enter your full name here"
            />
          </div>
        </form>
      </Modal>
      <Modal
        title="Transfer"
        className={styles.pickup_modal}
        visible={isModalfourVisible}
        onOk={handlefourOk}
        onCancel={handlefourCancel}
        style={{ top: 20 }}
        footer={[
          <Button key="submit" type="primary" onClick={handlefourOk}>
            I have made a Transfer
          </Button>,
          <Button key="return" onClick={handlefourCancel}>
            Select another payment method
          </Button>,
        ]}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#1d1616',
              marginBottom: 0,
            }}
          >
            KWEK3553767777
          </p>
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              marginLeft: 'auto',
              color: '#af1328',
              marginBottom: 0,
            }}
          >
            $590.02
          </p>
        </div>
        <div style={{}}>
          <p style={{ fontSize: 18, color: '#574240', marginBottom: 24 }}>
            Kindly transfer to the Account below using the Transaction ID as Ref, then click the “I have made a
            transfer” button to complete thetransaction.
          </p>
          <div style={{ marginBottom: 10 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <p style={{ fontSize: 16, color: '#574240', marginBottom: 0 }}>Amount:</p>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#574240',
                  marginBottom: 0,
                  marginLeft: 'auto',
                }}
              >
                $590.02
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <p style={{ fontSize: 16, color: '#574240', marginBottom: 0 }}>Bank Name:</p>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#574240',
                  marginBottom: 0,
                  marginLeft: 'auto',
                }}
              >
                Kuda Bank
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <p style={{ fontSize: 16, color: '#574240', marginBottom: 0 }}>Account Number:</p>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#574240',
                  marginBottom: 0,
                  marginLeft: 'auto',
                }}
              >
                00123456789
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <p style={{ fontSize: 16, color: '#574240', marginBottom: 0 }}>Account Name:</p>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#574240',
                  marginBottom: 0,
                  marginLeft: 'auto',
                }}
              >
                Coco le Design
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <p style={{ fontSize: 16, color: '#574240', marginBottom: 0 }}>Transaction ID:</p>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#574240',
                  marginBottom: 0,
                  marginLeft: 'auto',
                }}
              >
                THX000923890
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckGrid;
