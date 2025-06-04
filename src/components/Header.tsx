import { Link as GatsbyLink } from 'gatsby';
import { BookOpen, Tool, User, Wind } from 'react-feather';
import DarkMode from './DarkMode/DarkMode';
import * as styles from './Header.css';

const Header = () => (
  <header className={styles.header}>
    <p>
      <GatsbyLink to="/" className={styles.button}>
        <Wind />
        Ott
      </GatsbyLink>
    </p>

    <nav>
      <ol className={styles.navList}>
        <li className={styles.navItem}>
          <GatsbyLink to="/about/me" className={styles.button}>
            <User />
            About
          </GatsbyLink>
        </li>

        <li className={styles.navItem}>
          <GatsbyLink to="/technologies" className={styles.button}>
            <Tool />
            Tech
          </GatsbyLink>
        </li>

        <li className={styles.navItem}>
          <GatsbyLink to="/projects" className={styles.button}>
            <BookOpen />
            Projects
          </GatsbyLink>
        </li>

        <li className={styles.navItem}>
          <DarkMode />
        </li>
      </ol>
    </nav>
  </header>
);

export default Header;
