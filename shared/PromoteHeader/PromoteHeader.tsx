import React from "react";
import Image from "next/image";
import styles from "./PromoteHeader.module.scss";
import { useRouter } from "next/router";

const PromoteHeader = function ({ children }: any) {
  const router = useRouter();
  return (
    <nav className={styles.store_option}>
      <div className={styles.option}>
        <div onClick={() => router.back()}>
          <Image
            src="/images/keyboard.png"
            width="30"
            height="20"
            className={styles.img}
          />
        </div>
        <p className={styles.this}>Promote this product</p>
      </div>
      <main className={styles.build}>{children}</main>
      <div className={styles.click}>
        <p className={styles.by}>
          By clicking the button, you agree to Kwek’s{" "}
          <span>Terms & Conditions</span>
        </p>
        <button className="tw-bg-green-success tw-text-white-100 tw-py-2 tw-px-3 tw-rounded-sm">
          Promote Product
        </button>
      </div>
    </nav>
  );
};

export default PromoteHeader;
