import { rename as renameFile, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rename = async () => {
    const initialFileName = path.join(__dirname,'./files/wrongFilename.txt');
    const finalFileName = path.join(__dirname,'./files/properFilename.md');
    try {
      // Check if initialFileName exists
      await access(initialFileName);
      // Check if finalFileName already exists
      let exist;
      try{
          await access(finalFileName)
         exist =true;
      }catch(err){
        exist =false;
      }
      // Rename the file
      if(!exist){
        await renameFile(initialFileName, finalFileName);
      }
    } catch (err) {
        console.log(err);
      throw new Error('FS operation failed');
    }
};

await rename();