function commandProcessor() {
    let string = '';
    return {
        append: function (str) {
            string += str;
        },
        removeStart: function (n) {
            string = string.substring(n, string.length);
        },
        removeEnd: function (n) {
            string = string.substring(0, string.length - n);
        },
        print: function () {
            console.log(string);
        }
    };
};

let firstZeroTest = commandProcessor();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = commandProcessor();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();