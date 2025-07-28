console.log("TIme");

console.log(102);

console.log(20, "time", false);


const x = 100;

console.log(x);

console.error('Alert');

console.warn('Warning');

// Prints out as a table
console.table({name:"brad", email: 'Team@log.com', age: 47});

// Groups
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();



// Adding CSS Style sto COnsole Log
const styles = 'padding: 10px; background-color: orange; color: blue';

console.log('%cHello World', styles); // To add the syle we add '%c', then add the const styles from line 29






function isOnefulPair(a, b) {
    if ((a + b + a * b) === 111) { 
      console.log("Yes")
    } else {
      console.log("No")
    }
  }


  // Test 