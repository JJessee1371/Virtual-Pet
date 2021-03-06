//Pet constructor supertype
 function Pet() {
    constructor = Pet
};

Pet.prototype = {
    increaseAge: function() {
        this.age++;
        console.log(`Happy birthday to me! I am ${this.age} years old today!`);
    },

    feed: function() {
        if(this.hungry) {
            console.log('Nom nom nom. That was delicious! I could use a nap now.');
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log('No thanks! I\'m still full. Can we play?');
        }
    },

    play: function() {
        if(this.bored) {
            console.log('Hurray! Let\'s play!!');
            this.bored = false;
            this.hungry = true;
        } else {
            console.log('Not right now, maybe later?');
        }
    },

    goOutside: function() {
        if(this.outside) {
            console.log('I\'m confused, we are already outside!');
        } else {
            console.log('Yes! I love the outdoors!');
            this.outisde = true;
        }
    },

    goInside: function() {
        if(this.outside) {
            console.log('Do we have to? Okay..');
            this.outside = false;
        } else {
            console.log('But we are already inside!');
        }
    },

    destroyFurniture: function() {
        if(houseCondition > 0) {
            this.houseCondition - 10;
            this.bored = false;
            console.log('Don\'t worry human, I took care of that pesky furniture for you!');
        } else {
            console.log('Looks like it\'s time to get some new things for me to destroy');
        }
    },

    buyFurniture: function() {
        this.houseCondition + 50;
        console.log('My arch nemesis has returned...');
    }
};

//Each of these construcotrs is a subtype of Pet and inherits its prototype
//Dog constructor
function Dog(name) {
    constructor = Dog,
    this.name = name;
    this.hungry = false,
    this.bored = true,
    this.age = 1,
    this.outside = false,
    this.sleepy = false, 
    this.houseCondition = 100
};

Dog.prototype = Object.create(Pet.prototype);
Dog.prototype.speak = function() {
    console.log('Woof woof!');
};

//Cat constructor
function Cat(name) {
    constructor = Cat,
    this.name = name;
    this.hungry = false,
    this.bored = true,
    this.age = 1,
    this.outside = false,
    this.sleepy = false, 
    this.houseCondition = 100
};

Cat.prototype = Object.create(Pet.prototype);
Cat.prototype.speak = function() {
    console.log('Meow meow!');
};

//Bird constructor
function Bird(name) {
    constructor = Bird,
    this.name = name;
    this.hungry = false,
    this.bored = true,
    this.age = 1,
    this.outside = false,
    this.sleepy = false, 
    this.houseCondition = 100
};

Bird.prototype = Object.create(Pet.prototype);
Bird.prototype.speak = function() {
    console.log(`${this.name} want a cracker!`);
};

let dog = document.getElementById('dog-check');
let cat = document.getElementById('cat-check');
let bird = document.getElementById('bird-check');

//Form submission function
function formSubmit() {
    let name = document.getElementById('pet-name').value;

    if(dog.checked) {
        let userDog = new Dog(name);
        console.log(userDog);
    } else if(cat.checked) {
        let userCat = new Cat(name);
        console.log(userCat);
    } else if(bird.checked) {
        let userBird = new Bird(name);
        console.log(userBird);
    }
};