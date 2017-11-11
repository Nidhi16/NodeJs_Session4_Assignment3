// Creating Animal Constructor
function Animal(name) {
    this.type = "Mammal";       // setting type property to Mammal
    this.name = name;          // Setting name property
}

// Setting getName property
Animal.prototype.getName = function() {
    return this.name;
};

// creating animal object
var animal = new Animal('Animal Name');

// Creating Rabbit Constructor
function Rabbit(breed) {
    this.breed = breed;
}

// Inheriting Animal property using __proto__
Rabbit.prototype.__proto__ = animal;

// Creating rabbit object
var rabbit = new Rabbit('Holland Lop');

// Display rabbit object
console.log(rabbit);

// Change name property of rabbit object 
rabbit.name = "snowy";

// Display properties
console.log("Rabbit's name: " + rabbit.getName() + ", " + "Rabbit's type: " + rabbit.type + ", " + "Rabbit's breed: " + rabbit.breed);
alert("Rabbit's name: " + rabbit.getName() + ", " + "Rabbit's type: " + rabbit.type + ", " + "Rabbit's breed: " + rabbit.breed);