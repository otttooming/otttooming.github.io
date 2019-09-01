export type Text = "client" | "crm" | "cms" | "pms" | "template"

/**
 * Available matched texts.
 * All shorthands should be strictly collected.
 */
const texts: { [K in Text]: string } = {
  client: "client project",
  crm: "CRM",
  cms: "content management system",
  pms: "patient management software",
  template: "template",
}

/**
 * Match existing shorthands with expanded equivalents
 */
export const textMap = (text: Text) => {
  const value = texts[text]

  if (!value) {
    return text
  }

  return value
}
