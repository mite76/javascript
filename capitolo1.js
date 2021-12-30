/*
let info = document.getElementById("info");
info.style["font-size"] = "24px";
info.textContent = "Realizzato da Mirco. Da zero a esperto";

var anni = 36;
let professione = "Web Developer";
const nome = "Mirco";

anni = 30;
console.log(anni);
professione = "FullStack";
console.log(professione);
nome = "Marco";
console.log(nome);
*/

// const num = 10;
// const nome = "Mirco";
// let isDeveloper = true;
// let nullo = null;
// let und = undefined;
// let sym = Symbol('simbolo');
//
// let casa = {
//   piani : 3,
//   descrizione : "Casa con giardino"
// }
//
// console.log(typeof num);
// console.log(typeof nome);
// console.log(casa.descrizione);
// console.log(typeof null);
// console.log(typeof isDeveloper);
// console.log(typeof casa);
//
// let azione;
// let votoEsame = 18;
//
// if(votoEsame>26){
//   azione = "Fare un viaggio";
// }else{
//   azione="Restare a casa";
// }
//
// console.log(azione);
//
// let votoRicevuto = 4;
// let valutazione;
// switch (votoRicevuto) {
//   case 1: valutazione="pessima"; break;
//   case 2: valutazione="scarsa"; break;
//   case 3: valutazione="media"; break;
//   default : valutazione = "molto buona";
// }
// console.log(valutazione);
//
// var esameSuperato, voto = 22;
// // if(voto>=18){
// //   esameSuperato = true;
// // }else{
// //   esameSuperato = false;
// // }
//
// esameSuperato = (voto >= 18 ? true : false);
// console.log(esameSuperato);

// let i = 0;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);

// for(let i = 0;i<10;i++){
//   if(i==5){
//     //continue;
//     break;
//   }
//   console.log(i);
// }

// let i = 0;
// while(i<10){
//   console.log(i);
//   i++;
// }

// for(let i = 2;i<=10;i=i+2){
//   console.log(i);
// }

// function calcola(numero_1,numero_2){
//   //console.log(numero_1+numero_2);
//   let somma = numero_1+numero_2;
//   return somma;
// }
//
// let numero1 = 10;
// let numero2 = 20;
// let sum;
// sum = calcola(numero1,numero2);
// //console.log(sum);
//
// let casa_indirizzo = "Via vai, 10";
// let casa_piani = 3;
// let casa_mq = 80;
//
// let casa = {
//   indirizzo : "Via vai,11",
//   mq : 90,
//   piano : 3
// };
// //console.log(casa.indirizzo+ " "+casa.mq);
//
// let ferrari = {
//   modello : "458",
//   motore : {
//     cilindrata : 1600,
//     cavalli : 700,
//     coppia_max : 900
//   },
//   descrivimi : function(){
//     return "Ferrari 458 da 700 cavalli";
//   }
// };
// ferrari.colore = "rosso";
// //console.log(ferrari.modello + " "+ferrari.motore.cilindrata);
// //console.log(ferrari.descrivimi()+ " " +ferrari.colore);
//
// let voto_1 = 29;
// let voto_2 = 26;
// let voto_3 = 23;
// let voto_4 = 27;
//
// let voti = [29,26,23,27]
// let numElem = voti.length;
//
// for(let i=0;i<numElem;i++){
//   //console.log(voti[i]);
// }
//
// for(let voto of voti){
//   //console.log(voto);
// }
// //console.log(voti[0]);
// let fiat = [
//   {modello : "Panda",cavalli : 10},
//   {modello : "Uno",cavalli : 12},
//   {modello : "Palio",cavalli : 5}
// ]
//
// for(let tipoFiat of fiat){
//   console.log(tipoFiat.modello+" "+tipoFiat.cavalli);
// }

// windows browser
// console.log(window.innerHeight); //altezza
// console.log(window.innerWidth);  //larghezza
//
// console.log(window.location);  //ha varie proprietà tra cui href
//
// let par = document.getElementById("info"); //info è un elemento di index.html
// par.textContent="Corso javascript";
// par.style.fontSize = "30px";
// console.log(par);
//
// let a = 10.6;
// let b = Math.ceil(a); //superiore
// let c = Math.floor(a); //inferiore
// let d = Math.round(a); //arrotondato
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(Math);
// console.log(Date.now());
// console.log(document);

class PrimaClasse {

}

//console.log(typeof PrimaClasse);

let obj = {
  p1 : "Valore"
};
obj.p2 = "Altro valore";
//console.log(obj.p2);
function test(){ //le funzioni sono oggetti

}

test.dimmiCiao = "Ciao";
console.log(test.dimmiCiao);
