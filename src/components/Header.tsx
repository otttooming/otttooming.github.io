import NextLink from 'next/link';
import { BookOpen, Tool, User, Wind } from 'react-feather';
import DarkMode from './DarkMode/DarkMode';
import * as styles from './Header.css';

const Header = () => (
  <header className={styles.header}>
    <NextLink href="/" className={styles.button}>
      <Wind />
      Ott
    </NextLink>

    <nav>
      <ol className={styles.navList}>
        <li className={styles.navItem}>
          <NextLink href="/about/me" className={styles.button}>
            <User />
            About
          </NextLink>
        </li>

        <li className={styles.navItem}>
          <NextLink href="/technologies" className={styles.button}>
            <Tool />
            Tech
          </NextLink>
        </li>

        <li className={styles.navItem}>
          <NextLink href="/projects" className={styles.button}>
            <BookOpen />
            Projects
          </NextLink>
        </li>

        <li className={styles.navItem}>
          <DarkMode />
        </li>
      </ol>
    </nav>
  </header>
);

export default Header;
