function addFunction(num) {
    return function(n) {
        return num + n;
    };
};

let add5 = addFunction(5);
console.log(add5(2));
console.log(add5(3));

let add7 = addFunction(7);
console.log(add7(2));
console.log(add7(3));