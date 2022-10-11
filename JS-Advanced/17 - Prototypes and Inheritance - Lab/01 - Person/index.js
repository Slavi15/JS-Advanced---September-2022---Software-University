class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    };

    set fullName(value) {
        const [first, last] = value.split(' ');
        if (first !== undefined && last !== undefined) {
            this.firstName = first;
            this.lastName = last;
        };
    };
};

let personOne = new Person("Peter", "Ivanov");
console.log(personOne.fullName); //Peter Ivanov
personOne.firstName = "George";
console.log(personOne.fullName); //George Ivanov
personOne.lastName = "Peterson";
console.log(personOne.fullName); //George Peterson
personOne.fullName = "Nikola Tesla";
console.log(personOne.firstName); //Nikola
console.log(personOne.lastName); //Tesla

let personTwo = new Person("Albert", "Simpson");
console.log(personTwo.fullName); //Albert Simpson
personTwo.firstName = "Simon";
console.log(personTwo.fullName); //Simon Simpson
personTwo.fullName = "Peter";
console.log(personTwo.firstName); // Simon
console.log(personTwo.lastName); // Simpson