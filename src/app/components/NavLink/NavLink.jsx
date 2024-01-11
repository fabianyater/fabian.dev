"use client";

import { useActiveSection } from "@/app/context/ActiveSectionProvider";
import styles from "./styles.module.css";

const NavLink = ({ url, title, onClick }) => {
  const { activeSection } = useActiveSection();
  const isSelected = `#${activeSection}` === url;

  return (
    <a
      className={`${styles.link} ${isSelected && styles.linkSelected}`}
      href={url}
      onClick={onClick}
    >
      {title}
    </a>
  );
};

export default NavLink;
