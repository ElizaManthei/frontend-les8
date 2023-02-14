// p: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string,
// gebruik je hier gewoon een oude vertrouwde for-loop voor!
//
//     Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent.
//     Log de uitkomst in de console.


let numberOfTVsSold = 0;
for (let i = 0; i < inventory.length; i ++) {
    numberOfTVsSold = numberOfTVsSold + inventory[i].sold;
};
console.log('Verkocht: ' + numberOfTVsSold);

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.


const opdr2b = document.createElement('h1');
opdr2b.textContent = "Verkocht: "  + numberOfTVsSold;
const opdracht2 = document.getElementById('opdracht2a');
document.getElementById('opdracht2a').style.color = 'green';
opdracht2.appendChild(opdr2b);

//     Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent.
//     Log de uitkomst in de console.

let numberOfTVsPurchased = 0;
for ( let i = 0; i < inventory.length; i ++) {
    numberOfTVsPurchased = numberOfTVsPurchased + inventory[i].originalStock;
}
console.log('Ingekocht: ' + numberOfTVsPurchased);

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

const opdr2d = document.createElement("h1");
opdr2d.textContent = "Ingekocht: " + numberOfTVsPurchased;
opdr2d.style.color = 'blue';
opdracht2.appendChild(opdr2d);

//     Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
const opdr2e = document.createElement('h1');
opdr2e.textContent = 'Nog om te verkopen: ' + (numberOfTVsPurchased - numberOfTVsSold);
opdr2e.style.color = 'red';
opdracht2.appendChild(opdr2e);

