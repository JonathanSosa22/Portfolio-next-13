"use client";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import styles from "./navbar.module.css";
import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },

  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className={styles.container}>
        <Link href="/" className={styles.logo}>
          Sosa Jonnathan
        </Link>
        <div className={styles.links}>
          <DarkModeToggle />

          {links.map((link) => (
            <Link className={styles.link} key={link.id} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
      <div className={styles.nav_mobile}>
        {links.map((link) => (
          <Link className={styles.link_mobile} key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
