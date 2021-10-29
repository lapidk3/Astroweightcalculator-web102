const ID = "planets";
const OPTION = "option";
const USER_WEIGHT = "user-weight";
const OUTPUT = "output";
const PLANET_NAME = "pname";
const PLANET_MULT = "pmult"

var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

var reversed = planets.reverse();

reversed.forEach(function(currPlanet) {
    var element = document.getElementById(ID);
    let newOption = document.createElement(OPTION);
    newOption.value = currPlanet[0];
    newOption.textContent = currPlanet[0];
    element.appendChild(newOption);
});


function calculateWeight(weight, planetName) {
    for(let i = 0; i < planets.length; i++) {
        if(planets[i][0] == planetName) {
            let planetGravity = planets[i][1];
            return weight * planetGravity;
        }
    }
}

function handleClickEvent(e) {
    var userWeight = document.getElementById(USER_WEIGHT).value;
    var select = document.getElementById(ID);
    var planetName = select.value;
    var result = calculateWeight(userWeight, planetName);
    var element = document.getElementById(OUTPUT);
    element.textContent = "If you were on " + planetName + 
        ", you would weigh " + result + "lbs!";
}

function removePluto(noPlanet) {
    var element = document.getElementById(ID);
    if(noPlanet.checked) {
        element.remove(element.length-1);
    } else if(!noPlanet.checked) {
        var pluto = document.createElement(OPTION);
        pluto.value = planets[planets.length-1][0];
        pluto.textContent = planets[planets.length-1][0];
        element.appendChild(pluto);
    } else {
        return;       
    }
}

function addPlanet() {
    var pName = document.getElementById(PLANET_NAME).value;
    var pMult = document.getElementById(PLANET_MULT).value;

    var element = document.getElementById(ID);
    var newPlanet = document.createElement(OPTION);
    newPlanet.value = pName;
    newPlanet.textContent = pName;
    element.appendChild(newPlanet);
    planets.push([pName,pMult]);
}