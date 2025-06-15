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

const GatsbyIcon = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <svg role="img" aria-label="Gatsby" {...rest}>
    <use href="static/tech-gatsby.svg#tech-gatsby" />
  </svg>
);

const GraphQLIcon = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <svg role="img" aria-label="GraphQL" {...rest}>
    <use href="static/tech-graphql.svg#tech-graphql" />
  </svg>
);

const ReactIcon = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <svg role="img" aria-label="React" {...rest}>
    <use href="static/tech-react.svg#tech-react" />
  </svg>
);
const ReduxIcon = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <svg role="img" aria-label="Redux" {...rest}>
    <use href="static/tech-redux.svg#tech-redux" />
  </svg>
);
const TSIcon = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <svg role="img" aria-label="TypeScript" {...rest}>
    <use href="static/tech-typescript.svg#tech-typescript" />
  </svg>
);

const HexGrid = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <Hex variant="typescript" href="https://www.typescriptlang.org/">
          <Icon>
            <TSIcon />
          </Icon>
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex variant="redux" href="https://redux.js.org/">
          <Icon>
            <ReduxIcon />
          </Icon>
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex variant="gatsby" href="https://www.gatsbyjs.org/">
          <Icon>
            <GatsbyIcon />
          </Icon>
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex variant="react" href="https://reactjs.org/">
          <Icon>
            <ReactIcon />
          </Icon>
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex variant="graphql" href="https://graphql.org/">
          <Icon>
            <GraphQLIcon />
          </Icon>
        </Hex>
      </div>
    </div>
  );
};

export default HexGrid;
