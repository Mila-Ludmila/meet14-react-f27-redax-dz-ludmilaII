import SelectTheme from "../SelectTheme";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <SelectTheme />
    </header>
  );
}
