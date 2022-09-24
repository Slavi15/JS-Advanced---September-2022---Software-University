function collectList() {
    const items = document.getElementsByTagName('li');

    for (let item of items) {
        document.getElementById('result').value += `${item.textContent}\n`;
    };

    // Array.from(items, (item) => {
    //     document.getElementById('result').append(`${item.textContent}\n`);
    // });
};