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
    <ul className={styles.wrapper}>
      {Tech.map(([href, Icon]) => (
        <li className={styles.item} key={Icon.name}>
          <Link href={href} variant="plainExternal">
            <figure className={styles.hex[Icon.name.toLowerCase()]}>
              <Icon className={styles.icon} />
            </figure>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HexGrid;
