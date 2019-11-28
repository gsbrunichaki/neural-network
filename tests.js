const file = require('./file');

function crossover(chromosome1, chromosome2) {
  const genesAverage = (gene1, indexGene2) => (gene1 + chromosome2[indexGene2]) / 2;

  const chromosomesAverage = chromosome1.map(genesAverage);

  return chromosomesAverage;
}

function randomWeight() {
  const min = -1;
  const max = 1;

  return Math.random() * (max - min) + min;
}

function fitness(scores) {
  const INITIAL_SCORE = 20000;
  const substractScores = (acc, cur) => acc - cur;

  const calcFitness = scores.reduce(substractScores, INITIAL_SCORE);

  return calcFitness;
}

console.log(crossover([4,5,6,3], [2,7,4,1]));
console.log(randomWeight());
console.log(fitness([100,20,5,-2]));

const runner = [

];

console.log(file());



function sigmoid(z) {
  return (1 / 1 + Math.exp(-z));
}

console.log(fitness([50, 50, 20, -5]));