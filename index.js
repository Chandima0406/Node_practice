import { log, error } from "node:console";
import { appendFile, readFile, rm, readFileSync, writeFileSync, appendFileSync, rmSync } from "node:fs";
// import { readFile, appendFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
//import { writeFile } from "node:fs";
import { Buffer } from "buffer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/////////////////// sync Api
// readFileSync
const data = readFileSync(join(__dirname, "read.txt"), { encoding: "utf-8" });
log(data);

// writeFilesync
writeFileSync(join(__dirname, "message.txt"), "Hello sri lanka", {
encoding: "utf-8",
});

// appendFileSync
appendFileSync(join(__dirname, "message.txt"), "\nHello chandima!", {
  encoding: "utf-8",
});

//rm using sync
rmSync(join(__dirname, "write.txt"), );

////////////////// promise API example
// readFile
// readFile(join(__dirname, "read.txt"), { encoding: "utf-8" })
//   .then((data) => {
//     log("File content:", data);
//   })
//   .catch((err) => {
//     error(err);
//   });

//   // appendFile
//   appendFile(join(__dirname, "append.txt"), "Hello Node.js", { encoding: "utf-8" })
//     .then(() => {
//       log("File appended successfully.");
//     })
//     .catch((err) => {
//       error(err);
//     });

//   //writeFile
//   writeFile(join(__dirname, "write.txt"), "Hello Node.js", { encoding: "utf-8" })
//     .then(() => {
//       log("File written successfully.");
//     })
//     .catch((err) => {
//       error(err);
//     });

// remove using rm
// rm(join(__dirname, "myname.txt"))
//   .then(() => {
//     log("File removed successfully.");
//   })
//   .catch((err) => {
//     log("error remove file:", err);
//   });

/////////////////////////// callcack API example
// readFile, writeFile, appendFile, rm

// readFile(join(__dirname, "read.txt"), { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     log("Error reading file:", err);
//     return;
//   }
//   log("File content:", data);
// });

// writeFile(join(__dirname, "read.txt"), "my name is chandima.......", (err) => {
//   if (err) {
//     log("Error writing file:", err);
//     return;
//   }
//   //log("File written successfully.");
// });

// const data = new Uint8Array(Buffer.from("Hello Node.js"));
// writeFile("message.txt", data, (err) => {
//   if (err) {
//     error("Error writing file:", err);
//     return;
//   }

//   //log("File written successfully.");
// });

// // append using join
// appendFile(join(__dirname, "message.txt"), "\nHello !", (err) => {
//   if (err) {
//     error("Error appending to file using join:", err);
//     return;
//   }

//   log("File appended successfully using join.");
// });

// // remove using join
// rm(join(__dirname, "message.txt"), (err) => {
//   if (err) {
//     error("Error removing file using join:", err);
//     return;
//   }

//   log("File removed successfully using join.");
// });
