import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

export async function readDirNames(relativePath: string) {
  try {
    return await readdir(path.join(process.cwd(), relativePath), {
      withFileTypes: true,
    }).then((files) =>
      files
        .filter((file) => file.isDirectory())
        .map((directory) => directory.name),
    );
  } catch (error) {
    console.error(`Error reading directory ${relativePath}:`, error);
  }
}

export async function readSourceFile(relativePath: string, fileName: string) {
  try {
    return await readFile(
      path.join(process.cwd(), relativePath, fileName),
      'utf-8',
    );
  } catch (error) {
    console.error(`Error reading file ${fileName} in ${relativePath}:`, error);
  }
}
