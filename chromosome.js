const { GENES, INITIAL_FITNESS } = require('./config');

function calcFitness(chromosome) {
  const substractScores = (acc, cur) => acc - cur;
  const subtraction = chromosome.scores.reduce(substractScores, INITIAL_FITNESS);

  return subtraction;
}

module.exports = {
  chromosome: {
    currentPosition: [0,0],
    fitness: INITIAL_FITNESS,
    genes: [],
    pathTraveled: [[0,0]],
    scores: [],
  },

  generateGenes: (chromosome, randomWeight) => {
    const genes = Array(GENES).fill(0);
    const genesFilled = genes.map((gene) => gene = randomWeight());

    chromosome.genes = genesFilled;
  },

  addScore: (chromosome, score) => chromosome.scores.push(score),
  updateFitness: (chromosome) => chromosome.fitness = calcFitness(chromosome),
  updatePathTraveled: (chromosome, x, y) => chromosome.pathTraveled.push([x, y]),
  updatePosition: (chromosome, x, y) => chromosome.currentPosition = [x, y],
}