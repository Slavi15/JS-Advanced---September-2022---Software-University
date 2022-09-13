function circleArea(argument) {
    if (typeof argument === 'number') {
        const PI = Math.PI;
        const area = PI * Math.pow(argument, 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`);
    };
};

circleArea(5);
circleArea('name');