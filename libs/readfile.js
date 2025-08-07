import { log } from "console";
import { readFile } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileRead = (path, yourfunction = (d) => {log(d);}) => {
  readFile(
    join(__dirname, `../${path}`),
    { encoding: "utf-8" },
    (err, data) => {
      yourfunction(data);
      
      if (err) {
        log(err);
      };
    }
  );
};

export default fileRead;