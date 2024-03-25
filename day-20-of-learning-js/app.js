// var array = [0,1,2,3,4,5,6,7,8,9];

// for (var i = 0; i < 10; i++) {
//   document.write(array[i] + "<br>");
// }

// var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// for (var i = 0; i < array.length; i++) {
//   document.write(array[i] + "<br>");
// }

var userInput = +prompt("Which table you want");
var userInput2 = +prompt("1 TILL ?");

for (var i = 1; i <= userInput2; i++) {
  document.write(userInput + " x " + i + " = " + userInput * i + "<br>");
}
