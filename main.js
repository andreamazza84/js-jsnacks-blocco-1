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

class Zucchina{
    constructor(tipo, peso, lunghezza){
      this.tipo = tipo,
      this.peso = peso,
      this.lunghezza = lunghezza
    }
}

var zucchine = [
    new Zucchina("nera di Milano", 0, 0),
    new Zucchina("romanesco", 0, 0),
    new Zucchina("fiorentina", 0, 0),
    new Zucchina("siciliano", 0, 0),
    new Zucchina("napoletana", 0, 0),
    new Zucchina("triestina", 0, 0),
    new Zucchina("pugliese", 0, 0),
    new Zucchina("faentina", 0, 0),
    new Zucchina("piacentina", 0, 0),
    new Zucchina("tonda di Nizza", 0, 0),
];

var pesoTot = 0;
for (var index = 0; index < zucchine.length; index++) {
    zucchine[index]['peso'] = randomNum(200, 100);
    zucchine[index]['lunghezza'] = randomNum(40, 15);    
    pesoTot += zucchine[index]['peso'] = randomNum(200, 100); 
}

function randomNum(max, min){
    return number = Math.floor(Math.random()*(max - min)) + min;
}

console.log('Il peso di tutte le zucchine è: ' + pesoTot + 'g');