import { useColorMode } from '../ui/color-mode';
import { moonSun, modeButton } from './DarkMode.css';

const MoonOrSun = () => {
  const { colorMode } = useColorMode();

  return (
    <span
      className={moonSun({
        mode: colorMode,
      })}
    />
  );
};

const DarkMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <button
      type="button"
      className={modeButton({
        mode: colorMode,
      })}
      onClick={toggleColorMode}
      aria-label="Toggle dark mode"
    >
      <MoonOrSun />
    </button>
  );
};

export default DarkMode;
