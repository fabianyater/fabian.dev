import styles from './styles.module.css'

const TimelineItem = ({date, title, description, tasks}) => {
  const splitItem = (item) => {
    return item.split(':');
  }

  const getTaskTitle = (itemParts) => {
    return itemParts[0];
  }

  const getTaskDescription = (itemParts) => {
    if (itemParts.length > 1) {
      itemParts.shift();
      return itemParts.join(':').trim();
    }
    return itemParts.join(':');
  }

  return (
    <li className={styles.listItem}>
      <div></div>
      <time>{date}</time>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className={styles.tasksList}>
        {tasks.map((task, index) => {
          const taskParts = splitItem(task.item);
          return(
            <li key={index}>
              <p><span>{getTaskTitle(taskParts)}: </span>{getTaskDescription(taskParts)}</p>
            </li>
          );
        })}
      </ul>
    </li>
  )
};
export default TimelineItem;