import Link from "next/link";
import styles from "./Navbar.module.scss";

interface NavProps {
  showNavBar: boolean;
  setShowNavBar: (showNavBar: boolean) => void;
}

const NavBar = function ({ showNavBar, setShowNavBar }: NavProps) {
  const menu = [
    {
      title: "Shop",
      url: "/seller/profile",
    },
    {
      title: "About Us",
      url: "/aboutUs",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
    {
      title: "All Categories",
      url: "/all",
    },
  ];
  return (
    <nav id={styles.mainNav} className='bg-primary' style={{ transform: true && "translateX(0)" }}>
      {/* <div className={styles.close} onClick={() => setShowNavBar(false)}>
        <i className={`fas fa-times ${styles.close_icon}`} />
      </div> */}

      <ul className={styles.nav}>
        {menu.map((item, index) => (
          <li className={styles.nav_item} key={index}>
            <Link href={item.url} className={styles.nav_link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* <div className={styles.extra}>
        <Link href="/">
          <a className={styles.extra_link}>Kwek’s Response to COVID-19</a>
        </Link>
      </div> */}
    </nav>
  );
};

export default NavBar;
