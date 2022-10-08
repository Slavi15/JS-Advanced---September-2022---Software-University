function jsonToHTMLTable(str) {
    const jsonData = JSON.parse(str);
    const columnKeys = Object.keys(jsonData[0]);
    const values = jsonData.map(obj => Object.values(obj));

    let result = '<table>\n';

    result += '   <tr>';
    for (let key of columnKeys) {
        result += `<th>${escapeValue(key.toString())}</th>`;
    };
    result += '</tr>\n';

    for (let value of values) {
        result += '   <tr>';
        value.forEach(val => {
            result += `<td>${escapeValue(val.toString())}</td>`;
        });
        result += '</tr>\n';
    };

    result += '</table>';

    function escapeValue(value) {
        return value.replace('<', '&lt;').replace('>', '&gt;');
    };

    console.log(result);
};

jsonToHTMLTable(`[{"Name":"Stamat",
                    "Score":5.5},
                    {"Name":"Rumen",
                    "Score":6}]`);
jsonToHTMLTable(`[{"Name":"Pesho",
                    "Score":4,
                    " Grade":8},
                    {"Name":"Gosho",
                    "Score":5,
                    " Grade":8},
                    {"Name":"Angel",
                    "Score":5.50,
                    " Grade":10}]`);