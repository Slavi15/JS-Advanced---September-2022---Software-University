function generateReport() {
    const tableData = Array.from(document.querySelectorAll('tbody tr'));
    const tHeaders = Array.from(document.querySelectorAll('input[type=checkbox]'));
    const output = document.getElementById('output');
    let data = [];

    tHeaders.forEach((th, thIndex) => {
        if (th.checked) {
            if (data.length === 0) {
                tableData.forEach((el, index) => {
                    let obj = {};
                    let key = tHeaders[thIndex].name;
                    let value = Array.from(el.children)[thIndex].textContent;
                    obj[key] = value;
                    data.push(obj);
                });
            } else {
                tableData.forEach((el, index) => {
                    let key = tHeaders[thIndex].name;
                    let value = Array.from(el.children)[thIndex].textContent;
                    data[index][key] = value;
                });
            };
        };
    });

    output.value = JSON.stringify(data, null, 2);
};