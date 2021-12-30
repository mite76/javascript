let fn_c = function(x) {
  return x * Math.PI;
};

//ARROW FUNCTION adatte ad essere callback
let fn_a = (x) => {
  return x * Math.PI;
};

//se ha un solo parametro non serve (x) ma solo x
let fn_a1 = x => {
  return x * Math.PI;
};
//se ritorna una sola riga allora diventa
let fn_a2 = x => x * Math.PI;

console.log(fn_c(10));
console.log(fn_a2(10));

let a = [2,7,10,12,21];
let b = a.filter(function(x){
  return x%2 == 0;
});
console.log(b);

let ris = a.filter(x => x%2 == 0)
console.log(ris);
