let calcola = (function(a,b){
 var fattore = 1.2;
 //console.log("Calcola --> "+(a+b) * fattore);
 let ris = (a+b) * fattore;
 //console.log(+ris.toFixed(2));
})(2,4);
// IIFE Immediately invoked function expression

// è come scrivere ovvero definizione ed invocazione
let calcola2 = function(){}
calcola2();

//console.log(fattore); //errore

//CASO INIZIALE
let App = (function(){
  function chat(){

  }
  function startChat(){

  }
  function startChatMobile(){

  }

  return { //{} perché ritorno un oggetto (che in questo caso ha la proprietà init che è una funzione)
    init: function(){
      //console.log("Sei dentro la IIFE");
    }
  }
})();
//console.log(App);
App.init();

//CASO 2
let Chat = (function(){
  function chat(tipo){
    if(tipo=="mobile"){
      startChatMobile();
    }else{
      startChat();
    }
    //console.log(tipo);
  }
  function startChat(){
    console.log("Sto avviando la chat ...");
  }
  function startChatMobile(){
    console.log("Sto avviando la chat mobile ...");
  }

  return { //{} perché ritorno un oggetto (che in questo caso ha la proprietà init che è una funzione)
    init: function(tipo){
      //console.log(tipo);
      chat(tipo)
    }
  }
})();
//console.log(Chat);
Chat.init("pc"); //così riusciamo ad accedere all'oggetto restituito dalla iife
//App2.chat("mobile") //non funziona ,possiamo accedere solo all'oggetto restituito dalla iife
