'use client'

import styles from './styles.module.css'
import {links} from "@/app/data";
import {useState} from "react";
import NavLink from "@/app/components/NavLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return <header className={styles.header}>
    <nav className={isOpen ? styles.navOpen : styles.nav}>
      {
        links.map((link, index) => (
          <NavLink title={link.title} url={link.url} key={index} onClick={() => setIsOpen(false)}/>
        ))
      }
    </nav>
    <button className={isOpen ? `${styles.burger} ${styles.burgerOpen}` : styles.burger} onClick={toggle}>
      <div/>
      <div/>
      <div/>
    </button>
  </header>;
};

export default Header;
