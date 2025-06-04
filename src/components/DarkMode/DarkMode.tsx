import { useColorMode } from '../ui/color-mode';
import { moonSun, darkModeButton } from './DarkMode.css';

const MoonOrSun = () => {
  return <span className={moonSun} />;
};

const DarkMode = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <button
      type="button"
      className={darkModeButton}
      onClick={toggleColorMode}
      aria-label="Toggle dark mode"
    >
      <MoonOrSun />
    </button>
  );
};

export default DarkMode;
