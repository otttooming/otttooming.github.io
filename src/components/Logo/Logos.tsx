import VoogAsset from './assets/Voog';
import PipedriveAsset from './assets/Pipedrive';
import IgluAsset from './assets/Iglu';
import GtapAsset from './assets/Gtap';
import PethealthAsset from './assets/Pethealth';
import KhkAsset from './assets/Khk';
import GatsbyAsset from './assets/Gatsby';
import GraphqlAsset from './assets/Graphql';
import ReactLogoAsset from './assets/ReactLogo';
import ReduxAsset from './assets/Redux';
import TypescriptAsset from './assets/Typescript';

export const Voog = (props: React.ComponentProps<'svg'>) => (
  <VoogAsset aria-label="Voog" {...props} />
);
export const Pipedrive = (props: React.ComponentProps<'svg'>) => (
  <PipedriveAsset aria-label="Pipedrive" {...props} />
);
export const Iglu = (props: React.ComponentProps<'svg'>) => (
  <IgluAsset aria-label="Iglu" {...props} />
);
export const Gtap = (props: React.ComponentProps<'svg'>) => (
  <GtapAsset aria-label="gotoAndPlay" {...props} />
);
export const Pethealth = (props: React.ComponentProps<'svg'>) => (
  <PethealthAsset aria-label="Pethealth" {...props} />
);
export const Khk = (props: React.ComponentProps<'svg'>) => (
  <KhkAsset aria-label="Tartu KHK" {...props} />
);
export const Gatsby = (props: React.ComponentProps<'svg'>) => (
  <GatsbyAsset aria-label="Gatsby" {...props} />
);
export const GraphQL = (props: React.ComponentProps<'svg'>) => (
  <GraphqlAsset aria-label="GraphQL" {...props} />
);
export const ReactLogoComponent = (props: React.ComponentProps<'svg'>) => (
  <ReactLogoAsset aria-label="React" {...props} />
);
export const Redux = (props: React.ComponentProps<'svg'>) => (
  <ReduxAsset aria-label="Redux" {...props} />
);
export const TypeScript = (props: React.ComponentProps<'svg'>) => (
  <TypescriptAsset aria-label="TypeScript" {...props} />
);
