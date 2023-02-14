// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's
// en Uitverkochte exemplaren. Gebruik de code die je in opdracht 1b, 1c en 1d
// hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het
// moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten
// in de de console loggen als de gebruiker op de bijbehorende knop klikt.
// Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!

// Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd,
// dat de uitkomsten worden meegegeven aan jouw functie uit 4e zodat
// de resultaten daadwerkelijk op de pagina weergegeven worden!
function soldTvs(tvs) {
    return tvs.filter((tv) => {
        return (tv.originalStock === tv.sold);
    });
}

function tvsWithAmbilight(tvs) {
   return  tvs.filter((tv) => {
        return tv.options.ambiLight;
    });

}

function priceSort(tvs) {
    tvs.sort((a, b) => {
        if (a.price > b.price) {
            return 1;
        }
        if (a.price < b.price) {
            return -1
        }
        return 0;
    });
    return tvs;
}


const buttonSort = document.getElementById('sort');
buttonSort.addEventListener('click', () => {
    const title = document.createElement('h3');
    title.innerText = 'Sort:';
    title.style.color = 'black';
    document.getElementById('sold1').appendChild(title);
    tvInfoShow(priceSort(inventory),'sold1', 'blue');


});


const buttonAmbi = document.getElementById('ambi');
buttonAmbi.addEventListener('click', () => {
    const title = document.createElement('h3');
    title.innerText = 'Ambilight TVs:';
    title.style.color = 'blck';
    document.getElementById('sold1').appendChild(title);
    tvInfoShow(tvsWithAmbilight(inventory),'sold1', 'red');

});

const buttonSold = document.getElementById('sold');
buttonSold.addEventListener('click',() => {
    const title = document.createElement('h3');
    title.innerText = 'Uitverkochte exemplaren:';
    title.style.color = 'black';
    document.getElementById('sold1').appendChild(title);
    tvInfoShow(soldTvs(inventory),'sold1', 'green') ;
});
