const fs = require('fs');
let resizable = fs.readFileSync('.npmrc').toString();
fs.writeFileSync('dist/.npmrc', resizable);
