// If-else conditions in Javascript!
console.group("If-else Statements in JavaScript!");
console.log("If Else Statements in JavaScript!");

let marks = parseInt(prompt("Enter Your Marks: "));

// ** If else statements syntax: **
/*
if(condition){
    statements of javascript;
}else{
    statements of javascript;
}

Note:
true - if block statements will execute!
false - else block statements will execute!!
*/

// if(marks <= 15){
//     // statements
//     console.log("YOu are Average Boy!");
// }else{
//     // else code will executed 
//     console.log("YOu are Toppper!");
// }

// console.log("Your marks are %d!", marks);

// ** If else if ladder statements syntax: **
/*
= -> to assign a value!
== -> to check values of two operands!
== -> to check values of two operands with respect to their datatypes!!
*/

// Roll No. 1 - 17 ==> Batch A
// Roll No. 19 - 34 ==> Batch B
// Roll No. 35 - 52 ==> Batch C

// let batch = prompt("Enter Your Batch: (A, B, C) ", "default text goes here!");

// if(batch === "a" | batch === "A"){
//     console.log("Your roll number is lies between 1 to 17");
// }else if(batch === "b" | batch === "B"){
//     console.log("Your roll number is lies between 19 to 34");    
// }else if(batch === "c" | batch === "C"){
//     console.log("Your roll number is lies between 35 to 52");
// }else{
//     console.log("Take admission to our online class!!");
// }

if(marks > 90){
    console.log("Topper");
}else if(marks > 80){
    console.log("Average student!!");
}else if(marks > 50){
    console.log("although ur a average student!");
}else{
    console.log("markshit is piece of paper\nwhich cannot decide ur future!!");
}






console.groupEnd("If-else Statements in JavaScript!");
