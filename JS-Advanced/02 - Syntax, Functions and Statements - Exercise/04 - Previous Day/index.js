function previousDay(year, month, day) {
    let dateObject = new Date(year, month - 1, day);
    dateObject.setDate(dateObject.getDate() - 1);

    console.log(`${dateObject.getFullYear()}-${dateObject.getMonth() + 1}-${dateObject.getDate()}`);
};

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);