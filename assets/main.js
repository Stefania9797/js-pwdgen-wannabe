//Come ti chiami?
var firstName = prompt("Come ti chiami?");
console.log(firstName);

//Qual è il tuo cognome?
var lastName = prompt("Qual è il tuo cognome?");
console.log(lastName);

//Colore preferito
var favColor = prompt("Qual è il tuo colore preferito?")
console.log(favColor);

//Password generata
document.getElementById("password").innerHTML="La tua password è "+ firstName + lastName + favColor + "21";