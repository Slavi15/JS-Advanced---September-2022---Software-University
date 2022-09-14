function roadRadar(speed, area) {
    let status = '';
    let speedLimit = 0;

    switch (area) {
        case 'residential':
            speedLimit = 20;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                const diff = speed - speedLimit;
                if (diff <= 20) {
                    status = 'speeding';
                } else if (diff > 20 && diff <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                };
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            };
            break;
        case 'city':
            speedLimit = 50;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                const diff = speed - speedLimit;
                if (diff <= 20) {
                    status = 'speeding';
                } else if (diff > 20 && diff <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                };
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            };
            break;
        case 'interstate':
            speedLimit = 90;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                const diff = speed - speedLimit;
                if (diff <= 20) {
                    status = 'speeding';
                } else if (diff > 20 && diff <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                };
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            };
            break;
        case 'motorway':
            speedLimit = 130;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                const diff = speed - speedLimit;
                if (diff <= 20) {
                    status = 'speeding';
                } else if (diff > 20 && diff <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                };
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            };
            break;
    }
};

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');