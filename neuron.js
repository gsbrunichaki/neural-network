const neuron = {
  bias: 2,
  weights: [1, 2, 3, 4],
}

const calculaV = (neuron, entries) => {
  const { bias, weights } = neuron;
  const reducer = (acc, cur, idx) => acc + (cur * entries[idx]);
  const multiply = weights.reduce(reducer);

  return multiply + bias;
}

const calculaY = (v) => 1 / (1 + Math.exp(-v));

const v = calculaV(neuron, [1,2,3,4]);

console.log(calculaY(v));