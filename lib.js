let user = {
  name : "Mirco",
  "nome" : "Mara",
  "cognome" : "Terzi",
  4 : "quattro",
  "buon giorno" : "salve"
};
console.log(user.name);
console.log(user.nome);
//console.log(user.4); //errore
console.log(user[4]);
//console.log(user.buon giorno); //errore
console.log(user["buon giorno"]);

let cogn = "cognome";
console.log(user[cogn]);
// come scrivere
console.log(user["cognome"]);


function User(name, altezza){
  this.name = name;
  this.altezza = altezza;
  this.pesoIdeale = function(){
    return `Peso ideale ${this.calcolaPesoIdeale()}`;
  }
  this.calcolaPesoIdeale = function(){
    return altezza - 100 * 0.95;
  }
}
User.prototype.type = "Utente standard";

let user1 = new User("Simone",175);
console.log(user1.calcolaPesoIdeale());
console.log(user1.pesoIdeale());

//peso ideale ora è let e non è accessibile dall'esterno
function Utente(name, altezza){
  let privata = "Info privata";
  this.name = name;
  this.altezza = altezza;
  this.pesoIdeale = function(){
    return `Peso ideale ${calcolaPesoIdeale()}`; //non serve più il this
  }
  let calcolaPesoIdeale = function(){
    return altezza - 100 * 0.95;
  }
}
let utente1 = new Utente("Mara", 170);
//console.log(utente1.calcolaPesoIdeale()); //errore
//console.log(utente1.privata); //errore
console.log(utente1.pesoIdeale());
