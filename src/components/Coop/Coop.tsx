import { Gtap, Iglu, Pipedrive, Voog } from '../Logo/Logos';
import * as styles from './Coop.css';

interface CompanyLogoProps {
  href: string;
  logo: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  maxWidth: number;
}

const CompanyLogo = ({ href, logo: Logo, maxWidth }: CompanyLogoProps) => {
  return (
    <li>
      <a
        href={href}
        className={styles.companyLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Logo className={styles.card} style={{ maxWidth }} />
      </a>
    </li>
  );
};

const COMPANIES = [
  { href: 'https://play.ee/', logo: Gtap, maxWidth: 250 },
  { href: 'https://www.voog.com/', logo: Voog, maxWidth: 150 },
  { href: 'https://www.iglu.ee/', logo: Iglu, maxWidth: 150 },
  { href: 'https://www.pipedrive.com/', logo: Pipedrive, maxWidth: 250 },
] as const;

const Coop = () => {
  return (
    <ol className={styles.companyList}>
      {COMPANIES.map((company) => (
        <CompanyLogo key={company.href} {...company} />
      ))}
    </ol>
  );
};

export default Coop;
