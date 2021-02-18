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
            console.log('That was delicious! I could use a nap now.');
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