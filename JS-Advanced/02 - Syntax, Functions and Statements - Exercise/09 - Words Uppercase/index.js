function wordsUpperCase(str) {
    const regex = /(?<string>\w+)/g;
    const result = [...str.matchAll(regex)];

    let array = [];
    for (let item of result) {
        array.push(item[0].toUpperCase());
    };
    console.log(array.join(', '));
};

wordsUpperCase('Hi, how are you?');
wordsUpperCase('hello');