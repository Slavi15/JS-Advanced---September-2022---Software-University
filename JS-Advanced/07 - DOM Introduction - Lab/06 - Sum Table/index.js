function sumTable() {
    let result = 0;
    const table = document.getElementsByTagName('table')[0];
    Array.from(table.rows, (tr) => {
        Array.from(tr.cells, (td, cellIndex) => {
            if (cellIndex === 1 && td.textContent !== '' && td.textContent !== 'Cost') {
                result += Number(td.textContent);
            };
        });
    });
    document.getElementById('sum').textContent = result;
};