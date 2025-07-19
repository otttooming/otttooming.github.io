type Props = {
  title: string;
  kind: string;
  as: 'h1' | 'h2';
} & React.ComponentPropsWithoutRef<'h1'>;

/**
 * Available matched texts.
 * All slugs should be strictly collected.
 */
const projectSlugs = {
  client: 'client project',
  crm: 'CRM',
  cms: 'content management system',
  pms: 'patient management software',
  template: 'template',
  poster: 'poster',
} as const;

/**
 * Match existing slugs with expanded equivalents
 */
function matchSlugToDescription(slug: string) {
  const value = projectSlugs[slug];

  return value;
}

export const ProjectHeader = ({
  title,
  kind,
  as: HeaderTag,
  ...restProps
}: Props) => (
  <HeaderTag {...restProps}>
    <strong>{title}</strong> {matchSlugToDescription(kind)}
  </HeaderTag>
);
