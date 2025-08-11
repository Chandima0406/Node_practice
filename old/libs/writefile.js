import { writeFile } from "fs";
import { log } from "console";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileWrite = (path, content, yourfunction = () => {}) => {
  writeFile(join(__dirname, `../${path}`), content, { encoding: "utf-8" }, (err) => {
    if (!err) {
      yourfunction("File written successfully.");
    }
  });
};


export default fileWrite;
