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
    </>
  );
};

export default Slider;
