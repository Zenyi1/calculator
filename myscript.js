function add(a, b){
    return a + b;
}

function substract(a,b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, first, second){
    if(operator == "+"){
        return add(first, second);
    } else if (operator == "-"){
        return substract(first, second);
    } else if (operator == "*"){
        return multiply(first, second);
    } else if (operator == "/"){
        return divide(first, second);
    } else {
        return("");
    }

}

let operator;
let firstNumber = 0;
let secondNumber = 0;
let value;
let value2;
let value3;

let stringOperation = 0;

let display = document.getElementById("lug");
let AC = document.getElementById("delete");
let equal = document.getElementById("equals");
const numbers = document.querySelectorAll('.digit');
const specialCharacters = document.querySelectorAll('.operation');

AC.addEventListener("click", function() {
    value = 0;
    value2 = 0
    operator = "";
    firstNumber = 0;
    secondNumber=0;
    display.innerText = "";
    stringOperation = 0;
})

equals.addEventListener("click", function() {
    secondNumber = parseInt(display.innerText);
    value2= operate(operator, firstNumber, secondNumber);
    console.log(value2);
    value2= value2.toFixed(2);
    display.innerText= value2;
    secondNumber = value2;
    stringOperation = 0;
})

for(let i=0; i< numbers.length; i++) {
    numbers[i].addEventListener("click", function(){
        if(parseInt(display.innerText) > 100000000000){
            alert("Maximum number size reached")
        } else {
            value=parseInt(numbers[i].innerText);
            display.innerText = display.innerText + value;
        }
        
    })
}

//stores the first number and the operator.
for(let i=0; i < specialCharacters.length; i++) {
    specialCharacters[i].addEventListener("focus", function() {
        if (stringOperation > 0){
            secondNumber = parseInt(display.innerText);
            console.log(firstNumber + "firstNumber");
            console.log(secondNumber);
            console.log(operator);
            value2= operate(operator, firstNumber, secondNumber);
            console.log(value2);
            value2= value2.toFixed(2);
            display.innerText= value2;
            secondNumber = parseInt(value2);
        } else {
            secondNumber= operate(operator, firstNumber, secondNumber);
            operator=(specialCharacters[i].innerText);
            firstNumber = parseInt(display.innerText);
            display.innerText = "";
            stringOperation = 0;
        }       
    })
}

for(let i=0; i < specialCharacters.length; i++) {
    specialCharacters[i].addEventListener("blur", function() {
        display.innerText="";
    })
}


console.log(numbers);

