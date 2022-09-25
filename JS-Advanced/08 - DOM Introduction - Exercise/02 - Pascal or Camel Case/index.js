function pascalCamelCase() {
    const text = document.getElementById('text').value;
    const nameConvention = document.getElementById('naming-convention').value;
    let words = text.split(' ');
    let result = '';

    if (nameConvention === 'Camel Case') {
        words.forEach((el, index) => {
            if (index === 0) {
                return result += el.toLowerCase();
            };
            return result += el[0].toUpperCase() + el.substring(1).toLowerCase();
        });
    } else if (nameConvention === 'Pascal Case') {
        words.forEach((el) => {
            return result += el[0].toUpperCase() + el.substring(1).toLowerCase();
        });
    } else {
        result += 'Error!';
    };

    document.getElementById('result').textContent = result;
};