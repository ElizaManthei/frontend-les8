
//     Philips 43PUS6504/12 - 4K TV
//      €379,-
//      43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
// Opdracht 4a: Maak een herbruikbare functie die een string genereert
// voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam]

function fullTvName(tv) {
    return tv.brand + ' ' + tv.type + ' - ' + tv.name;
}


//     Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter
//     verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.

function tvPrice(price) {
    return '€' + price + ',-';
}

// Opdracht 4c: Maak een herbruikbare functie die een string genereert
// voor alle beschikbare schermgroottes van één tv.
function inchToCm(inch) {
    return Math.round(inch * 2.54);
}

function screenSize(tv) {
    const sizes = tv.availableSizes;
    let result = sizes[0] + ' inch (' + inchToCm(sizes[0]) + ' cm)';

    if (sizes.length !== 0) {
        for (let i = 1; i < sizes.length; i++) {
            result = result + ' | ' + sizes[i] + ' inch (' + inchToCm(sizes[i]) + ' cm)';
        }
    }
        return result;
}

//     Opdracht 4d: Schrijf een script die de informatie van
//     de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld.
//     Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

const tvsInfos = document.getElementById('opdracht4');
let tvInfo;
const tv1 = inventory.find((tv) => {
    return tv.brand === 'Philips';
});

tvInfo = document.createElement('p');
tvInfo.innerText = fullTvName(tv1) + '\n' + tvPrice(tv1.price) + '\n' + screenSize(tv1);
tvInfo.style.color = 'red';
tvsInfos.appendChild(tvInfo);

// Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's
// weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies
// die je hebt gemaakt in opdracht 4a, 4b en 4c.

function tvInfoShow(tvs, id, color) {
    const tvsInfos = document.getElementById(id);
    const tvI =  tvs.map((tv) => {
        return fullTvName(tv) + '\n' + tvPrice(tv.price) + '\n' + screenSize(tv);
    });
    for (let i = 0; i < tvI.length; i++) {
        tvInfo = document.createElement('p');
        tvInfo.innerText = tvI[i];
        tvInfo.style.color = color;
        tvsInfos.appendChild(tvInfo);
    }

}

tvInfoShow(inventory,'opdracht4','black');