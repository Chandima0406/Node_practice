//const os = require('os');
//const path = require('path');

import os from 'os';
import path, { join } from 'path';
import { readFile } from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

readFile(join(__dirname, 'myname.txt'),(err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

