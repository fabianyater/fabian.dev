import {useTheme} from "@/app/context/ThemeProvider";
import {DarkIcon, LightIcon} from "@/assets/icons";
import styles from './styles.module.css'
const Toggle = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <button className={styles.button} onClick={toggleTheme}>
      {theme === "light" ? (
        <LightIcon/>
      ) : (
        <DarkIcon/>
      )}
    </button>
  );
};

export default Toggle;
