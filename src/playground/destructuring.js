// OBJECT DESTRUCTURING

const person = {
    name: 'Daniel',
    age: 34,
    location: {
        city: 'Eindhoven',
        temp: 20
    }
};

// changing the name of the variable and giving it a default value
const { name: firstName = 'Defaultescu', age } = person;

console.log(`${name} is ${age}.`);

const { city, temp } = person.location;

if (city && temp) {
    console.log(`It is ${temp} in ${city}.`);
}

// ARRAY DESTRUCTURING

const address = ['174 Pastoor', 'Eindhoven', 'Brabant', '5612LW'];

const [, theCity, state] = address;

console.log(`You are in ${theCity} ${state}.`);
