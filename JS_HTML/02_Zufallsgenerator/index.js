const generate = () => {
    let min = parseInt(document.getElementById("number_min").value)
    let max = parseInt(document.getElementById("number_max").value)

    let result = Math.round(Math.random() * (max - min)) + min

    document.getElementById("result").innerHTML = result
}