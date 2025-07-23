import { evaluate } from 'next-mdx-remote-client/rsc';
import { readSourceFile } from '../utils/fs';

export async function readPost<Frontmatter extends Record<string, unknown>>(
  relativePath: string,
) {
  const source = await readSourceFile(relativePath, 'index.mdx');

  const { frontmatter } = await evaluate<Frontmatter>({
    source,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    source,
    ...frontmatter,
  };
}
