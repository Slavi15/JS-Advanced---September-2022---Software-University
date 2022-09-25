function searchEngine() {
    document.getElementById('searchBtn').addEventListener('click', function() {
        const inputValue = document.getElementById('searchField').value;
        const table = document.getElementsByTagName('tbody');
    
        Array.from(table[0].children, (tr) => {
            Array.from(tr.cells, (td) => {
                if (td.textContent.match(inputValue) !== null && inputValue.length !== 0) {
                    tr.classList.add('select');
                };
            });
        });
    });
};