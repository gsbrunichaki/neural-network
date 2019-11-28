const { chromosome, generateGenes } = require('./chromosome');
const { INITIAL_FITNESS, MIN_WEIGHT, MAX_WEIGHT } = require('./config');

const randomWeight = () => Math.random() * (MAX_WEIGHT - MIN_WEIGHT) + MIN_WEIGHT;

const crossover = (chromosome1, chromosome2) => chromosome1.map(
  (gene1, indexGene2) => (gene1 + chromosome2[indexGene2]) / 2
);

const fitness = (scores, initialScore) => scores.reduce(
  (acc, cur) => acc - cur
, initialScore);