//ways to print a statement
console.log("Aditya");
alert("Aditya here!!");
document.write("i'm Aditya");

//JS Console API
console.log("hello world",4+6);
console.warn("This will give YELLOW warning in JS console");
console.error("This will give RED warning in JS console");

//JS Variables
var num1=67;
var num2=89;
console.log("Addition is\t"+num1+num2);

var str1 = "This is string";

var marks = {  //making Objects
    s1=90,
    s2=91,
    s3=68.8,
}
console.log(marks);

/*
MULTILINE COMMENT
*/

//boolean datatype
var a =true;
var b =false;
console.log(a);
console.log(b);

var und = undefined; //declared a variable und but value is undefined
var und1; //same thing as done in above line

//array
var arr=[10,20,30,40,50,60,70,80,90,"String1","string2"];
console.log(arr[6]);

//Arithmetic operator

var x=10;
var y=20;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

//comparison operators----OUTPUT EITHER BE TRUE OR FALSE

console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x>y);
console.log(x<y);

//LOGICAL OPERATORS

console.log(true&&true);
console.log(false&&true);
console.log(true&&false);
console.log(false&&false);

console.log(true||true);
console.log(false||true);
console.log(true||false);
console.log(false||false);

console.log(!false);
console.log(!true);

//Creating Function

function sayname(name){
    console.log(name);
}
sayname("aditya");

function exp(base , pow){
    for(var i=0;i<=pow-1;i++){
        console.log(base*base);
    }
}
exp(4,4);

//conditional operators
var age;
if (age>18){
    console.log("YOU CAN DRIVE");
}
else if(age<18 && age>=16){
    console.log("YOU CAN DRIVE ONLY MOPED");
}
else if(age<16 && age>0){
    console.log("YOU CANT'T Drive");
}
else{
    console.log("Error---something went wrong--check your input");
}

//LOOPS

var namearr=["name1","name2","name3","name4","name5","name6","name7","name8"]
console.log(namearr);
for(var j=0;j<=length.namearr;j++){
    console.log(namrarr[j]);
}
//other method of iteration
namearr.forEach(function(element){
    console.log(element);
})

//while loop
let k=0;
while(k<length.namearr){
    console.log(namearr[k]);
    k++;
}

//Do while loop

do{
    console.log(namearr[k]);
    k++;
}while(k<namearr.length);

//Break Statements

for(var m=0;m<=10;m++){
    if(m==5){
        break;
    }
    console.log(m);
}

for(var n=0;n<=10;n++){
    if(n==5){
        continue;
    }
    console.log(m);
}

//Array methods

let arr1=["Aditya",20,null,true];
console.log(arr1.length); //give lenght of array
console.log(arr1.pop()); //Delte last element then print Array
console.log(arr1.push("kumar")); //Will add element in last of aar
console.log(arr1.shift()); // will delete 1st element of arry
arr1.unshift("Kumar"); //will add element in 1st postion of array
console.log(arr1);
let ab= arr1.toString(); // will make array as string and print
console.log(ab);

let numarr=[2375,7846,38205,3730,9999];
console.log(numarr.sort()); //Sorts the array based on numeric order --> like numbers starting from 1 will showed first ;for ex-->1,10,111..in such order , then start numbers starting from 2 ; like---> 2,20,22,24,22222 etc and so on.

//string methods

let mystr = "I am aditya , 20 , pursuing CSE at VIT ,  willing to become a productive Software engg good , good";
console.log(mystr.length);
console.log(mystr.indexOf("VIT")); // prints the index of 1st letter of given Argument inside index.Of(); , if there is multiple word of give arguments then it will return 1st letter of the 1st found argument
console.log(mystr.indexOf("good"));
console.log(mystr.lastIndexOf("good")); //will return the index of 1st letter of last given argument , if that word was repeated twice or more
let mystr1 = "I am aditya , 20 , pursuing CSE at VIT";
console.log(mystr1.slice(0,8));
let mystr2 = "I am aditya , 20 , pursuing CSE at VIT";
console.log(mystr2.replace("aditya","kumar"));

// date and time in javascript

let mydt=new Date();
console.log(mydt.getTime()); // give time in seconds
console.log(mydt.getFullYear()); // give current year
console.log(mydt.getDay()); // give number of day
console.log(mydt.getMinutes()); //mins of current hour
console.log(mydt.getHours()); //give current hour

//dom-->document object model manipulation

//document.getElementById used when we want to target a specific object by their ID
document.location; // provides various info about current document
document.getElementById('btn').click(); // clicking a button using dom
document.getElementById('btn').style.border='2px solid blue'; // styling border of button using dom

//document.getElementById used when we want to target a specific object by class name
let elemclass=document.getElementsByClassName("dv");
console.log(elemclass);
elemclass[0].classList.add("para"); //adding class para in dv

//inner html ---> used to display html structure of particular class
console.log(elemclass.innerHTML);
//inner text --> will display the text inside an element
console.log(elemclass.innerText);
