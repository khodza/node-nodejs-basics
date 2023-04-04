import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');
  try {
    await fs.access(filePath);
    throw new Error('FS operation failed: File already exists');
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
    await fs.writeFile(filePath, 'I am fresh and young');
  }
};

await create();