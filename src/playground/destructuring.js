//
//object destructuring
//

const person = {
  name: 'Andrew',
  age: 27,
  location: {
    city: 'Philadelphia',
    temp: 88
  }
};

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

//
//array destructuring 
//

const address = ['1233 sunddhara ganapathy street', 'ammapet', 'salem', '636003'];

const [ , localArea, city = 'Coimbatore'] = address;

console.log(`you live in ${localArea} in ${city}`)