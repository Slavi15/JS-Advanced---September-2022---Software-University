function filterEmployees(data, criteria) {
    const parseData = JSON.parse(data);
    const [key, value] = criteria.split('-');

    if (key === 'all' || value === 'all') {
        parseData.forEach((el, index) => {
            console.log(`${index}. ${el.first_name} ${el.last_name} - ${el.email}`);
        });
    } else {
        parseData.filter(item => item[key] === value)
            .forEach((el, index) => {
                console.log(`${index}. ${el.first_name} ${el.last_name} - ${el.email}`);
            });
    };
};

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
}]`,
'gender-Female');
filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
    }, 
    {
    "id": "2", 
    "first_name": "Kizzee", 
    "last_name": "Johnson", 
    "email": "kjost1@forbes.com", 
    "gender": "Female" 
    }, 
    { 
    "id": "3", 
    "first_name": "Evanne", 
    "last_name": "Maldin", 
    "email": "emaldin2@hostgator.com", 
    "gender": "Male" 
    }, 
    { 
    "id": "4", 
    "first_name": "Evanne", 
    "last_name": "Johnson", 
    "email": "ev2@hostgator.com", 
    "gender": "Male" 
}]`, 
'last_name-Johnson');