function autoEngineeringCompany(arr) {
    const data = arr.map(item => item.split(' | '));
    const map = new Map();

    data.forEach(([brand, model, producedCars]) => {
        if (!map.has(brand)) {
            let cars = [{
                model: model,
                producedCars: Number(producedCars)
            }];
            map.set(brand, {
                cars: cars
            });
        } else {
            let carsArray = map.get(brand).cars;
            let obj = { model: model, producedCars: producedCars };
            if (carsArray.some(car => car.model === obj.model)) {
                carsArray.map(data => {
                    if (data.model === obj.model) {
                        data.producedCars += Number(producedCars);
                    };
                });
            } else {
                map.get(brand).cars.push({
                    model: model,
                    producedCars: Number(producedCars)
                });
            };
        };
    });

    for (let kvp of map) {
        console.log(kvp[0]);
        for (let {model, producedCars} of kvp[1].cars) {
            console.log(`###${model} -> ${producedCars}`);
        };
    };
};

autoEngineeringCompany([
                        'Audi | Q7 | 1000',
                        'Audi | Q6 | 100',
                        'BMW | X5 | 1000',
                        'BMW | X6 | 100',
                        'Citroen | C4 | 123',
                        'Volga | GAZ-24 | 1000000',
                        'Lada | Niva | 1000000',
                        'Lada | Jigula | 1000000',
                        'Citroen | C4 | 22',
                        'Citroen | C5 | 10'
                    ]);