function coloriseTable() {
    const table = document.getElementsByTagName('table')[0];
    Array.from(table.rows, (item, index) => {
        if (index % 2 !== 0) {
            item.style.backgroundColor = "teal";
        };
    });
};