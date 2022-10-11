function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        };

        toString() {
            if (this.course) {
                return `${this.constructor.name} (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
            } else if (this.subject) {
                return `${this.constructor.name} (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
            } else {
                return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
            };
        };
    };
    
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        };
    };
    
    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        };
    };

    return {
        Person,
        Teacher,
        Student
    };
};

// let toStringFunction = toStringExtension();
// console.log(toStringExtension);