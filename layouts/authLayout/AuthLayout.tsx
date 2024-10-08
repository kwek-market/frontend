import Image from "next/legacy/image";
import Link from "next/link";
import styles from "./AuthLayout.module.scss";

import { useRouter } from "next/router";
import Logo from "../../components/UI/Logo";

const AuthLayout = function ({
  children,
  id,
  withBanner,
  bannerText,
  withSubText,
  subText,
  bannerLink,
  withLogo,
}: any) {
  const router = useRouter();
  return (
    <div id={styles[id]} className={styles.authPage}>
      {/* <Topbar withLogo={withLogo} /> */}

      <div className={styles.mainWrapper}>
        {withBanner && (
          <div className={styles.banner}>
            {withLogo && (
              <Logo className={styles.logo} />
            )}
            <h1 className={styles.banner_text}>
              {bannerText.lineOne} <br /> {bannerText.lineTwo} <br /> {bannerText.lineThree}
            </h1>
            {withSubText && <h2 className={styles.subText}>{subText}</h2>}
            {bannerLink && (
              <div className={styles.banner_link}>
                <Link href='#0' className={styles.banner_link}>
                  <button className={`btn ${styles.btn}`}>
                    <div className={styles.btn_text}>Shop with Kwek</div>
                    <Image
                      className={styles.btn_icon}
                      src='/svg/arrow-right-red.svg'
                      width='24'
                      height='11.6'
                      placeholder='blur'
                      blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN89PDhNQAIzQN82oRX+AAAAABJRU5ErkJggg=='
                    />
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}

        <div
          className={`${
            withBanner ? styles.formContainer : styles.formContainer__full
          } tw-relative`}
        >
          <button className='tw-absolute tw-top-10 tw-left-10' onClick={() => router.push("/")}>
            <i className='fas fa-arrow-left tw-text-left tw-text-2xl' />
          </button>

          <div className='tw-my-auto tw-w-full'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
