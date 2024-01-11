import {useTheme} from "@/app/context/ThemeProvider";
import styles from './styles.module.css'
import { useActiveSection } from "@/app/context/ActiveSectionProvider";
import { useEffect } from "react";
const Section = ({id, title, icon, children, marginTop}) => {
  const { theme } = useTheme()
  const { setActiveSection } = useActiveSection()

  useEffect(() => {
    const section = document.getElementById(id);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveSection(id);
          window.history.pushState(null, null, `#${id}`);
        }
      },
      { threshold: 0.5 } // Ajusta este valor según tus necesidades
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [id, setActiveSection]);

  return (
    <section id={id} className={styles.section} style={{marginTop: marginTop}}>
      <header className={styles.header} data-theme={theme}>
        {icon && icon}
        <h2>{title}</h2>
      </header>
        {children}
    </section>
  )
};

export default Section;