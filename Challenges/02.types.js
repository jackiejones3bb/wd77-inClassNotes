/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/

let me = {
    name: 'Jackie',
    address: {
        street: '5511 Indermuhle',
        city: 'Plainfield',
        zip: 46168
    },
    age: 45,
    isMarried: true
}

console.log(me);
console.log(me.name);
console.log(me.address);
console.log(me.age);
console.log(me.isMarried);
console.log(typeof me.age);


/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

let me = {
    name: 'Jackie',
    address: {
        street: '5511 Indermuhle',
        city: 'Plainfield',
        zip: 46168
    },
    age: 45,
    isMarried: true

if (typeof me.address == undefined);
console.log('What are you?!');
