'use client';
import { useColorMode } from '../ui/color-mode';
import { moonSun, moonSunWrapper } from './DarkMode.css';

const DarkMode = ({
  className,
}: Pick<React.ComponentProps<'button'>, 'className'>) => {
  const toggleColorMode = useColorMode();

  return (
    <button
      type="button"
      className={className}
      onClick={toggleColorMode}
      aria-label="Toggle dark mode"
    >
      <span className={moonSunWrapper}>
        <span className={moonSun} />
      </span>
    </button>
  );
};

export default DarkMode;
