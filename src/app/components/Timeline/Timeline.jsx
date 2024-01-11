import styles from './styles.module.css'
import TimelineItem from "@/app/components/TimelineItem";

const Section = ({items}) => {
  return (
    <ol className={styles.list}>
      {items.map((item, index) => (
        <TimelineItem key={index} title={item.title} description={item.description} date={item.date}
                      tasks={item.tasks}/>
      ))}
    </ol>
  )
};

export default Section;