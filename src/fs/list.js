import { readdir, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    try {
      const folder = path.join(__dirname,'files');
      await access(folder);
      const filenames = await readdir(folder);
      console.log(filenames);
    } catch (err) {
      throw new Error('FS operation failed');
  }
};

await list();