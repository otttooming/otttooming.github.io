import { Link } from '../Link/Link';
import * as Logos from '../Logo/Logos';
import * as styles from './HexGrid.css';

interface HexProps {
  children: React.ReactNode;
  href: string;
  variant: 'typescript' | 'redux' | 'gatsby' | 'react' | 'graphql';
}

const Hex = ({ children, href, variant }: HexProps) => (
  <Link href={href} variant="plainExternal">
    <span className={styles.hex({ variant })}>{children}</span>
  </Link>
);

const HexGrid = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <Hex variant="typescript" href="https://www.typescriptlang.org/">
          <Logos.TypeScript className={styles.icon} />
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex variant="redux" href="https://redux.js.org/">
          <Logos.Redux className={styles.icon} />
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex variant="gatsby" href="https://www.gatsbyjs.org/">
          <Logos.Gatsby className={styles.icon} />
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex variant="react" href="https://reactjs.org/">
          <Logos.React className={styles.icon} />
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex variant="graphql" href="https://graphql.org/">
          <Logos.GraphQL className={styles.icon} />
        </Hex>
      </div>
    </div>
  );
};

export default HexGrid;
