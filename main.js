//JSNACK BLOCCO 4

//JSnack 1A

//Creiamo un oggetto palla e gli assegnamo un nome e un peso

// var palla = {
//     "nome": 'palla',
//     "peso": 10
// }

//JSnack 1B

//Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

// var nuovoPeso = Number(prompt("Inserisci il peso della palla"));
// palla['peso'] = nuovoPeso;
// console.log(palla);

//JSnack 2

//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con 
//le seguenti proprietà: nome e peso. 
//Stampare a schermo la bici con peso minore.

// var bici = [
// {
//     'nome': 'bianchi',
//     'peso': 3250
// },
// {
//     'nome': 'adriatica',
//     'peso': 2500
// },
// {
//     'nome': 'ragno',
//     'peso': 4500
// },
// {
//     'nome': 'tuono',
//     'peso': 3500
// },
// {
//     'nome': 'conalgo',
//     'peso': 3780
// }
// ];

// var pesoBici = 0;
// var nomeBici = "";
// var nome = "";
// var min = bici[0]['peso'];

// for(var i=0; i < bici.length; i++){
//     pesoBici = bici[i]['peso'];
//     nomeBici = bici[i]['nome'];
//     if(min > pesoBici){
//         min = pesoBici;
//         nome = nomeBici;
//     }
// }

// console.log("La bici più leggera pesa " + min + " ed è la " + nome);

//JSnack 3

//Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area.
//(ripassiamo il Teorema di Pitagora ;D )

// var triangolo = {
//     'base' : 3,
//     'altezza' : 4
// }
// var ipotenusa = Math.sqrt(triangolo['base']**2 + triangolo['altezza']**2);
// console.log("ipotenusa " + ipotenusa);
// triangolo['ipotenusa'] = ipotenusa;

// var perimetro = triangolo['base'] + triangolo['altezza'] + triangolo['ipotenusa'];
// console.log("perimetro " + perimetro);

// var area = (triangolo['base'] * triangolo['altezza'])/2;
// console.log("area " + area);

//JSnack4A

//Creare un array di oggetti di squadre di calcio. 
//Ogni squadra avrà diverse proprietà: 
//nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// var squadre = [
//     {
//      'nome' : 'Juventus',
//      'punti' : 0,
//      'falli' : 0   
//     },
//     {
//      'nome' : 'Milan',
//      'punti' : 0,
//      'falli' : 0   
//     },
//     {
//      'nome' : 'Inter',
//      'punti' : 0,
//      'falli' : 0   
//     },
//     {
//      'nome' : 'Parma',
//      'punti' : 0,
//      'falli' : 0   
//     },
//     {
//      'nome' : 'Chievo',
//      'punti' : 0,
//      'falli' : 0   
//     }
// ];

// // JSnack 4B
// //Generare numeri random al posto degli 0 nelle proprietà:
// //punti fatti e falli subiti
// for(var i = 0; i<squadre.length; i++){
//     squadre[i]['punti'] = random(100, 1000);
//     squadre[i]['falli'] = random(20, 60);
// }

// function random(min, max){
//     var randomNum = Math.floor(Math.random()*(max - min)) + min;
//     return randomNum
// }
// console.log(squadre);

// /JSNACK BLOCCO 4 ***********************************************

//JSNACK BLOCCO 5

//JSnack 1
// Crea 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// class Zucchina{
//     constructor(tipo, peso, lunghezza){
//       this.tipo = tipo,
//       this.peso = peso,
//       this.lunghezza = lunghezza
//     }
// }

// var zucchine = [
//     new Zucchina("nera di Milano", 0, 0),
//     new Zucchina("romanesco", 0, 0),
//     new Zucchina("fiorentina", 0, 0),
//     new Zucchina("siciliano", 0, 0),
//     new Zucchina("napoletana", 0, 0),
//     new Zucchina("triestina", 0, 0),
//     new Zucchina("pugliese", 0, 0),
//     new Zucchina("faentina", 0, 0),
//     new Zucchina("piacentina", 0, 0),
//     new Zucchina("tonda di Nizza", 0, 0),
// ];

// var pesoTot = 0;
// for (var index = 0; index < zucchine.length; index++) {
//     zucchine[index]['peso'] = randomNum(200, 100);
//     zucchine[index]['lunghezza'] = randomNum(40, 15);    
//     pesoTot += zucchine[index]['peso']; 
// }

// function randomNum(max, min){
//     return number = Math.floor(Math.random()*(max - min)) + min;
// }

// console.log('Il peso di tutte le zucchine è: ' + pesoTot + 'g');

//JSnack 2
// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)

// function mirror(string) {
// var mirrorWord = "";
//     for(var i=string.length-1; i >= 0; i--){
//         mirrorWord += string[i]
//     }
//     return mirrorWord;
// }

// var word = prompt("Inserisci una parola");
// alert("Ecco il risultato invertendo l'ordine delle lettere: " + mirror(word));

//JSnack 3
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine

// class Zucchina{
//     constructor(tipo, peso, lunghezza){
//       this.tipo = tipo,
//       this.peso = peso,
//       this.lunghezza = lunghezza
//     }
// }

// var zucchine = [
//     new Zucchina("nera di Milano", 0, 0),
//     new Zucchina("romanesco", 0, 0),
//     new Zucchina("fiorentina", 0, 0),
//     new Zucchina("siciliano", 0, 0),
//     new Zucchina("napoletana", 0, 0),
//     new Zucchina("triestina", 0, 0),
//     new Zucchina("pugliese", 0, 0),
//     new Zucchina("faentina", 0, 0),
//     new Zucchina("piacentina", 0, 0),
//     new Zucchina("tonda di Nizza", 0, 0),
// ];

// var corte = [];
// var lunghe = [];
// var pesoCorte = 0;
// var pesoLunghe = 0;
// var pesoTot = 0;

// for (var index = 0; index < zucchine.length; index++) {
//     zucchine[index]['peso'] = randomNum(200, 100);
//     zucchine[index]['lunghezza'] = randomNum(30, 10);    
//     if(zucchine[index]['lunghezza'] > 15){
//         lunghe.push(zucchine[index]);
//         pesoLunghe += zucchine[index]['peso']
//     }
//     else{
//         corte.push(zucchine[index]);
//         pesoCorte += zucchine[index]['peso']
//     }
    
//     pesoTot += zucchine[index]['peso'];
// }

// console.log("Il peso di tutte le zucchine > 15 cm è: " + pesoLunghe);
// console.log("Il peso di tutte le zucchine <= 15 cm è" + pesoCorte);
// //console.log(pesoLunghe+pesoCorte);
// //console.log(pesoTot);

// function randomNum(max, min){
//     return number = Math.floor(Math.random()*(max - min)) + min;
// }

// JSnack 4
// Scrivi una funzione che fonda due array (con lo stesso
//     numero di elementi) prendendo alternativamente gli
//     elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// var numeri = [0,1,2,3,4,5,6,7,8,9];
// var lettere = ['a','b','c','d','e','f','g','h','i','l'];

// function mix(array1, array2){
//     var mix = [];
//     var j = 0;
//     for(var i = 0; i < numeri.length; i++){
//         j = 2*i;
//         mix[j] = numeri[i];
//         mix[j+1] = lettere[i];
//     }
//     return mix;
// }

// console.log(mix(numeri, lettere));

// JSnack 5
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”

/**Genera un lista di valori casuali di valore compreso tra min e max, di lunghezza length.
 * 
 * @param min {*valore più piccolo da inserire}  
 * @param max {*valore più grande da inserire} 
 * @param length {*lunghezza dell'array}
 */
function list(min, max, length) {
    var array = [];
    for (var i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random()*(max - min)) + min;
    }
    return array;    
  }

/**Accetta un array di cui resistuisce il contenuto tra gli indici a e b.
 * 
 * @param a {*indice minore di b} 
 * @param b {*indice maggiore di a e minore uguale alla lunghezza di array} 
 * @param array {*array} 
 */
function trim(a, b, array){
    //Impedisco l'inserimento di valori dell'indice b più grandi della dimensione delll'array.
    if(b > array.length){
        b = array.length;
    }
    var i = 0;
    var trimArray = [];
    while(i < array.length){
        if(i < a || i > b){
            trimArray[i] = 0; 
        }
        else{
            trimArray[i] = array[i]; 
        }
        i++;
    }
    return trimArray;
}

console.log(trim(3,25, list(10, 100, 30)));
