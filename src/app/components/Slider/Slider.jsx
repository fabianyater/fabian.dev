import styles from "./styles.module.css";

const Slider = ({ data, reverse }) => {
  return (
    <>
      <div className={styles.skillsAnimate} data-reverse={reverse}>
        {data.map((skill, index) => (
          <div key={index} className={styles.skills}>
            <skill.Icon />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.rightShadow}></div>
      <div className={styles.leftShadow}></div>
    </>
  );
};

export default Slider;
