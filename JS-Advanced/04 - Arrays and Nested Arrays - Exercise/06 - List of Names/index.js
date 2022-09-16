function listOfNames(arr) {
    const sortedArray = arr.sort((a, b) => a.localeCompare(b));
    sortedArray.forEach((item, index) => {
        console.log(`${index + 1}.${item}`);
    });
};

listOfNames(["John",
                "Bob",
                "Christina",
                "Ema"]);