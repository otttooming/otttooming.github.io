export type Text = 'client' | 'crm' | 'cms' | 'pms' | 'template' | 'poster';

/**
 * Available matched texts.
 * All shorthands should be strictly collected.
 */
export const projectTexts: { [K in Text]: string } = {
  client: 'client project',
  crm: 'CRM',
  cms: 'content management system',
  pms: 'patient management software',
  template: 'template',
  poster: 'poster',
};

/**
 * Match existing shorthands with expanded equivalents
 */
export function textMap<T>(text: string, items: T): T[keyof T] {
  const value = items[text];

  return value;
}
