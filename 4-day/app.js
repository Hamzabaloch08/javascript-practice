var userInput = +prompt("Enter Percentage")

if(userInput >= 80 && userInput < 101 ){
    document.write( "Your Grade is A+" )
}
else if (userInput >=70 && userInput < 80) {
    document.write ("Your Grade is A");
}
else if (userInput >=60 && userInput < 70) {
    document.write ("Your Grade is B");
}

else if (userInput >=50 && userInput < 60) {
    document.write ("Your Grade is C");
}

else if (userInput >=40 && userInput < 50) {
    document.write ("Your Grade is D");
}
else if (userInput >= 1 && userInput <=39){
   document.write ("Your Grade is F");  
}
else if (userInput > 101) {
    alert("Please enter a number between 1 and 100.")
}
else {
    alert("Please enter a valid percentage.");
}