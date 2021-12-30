// let ris = 10+3*2;
// let ris2 = (10+3)*2;
// let ris3 = 10%4 // modulo --> resto
// let ris4 = 2 ** 3;
// //console.log(ris4);
//
// let num1 = 0;
// let num2 = 0;
// //console.log(num1++); //0 incrementa dopo
// //console.log(++num2); //1 incrementa prima
//
// let a = 5;
// let b = 6;
// console.log(`${a} + ${b} è uguale a ${a+b}`); // ALT+96(tastierino numerico)
//
// function descrivimi(nome,cognome){
//   return `Mi chiamo ${nome} ${cognome}`;
// }
//
// console.log(`${descrivimi("Mirco","Terzi")}`);

let a = `prima riga
seconda riga
terza riga`;
console.log(a);

let obj = {
  fn : function saluta(){
    return "Ciao";
  }
};
console.log(obj.fn());

let b = "Limitami a 10 caratteri";
let c = b.substr(0,10);
console.log(c);
