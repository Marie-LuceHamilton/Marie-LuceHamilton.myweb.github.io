console.log("Welcome to my Website");

var myVariable=3;
console.log(typeof myVariable);

var myString = "Hello World!";
console.log(typeof myString);

var mybool = true;
console.log(typeof mybool);

var animals = ["cat", "dog", "elephant"];
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[0]);

mixArray = [4, "cat", false];
console.log(mixArray);

mixArray[1] = "dog";
console.log(mixArray);

var x = 5;
var y = 10;

var sum = x + y;
console.log(sum);

var mult = x * y;
console.log(mult);

var sub = x - y;
console.log(sub);

var stringAdd  = myString + x;
console.log(stringAdd);


var z = "3";
var m = 4;

var newSum = z +m;
console.log(newSum);

var a = 10;
var b = 10;
if (a > b){
    console.log("a is greater than b");
}else if (a ==b){
    console.log("a equals b");
}
else {
    console.log("b is greater then a");
}

var numericScore = 98;
var letterGrade = 'A';

if (numericScore < 60){
    letterGrade = 'F';
}else if (numericScore >= 60 && numericScore < 70){
    letterGrade = 'D';
}else if (numericScore >= 70 && numericScore < 80){
    letterGrade = 'C';
}else if (numericScore >= 80 && numericScore < 90){
    letterGrade = 'B';
}else {
    letterGrade = 'A';
}
console.log(letterGrade);

for (var i = 0; i <10; i++){
    console.log(i);
}

var i = 0;
while (1 < 10){
    i++;
}

var i = 0;
var sum = 0;
while (true){
    console.log(i);
    sum += i;
    if  (sum >= 200){
        break;
    }
    i++;
}
console.log(sum);

for (var i =0; i< 100;i++){
    if (i % 2 ==0){
        continue;
    }
    console.log(i);
}

// function

// function add(a,b){
//     var sum = a+b;
//     console.log(sum);
// }

// add(10,5);


function add(a,b){
    var sum = a+b;
   
    return sum;
}

var addResult = add(10,5);
console.log(addResult);

var addfunc = function(a,b){
    return a+b;
}

// console.log(addfunc);
console.log(addfunc(5.10));

var immFunc = (function(a,b){
return a+b;    
})(10,5);
console.log(immFunc);