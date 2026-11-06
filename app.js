const attackingSelector = document.getElementById("attackingType");
const defendingSelector = document.getElementById("defendingType");
const wrapper = document.getElementById("wrapper");
const result = document.getElementById("result");


const typeChart = {
    fire: {
        strongAgainst: ["grass"],
        weakAgainst: ["water"]
    },

    water: {
        strongAgainst: ["fire"],
        weakAgainst: ["electric"]
    },

    electric: {
        strongAgainst: ["water"],
        weakAgainst: ["grass"]
    },

    grass: {
        strongAgainst: ["electric"],
        weakAgainst: ["fire"]
    }
};

function loadTypes() {

    for (const key in typeChart) {

        const ele = document.createElement("option");

        ele.setAttribute("value", key);
        ele.innerHTML = key;

        attackingSelector.appendChild(ele);

        const ele2 = document.createElement("option");

        ele2.setAttribute("value", key);
        ele2.innerHTML = key;

        defendingSelector.appendChild(ele2);
    }
}

function calculateMatchup(attacking, defending) {

    const attacker = typeChart[attacking];

    let multiplier = 1;
    let message = "Effective.";

    if (attacker.strongAgainst.includes(defending)) {

        multiplier = 2;
        message = "Super effective!";

    }

    else if (attacker.weakAgainst.includes(defending)) {

        multiplier = 0.5;
        message = "Not very effective...";

    }

    result.innerHTML = "";

    const multiplierEle = document.createElement("h2");
    const messageEle = document.createElement("p");

    multiplierEle.innerHTML = "Damage Multiplier: " + multiplier + "x";
    messageEle.innerHTML = message;

    result.appendChild(multiplierEle);
    result.appendChild(messageEle);
}

attackingSelector.addEventListener("change", function(event) {

    calculateMatchup(event.target.value, defendingSelector.value);

});

defendingSelector.addEventListener("change", function(event) {

    calculateMatchup(attackingSelector.value, event.target.value);

});

loadTypes();

calculateMatchup(attackingSelector.value, defendingSelector.value);