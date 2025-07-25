'use client';
import { useColorMode } from '../ui/color-mode';
import { moonSun, baseButton } from './DarkMode.css';

const DarkMode = () => {
  const toggleColorMode = useColorMode();

  return (
    <button
      type="button"
      className={baseButton}
      onClick={toggleColorMode}
      aria-label="Toggle dark mode"
    >
      <span className={moonSun} />
    </button>
  );
};

export default DarkMode;
