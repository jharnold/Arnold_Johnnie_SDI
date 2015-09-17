/*
Johnnie Arnold
SDI
09/16/2015
Conditionals Worksheet - Celsius to Fahrenheit converter
 */

//variables
var userFC = prompt("Is your temperature in (F)ahrenheit or (C)elsius?");

//conditionals

if(userFC === "F" || userFC === "f"){
    var userFT = prompt("What is the temperature you would like to covert to celsius?");
    var farC = (userFT - 32) * 5/9;
    alert("The temperature is " + farC + " degrees Celsius.");

}else if(userFC === "C" || userFC === "c"){
    var userCT = prompt("What is the temperature you would like to convert to fahrenheit?");
    var farF = userCT * 9/5 + 32;
    alert("The temperature is " + farC + " degrees Fahrenheit.");
}else{
    alert("Please enter the correct letter.");
}



