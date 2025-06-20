import { useColorMode } from '../ui/color-mode';
import { moonSun, modeButton } from './DarkMode.css';

const DarkMode = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <button
      type="button"
      className={modeButton}
      onClick={toggleColorMode}
      aria-label="Toggle dark mode"
    >
      <span className={moonSun} />
    </button>
  );
};

export default DarkMode;
