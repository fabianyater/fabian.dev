'use client'

import styles from './styles.module.css';
import {useEffect, useState} from "react";

const NavLink = ({url, title, onClick}) => {
  const [hash, setHash] = useState("#sobremi");

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  return (
    <a className={`${styles.link} ${hash === url && styles.linkSelected}`} href={url} onClick={onClick}>
      {title}
    </a>
  );
};

export default NavLink;