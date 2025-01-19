//if statement
function ifr() {
    console.log("If Statement Example");
    let score = 85;
    if (score >= 90) {
        console.log("You got an A!");
    } else if (score >= 80) {
        console.log("You get a B!");
        if (score > 85) {
            console.log("Almost an A!");
        }
    } else {
        console.log("You need to improve");
    }
}
//ternary operator
function raax() {
    console.log("Ternary Operator Example");
    let score = 85;
    let grade = (score >= 90) ? "A" :
                (score >= 80) ? "B" :
                (score >= 70) ? "C" : "F";
    console.log("Your grade is: " + grade);
}
//switch case
function mayooy() {
    console.log("Switch Case Example");
    let fruit = "apple";
    switch (fruit) {
        case "banana":
            console.log("Bananas are $1 per pound");
            break;
        case "apple":
            console.log("Apples are $2 per pound");
            break;
        case "grape":
            console.log("Grapes are $3 per pound");
            break;
        default:
            console.log("Sorry, we are out of stock");
    }
}
//while loop
function hooyoy() {
    console.log("While Loop Example");
    let countdown = 5;
    while (countdown > 0) {
        console.log("Countdown: " + countdown);
        countdown--;
    }
    console.log("Blast off!");
}
//for loop
function muuse() {
    console.log("For Loop Example");
    let fruits = ["Apple", "Banana", "Orange", "Mango"];
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}
//do while loop
function maxamed() {
    console.log("Do While Loop Example");
    let userResponse;
    do {
        userResponse = prompt("Do you want to continue? (yes/no)");
    } while (userResponse !== "no");
    console.log("Thank you for your response.");
}
//break loop
function lkn() {
    console.log("Break Loop Example");
    let userInput;
    do {
        userInput = prompt("Enter a number (type 'exit' to quit):");
        if (userInput === 'exit') {
            break;
        }
        console.log("You entered: " + userInput);
    } while (true);
}
//continue loop
function mxd() {
    console.log("Continue Loop Example");
    let count = 0;
    while (count < 10) {
        count++;
        if (count === 3) {
            continue;
        }
        console.log("Count is: " + count);
    }
}
//arithmatic operators
function mnb() {
    console.log("Arithmetic Operators Example");
    let a = 10;
    let b = 5;
    console.log("Addition (10 + 5): " + (a + b));
    console.log("Subtraction (10 - 5): " + (a - b));
    console.log("Multiplication (10 * 5): " + (a * b));
    console.log("Division (10 / 5): " + (a / b));
    console.log("Remainder (10 % 5): " + (a % b));
}
//comparison operatos
function jkc() {
    console.log("Comparison Operators Example");
    let x = 10;
    let y = "10";
    let z = 5;
    console.log("Loose Equality (10 == '10'): " + (x == y));
    console.log("Strict Equality (10 === '10'): " + (x === y));
    console.log("Loose Inequality (10 != 5): " + (x != z));
    console.log("Strict Inequality (10 !== '10'): " + (x !== y));
    console.log("Greater Than (10 > 5): " + (x > z));
    console.log("Less Than (10 < 5): " + (x < z));
    console.log("Greater Than or Equal To (10 >= 10): " + (x >= 10));
    console.log("Less Than or Equal To (10 <= '10'): " + (x <= y));
}
//chapter1
function ch1(){
    console.log("hello world");
}

//chapter2
//example1
function exm1(){
    let result = 5 + 3;  
    console.log(result);
}

//example2
function exm2(){
    let isEqual = 2 === 3; 
    console.log(isEqual);
}

//example3
function exm3() {
    let count = 10;
    count += 5;  
    console.log(count);
}

//example4
function exm4(){
    let num = 10;
    let strNum = "5";
    console.log(num > Number(strNum)); 
}

//chapter 3
//example1
function wa(){
    let a=5;
    let b=8;
    let temp= a;
    a=b;
    b=temp;
    console.log("after swaping:a="+a+",b="+b);
}

//example2
function uu(){
    let age=18;
    if (age>=18) {
        console.log('you are an adult');
    }
}

//example3
function il(){
    let age=20;
    if (age>=18) {
        console.log('you are an adult');
    }
    else{
        console.log('you are not adult');
    }
}

//example4
function afa(){
    let grade=90;
    if (grade>=90){
        console.log('A+');
    }
    else if(grade>=80){
        console.log('B+')
    }
    else if(grade>=70){
        console.log('B-')
    }
    else if(grade>=65){
        console.log('C+')
    }
    else{
        console.log('c')
    }
}

//example5
function wsa(){
    let day = 'saturday';
    switch (day){
        case "saturday":
            console.log('its first day of week');
            break ;
        case "wensday":
            console.log('its fourth day of week');
            break;
        default:
            console.log('its another day');
    }
}

//example6
function dgg(){
    for (let i=1; i<=5; i++){
        console.log(i);
    }
}

//example7
function wae(){
    let i=1;
    while (i<=10){
        console.log(i);
        i++
        if(i===6) {
            break;
        }
    }
}

//example8
function ddee(){
    let i=1;
    do{
        console.log(i);
        i++
    }
    while (i<=10); 
}

//example9
function doq(){
    let i=1;
    while (i<=10){
        console.log(i);
        i++
        if(i===6) {
            break;
        }
    }
}

//example10
function xqq(){
    let i=1;
    while (i<=10){
        i++
        if(i===6) {
            continue;
        }
        console.log(i);
    }
}

//example11
function wew(){
    for(let i=0; i<5; i++ ){
        for(let j=0; j<5; j++ ){
            console.log(`(${i},${j})`);
        }
    }
}

//chapter 4
//example1
function warya(){
    function functionName(){
        console.log("hello word")
    }
}

//example2
function dil(){
    function greet(name){
        console.log(`hello,${name}!`)
    }
    greet("FAIZA");
}

//example3
function dameerka(){
    function fuctionName(par){
        return value;
    }
}

//example4
function adigoo(){
    function add(a,b){
        return a+b;
    }
    const result=add(3,4);
    console.log(result);
}

//example5
function isticmalaya(){
    if (true){
        let blockVariable = "I'm in block scope";
        console.log(blockVariable);
    }
}

//example6
function ul(){
    const doubleNumber = (number) =>{
        return number * 2;
    }
    console.log(doubleNumber(3));
}

//example7
function ween(){
    const add = (a, b) => a + b;
    console.log(add(3, 5));
}

//example8
function hanakanixin(){
    function doSomething(callback){
        console.log("doing something...");
        callback();
    }
    function onComplete(){
        console.log("operation complete!");
    }
    doSomething(onComplete);
}

//example9
function dameerlee(){
    setTimeout(() => {
        console.log("this is an arrow function callback executed after 2 seconds");
    }, 2000);
}

//example10
function waaye(){
    function fuctionName(parameters){
        return value;
    }
}

// Chapter 5 and Object Examples

// Array literal
function waxa() {
    const names = ['ahmed', " ".repeat(7) + 'mohammed', " ".repeat(7) + 'ali'];
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
}

// Array constructor
function hada() {
    const names = new Array("ahmed", "mohammed", "ali"); 
    console.log(names);
}

// Empty array
function qoroyo() {
    const myArray = [];
    myArray[0] = "first";
    myArray[1] = "second";
    console.log(myArray);
}

// Array.from()
function waaaa() {
    const arrayFromStr = Array.from("hello"); 
    console.log(arrayFromStr);
}

// Array initializer
function assignment() {
    const newArray = new Array(3);
    console.log(newArray);
}

// Spread operator
function ooo() {
    const sourceArray = [1, 2, 3];
    const newArray = [...sourceArray];
    console.log(sourceArray);
    console.log(newArray);
}

// Array.of()
function ku() {
    const myArray = Array.of(1, 2, 3); 
    console.log(myArray);
}

// Adding element
function saabsan() {
    const fruits = ["banana", "mango"];
    fruits.unshift("apple");
    console.log(fruits);
}

// Removing element
function java() {
    const qudaar = ["banana", "mango", "cherry"];
    qudaar.pop();
    console.log(qudaar);
}

// Updating elements
function script() {
    const fawaakih = ["banana", "mango", "cherry"];
    fawaakih[1] = "orange"; 
    console.log(fawaakih);
}

// For loop
function waxaaa() {
    const rwww = ["banana", "mango", "cherry"];
    for (let i = 0; i < rwww.length; i++) { 
        console.log(rwww[i]);
    }
}

// ForEach method
function qortay() {
    const fruits = ["banana", "mango", "cherry"];
    fruits.forEach(function (fruit) {
        console.log(fruit);
    });
}

// For...of loop
function gabar() {
    const fruits = ["banana", "mango", "cherry"];
    for (const fruit of fruits) {
        console.log(fruit);
    }
}

// Map method
function lagu() {
    const numbers = [1, 2, 3];
    const squaredNumbers = numbers.map((num) => num * num); 
    console.log(squaredNumbers);
}

// Accessing index with forEach
function magacawo() {
    const fruits = ["banana", "mango", "cherry"];
    fruits.forEach((fruit, index) => {
        console.log(`fruit at index ${index} is ${fruit}`);
    });
}

// Object Examples

// Example 1
function ilham(){
    const qof = {
        firstName: "mohamed",
        lastName: "ali",
        age: 30
    };
    console.log(qof);
}

// Example 2
function nasriin(){
    function Baniaadam(firstName, lastName, age) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    const baniaadam = new Baniaadam("mohamed", "ali", 30);
    console.log(baniaadam);
}

// Example 3
function fizuu(){
    class Dad {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    }
    const dad = new Dad("mohamed", "ali", 30);
    console.log(dad);
}

// Example 4
function nawaaal(){
    const dad = {
        firstName: "mohamed",
        lastName: "ali",
        age: 30,
        email: "mohamed.ali@email.com"
    };
    console.log(dad.firstName);
    console.log(dad["lastName"]);
    dad.age = 31;
    console.log(dad);
}

// Example 5
function sawdooo(){
    const fai = {
        firstName: "mohamed",
        lastName: "ali",
        getFullName: function () {
            return this.firstName + " " + this.lastName;
        },
    };
    console.log(fai.getFullName());
}

// Example 6
function sumayooo(){
    const sus = {
        name: 'faiza',
        education_level: 'bachelor',
        gra_status: 'active'
    };
    for (let index in sus) {
        console.log(`${index}: ${sus[index]}`);
    }
}

//json
// Example 7
function salmaan(){
    const test = {
        "name": "Jonson",
        "city": "New York",
        "age": 30
    };
    console.log(test);
}

// Example 8
function ilyaas(){
    const wew = {
        "name": "mohamed",
        "age": 30,
        "hobbies": ["reciting quran", "praying", "reading", "swimming"]
    };
    console.log(wew);
}

// Example 9
function qadaroow(){
    const jsonString2 = '{"name": "mohammed ali", "age": 30}'; 
    const jsonObject2 = JSON.parse(jsonString2);
    console.log(jsonObject2.name); 
}

// Example 10
function faliseey(){
    const person = {name: "mohammed ali", age: 30};
    const jsonString3 = JSON.stringify(person);
    console.log(jsonString3);
}


//lab
//example1
function jjj(){
    console.log("faiza\nibrahiim\nabdullaahi");
}

//example2
function ggg(){
    let time = new Date().getHours();

    switch (time) {
      case 5:
        console.log("5:00 AM");
        break;
      case 6:
        console.log("6:00 AM");
        break;
      case 7:
        console.log("7:00 AM");
        break;
      case 8:
        console.log("8:00 AM");
        break;
      case 9:
        console.log("9:00 AM");
        break;
      case 10:
        console.log("10:00 AM");
        break;
      case 11:
        console.log("11:00 AM");
        break;
      case 12:
        console.log("12:00 PM");
        break;
      case 13:
        console.log("1:00 PM");
        break;
      case 14:
        console.log("2:00 PM");
        break;
      case 15:
        console.log("3:00 PM");
        break;
      case 16:
        console.log("4:00 PM");
        break;
      case 17:
        console.log("5:00 PM");
        break;
      default:
        console.log("Time is outside of the range 5:00 AM to 5:00 PM.");
        break;
    }
}

//example 3
function uuu(){
    let num1 = parseFloat(prompt("Enter first number: "));
    let num2 = parseFloat(prompt("Enter second number: "));
    let operator = prompt("Enter operator (+, -, *, /): ");

    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = "Cannot divide by zero!";
        }
        break;
      default:
        result = "Invalid operator!";
        break;
    }

    console.log("Result: " + result);
}
//lab
//example1
function iklan(){
    console.log("ilhaam\nomar\nfaarah");
}

//example2
function omar(){
    let time = new Date().getHours();

    switch (time) {
      case 5:
        console.log("5:00 AM");
        break;
      case 6:
        console.log("6:00 AM");
        break;
      case 7:
        console.log("7:00 AM");
        break;
      case 8:
        console.log("8:00 AM");
        break;
      case 9:
        console.log("9:00 AM");
        break;
      case 10:
        console.log("10:00 AM");
        break;
      case 11:
        console.log("11:00 AM");
        break;
      case 12:
        console.log("12:00 PM");
        break;
      case 13:
        console.log("1:00 PM");
        break;
      case 14:
        console.log("2:00 PM");
        break;
      case 15:
        console.log("3:00 PM");
        break;
      case 16:
        console.log("4:00 PM");
        break;
      case 17:
        console.log("5:00 PM");
        break;
      default:
        console.log("Time is outside of the range 5:00 AM to 5:00 PM.");
        break;
    }
}

//example 3
function faarah(){
    let num1 = parseFloat(prompt("Enter first number: "));
    let num2 = parseFloat(prompt("Enter second number: "));
    let operator = prompt("Enter operator (+, -, *, /): ");

    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = "Cannot divide by zero!";
        }
        break;
      default:
        result = "Invalid operator!";
        break;
    }

    console.log("Result: " + result);
}
function navigateToChapters() {
    window.location.href = 'chapters.html';
}
function goBack() {
    window.location.href = "home.html";
}
function navigateToChapters() {
    window.location.href = 'chapters xafsa.html';
}
function goBack() {
    window.location.href = "index.html";
}
//chapters xafsa 
//assignment
function loadExample(example) {
    let output = document.getElementById('example-output');
    output.innerHTML = ""; 

    switch (example) {
        case 'ifExample':
            output.innerHTML += "<h2>If Statement</h2>";
            let score = 85;
            if (score >= 90) {
                output.innerHTML += "You got an A!<br>";
            } else if (score >= 80) {
                output.innerHTML += "You get a B!<br>";
                if (score > 85) {
                    output.innerHTML += "Almost an A!<br>";
                }
            } else {
                output.innerHTML += "You need to improve<br>";
            }
            break;

        case 'ternaryExample':
            output.innerHTML += "<h2>Ternary Operator</h2>";
            let nawl = 85;
            let grade = (ilhaan >= 90) ? "A" :
                        (faiza>= 80) ? "B" :
                        (nawl >= 70) ? "C" : "F";
            output.innerHTML += "Your grade is: " + grade + "<br>";
            break;

        case 'switchCaseExample':
            output.innerHTML += "<h2>Switch Case</h2>";
            let fruit = "apple";
            switch (fruit) {
                case "banana":
                    output.innerHTML += "Bananas are $1 per pound<br>";
                    break;
                case "apple":
                    output.innerHTML += "Apples are $2 per pound<br>";
                    break;
                case "grape":
                    output.innerHTML += "Grapes are $3 per pound<br>";
                    break;
                default:
                    output.innerHTML += "Sorry, we are out of stock<br>";
            }
            break;

        case 'whileLoopExample':
            output.innerHTML += "<h2>While Loop </h2>";
            let countdown = 5;
            while (countdown > 0) {
                output.innerHTML += "Countdown: " + countdown + "<br>";
                countdown--;
            }
            output.innerHTML += "Blast off!<br>";
            break;

        case 'forLoopExample':
            output.innerHTML += "<h2>For Loop</h2>";
            let fruits = ["Apple", "Banana", "Orange", "Mango"];
            for (let i = 0; i < fruits.length; i++) {
                output.innerHTML += fruits[i] + "<br>";
            }
            break;

        case 'doWhileLoopExample':
            output.innerHTML += "<h2>Do While Loop</h2>";
            let userResponse;
            do {
                userResponse = prompt("Do you want to continue? (yes/no)");
            } while (userResponse !== "no");
            output.innerHTML += "Thank you for your response.<br>";
            break;

        case 'breakLoopExample':
            output.innerHTML += "<h2>Break Loop</h2>";
            let userInput;
            do {
                userInput = prompt("Enter a number (type 'exit' to quit):");
                if (userInput === 'exit') {
                    break;
                }
                output.innerHTML += "You entered: " + userInput + "<br>";
            } while (true);
            break;

        case 'continueLoopExample':
            output.innerHTML += "<h2>Continue Loop Example</h2>";
            let count = 0;
            while (count < 10) {
                count++;
                if (count === 3) {
                    continue;
                }
                output.innerHTML += "Count is: " + count + "<br>";
            }
            break;

        case 'arithmeticOperatorsExample':
            output.innerHTML += "<h2>Arithmetic Operators</h2>";
            let a = 10;
            let b = 5;
            output.innerHTML += "Addition (10 + 5): " + (a + b) + "<br>";
            output.innerHTML += "Subtraction (10 - 5): " + (a - b) + "<br>";
            output.innerHTML += "Multiplication (10 * 5): " + (a * b) + "<br>";
            output.innerHTML += "Division (10 / 5): " + (a / b) + "<br>";
            output.innerHTML += "Remainder (10 % 5): " + (a % b) + "<br>";
            break;

        case 'comparisonOperatorsExample':
            output.innerHTML += "<h2>Comparison Operators</h2>";
            let x = 10;
            let y = "10";
            let z = 5;
            output.innerHTML += "Loose Equality (10 == '10'): " + (x == y) + "<br>";
            output.innerHTML += "Strict Equality (10 === '10'): " + (x === y) + "<br>";
            output.innerHTML += "Loose Inequality (10 != 5): " + (x != z) + "<br>";
            output.innerHTML += "Strict Inequality (10 !== '10'): " + (x !== y) + "<br>";
            output.innerHTML += "Greater Than (10 > 5): " + (x > z) + "<br>";
            output.innerHTML += "Less Than (10 < 5): " + (x < z) + "<br>";
            output.innerHTML += "Greater Than or Equal To (10 >= 10): " + (x >= 10) + "<br>";
            output.innerHTML += "Less Than or Equal To (10 <= '10'): " + (x <= y) + "<br>";
            break;
    }


    document.getElementById('back-button').style.display = 'inline-block';

}
function clearOutput() {
    document.getElementById('output').innerHTML = '';
}
//chapter 1
function chapterOne() {
    clearOutput();
    document.getElementById('output').innerText = "hello world";
}
//chapter2
function exampleOne() {
    clearOutput();
    let result = 5 + 3;
    document.getElementById('output').innerText = result;
}

function exampleTwo() {
    clearOutput();
    let isEqual = 2 === 3;
    document.getElementById('output').innerText = isEqual;
}

function exampleThree() {
    clearOutput();
    let count = 10;
    count += 5;
    document.getElementById('output').innerText = count;
}

function exampleFour() {
    clearOutput();
    let num = 10;
    let strNum = "5";
    document.getElementById('output').innerText = num > Number(strNum);
}

function swapValues() {
    clearOutput();
    let a = 5;
    let b = 8;
    let temp = a;
    a = b;
    b = temp;
    document.getElementById('output').innerText = "After swapping: a=" + a + ", b=" + b;
}

function checkAdult() {
    clearOutput();
    let age = 18;
    document.getElementById('output').innerText = age >= 18 ? 'You are an adult' : 'You are not an adult';
}

function checkAdultWithElse() {
    clearOutput();
    let age = 20;
    if (age >= 18) {
        document.getElementById('output').innerText = 'You are an adult';
    } else {
        document.getElementById('output').innerText = 'You are not an adult';
    }
}

function gradeEvaluation() {
    clearOutput();
    let grade = 90;
    if (grade >= 90) {
        document.getElementById('output').innerText = 'A+';
    } else if (grade >= 80) {
        document.getElementById('output').innerText = 'B+';
    } else if (grade >= 70) {
        document.getElementById('output').innerText = 'B-';
    } else if (grade >= 65) {
        document.getElementById('output').innerText = 'C+';
    } else {
        document.getElementById('output').innerText = 'C';
    }
}

function checkDay() {
    clearOutput();
    let day = 'saturday';
    let message;
    switch (day) {
        case "saturday":
            message = "It's the first day of the week";
            break;
        case "wednesday":
            message = "It's the fourth day of the week";
            break;
        default:
            message = "It's another day";
    }
    document.getElementById('output').innerText = message;
}

function loopNumbers() {
    clearOutput();
    let result = '';
    for (let i = 1; i <= 5; i++) {
        result += i + '\n';
    }
    document.getElementById('output').innerText = result;
}

function whileLoopWithBreak() {
    clearOutput();
    let result = '';
    let i = 1;
    while (i <= 10) {
        result += i + '\n';
        i++;
        if (i === 6) {
            break;
        }
    }
    document.getElementById('output').innerText = result;
}

function doWhileLoop() {
    clearOutput();
    let result = '';
    let i = 1;
    do {
        result += i + '\n';
        i++;
    } while (i <= 10);
    document.getElementById('output').innerText = result;
}

function repeatWhileLoopWithBreak() {
    clearOutput();
    let result = '';
    let i = 1;
    while (i <= 10) {
        result += i + '\n';
        i++;
        if (i === 6) {
            break;
        }
    }
    document.getElementById('output').innerText = result;
}

function whileLoopWithContinue() {
    clearOutput();
    let result = '';
    let i = 1;
    while (i <= 10) {
        i++;
        if (i === 6) {
            continue;
        }
        result += i + '\n';
    }
    document.getElementById('output').innerText = result;
}

function nestedLoops() {
    clearOutput();
    let result = '';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            result += `(${i},${j})\n`;
        }
    }
    document.getElementById('output').innerText = result;
}
//chapter 4
// Clear Output
function clearOutput() {
    const output = document.getElementById('output');
    output.innerHTML = '';
}

// Example 1
function exOne() {
    clearOutput();
    function functionOne() {
        document.getElementById('output').innerText = "hello world";
    }
    functionOne();
}

// Example 2
function exTwo() {
    clearOutput();
    function greetUser(name) {
        document.getElementById('output').innerText = `hello, ${name}!`;
    }
    greetUser("HAFSA");
}

// Example 3
function exThree() {
    clearOutput();
    function processInput(param) {
        return param;
    }
    const result = processInput("Input processed");
    document.getElementById('output').innerText = result;
}

// Example 4
function exFour() {
    clearOutput();
    function addNumbers(a, b) {
        return a + b;
    }
    const result = addNumbers(3, 4);
    document.getElementById('output').innerText = result;
}

// Example 5
function exFive() {
    clearOutput();
    if (true) {
        let blockMessage = "I'm in block scope";
        document.getElementById('output').innerText = blockMessage;
    }
}

// Example 6
function exSix() {
    clearOutput();
    const doubleValue = (num) => {
        return num * 2;
    };
    document.getElementById('output').innerText = doubleValue(3);
}

// Example 7
function exSeven() {
    clearOutput();
    const sum = (x, y) => x + y;
    document.getElementById('output').innerText = sum(3, 5);
}

// Example 8
function exEight() {
    clearOutput();
    function executeTask(callback) {
        document.getElementById('output').innerText = "doing something...";
        setTimeout(() => {
            callback();
        }, 1000);
    }
    function onCompletion() {
        const output = document.getElementById('output');
        output.innerText += "\noperation complete!";
    }
    executeTask(onCompletion);
}
//example9
function exNine(){
    setTimeout(() => {
        document.write("this is an arrow function callback executed after 2 seconds");
    }, 2000);
}

//example10
function exTen(){
    function handleInput(parameters){
        return parameters;
    }
}

// Chapter 5 and Object Examples

// Array literal
function arrOne() {
    const names = ['ahmed', " " + 'mohammed', " " + 'ali'];
    document.write(names[0]);
    document.write(names[1]);
    document.write(names[2]);
}

// Array constructor
function arrTwo() {
    const names = new Array("ahmed", "mohammed", "ali"); 
    document.write(names);
}

// Empty array
function arrThree() {
    const myArray = [];
    myArray[0] = "first";
    myArray[1] = "second";
    document.write(myArray);
}

// Array.from()
function arrFour() {
    const arrayFromStr = Array.from("hello"); 
    document.write(arrayFromStr);
}

// Array initializer
function arrFive() {
    const newArray = new Array(3);
    document.write(newArray);
}

// Spread operator
function arrSix() {
    const sourceArray = [1, 2, 3];
    const newArray = [...sourceArray];
    document.write(sourceArray);
    document.write(newArray);
}

// Array.of()
function arrSeven() {
    const myArray = Array.of(1, 2, 3); 
    document.write(myArray);
}

// Adding element
function arrEight() {
    const fruits = ["banana", "mango"];
    fruits.unshift("apple");
    document.write(fruits);
}

// Removing element
function arrNine() {
    const vegetables = ["banana", "mango", "cherry"];
    vegetables.pop();
    document.write(vegetables);
}

// Updating elements
function arrTen() {
    const fruits = ["banana", "mango", "cherry"];
    fruits[1] = "orange"; 
    document.write(fruits);
}

// For loop
function loopOne() {
    const fruits = ["banana", "mango", "cherry"];
    for (let i = 0; i < fruits.length; i++) { 
        document.write(fruits[i]);
    }
}

// ForEach method
function loopTwo() {
    const fruits = ["banana", "mango", "cherry"];
    fruits.forEach(function (fruit) {
        document.write(fruit);
    });
}

// For...of loop
function loopThree() {
    const fruits = ["banana", "mango", "cherry"];
    for (const fruit of fruits) {
        document.write(fruit);
    }
}

// Map method
function mapExample() {
    const numbers = [1, 2, 3];
    const squaredNumbers = numbers.map((num) => num * num); 
    document.write(squaredNumbers);
}

// Accessing index with forEach
function loopFour() {
    const fruits = ["banana", "mango", "cherry"];
    fruits.forEach((fruit, index) => {
        document.write(`Fruit at index ${index} is ${fruit}<br>`);
    });
}


// Object Examples

// Example 1
function objOne(){
    const person = {
        firstName: "mohamed",
        lastName: "ali",
        age: 30
    };
    document.write(person);
}

// Example 2
function objTwo(){
    function Person(firstName, lastName, age) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    const person = new Person("mohamed", "ali", 30);
    document.write(person);
}

// Example 3
function objThree(){
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    }
    const person = new Person("mohamed", "ali", 30);
    document.write(person);
}

// Example 4
function objFour(){
    const person = {
        firstName: "mohamed",
        lastName: "ali",
        age: 30,
        email: "mohamed.ali@email.com"
    };
    document.write(person.firstName);
    document.write(person["lastName"]);
    person.age = 31;
    document.write(person);
}

// Example 5
function objFive(){
    const user = {
        firstName: "mohamed",
        lastName: "ali",
        getFullName: function () {
            return this.firstName + " " + this.lastName;
        },
    };
    document.write(user.getFullName());
}

// Example 6
function objSix() {
    const student = {
        name: 'HAFSA',
        educationLevel: 'bachelor',
        gradStatus: 'active'
    };
    for (let key in student) {
        document.write(`${key}: ${student[key]}<br>`);
    }
}


// JSON
// Example 1
function jsonOne(){
    const data = {
        "name": "Jonson",
        "city": "New York",
        "age": 30
    };
    document.write(data);
}

// Example 2
function jsonTwo(){
    const data = {
        "name": "mohamed",
        "age": 30,
        "hobbies": ["reciting quran", "praying", "reading", "swimming"]
    };
    document.write(data);
}

// Example 3
function jsonThree(){
    const jsonString = '{"name": "mohammed ali", "age": 30}'; 
    const jsonObject = JSON.parse(jsonString);
    document.write(jsonObject.name); 
}

// Example 4
function jsonFour(){
    const person = {name: "mohammed ali", age: 30};
    const jsonString = JSON.stringify(person);
    document.write(jsonString);
}

function goBack() {
    document.getElementById('example-output').innerHTML = "";  
    document.getElementById('back-button').style.display = 'none'; 
}
const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');  // Furo menu
});
function goBack() {
    window.location.href='index.html';
}
function navigateToIlhanChapters() {
    window.location.href = 'chapters.html'; // Bogga Ilhan
}

function navigateToHafsaChapters() {
    window.location.href = 'chapters-xafsa.html'; // Bogga Hafsa
}

function goBack() {
    window.location.href = 'index.html'; // Dib ugu noqo bogga hore
}
