type AssetProps = React.ComponentProps<'svg'> & {
  name: string;
};

const Asset = async ({ name, ...rest }: AssetProps) => {
  const asset = (await import(`./static/${name}.svg`)).default;

  return (
    <svg role="img" aria-label="Logo" {...rest}>
      <use href={`${asset.src}#logo-${name}`} />
    </svg>
  );
};

export const Voog = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <Asset name="voog" aria-label="Voog" {...rest} />
);

export const Pipedrive = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <Asset name="pipedrive" aria-label="Pipedrive" {...rest} />
);

export const Iglu = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <Asset name="iglu" aria-label="Iglu" {...rest} />
);

export const Gtap = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <Asset name="gtap" aria-label="gotoAndPlay" {...rest} />
);

export const Pethealth = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <Asset name="pethealth" aria-label="Pethealth" {...rest} />
);

export const Khk = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <Asset name="khk" aria-label="Tartu KHK" {...rest} />
);

export const Gatsby = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <Asset name="gatsby" aria-label="Gatsby" {...rest} />
);

export const GraphQL = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <Asset name="graphql" aria-label="GraphQL" {...rest} />
);

export const React = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <Asset name="react" aria-label="React" {...rest} />
);
export const Redux = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <Asset name="redux" aria-label="Redux" {...rest} />
);
export const TypeScript = ({ ...rest }: React.ComponentProps<'svg'>) => (
  <Asset name="typescript" aria-label="TypeScript" {...rest} />
);
