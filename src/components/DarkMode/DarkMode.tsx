import clsx from 'clsx';
import { useColorMode } from '../ui/color-mode';
import { moonSun, darkModeButton, lightModeButton } from './DarkMode.css';

const MoonOrSun = () => {
  return <span className={moonSun} />;
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
