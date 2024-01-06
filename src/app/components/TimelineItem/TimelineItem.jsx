import styles from './styles.module.css'

const TimelineItem = ({date, title, description}) => {
  return (
    <li className={styles.listItem}>
      <div></div>
      <time>{date}</time>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
};

export default TimelineItem;