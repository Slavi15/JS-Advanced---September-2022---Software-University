function sortArrayByTwoCriteria(arr) {
    const sortedArray = arr.sort((a, b) => a.length - b.length
                                    || a.localeCompare(b));
    console.log(sortedArray.join('\n'));
};

sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
sortArrayByTwoCriteria(['Isaac', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);