
var x = '000';

//Primitive Data Types

//String
console.log(1000+"2000"); /*"" / '' <= String (collection of character)*/
console.log("2000"+1000);
console.log("1000+2000");

//Number - below y denotes a type number in javascript
var y; //Declared but undefined.
var decimalAddition = 3.001+9;
console.log(decimalAddition,decimalAddition.toFixed(2));
console.log(1000/3000);
/**
 * 
 * 
 * 
*/

//undefined
//undefined and not defined are not the same thing in JavaScript

//null
var abc = null;
console.log(abc);
console.log(typeof(abc),typeof(null));

//boolean
//true/false
var truOrFalse = 1==1?console.log("I am in IF"):console.log("I am in Fasle"); //ternary conditional statement
console.log("truOrFalse ===>",truOrFalse);

//ceil //floor
Math.ceil(3.009) //4 //Next greatest integer / next whole integer
Math.floor(3.009) //3 //Next greatest integer / next whole integer


//Min & max
Math.min(2,5,6,8,9,10,-1,-3, 0);
Math.max(2,5,6,8,9,10,-1,-3, 0);

//absoluetw
Math.abs(-10)

//tofixed is a method available to the variable which are of type number
var decimalAddition = 3.001+9;
console.log(decimalAddition,decimalAddition.toFixed(2));


console.log("What is the type of x ===>",typeof(x));
console.log("What is the type of y ===>",typeof(y),y);
//console.log("Print the value of z",z); //its not declared and not defined


//Coompund Data Types

//Array
var myArr = []; //Empty Array
var myArr2 = ["abc",123,true,false,"a","b","c"]; //indexed array which starts from the index 0

console.log("Printing Array and Array Elements ===>",myArr,myArr2,myArr2[0],myArr2[3]);


