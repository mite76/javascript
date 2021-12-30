function User(){

}

User.prototype.p1 = 10;
User.prototype.p2 = function(x){
  return x**2;
}

let user1 = new User();
let user2 = new User();
let user3 = User();

console.log(user1);
console.log(user1.p1);
console.log(user1.p2(4));
console.log(user2);
console.log(user3);

function User1(){
 this.name = "";
 this.age = null;
 //this.type = "Utente standard";
}

User1.prototype.type = "Utente standard";

let user_1 = new User1();
let user_2 = new User1();

console.log(user_1);
console.log(user_1.type);
console.log(user_2);
console.log(user_2.type);

user_1.name = "Mirco";
user_2.name = "Mara";
console.log(user_1.name);
console.log(user_2.name);
