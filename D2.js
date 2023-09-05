/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const number1 = [5, 6]

if (number1[0] > number1[1]) {
  console.log('non è maggiore')
} else {
  console.log('è maggiore')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const number2 = 8
if (number2 !== 5) {
  console.log('not equal')
} else {
  console.log('equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const number3 = 10
if (number3 % 5 === 0) {
  console.log('è divisibile per 5')
} else {
  console.log('NON è divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const number4 = [5, 3]
if (number4[0] === 8 || number4[1] === 8 || number4[0] + number4[1] === 8) {
  console.log('uno dei due numeri è 8 oppure la loro somma fa 8')
} else {
  console.log('nessuno dei due numeri è 8 e neanche la loro somma fa 8 ')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 51
let shippingCost = 10
let totalSpending = totalShoppingCart + shippingCost
if (totalShoppingCart > 50) {
  console.log('Perfetto, hai diritto alla spedizione gratuita')
} else {
  console.log('Questo il totale che ti verrà addebitato' + ' ' + totalSpending)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let discount = totalShoppingCart * 0.2
let discountedPrice = totalShoppingCart - discount
let discountTotalShoppingCart = discountedPrice + shippingCost
if (discountedPrice > 50) {
  console.log('Perfetto, hai diritto alla spedizione gratuita')
} else {
  console.log(
    'Questo il totale che ti verrà addebitato' + ' ' + discountTotalShoppingCart
  )
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number5 = [7, 2, 5]
console.log("Prima dell'ordine crescente" + ' ' + number5)
number4.sort()
console.log("Dopo dell'ordine crescente" + ' ' + number5)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const number6 = 5
if (typeof number6 === 'number') {
  console.log('è un numero')
} else {
  console.log('NON è un numero')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const number7 = 9

if (number6 % 2 === 0) {
  console.log(number7 + ' ' + 'è pari')
} else {
  console.log(number7 + ' ' + 'è dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
if (val < 10 && val > 5) {
  console.log('Meno di 10')
} else if (val < 5) {
  console.log('Meno di 5')
} else if (val === 5) {
  console.log('Uguale a 5')
} else {
  console.log('Uguale a 10 o maggiore')
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = 'Troronto'

console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName

console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()

console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numbers1 = []

console.log(numbers1)

numbers1.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(numbers1)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number = 100
numbers1[numbers1.length - 1] = number
console.log(numbers1)
