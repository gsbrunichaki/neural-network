const { chromosome, generateGenes } = require('./chromosome');
const { maze, move } = require('./maze');
const { MIN_WEIGHT, MAX_WEIGHT } = require('./config');

const randomWeight = () => Math.random() * (MAX_WEIGHT - MIN_WEIGHT) + MIN_WEIGHT;

generateGenes(chromosome, randomWeight);

console.log(chromosome);