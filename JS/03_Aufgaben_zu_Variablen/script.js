let banana = "Banane"
let apple = "Apple"

let bananaPricePerKilo = 2.14
let applePricePerKilo = 3.43

let bananaAvgWeight = 0.22
let appleAvgWeight = 0.34

let bananasPerKilo = 1 / bananaAvgWeight
let applesPerKilo = 1 / appleAvgWeight

let priceSingleBanana = bananaPricePerKilo / bananasPerKilo
let priceSingleApple = applePricePerKilo / applesPerKilo

console.log(`About ${bananasPerKilo} bananas per kilo and ${applesPerKilo} apples per kilo.`)
console.log(`Price per Banana ${priceSingleBanana}; Price per Apple ${priceSingleApple}`)

console.log(`8 Äpfel kosten ${priceSingleApple * 8}`)
console.log(`17 Bananen kosten ${priceSingleBanana * 17}`)
console.log(`1 Tonne Äpfel kostet ${applePricePerKilo * 1000}`)
console.log(`1 Tonne Bananen kostet ${bananaPricePerKilo * 1000}`)