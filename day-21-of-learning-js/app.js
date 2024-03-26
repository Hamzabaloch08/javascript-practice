// . for loops: flags, Booleans, array length, and breaks

// var userinput = prompt("Enter city name");
// var cityNames = ["karachi", "lahore", "islamabad", "peshawer", "quetta"];
// var match = false;

// for (var i = 0; i < cityNames.length; i++) {
//     if(userinput == cityNames[i]){
//         match = true
//         alert("city found")
//         break
//     }
// }
// if(match == false){
//    alert("City not found")
// }

// for loop nasted

var arr = ["salman", "arbaaz", "noman"];
var arr2 = ["farhan", "zafar"];

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; i < arr2.length; j++) {
    document.write(arr[i] + " " + arr2[j] + "<br>");
  }
}
