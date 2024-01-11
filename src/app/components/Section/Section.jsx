import {useTheme} from "@/app/context/ThemeProvider";
import styles from './styles.module.css'
const Section = ({id, title, icon, children}) => {
  const { theme } = useTheme()

  return (
    <section id={id} className={styles.section}>
      <header className={styles.header} data-theme={theme}>
        {icon && icon}
        <h2>{title}</h2>
      </header>
        {children}
    </section>
  )
};

export default Section;