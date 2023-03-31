// Erstelle eine Zufallszahl zwischen 5 und 10

// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight
// etc.

let num = Math.round(Math.random() * 5) + 5
let numNames = { 5: "Fünf", 6: "Sechs", 7: "Sieben", 8: "Acht", 9: "Neun", 10: "Zehn"}
switch (num) {
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
        console.log(numNames[num])
        break
    default:
        console.log("...")
}