const apikey = "4VeXeFmfnAXDyOPOJuCUpQ==nRfk1PQoWXbNV4PX";
const apiUrl = "https://api.api-ninjas.com/v1/motorcycles?make=";

async function getMakes() {
    const response = await fetch(apiUrl, {
        headers: {
            "X-Api-Key": apikey
        }
    });
    const data = await response.json();
    const makes = [...new Set(data.map(item => item.make))];

    return makes;
}

async function getModelsByMake(make, search) {
    const response = await fetch(apiUrl + make , {
        headers: {
            "X-Api-Key": apikey
        }
    });
    const data = await response.json();
    const models = data.filter(item => {
        return item.make === make && item.model.toLowerCase().includes(search.toLowerCase());
    });

    return models;
}

async function populateMakes() {
    const makes = await getMakes();
    const makeSelect = document.getElementById("make");

    makes.forEach(make => {
        const option = document.createElement("option");
        option.value = make;
        option.text = make;
        makeSelect.appendChild(option);
    });
}
async function populateModels() {
    const makeSelect = document.getElementById("make");
    const selectedMake = makeSelect.options[makeSelect.selectedIndex].value;
    const searchInput = document.getElementById("search");
    const search = searchInput.value;
    const models = await getModelsByMake(selectedMake, search);
    const modelsList = document.getElementById("models");
    
    modelsList.innerHTML = "";

    if (models.length === 0) {
        modelsList.innerHTML = "Keine Ergebnisse gefunden!";
        return;
      }

    models.forEach(model => {
        let html = "<li class='markenAufzaehlung'>"+ "Marke: " + model.make + "</li>";
        html += "<li>"+ "Modell: " + model.model + "</li>";
        html += "<li>"+ "Baujahr: " + model.year + "</li>";
        html += "<li>"+ "Typ: " + model.type + "</li>";
        html += "<li>"+ "Hubraum: " + model.displacement + "</li>";
        html += "<li>"+ "Motor: " + model.engine + "</li>";
        html += "<li>"+ "Leistung: " + model.power + "</li>";
        html += "<li>"+ "Drehmoment: " + model.torque + "</li>";
        html += "<br>"
        const listItem = document.createElement("li");
        listItem.innerHTML = html;
        modelsList.appendChild(listItem);
    });
}

function showBox() {
    const box = document.getElementById("box");
    box.style.display = "block";
  }

const brandsDropdown = document.getElementById("make");
brandsDropdown.addEventListener("change", () => {
  const make = brandsDropdown.value;
  populateModels(make);
  showBox();
});

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
    populateModels();
});