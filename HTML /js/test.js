//['a','b','c','b','c','a','a']

//find out the occurance of each characters in the given array


let abc = [
    "Prasad", //Kumar => 0
    "Shahnawaz", //Hussain => 1
    "Nancy" //Darcy => 2
];

abc[0]

abc[1]

abc[2]

console.log("Array Length --->",abc.length);

var newArr = [];
for(let i=0; i<abc.length; i++){
    console.log(typeof(abc[i]));// typeof(abc[i])
    console.log(abc[i]=="Prasad",abc[i]=="Shahnawaz",abc[i]=="Nancy",abc[i],i); //"Prasad"=="Prasad"
}

console.log("newArr==>",newArr);

function countOcuurance(arr){
    var myTempObj = {}; //Object literal syntax

    for(let i=0; i<=arr.length-1; i++){
        console.log("Iterations ==>",i);
        console.log(arr[i],myTempObj[arr[i]]);
        //myTempObj[arr[i]] ? myTempObj[arr[i]]++ : myTempObj[arr[i]]=1 
        console.log("The js object Before population ==>",myTempObj);
        if(myTempObj[arr[i]]){
            console.log("In If");
            //myTempObj[arr[i]]++; 
            myTempObj[arr[i]] = myTempObj[arr[i]]+1;
        }else{
            console.log("In else");
            myTempObj[arr[i]] =1;
        }
        console.log("The js object after population ==>",myTempObj);
    }

    return myTempObj;
}

console.log("===>",countOcuurance(['a','b','c','b','c','a','a']).a);

