import styles from './styles.module.css';

const TimelineItem = ({date, title, description, tasks}) => {
  return (
    <li className={styles.listItem}>
      <div></div>
      <time>{date}</time>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className={styles.tasksList}>
        {tasks.map((task, index) => {
          return(
            <li key={index}>
              <p><span>{task.item}: </span>{task.description}</p>
            </li>
          );
        })}
      </ul>
    </li>
  )
};
export default TimelineItem;