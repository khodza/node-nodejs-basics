import { mkdir, readdir, copyFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    try {
        const filesExist = await readdir(path.join(__dirname,'files'));
        await mkdir(path.join(__dirname,'files_copy'));
        for (const file of filesExist) {
          await copyFile(path.join(__dirname,'files',file), path.join(__dirname,'files_copy',file));
        }
      } catch (err) {
        throw new Error('FS operation failed');
      }
};

await copy();
