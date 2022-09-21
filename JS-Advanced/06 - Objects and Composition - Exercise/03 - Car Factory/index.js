function carFactory(obj) {
    let volume = 0;
    let wheelArray = null;

    if (obj.power <= 90) {
        obj.power = 90;
        volume = 1800;
    } else if (obj.power > 90 && obj.power <= 120) {
        obj.power = 120;
        volume = 2400;
    } else if (obj.power > 120 && obj.power <= 200) {
        obj.power = 200;
        volume = 3500;
    };

    if (obj.wheelsize % 2 === 0) {
        let size = obj.wheelsize - 1;
        wheelArray = new Array(4).fill(size);
    } else {
        wheelArray = new Array(4).fill(obj.wheelsize);
    };

    return {
        model: obj.model,
        engine: {
            power: obj.power,
            volume: volume
        },
        carriage: {
            type: obj.carriage,
            color: obj.color
        },
        wheels: wheelArray
    };
};

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));