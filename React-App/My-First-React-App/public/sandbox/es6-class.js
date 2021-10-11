class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old!`;
    }

    getGreeting() {
        return `Hi! I am ${this.name}.`;
    }
}

class Student extends Person {

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            return description + ` and has Major in ${this.major}`
        } else {
            return description;
        }

    }
}

class Traveller extends Person {
    constructor(name, location) {
        super(name);
        this.location = location;
    }

    hasLocation() {
        return !!this.location;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.location) {
            return greeting + ` and I am visiting from ${this.location}`;
        } else {
            return greeting;
        }
    }
}

const personAbi = new Student('Abishek Dinesh', 19, 'Computer Science');
console.log(personAbi.getDescription());

const personAnon = new Student();
console.log(personAnon.getDescription());

const stuAchu = new Student('Anurag Dinesh', 17, 'Electronics and Communication');
console.log(stuAchu.getDescription());

const travellerAbi = new Traveller('Abishek Dinesh','Goa');
console.log(travellerAbi.getGreeting());

const travellerAchu = new Traveller();
console.log(travellerAchu.getGreeting());