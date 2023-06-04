// Funkcia pre zobrazenie pamäte
function displayMemory() {
    var memory = localStorage.getItem("memory");
    if (memory) {
        memory = JSON.parse(memory);
        document.getElementById("memory").value = memory.join(", ");
    }
}

// Funkcia pre výpočet
function calculate() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var operation = document.getElementById("operation").value;

    var result;

    switch (operation) {
        case "scitaj":
            result = number1 + number2;
            break;
        case "odcitaj":
            result = number1 - number2;
            break;
        case "nasob":
            result = number1 * number2;
            break;
        case "vydel":
            result = number1 / number2;
            break;
        case "ine":
            // Príklad inej operácie
            result = Math.pow(number1, number2);
            break;
    }

    document.getElementById("vysledok").value = result;

    // Uloženie výsledku do pamäte
    var memory = localStorage.getItem("memory");
    if (memory) {
        memory = JSON.parse(memory);
        if (memory.length >= 5) {
            memory.shift();
        }
        memory.push(result);
    } else {
        memory = [result];
    }
    localStorage.setItem("memory", JSON.stringify(memory));

    // Zobrazenie pamäte
    displayMemory();
}

// Zobrazenie pamäte pri načítaní stránky
window.onload = function() {
    displayMemory();
}