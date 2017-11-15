//This Program will interact with the dom creating elements onload
//using HTML, CSS in addtion to Javascript we will print these numbers to the browser
//Once numbers are printed tot he browser they create a beautiful color pattern
// based off fizz,buzz, and fizzbuzz numbers

var counter = 0;
while (counter < 100) {
  counter = counter + 1;
  if (counter % 3 === 0 && counter % 5 === 0) {
    console.log('fizzBuzz');
  } else if (counter % 5 === 0) {
    console.log('buzz');
  } else if (counter % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(counter);
  }
}
