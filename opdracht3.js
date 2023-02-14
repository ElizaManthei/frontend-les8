// Opdracht 3a: Gebruik een array-methode om alle tv merken
//(zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven.
// Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan.
// Dat er dubbele namen in zitten, is niet erg.
//
let listElement = document.createElement('li');
const id = document.getElementById('opdracht3');


const tVBrands = inventory.map((tv) => {
    return tv.brand;
});

let opd = [];
let k = 0;
let l = 0;
for (let i = 0; i < tVBrands.length ; i++) {
    for (let j = i + 1; j < tVBrands.length ; j++) {
        if (tVBrands[j] === tVBrands[i]) {
            k++;
        }
    }
    if ( k === 0) {
        opd[l] = tVBrands[i];
        l++;
    }
    k = 0;
}


for (let  i = 0; i < opd.length; i++) {
    listElement = document.createElement('li');
    listElement.textContent = opd[i];
    id.appendChild(listElement);
}

console.log(tVBrands);
console.log(opd);

// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten
// verwacht. Het is handig om onze scripts als functies op te zetten,
// zodat we ze gemakkelijk kunnen hergebruiken.
// Tip: vergeet deze functie -declaratie niet aan te roepen!

function tVBrandsShow(tvs) {
    const tvBrands = tvs.map((tv) => {
        return tv.brand;
    });
    let opd = [];
    let k = 0;
    let l = 0;
    for (let i = 0; i < tvBrands.length ; i++) {
        for (let j = i + 1; j < tvBrands.length ; j++) {
            if (tvBrands[j] === tVBrands[i]) {
                k++;
            }
        }
        if ( k === 0) {
            opd[l] = tvBrands[i];
            l++;
        }
        k = 0;
    }
    for (let  i = 0; i < opd.length; i++) {
        listElement = document.createElement('li');
        listElement.textContent = opd[i];
        listElement.style.color = 'green';
        id.appendChild(listElement);
    }

}
tVBrandsShow(inventory);
