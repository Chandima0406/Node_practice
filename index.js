import { log } from "console";
import { createServer } from "http";
import { IncomingForm } from "formidable";

createServer((req, res) => {
  res.write(`<p>chandima wijerathna</p>`);
  res.end();
}).listen(4000, () => log("server running"));
