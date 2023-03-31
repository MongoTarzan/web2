// 1. Der Fahrer darf das Motorrad fahren, wenn er 24 Jahre oder älter ist oder den Motorradführerschein besitzt aber nicht mehr in der Probezeit ist.
let age = 20
let fuehrerschein = true
let probezeit = true
if (age >= 24 || (fuehrerschein && !probezeit)) {
    console.log("Er darf das Motorrad fahren")
} else {
    console.log("Er darf das Motorrad nicht fahren")
}