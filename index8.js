// Buscar la palabra más larga
// Completa la función que tomando un array de strings
// como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

const avengers1 = [
    'Hulk',
    'Thor',
    'IronMan',
    'Captain A.',
    'Spiderman',
    'Captain M.',
  ];
  
  const palabraMasLarga = (words) => {
    let longestWord = '';
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    return longestWord;
  };
  
  const avengers = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];
  const result = palabraMasLarga(avengers);
  console.log(result);
  