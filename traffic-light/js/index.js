// DECLARATION
const divFeuRougeTag = document.createElement('div');
const divFeuOrangeTag = document.createElement('div');
const divFeuVertTag = document.createElement('div');
// CONFIGURATION
divFeuRougeTag.className = 'rouge';
divFeuOrangeTag.className = 'orange';
divFeuVertTag.className = 'vert';
// IMBRICATION
document.querySelector('#feu').appendChild(divFeuRougeTag);
document.querySelector('#feu').appendChild(divFeuOrangeTag);
document.querySelector('#feu').appendChild(divFeuVertTag);

let t; // Déclaration variable t

// PARAMETRAGE DES FEUX AVEC CHANGEMENT TOUTES LES 3 SECONDES
const feuVert = function startFeuVert() {
    divFeuRougeTag.style.background='gray';
    divFeuOrangeTag.style.background='gray';
    divFeuVertTag.style.background='green';
    t = setTimeout(feuOrange, 3000); //Récupération du setTimeout
}
const feuOrange = function startFeuOrange() {
    divFeuOrangeTag.style.background='orange';
    divFeuVertTag.style.background='gray';
    setTimeout(feuRouge, 3000);
}
const feuRouge = function startFeuRouge() {
    divFeuRougeTag.style.background='red';
    divFeuOrangeTag.style.background='gray';
    setTimeout(feuVert, 3000);
}
// LANCEMENT DU FEU VERT
feuVert();

// RECUPERATION DU BOUTON PIETON
let bt = document.querySelector('button');
// FONCTION POUR ACCELERER LE PASSAGE AU FEU ORANGE
function appelPieton() {
    if ( divFeuVertTag.style.background=='green'){
        clearTimeout(t); //Remise à zéro du setTimeout récupéré
        setTimeout(feuOrange, 1000); //Passage au orange en 1 seconde
    }
}
// APPEL DE LA FONCTION APPEL PIETON SUR CLICK DU BOUTON
bt.addEventListener('click', appelPieton);



