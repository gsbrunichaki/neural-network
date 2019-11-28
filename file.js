const fs = require('fs');

const read = () => fs.readFileSync('./labirinto1_10T2.txt', 'utf8');
const content = () => read().trim().split('\n');

module.exports = content;