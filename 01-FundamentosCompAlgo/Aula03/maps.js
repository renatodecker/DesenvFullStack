

/* const contacts = new Map();

contacts.set('Jessie', {phone: "123-456-789", adress: "123 N 1st Ave"})

console.log(contacts.has('Jessie'));

console.log(contacts.get("Hilary"));
contacts.set('Hilary', {phone: "987-654-321", adress: "321 N 2nd Ave"});

console.log(contacts.get("Hilary"));

contacts.delete("Jessie");

console.log(contacts.has('Jessie'));
 */

const myMap = new Map();

myMap.set(0, 'Zero');
myMap.set(1, 'One');
myMap.set(1, 'One');

for (const[key,value] of myMap){
    console.log(key + ' = ' + value);
}

for (const key of myMap.keys()){
    console.log(key);
}

for (const value of myMap.values()){
    console.log(value);
}

for (const[key,value] of myMap.entries()){
    console.log(key + ' = ' + value);
}
