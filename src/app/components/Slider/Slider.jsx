import styles from "./styles.module.css";
import {useTheme} from "@/app/context/ThemeProvider";

const Slider = ({ data, reverse }) => {
  const { theme } = useTheme()
  return (
    <>
      <div className={styles.skillsAnimate} data-reverse={reverse}>
        {data.map((skill, index) => (
          <div key={index} className={styles.skills} data-theme={theme}>
            <skill.Icon />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;
