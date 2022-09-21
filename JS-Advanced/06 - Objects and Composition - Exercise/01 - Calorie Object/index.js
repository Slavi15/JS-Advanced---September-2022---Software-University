function calorieObject(arr) {
    let object = {};

    for (let i = 0; i < arr.length; i += 2) {
        object[arr[i]] = Number(arr[i + 1]);
    };

    console.log(object);
};

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);