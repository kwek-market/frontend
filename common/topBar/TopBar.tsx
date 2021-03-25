import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../button/Button";

const Topbar = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div id="topbar">
      <div className="ad">
        <p className="ad__title">
          Black Friday. <span className="text-primary">Save up to 50%.</span>
        </p>

        <div className="ad__timer">
          <p className="ad__timer-title">Deal Ends:</p>
          <div className="ad__timer-box">
            <p className="ad__time">
              81 <span className="text-primary">D</span>
            </p>
          </div>
          <div className="ad__timer-box">
            <p className="ad__time">
              17 <span className="text-primary">H</span>
            </p>
          </div>
          <div className="ad__timer-box">
            <p className="ad__time">
              26 <span className="text-primary">M</span>
            </p>
          </div>
          <div className="ad__timer-box">
            <p className="ad__time">
              47 <span className="text-primary">S</span>
            </p>
          </div>
        </div>

        <Link href="/">
          <a>
            <Button className="ad__cta btn btn--outline-white">
              Learn More
            </Button>
          </a>
        </Link>
      </div>

      <div className="control">
        <Button className="btn btn--naked" action={() => setShow(!show)}>
          <Image src="/svg/cancel.svg" width="25" height="25" />
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
