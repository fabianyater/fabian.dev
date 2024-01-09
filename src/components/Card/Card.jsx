import styles from "./styles.module.css";
import {useTheme} from "@/app/context/ThemeProvider";

const Card = ({project}) => {
  const { theme } = useTheme();
  const {title, description, tools, links, cardColor} = project;

  return (
    <article
      className={styles.bemtoItem}
      style={{backgroundColor: cardColor}}
    >
      <div className={styles.cardContainer}>
        <header className={styles.tools} data-theme={theme}>
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
        <footer className={styles.footer} data-theme={theme}>
          {links.map(
            (link, index) =>
              link.url ? (
                <a
                  key={index}
                  href={link.url}
                  title={link.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.Icon/>
                </a>
              ) : link.title && (
                <p key={index} className={styles.title}>
                  {link.title}
                </p>
              )
          )}
        </footer>
      </div>
    </article>
  );
};

export default Card;
