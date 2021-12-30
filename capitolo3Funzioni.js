// let fn = function(){
//   console.log("Ciao");
// };
// fn();

function ciao(){
  return "Ciao";
}

function arrivederci(){
  return "Arrivederci";
}

function saluta(salutoFn){
  console.log(`${salutoFn()}`);
}

saluta(ciao);
saluta(arrivederci);
saluta(function(){return "Salve"});
saluta(function Arisalve (){return "Arisalve"});
//Una funzione passata come parametro si chiama callback

let a = [10,20,30,40,50];
let tmp = [];
let lung = a.length;

for(let i = 0; i < lung; i++){
  tmp.push(a.pop());
}

for(let i = 0; i < lung; i++){
  a.push(tmp.shift());
}
console.log(a);

let b = [1,2,3,4,5,6];
console.log(b.reverse());

function test(){
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
test(2,"ciao",true);

function test2(){
  for(let param of arguments){
    console.log(param);
  }
}
test2(3,"ciaone",false,19);


function calcola(a,b){
  console.log(a+b);
}
calcola(10,20,30);

function calcolaRest(...numeri){
  console.log(numeri);
  let somma = 0;
  for(let num of numeri){
    somma += num;
  }
  console.log(somma);
}
calcolaRest(10,20,30,40,50,60);

function calcola1(par1,par2,...numeri){ //FIGATA ...
  console.log(par1);
  console.log(par2);
  console.log(numeri);
}
calcola1(10,15,1,2,3,4,5,6,7)


let arr = [10,15,1,2,3,4,5,6,7];
let minimo = Math.min(...arr); //FIGATA ...
console.log(minimo);

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [...a1,...a2]
console.log(a3);
