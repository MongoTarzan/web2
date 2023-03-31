// 4. Der Bewerber hat eine Chance auf eine Anstellung wenn er bereits über 5 Jahre Erfahrung vorweist oder einen Master Abschluss besitzt und auf jeden Fall eine einwandfreies Leumundszeugnis besitzt.
let erfahrung = 2
let master = true
let einwandfreiesLeumundszeugnis = false

if ((erfahrung > 5 || master) && einwandfreiesLeumundszeugnis) {
    console.log("Bewerber wird angenommen")
} else {
    console.log("Bewerber wird abgelehnt")
}