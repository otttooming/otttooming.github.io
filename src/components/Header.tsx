import NextLink from 'next/link';
import { BookOpen, Tool, User, Wind } from 'react-feather';
import DarkMode from './DarkMode/DarkMode';
import * as styles from './Header.css';

const Text = ({ children }: React.PropsWithChildren) => (
  <span className={styles.text}>{children}</span>
);

const Header = () => (
  <header>
    <nav>
      <ol className={styles.navList}>
        <li>
          <NextLink href="/" className={styles.button}>
            <Wind />
            Ott
          </NextLink>
        </li>

        <li>
          <NextLink href="/about/me" className={styles.button}>
            <User />
            <Text>About</Text>
          </NextLink>
        </li>

        <li>
          <NextLink href="/technologies" className={styles.button}>
            <Tool />
            <Text>Tech</Text>
          </NextLink>
        </li>

        <li>
          <NextLink href="/projects" className={styles.button}>
            <BookOpen />
            <Text>Projects</Text>
          </NextLink>
        </li>

        <li>
          <DarkMode className={styles.button} />
        </li>
      </ol>
    </nav>
  </header>
);

export default Header;
