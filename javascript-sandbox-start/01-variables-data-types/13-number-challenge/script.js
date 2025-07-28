let x = Math.floor(Math.random() * 101 + 1);

let y = Math.floor(Math.random() * 51 + 1);


sumOutput = x + y;
differenceOutput = x - y;
productOutput = x * y;
quotientOutput = x / y;
rmOutput = x % y;

console.log(`${x} + ${y} = ${sumOutput}`);
console.log(`${x} - ${y} = ${differenceOutput}`);
console.log(`${x} * ${y} = ${productOutput}`);
console.log(`${x} / ${y} = ${quotientOutput}`);
console.log(`${x} % ${y} = ${rmOutput}`);