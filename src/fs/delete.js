import { unlink, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const file = path.join(__dirname,'files','fileToRemove.txt');
  try {
    await access(file);
    await unlink(file);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();