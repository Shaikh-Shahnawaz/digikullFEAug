
//js Objects using object literal
//Object
//Employee Data

// var arr = ["stringABC",0089,123.90,{

// },[{},{}]]; 

// ! => Not
// == equality
// = assignment
// || or
// && 

let myArr = [1,2,3]; //1st index(0)=>1, 2nd index(1)=>2, 3rd index(2)=>3

console.log("Value at 3rd index",myArr[2]);

console.log(myArr[1]); //2

//Object literal syntax of creating objects
let obj = {
    name: "Digikull",
    role: "Training",
    techStack: ["233",'333','444','555','666'],
    trainingMode: {
        weekDays : true,
        weekend : true,
        timings : []
    } 
}; //js object literal is a set of key value pairs  obj["trainingMode"]["weekDays"] instace of Object

//Object.keys(obj) // [name,role,techStack,trainingMode]

//Reading key Values fron an object literal
console.log("Accessing training mode (.) operator ===>",obj.trainingMode, obj.trainingMode.weekDays, obj.trainingMode.weekend);
console.log("Accessing Role ====>",obj.role, obj["role"]); //Reading the data
var keyName = "trainingMode";
console.log("Accessing Name from obj (Key is duynamic) ===>",obj[keyName]); //obj["name"]
console.log("<<!WRONG!>> Accessing Name from obj (Key is duynamic) using (.) operator===>",obj.keyName); //obj["name"]
console.log("Accessing weekdays with [] ==>",obj["trainingMode"]["weekDays"]);
//dynamic key value pair creation should always be done with [] i.e. square brackets

let techStack = {
    "233" : { //obj.techStack[0] = 233  techStack["233"]
        id: 001,
        duration : 30,
        numberClasses : 3,
        topicsCovered : ['Tags','Meta','semantic Tags']
    },
    "333" : {
        id: 002,
        duration : 20,
        numberClasses : 2,
        topicsCovered : ['Selectors','position','box-model']
    },
    "444" : {
        id: 003,
        duration : 30,
        numberClasses : 3,
        topicsCovered : ['Tags','Meta','semantic Tags']
    }
}

console.log("Object ==>",obj,"1st Tech Stack ===>",obj.techStack[0],"tech Stack Obj ===>",techStack,"1st Tech Stack i.e. Html related details",techStack[obj.techStack[0]]);


let employeeData = {
        employees : [
            {}, //js objects
            {}, //js objects
            {}, //js objects
            {}  //js objects
        ]
};

console.log("qwdhkqhwekhqwe");

console.log("Keys ===>",Object.keys(obj));

let myKeys = Object.keys(obj);

for(let i=0; i<myKeys.length; i++){ 
    console.log("values ===>",obj[myKeys[i]],"Keys ==>",myKeys[i],"Iteration No ==>",i);
}

var myArr3= ["2323123","dsfdsfsdf",30908]; //3 iterations

for(let abc=0; abc<myArr3.length; abc++){
    //abc=0 //1st iteration
    //abc=1 1<3 //2nd iteration
    //abc=2 2<3 //3rd iteration
    //abc=3 3<3 does not execute the body
    console.log("Printing the counter ===>",abc);
    console.log("Dynamic Values ===>",typeof(myArr3[abc]));
}

Object.keys(techStack) //returns an array of keys


//Two Dimensional Array
var twoDimArray = [
    ["asdasd","asdasd","adsdasd"], //0 th index
    [123,986986,869696], //1st index
    [{name: "Shams"},{name: "Harshawardhan"},{name: "Shahnawaz"}]  //2nd index
];

twoDimArray[1] //Array
twoDimArray[1][1] //index: 1//986986

/***
 *
 * 
 * **/

    /*ways of declaring varibales in javascript*/
    //var has a functional scope //var
    //let has a block scope //let
    //does not allow re-declaration and re-assigment //const

    var myEmployees = "ABC";

    //Named function syntax - resuable piece of code in any langugae - can take any number argyment can produce the same result or different result
    function getMyVariable(){
        var myNewVaribaleInFunction = "ABCDEFGH";
        if(true){
            let newLetVariable = 3000;
            const myConstant = 1199;
        }

        //myConstant = {};

        console.log("newLetVariable ===>",myConstant);
    }

    getMyVariable();



    function getLength(abc){ //abc - arguments / parameters 
        
        var typeArrayOrNot = abc instanceof Array == true ? true : false;
        
        return abc instanceof Array;
    }

    Object

    Array

    ["a","b","c"]

    console.log(getLength(["a","b","c"]));
    console.log(getLength("Hello"));







// js Arrays