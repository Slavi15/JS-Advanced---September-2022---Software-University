function searchList() {
    const towns = document.getElementsByTagName('li');
    const inputValue = document.getElementById('searchText').value;

    const validTowns = Array.from(towns).filter(el => el.textContent.match(inputValue));
    Array.from(towns, (town) => {
        if (town.textContent.match(inputValue) !== null) {
            town.style.fontWeight = 'bold';
            town.style.textDecorationLine = 'underline';
        };
    });

    document.getElementById('result').textContent = `${validTowns.length} matches found`;
};