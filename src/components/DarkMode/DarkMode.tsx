import clsx from 'clsx';
import { useColorMode } from '../ui/color-mode';
import {
  lightMoonSun,
  darkMoonSun,
  darkModeButton,
  lightModeButton,
} from './DarkMode.css';

const MoonOrSun = () => {
  const { colorMode } = useColorMode();

  return (
    <span
      className={clsx(
        colorMode === 'dark' && darkMoonSun,
        colorMode === 'light' && lightMoonSun,
      )}
    />
  );
};

const DarkMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <button
      type="button"
      className={clsx(
        colorMode === 'dark' && darkModeButton,
        colorMode === 'light' && lightModeButton,
      )}
      onClick={toggleColorMode}
      aria-label="Toggle dark mode"
    >
      <MoonOrSun />
    </button>
  );
};

export default DarkMode;
