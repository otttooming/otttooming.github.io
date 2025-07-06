import { readdir } from 'node:fs/promises';
import path from 'node:path';

export async function readDirNames(relativePath: string) {
  try {
    return await readdir(path.join(process.cwd(), relativePath));
  } catch (error) {
    console.error(`Error reading directory ${relativePath}:`, error);
  }
}
