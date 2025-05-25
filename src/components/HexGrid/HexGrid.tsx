import {
  Box,
  type BoxProps,
  Link as ChakraLink,
  type LinkProps,
} from '@chakra-ui/react';
import * as styles from './HexGrid.css';

const Link = ({ ...restProps }: LinkProps) => (
  <ChakraLink display="block" target="blank" {...restProps} />
);

const Hex = ({ children, href, ...restProps }: BoxProps & { href: string }) => (
  <Link href={href}>
    <Content {...restProps}>{children}</Content>
  </Link>
);

const Icon = ({ children }: { children: React.ReactNode }) => (
  <span className={styles.icon}>{children}</span>
);

const Content = ({ ...restProps }: BoxProps) => {
  return (
    <Box
      as="span"
      className={styles.styledContent}
      display="block"
      {...restProps}
    />
  );
};

const GatsbyIcon = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <svg role="img" aria-label="Gatsby" {...rest}>
    <use href="./tech-gatsby.svg#tech-gatsby" />
  </svg>
);

const GraphQLIcon = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <svg role="img" aria-label="GraphQL" {...rest}>
    <use href="./tech-graphql.svg#tech-graphql" />
  </svg>
);

const ReactIcon = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <svg role="img" aria-label="React" {...rest}>
    <use href="./tech-react.svg#tech-react" />
  </svg>
);
const ReduxIcon = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <svg role="img" aria-label="Redux" {...rest}>
    <use href="./tech-redux.svg#tech-redux" />
  </svg>
);
const TSIcon = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <svg role="img" aria-label="TypeScript" {...rest}>
    <use href="./tech-typescript.svg#tech-typescript" />
  </svg>
);

const HexGrid = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <Hex backgroundColor="#007acc" href="https://www.typescriptlang.org/">
          <Icon>
            <TSIcon />
          </Icon>
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex backgroundColor="#764abc" href="https://redux.js.org/">
          <Icon>
            <ReduxIcon />
          </Icon>
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex backgroundColor="#663399" href="https://www.gatsbyjs.org/">
          <Icon>
            <GatsbyIcon />
          </Icon>
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex backgroundColor="#20232a" href="https://reactjs.org/">
          <Icon>
            <ReactIcon />
          </Icon>
        </Hex>
      </div>
      <div className={styles.item}>
        <Hex
          backgroundColor="rgba(221,23,151,0.75)"
          href="https://graphql.org/"
        >
          <Icon>
            <GraphQLIcon />
          </Icon>
        </Hex>
      </div>
    </div>
  );
};

export default HexGrid;
