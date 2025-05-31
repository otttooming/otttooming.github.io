import { clsx } from 'clsx/lite';
import * as styles from './Logo.css';
import { Gtap, Iglu, Khk, Pethealth, Pipedrive, Voog } from './CompanyLogos';

export type LogoProps = {
  name: string;
  className?: string;
};

const Logo = ({ name, className }: LogoProps) => {
  const getLogoClasses = (size?: 'medium' | 'large') => {
    return clsx(
      styles.icon,
      size === 'medium' && styles.mediumIcon,
      size === 'large' && styles.largeIcon,
      className,
    );
  };

  if (name === 'voog') {
    return <Voog className={getLogoClasses()} />;
  }

  if (name === 'iglu') {
    return <Iglu className={getLogoClasses('large')} />;
  }

  if (name === 'gtap') {
    return <Gtap className={getLogoClasses()} />;
  }

  if (name === 'pipedrive') {
    return <Pipedrive className={getLogoClasses()} />;
  }

  if (name === 'pethealth') {
    return <Pethealth className={getLogoClasses('large')} />;
  }

  if (name === 'khk') {
    return <Khk className={getLogoClasses('medium')} />;
  }

  return null;
};

export default Logo;
