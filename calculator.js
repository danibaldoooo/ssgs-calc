function sum(a,b)
{
    return a + b;
}

function subtract(a,b)
{
    return a - b;
}

function multiply(a,b)
{
    return a * b;
}

function divide(a,b)
{
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function power(a,b)
{
    return Math.pow(a,b);
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = {sum, subtract, multiply, divide, power};

console.log("Benvenuto nel calcolatore di SSGS, ecco di seguito le operazioni supportate:");
console.log("1. Somma");
console.log("2. Sottrazione");
console.log("3. Moltiplicazione");
console.log("4. Divisione");
console.log("5. Potenza");
console.log("6. Chiudi il programma");

function randomFarewell() {
    const farewells = [
        "Arrivederci! Alla prossima!",
        "Grazie per aver usato il calcolatore di SSGS!",
        "Ciao! Torna presto!",
        "Buona giornata e a presto!",
        "Addio! È stato un piacere aiutarti!"
    ];

    const randomIndex = Math.floor(Math.random() * farewells.length);
    console.log(farewells[randomIndex]);
}

function askOperation() {
    rl.question("Scegli l'operazione da eseguire (1-6): ", (operation) => {
        const op = parseInt(operation);

        if (op >= 1 && op <= 5) {
            rl.question("Inserisci il primo numero: ", (num1) => {
                rl.question("Inserisci il secondo numero: ", (num2) => {
                    const a = parseFloat(num1);
                    const b = parseFloat(num2);
                    let result;

                    switch (op) {
                        case 1:
                            result = sum(a, b);
                            console.log(`Risultato: ${a} + ${b} = ${result}`);
                            break;

                        case 2:
                            result = subtract(a, b);
                            console.log(`Risultato: ${a} - ${b} = ${result}`);
                            break;

                        case 3:
                            result = multiply(a, b);
                            console.log(`Risultato: ${a} * ${b} = ${result}`);
                            break;

                        case 4:
                            try {
                                result = divide(a, b);
                                console.log(`Risultato: ${a} / ${b} = ${result}`);
                            } catch (error) {
                                console.error(error.message);
                            }
                            break;

                        case 5:
                            result = power(a, b);
                            console.log(`Risultato: ${a} ^ ${b} = ${result}`);
                            break;
                    }
                    askOperation(); 
                });
            });
        } else if (op === 6) {
            randomFarewell(); 
            rl.close();
        } else {
            console.log("Operazione non valida. Riprova.");
            askOperation(); 
        }
    });
}

askOperation();