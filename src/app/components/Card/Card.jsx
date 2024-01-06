import styles from './styles.module.css'
import Pill from "@/app/components/Pill";

const Card = ({project}) => {
  const {title, description, tools, links, cardColor} = project;

  return (
    <article className={styles.cardContainer} style={{backgroundColor: cardColor}}>
      <header className={styles.tools}>
        {tools.map((tool, index) => (
          <tool.Icon key={index}/>
        ))}
      </header>
      <section className={styles.body}>
        <h3>{title}</h3>
        <p>{description}</p>
      </section>
      <footer className={styles.footer}>
        {links.map((link, index) => (
          <a key={index} href={link.url} title={link.title} target="_blank" >
            <link.Icon/>
          </a>
        ))}
      </footer>
    </article>
  )
}

export default Card;
