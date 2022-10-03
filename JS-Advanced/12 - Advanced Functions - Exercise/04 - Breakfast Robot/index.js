function breakfastRobot() {
    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function (input) {
        const [command, option, qty] = input.split(' ');
        let actionHandler = cmdOptions();
        return actionHandler[command](option, qty);
    };

    function cmdOptions() {
        return {
            restock: function(element, qty) {
                stock[element] += Number(qty);
                return 'Success';
            },
            prepare: function(recipe, qty) {
                let isDone = true;
                let str = '';
                let copyStore = JSON.parse(JSON.stringify(stock));

                for (let [key, defaultQty] of Object.entries(recipes[recipe])) {
                    let neededValue = Number(qty) * defaultQty;
                    if (stock[key] < neededValue) {
                        isDone = false;
                        str = `Error: not enough ${key} in stock`;
                        break;
                    } else {
                        copyStore[key] -= neededValue;
                    };
                };

                if (!isDone) {
                    return str;
                };

                stock = copyStore;
                return 'Success';
            },
            report: function() {
                return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
            }
        };
    };
};

let manager = breakfastRobot();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

let managerTwo = breakfastRobot();
console.log(managerTwo("prepare turkey 1"));
console.log(managerTwo("restock protein 10"));
console.log(managerTwo("prepare turkey 1"));
console.log(managerTwo("restock carbohydrate 10"));
console.log(managerTwo("prepare turkey 1"));
console.log(managerTwo("restock fat 10"));
console.log(managerTwo("prepare turkey 1"));
console.log(managerTwo("restock flavour 10"));
console.log(managerTwo("prepare turkey 1"));
console.log(managerTwo("report"));