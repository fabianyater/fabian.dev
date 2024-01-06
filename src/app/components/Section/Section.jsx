import styles from "@/app/components/Section/styles.module.css"

const Section = ({id, title, icon, children}) => {
  return (
    <section id={id} className={styles.section}>
      <header className={styles.header}>
        {icon && icon}
        <h2>{title}</h2>
      </header>
        {children}
    </section>
  )
};

export default Section;