import { evaluate } from 'next-mdx-remote-client/rsc';
import { readSourceFile } from '../utils/fs';

export async function readPost<Frontmatter extends Record<string, unknown>>(
  templateStrings: TemplateStringsArray,
  slug: string,
) {
  const [relativePath] = templateStrings;
  const source = await readSourceFile(`${relativePath}${slug}`, 'index.mdx');

  const { frontmatter } = await evaluate<Frontmatter>({
    source,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    ...frontmatter,
    source,
    slug,
  };
}
