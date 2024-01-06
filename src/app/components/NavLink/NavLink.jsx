'use client'

import styles from './styles.module.css'

const NavLink = ({url, title, onClick}) => {
  return <a className={styles.link} href={url} onClick={onClick}>{title}</a>
};

export default NavLink;
