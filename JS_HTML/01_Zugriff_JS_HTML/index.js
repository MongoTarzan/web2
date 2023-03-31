const addieren = () => {
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value
    let res = parseFloat(number1) + parseFloat(number2)
    document.getElementById("result").innerHTML = res
}
const subtrahieren = () => {
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value
    let res = parseFloat(number1) - parseFloat(number2)
    document.getElementById("result").innerHTML = res
}
const multiplizieren = () => {
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value
    let res = parseFloat(number1) * parseFloat(number2)
    document.getElementById("result").innerHTML = res
}
const dividieren = () => {
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value
    let res = parseFloat(number1) / parseFloat(number2)
    document.getElementById("result").innerHTML = res
}