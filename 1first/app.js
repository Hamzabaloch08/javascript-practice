//INTRODUCTION to JAVASCRIPT

// () <- (this is a function) --> alert is a Built-in Function that is throw a pop up in your website
// 2 types of function in JAVASCRIPT

// (1st function is Built-in Function) -->  which are built in JAVASCRIPT

// (2nd function is Manual / User define Function) --> created by user

// DATA TYPE
// 3 types of DATA TYPE

// 1st is STRING:
// ("" --> '') something come inside single quotation or double quotation is called string  and what is string ? string is data type of JAVASCRIPT.

// 2nd is INTEGER:
// example: 1, 2, 3, 4, 5, 123456 this is INTEGER

// 3rd is FLOAT
// example: 1.1, 2.3, 6.4 whenever we talk about point is called FLOAT.

// chapter variable for STRING

// var firstName = "Hamza"; //STRING VARIABLE // camel case  standard for writing variable name example: firstName, lastName like down up.
// var lastName = "Baloch"; //STRING VARIABLE
// alert(firstName + " " + lastName);

document.write("<h1>Hamza Baloch</h1>"); // it will print Hello World on the webpage (document.write)is BUILT-IN Function used to write any HTML code or display any message inside <body></body>.

//second method
document.write("<h1>" + "Hamza Baloch" + "</h1>");

// third method
document.write(firstName + " " + lastName + "</br>"); // VARIABLE

// chapter VARIABLE OF NUMBER
var num1 = 5; //INTEGER VARIABLE
var num2 = 10; //INTEGER VARIABLE
document.write(num1 + num2 + "</br>"); //when integer and integer match then specialty in + it do to it add.

var num3 = 5; //INTEGER VARIABLE
var num4 = 10; //INTEGER VARIABLE
document.write(num3 - num4 + "</br>"); //when integer and integer match then specialty in - it do to it subtract.

var num5 = "5"; //string VARIABLE
var num6 = 1; //INTEGER VARIABLE
document.write(num5 + num6 + "</br>");
// output is 51  because when string and Integer meet the result is a String so it convert that Integer into String.

var num7 = "5"; //intiger in string
var num8 = 1;
document.write(num7 - num8 + "</br>");
// output is 4   //intiger in string then it do minus

var num9 = "a"; //intiger in string
var num10 = 1;
document.write(num9 - num10 + "</br>"); //output NaN because a-1 is not possible so its give Nan as result.
//(NaN) means ( Not a Number )

var firstName = prompt("Enter the FirstName");
var lastName = prompt("Enter the Lastname");
document.write(
  "<h1>" + "Your Fullname is " + firstName + " " + lastName + "</h1>" );
