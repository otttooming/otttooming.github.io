import * as styles from './Logo.css';
import { Gtap, Iglu, Khk, Pethealth, Pipedrive, Voog } from './CompanyLogos';

const getLogoClasses = (size?: 'medium' | 'large') =>
  styles.icon({
    size: size || 'default',
  });

const logoMap: Record<
  string,
  [React.ComponentType<{ className?: string }>, 'medium' | 'large' | undefined]
> = {
  voog: [Voog, undefined],
  iglu: [Iglu, 'large'],
  gtap: [Gtap, undefined],
  pipedrive: [Pipedrive, undefined],
  pethealth: [Pethealth, 'large'],
  khk: [Khk, 'medium'],
};

type LogoProps = {
  name: keyof typeof logoMap;
};

const Logo = ({ name }: LogoProps) => {
  const logo = logoMap[name];

  const [Component, size] = logo;

  return <Component className={getLogoClasses(size)} />;
};

export default Logo;
