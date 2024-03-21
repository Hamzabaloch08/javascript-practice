// day 14 of learning of JAVASCRIPT

var userData = +prompt("Enter your age");

if (userData < 18) {
  document.write("<h1>" + "You're under age for this Program." + "<h1>");
} else if (userData >= 18 && userData <= 30) {
  document.write(
    "<h1>" + "Congratulations You're Eligible for this program" + "<h1>"
  );
} else if (userData > 30 && userData <= 80) {
  document.write("<h1>" + "You're over age for this Program." + "<h1>");
} else if (userData > 80) {
  document.write("<h1>" + "You are still alive" + "<h1>");
} else {
  alert("please enter your age");
}
 
