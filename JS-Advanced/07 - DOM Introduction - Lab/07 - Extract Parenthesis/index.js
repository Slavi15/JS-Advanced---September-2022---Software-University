function extractParenthesis(elementId) {
    const regex = new RegExp(/(?<stringMatch>\([a-zA-Z0-9\s]+\))/, 'g');
    const result = document.getElementById(elementId).textContent.match(regex);
    let finalArray = new Array();

    for (let item of result) {
        finalArray.push(item.slice(1, item.length - 1));
    };

    return finalArray.join('; ');
};