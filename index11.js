const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const averageWord = (arr) => {
  let sum = 0;
  let count = 0;

  for (const element of arr) {
    if (typeof element === 'number' || typeof element === 'string') {
      sum += typeof element === 'number' ? element : element.length;
      count++;
    }
  }

  const average = count > 0 ? sum / count : 0;

  return average;
};

const result = averageWord(mixedElements);
console.log('El promedio es:', result);
