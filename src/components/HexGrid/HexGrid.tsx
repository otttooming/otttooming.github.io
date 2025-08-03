import { Link } from '../Link/Link';
import * as Logos from '../Logo/Logos';
import * as styles from './HexGrid.css';

const Tech = [
  ['https://www.typescriptlang.org/', Logos.TypeScript],
  ['https://redux.js.org/', Logos.Redux],
  ['https://www.gatsbyjs.org/', Logos.Gatsby],
  ['https://reactjs.org/', Logos.React],
  ['https://graphql.org/', Logos.GraphQL],
] as const;

const HexGrid = () => {
  return (
    <div className={styles.wrapper}>
      {Tech.map(([href, Icon]) => (
        <div className={styles.item} key={Icon.name}>
          <Link href={href} variant="plainExternal">
            <span className={styles.hex[Icon.name.toLowerCase()]}>
              <Icon className={styles.icon} />
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HexGrid;
