import React, { useState } from "react";

import Image from "next/legacy/image";
import Link from "next/link";
import styles from "./TopBar.module.scss";
import Logo from "../../components/UI/Logo";

const Topbar = function ({ withLogo }: { withLogo: boolean }) {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div id={styles.topbar}>
      {withLogo && (
        (<Logo href="/" className={styles.logo} />)
      )}

      <div className={styles.ad}>
        <p className={styles.ad_title}>
          Black Friday. <span className="text-primary">Save up to 50%.</span>
        </p>

        <div className={styles.ad_timer}>
          <p className={styles.ad_timerTitle}>Deal Ends:</p>
          <div className={styles.ad_timerBox}>
            <p className={styles.ad_time}>
              81 <span className="text-primary">D</span>
            </p>
          </div>
          <div className={styles.ad_timerBox}>
            <p className={styles.ad_time}>
              17 <span className="text-primary">H</span>
            </p>
          </div>
          <div className={styles.ad_timerBox}>
            <p className={styles.ad_time}>
              26 <span className="text-primary">M</span>
            </p>
          </div>
          <div className={styles.ad_timerBox}>
            <p className={styles.ad_time}>
              47 <span className="text-primary">S</span>
            </p>
          </div>
        </div>

        <Link href="/">

          <button className={`btn btn--outline-white ${styles.ad_cta}`}>
            Learn More
          </button>

        </Link>
      </div>

      <div className="control">
        <button className="btn btn--naked" onClick={() => setShow(!show)}>
          <Image src="/svg/cancel.svg" width="25" height="25" />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
