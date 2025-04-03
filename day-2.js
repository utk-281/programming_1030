// console.log(9 / 2); // 4.5
//? Math.floor(number) ==>

// console.log(Math.floor(9 / 2));
//? Math.floor() ==> this will return the lower bound value
// console.log(Math.ceil(9 / 2));
//? Math.ceil() ==> this will return the upper bound value

// Math.random() ==>
// console.log(Math.random());
//? it gives number between 0(inclusive) and 1(exclusive)
// 0.542403402790506 (current output)
// 0.5 (expected)

// toFixed(number) ==> this will consider total number of digits after the decimal point
// let randomNumber = Math.random();
// console.log(randomNumber.toFixed(1));

//! write a program to convert the given minutes into hours and minutes
//? 324 minutes ==> 5hrs 24 mins

function printHoursAndMins(minutes) {
  let hours = minutes / 60;
  let intHour = Math.floor(hours);
  //   console.log(intHour);
  let mins = minutes % 60;
  //   console.log(mins);
  console.log(`Total time: ${intHour}hrs ${mins}mins`);
}

// printHoursAndMins(324);
// printHoursAndMins(123);
// printHoursAndMins(1679);

//! write a program to simulate a coin toss ("heads" or "tails")
function coinFlip() {
  let randomNumber = Math.random().toFixed(1);
  if (randomNumber < 0.5) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
}

// coinFlip();
// coinFlip();
// coinFlip();
// coinFlip();
// coinFlip();

//! loops in javascript
//? while
//? do-while
//? for

//? forEach()
//? for-of
//? for-in

// while (condition) {
// updation value
// }

// do {

// updation value
// } while(condition)

// for(initialization, updation, condition){

// }

// let i =1
// for(;;){

// }

// ("        my name is      blah blah blah        ");
// ["my", "name", "is", ...]
//! convert the given string into an array based on empty spaces.

function convertToArray(str) {
  let currentWord = "";
  let arr = [];
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== " ") {
      currentWord += str[i];
    } else {
      if (currentWord.length > 0) arr.push(currentWord);
      currentWord = "";
    }
  }
  if (currentWord.length > 0) arr.push(currentWord);
  return arr;
}
// console.log(convertToArray(" n       my     name    is utk and something      "));
