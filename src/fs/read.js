import { readFile, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    try {
        const file = path.join(__dirname,'./files/fileToRead.txt');
        await access(file);
        const fileContent = await readFile(file, 'utf8');
        console.log(fileContent);
  } catch (err) {
        throw new Error('FS operation failed');
  }
};

await read();