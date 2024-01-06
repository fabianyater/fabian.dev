import styles from './styles.module.css'

const NavLink = ({url, title, children}) => {
  return (
    <a className={styles.socialLink} href={url} target="_blank" rel="noopener noreferrer">
      {children}
      {title}
    </a>
  )
};

export default NavLink;