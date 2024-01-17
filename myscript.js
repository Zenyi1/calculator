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
let firstNumber;
let secondNumber;
let value;
let value2;

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
    secondNUmber=0;
    display.innerText = "";
})

equals.addEventListener("click", function() {
    secondNumber = display.innerText;
    value2= operate(operator, firstNumber, secondNumber);
    display.innerText= value2;
    firstNUmber = value2;
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

for(let i=0; i < specialCharacters.length; i++) {
    specialCharacters[i].addEventListener("click", function() {
        operator=(specialCharacters[i].innerText);
        firstNumber = display.innerText;
        display.innerText = "";
    })
}


console.log(numbers);

