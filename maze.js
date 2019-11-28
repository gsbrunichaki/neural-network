const { updatePosition, updatePathTraveled } = require('./chromosome'); 
const scores = require('./scores');

const notFirstElement = (_, index) => index > 0;

const lineToArray = (line) => line.trim().split(' ');

const arrayOfLines = (lines) => lines.filter(notFirstElement).map(lineToArray);

const newPosition = (x, y, direction) => {
  switch (direction) {
    case 1: return [x-1, y];
    case 2: return [x, y+1];
    case 3: return [x+1, y];
    case 4: return [x, y-1];
    default: return [x, y];
  }
}

const isBorderCollision = (maze, x, y, direction) => {
  if (direction === 1 && x === 0) return true;
  if (direction === 2 && y === maze.size-1) return true;
  if (direction === 3 && x === maze.size-1) return true;
  if (direction === 4 && y === 0) return true;

  return false;
}

const isGameOver = (maze, x, y, direction) => {
  const [newX, newY] = newPosition(x, y, direction);
  
  if (isBorderCollision(maze, x, y, direction)) return true;
  if (maze.matrix[newX][newY] === '1') return true;

  return false;
}

module.exports = {
  maze: {
    size: 0,
    matrix: [],
  },
  move: (maze, chromosome, direction) => {
    const [x, y] = chromosome.currentPosition;

    if (isBorderCollision(maze, x, y, direction)) return scores['1'];

    const [newX, newY] = newPosition(x, y, direction);
    const newPositionData = maze.matrix[newX][newY];

    updatePosition(chromosome, newX, newY);
    updatePathTraveled(chromosome, newX, newY);

    return scores[newPositionData];
  },

  setSize: (maze, size) => maze.size = parseInt(size),
  setMatrix: (maze, lines) => maze.matrix = arrayOfLines(lines),
};