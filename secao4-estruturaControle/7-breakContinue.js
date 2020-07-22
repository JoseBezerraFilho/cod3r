const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// O break e continue age em cima do laço For, While, Switch.

for ( x in numbers) {
  if (x == 5) {
    break
  }

  console.log(`${x} = ${numbers[x]}`);
}

for ( y in numbers ) {
  if (y == 5) {
    continue // ignora y = 5 e segue no código
  }

  console.log(`${y} = ${numbers[y]}`);
}