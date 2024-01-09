import styles from './styles.module.css'
import {getTaskDescription, getTaskTitle, splitItem} from "@/app/utils";

const TimelineItem = ({date, title, description, tasks}) => {
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