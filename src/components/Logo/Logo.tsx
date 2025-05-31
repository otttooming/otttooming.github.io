import * as styles from './Logo.css';
import { Gtap, Iglu, Khk, Pethealth, Pipedrive, Voog } from './CompanyLogos';

export type LogoProps = {
  name: string;
  className?: string;
};

const Logo = ({ name, className }: LogoProps) => {
  const baseClassName = `${styles.icon} ${className || ''}`;

  if (name === 'voog') {
    return <Voog className={baseClassName} />;
  }

  if (name === 'iglu') {
    return <Iglu className={`${styles.largeIcon} ${className || ''}`} />;
  }

  if (name === 'gtap') {
    return <Gtap className={baseClassName} />;
  }

  if (name === 'pipedrive') {
    return <Pipedrive className={baseClassName} />;
  }

  if (name === 'pethealth') {
    return <Pethealth className={`${styles.largeIcon} ${className || ''}`} />;
  }

  if (name === 'khk') {
    return <Khk className={`${styles.mediumIcon} ${className || ''}`} />;
  }

  return null;
};

export default Logo;
