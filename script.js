// function toFahrenheit(celsius) {
//  // Write your code here
// }
function toFahrenheit(celsius) {
  // Check if the input is a valid number
  if (typeof celsius !== 'number') {
    return 'Invalid input. Please provide a number.';
  }

  // Convert Celsius to Fahrenheit using the formula
  const fahrenheit = (celsius * 9 / 5) + 32;

  // Format the result to two decimal places
  return fahrenheit.toFixed(2);
}


// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
