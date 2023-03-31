// erstelle eine Variable number

// Aufgabe 1
// Wenn die Zahl kleiner ist als 20  gib aus "Mini"
// Wenn die Zahl zw. 20 und 50 ist gib aus "Medium"
// Wenn die Zahl größer als 50 ist gib aus "Large"


// Aufgabe 2
// Wenn die Zahl kleiner gleich 7 ist gib aus "Mini"
// Wenn die Zahl zwischen 7 und 90 ist gib aus "Medium"
// Wenn die Zahl größer als 90 ist gib aus "Large"

let num = Math.random() * 100
console.log(`Zufallszahl lautet: ${num}`)

// Aufgabe 1

console.log(num < 20 ? "Mini" : num < 50 ? "Medium" : "Large")

// Aufgabe 2

console.log(num <= 7 ? "Mini" : num < 90 ? "Medium" : "Large")