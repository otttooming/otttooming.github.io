import * as Logos from '../Logo/Logos';
import * as styles from './HexGrid.css';

interface HexProps {
  children: React.ReactNode;
  href: string;
  variant: 'typescript' | 'redux' | 'gatsby' | 'react' | 'graphql';
}

const Link = ({
  href,
  children,
}: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className={styles.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Hex = ({ children, href, variant }: HexProps) => (
  <Link href={href}>
    <span
      className={`${styles.styledContent} ${styles.hex({ backgroundColor: variant })}`}
    >
      {children}
    </span>
  </Link>
);

const Icon = ({ children }: { children: React.ReactNode }) => (
  <span className={styles.icon}>{children}</span>
);

const HexGrid = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <Hex variant="typescript" href="https://www.typescriptlang.org/">
          <Icon>
            <Logos.TypeScript />
          </Icon>
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex variant="redux" href="https://redux.js.org/">
          <Icon>
            <Logos.Redux />
          </Icon>
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex variant="gatsby" href="https://www.gatsbyjs.org/">
          <Icon>
            <Logos.Gatsby />
          </Icon>
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex variant="react" href="https://reactjs.org/">
          <Icon>
            <Logos.ReactLogoComponent />
          </Icon>
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex variant="graphql" href="https://graphql.org/">
          <Icon>
            <Logos.GraphQL />
          </Icon>
        </Hex>
      </div>
    </div>
  );
};

export default HexGrid;
