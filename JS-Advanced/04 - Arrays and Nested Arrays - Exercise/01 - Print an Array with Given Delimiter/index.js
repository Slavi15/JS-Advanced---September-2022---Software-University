function printElementGivenDelimiter(arr, str) {
    const result = arr.join(str);
    console.log(result);
};

printElementGivenDelimiter(['One',
                            'Two',
                            'Three',
                            'Four',
                            'Five'],
                            '-');
printElementGivenDelimiter(['How about no?', 
                            'I', 
                            'will', 
                            'not', 
                            'do', 
                            'it!'], 
                            '_');