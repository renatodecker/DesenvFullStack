// Array - Métodos

a = ['a','b','c','d','e'];

console.log(a.toString());

let a3 = a.slice(1); //a[1], a[2]
let a4 = a.slice(0,2); //a[0], a[1]

console.log(a3 + " - " + a4);

a.forEach(function(item,index){
    console.log(`${item} na posição ${index}`);
});
