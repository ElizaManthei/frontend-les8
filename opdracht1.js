// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen.
// Log de uitkomst in de console.

const tvsTypes = inventory.map((tv) => {
    return tv.type;
});
console.log(tvsTypes);


//     Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen
//     (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
 const  tvsSold = inventory.filter((tv) => {
     return (tv.originalStock === tv.sold);
 });
 console.log(tvsSold);


// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten)
// die over AmbiLight beschikken. Log de uitkomst in de console.

const  tvsWithAmbilight1 = inventory.filter((tv) => {
    return tv.options.ambiLight;
});

console.log(tvsWithAmbilight1);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
// Log de uitkomst in de console.

inventory.sort((a, b) => {
    if (a.price > b.price) {
        return 1;
    };
    if (a.price < b.price) {
        return -1
    };
    return 0;

});
console.log(inventory);