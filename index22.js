// Usa un for para remplazar todas las comidas que NO sean veganas con las frutas del array de frutas.
//  Recuerda no usar frutas duplicadas.
//   Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const food = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true },
];

for (let i = 0; i < food.length; i++) {
  if (!food[i].isVegan) {
    const fruit = fruits.pop();
    food[i].name = fruit;
  }
}

console.log(food);
console.log(fruits);