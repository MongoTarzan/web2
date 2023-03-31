// 3. Wenn ich den Kurs “Softwarearchitekturen” besuchen möchte, muss ich den Coding Campus besucht haben oder bereits 2 Jahre Berufserfahrung vorweisen.
let codingCampusBesucht = false
let berufserfahrung = 3

if (codingCampusBesucht || berufserfahrung >= 2) {
    console.log("Darf den Kurs machen")
} else {
    console.log("Darf den Kurs leider nicht machen")
}