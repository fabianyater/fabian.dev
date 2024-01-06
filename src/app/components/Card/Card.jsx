import styles from './styles.module.css'
import Pill from "@/app/components/Pill";

const Card = ({project}) => {
  const {title, description, tools, links, cardColor} = project;

  return (
    <article className={styles.bemtoItem} style={{backgroundColor: cardColor}}>
      <div className={styles.cardContainer}>
        <header className={styles.tools}>
          {tools.map((tool, index) => (
            <div key={index} title={tool.name}>
              <tool.Icon/>
            </div>
          ))}
        </header>
        <section className={styles.body}>
          <h3>{title}</h3>
          <p>{description}</p>
        </section>
        <footer className={styles.footer}>
          {links.map((link, index) => (
            link.url && (<a key={index} href={link.url} title={link.title} target="_blank">
              <link.Icon/>
            </a>)
          ))}
        </footer>
      </div>
    </article>
  )
}

export default Card;
