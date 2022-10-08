function juiceFlavors(arr) {
    const data = arr.map(item => item.split(' => '));
    const map = new Map();
    const leftMap = new Map();

    data.forEach(([juice, qty]) => {
        if (qty >= 1000 || map.has(juice)) {
            if (!map.has(juice)) {
                map.set(juice, {
                    qty: Number(qty)
                });
            } else {
                map.get(juice).qty += Number(qty);
            };
        } else {
            if (!leftMap.has(juice)) {
                leftMap.set(juice, {
                    qty: Number(qty)
                });
            } else {
                leftMap.get(juice).qty += Number(qty);
                if (leftMap.get(juice).qty >= 1000) {
                    map.set(juice, {
                        qty: leftMap.get(juice).qty
                    });
                };
            };
        };
    });

    for (let kvp of map) {
        kvp[1].qty = Math.floor(kvp[1].qty / 1000);
        if (kvp[1].qty > 0) {
            console.log(`${kvp[0]} => ${kvp[1].qty}`);
        };
    };
};

juiceFlavors(['Orange => 2000',
                'Peach => 1432',
                'Banana => 450',
                'Peach => 600',
                'Strawberry => 549']);
juiceFlavors(['Kiwi => 234',
                'Pear => 2345',
                'Watermelon => 3456',
                'Kiwi => 4567',
                'Pear => 5678',
                'Watermelon => 6789']);