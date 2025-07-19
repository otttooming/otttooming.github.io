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
export function textMap(slug: string) {
  const value = projectSlugs[slug];

  return value;
}
