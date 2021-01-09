let number1 = Number(window.prompt("Adj meg egy számot!"));
let number2 = Number(window.prompt("Adj meg még egy számot!"));
document.getElementById("a").innerHTML = number1 + number2;
document.getElementById("b").innerHTML = number1 * number2;
document.getElementById("c").innerHTML = number1 * number1 && number1 * number2;
