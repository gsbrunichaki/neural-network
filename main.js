const file = require('./file');
const { maze, move, setMatrix, setSize } = require('./maze');
const { chromosome, generateGenes } = require('./chromosome');

const { MIN_WEIGHT, MAX_WEIGHT } = require('./config');

const randomWeight = () => Math.random() * (MAX_WEIGHT - MIN_WEIGHT) + MIN_WEIGHT;

const fileLines = file();

setSize(maze, fileLines[0]);
setMatrix(maze, fileLines);

generateGenes(chromosome, randomWeight);

console.log(chromosome.pathTraveled);
console.log(move(maze, chromosome, 1));
console.log(chromosome.pathTraveled);
console.log(move(maze, chromosome, 2));
console.log(chromosome.pathTraveled);
console.log(move(maze, chromosome, 3));
console.log(chromosome.pathTraveled);
console.log(move(maze, chromosome, 4));
console.log(chromosome.pathTraveled);
