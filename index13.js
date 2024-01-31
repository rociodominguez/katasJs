// Buscador de nombres: Crea una función que reciba por parámetro un array
//  y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true
//   y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc',
  ];
  
  const finderName = (arr, nameToFind) => {
    const found = arr.includes(nameToFind);
    const position = found ? arr.indexOf(nameToFind) : undefined;
  
    return {
      found,
      position,
    };
  };
  
  const resultFound = finderName(nameFinder, 'Xabier');
  console.log('¿Encontrado?', resultFound.found);
  console.log('Posición:', resultFound.position);
  
  const resultNotFound = finderName(nameFinder, 'John');
  console.log('¿Encontrado?', resultNotFound.found);
  console.log('Posición:', resultNotFound.position);