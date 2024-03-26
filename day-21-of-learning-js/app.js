var userinput = prompt("Enter city name");
var cityNames = ["karachi", "lahore", "islamabad", "peshawer", "quetta"];
var match = false;

for (var i = 0; i < cityNames.length; i++) {
    if(userinput == cityNames[i]){
        match = true
        alert("city found")
        break
    }
}
// if(match == false){
//    alert("City not found") 
// }


