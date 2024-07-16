const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
  const number1 = parseInt(num1);

  rl.question('Enter the second number: ', (num2) => {
    const number2 = parseInt(num2);

    function calculateGCF(a, b) {
      if (b === 0) {
        return a;
      }
      return calculateGCF(b, a % b);//Euclidean algo
    }

    const gcf = calculateGCF(number1, number2);
    console.log(`The GCF of ${number1} and ${number2} is: ${gcf}`);
    rl.close();
  });
});
