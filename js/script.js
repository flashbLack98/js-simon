/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma. */

"use strict";

const listRandomNumber = [];

const userListNum = [];



for (let i = 0; i < 5; i++) {

    const numRandom = Math.ceil(Math.random() * 100);
    listRandomNumber.push(numRandom);
}

alert(`ricordati questi numeri ${listRandomNumber}`);
console.log(`questa è la lista di num random ${listRandomNumber}`);


setTimeout(myFunction, 30000);

const numIncluded = [];

//--------------------- INIZIO FUNZIONI------------------------//
function myFunction() {
    for (let i = 0; i < 5; i++) {

        const userNum = prompt("quale era il numero?");
        userListNum.push(parseInt(userNum));

        //controllo se ogni numero della lista utente è compreso nella lista random 

        if (listRandomNumber.includes(userListNum[i])) {
            numIncluded.push(userListNum[i]);
        }

    }

    console.log(userListNum);
    console.log(listRandomNumber);


    //se la lunghezza dell'array dei numeri esistenti è 5 hai vinto
    /*   if (numIncluded.length === 5) {
          alert("hai vinto");
      } else {
          alert("hai perso");
      } */


    risultato(numIncluded.length, listRandomNumber.length);
}


function risultato(lunghezzaLista, lunghezzaListaRandom) {
    if (lunghezzaLista === lunghezzaListaRandom) {
        alert(`hai vinto, hai indovinato tutti i numeri che sono ${numIncluded}`);
    } else if (lunghezzaLista !== lunghezzaListaRandom) {
        alert(`hai perso, hai indovinato solo ${lunghezzaLista} numeri, hai indovinato ${numIncluded}`);
    }
}
//--------------------- FINE FUNZIONI------------------------//
