class CarDealership {
    constructor(name, availableCars = [], soldCars = [], totalIncome = 0) {
        this.name = name;
        this.availableCars = availableCars;
        this.soldCars = soldCars;
        this.totalIncome = totalIncome;
    };

    addCar(model, horsepower, price, mileage) {
        if (model === '' || horsepower < 0 || price < 0 || !Number.isInteger(price) || mileage < 0) throw new Error('Invalid input!');

        this.availableCars.push({
            model: model,
            horsepower: Number(horsepower),
            price: Number(price),
            mileage: Number(mileage)
        });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    };

    sellCar(model, desiredMileage) {
        const foundIndex = this.availableCars.findIndex(car => car.model === model);

        if (foundIndex === -1) throw new Error(`${model} was not found!`);

        if (this.availableCars[foundIndex].mileage > desiredMileage) {
            const diff = Math.abs(this.availableCars[foundIndex].mileage - desiredMileage);
            if (diff <= 40000) {
                this.availableCars[foundIndex].price -= (this.availableCars[foundIndex].price * 0.05);
            } else {
                this.availableCars[foundIndex].price -= (this.availableCars[foundIndex].price * 0.1);
            };
        };

        this.soldCars.push({
            model: model,
            horsepower: Number(this.availableCars[foundIndex].horsepower),
            soldPrice: Number(this.availableCars[foundIndex].price)
        });
        this.totalIncome += this.availableCars[foundIndex].price;

        this.availableCars.splice(foundIndex, 1);
        const soldIndex = this.soldCars.findIndex(car => car.model === model);
        return `${model} was sold for ${this.soldCars[soldIndex].soldPrice.toFixed(2)}$`;
    };

    currentCar() {
        if (this.availableCars.length > 0) {
            let output = [];
            output.push('-Available cars:');
            this.availableCars.forEach(car => {
                output.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
            });
            return output.join('\n');
        };
        return 'There are no available cars';
    };

    salesReport(criteria) {
        if (criteria !== 'horsepower' && criteria !== 'model') throw new Error('Invalid criteria!');

        let output = [];
        if (criteria === 'horsepower') {
            const sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
            output.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
            output.push(`-${this.soldCars.length} cars sold:`);
            sorted.forEach(car => {
                output.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`);
            });
        } else if (criteria === 'model') {
            const sorted = this.soldCars.sort((a, b) => a['model'].localeCompare(b['model']));
            output.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
            output.push(`-${this.soldCars.length} cars sold:`);
            sorted.forEach(car => {
                output.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`);
            });
        };

        return output.join('\n');
    };
};

let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('', 120, 4900, 240000));

let dealershipTwo = new CarDealership('SoftAuto');
dealershipTwo.addCar('Toyota Corolla', 100, 3500, 190000);
dealershipTwo.addCar('Mercedes C63', 300, 29000, 187000);
dealershipTwo.addCar('Audi A3', 120, 4900, 240000);
console.log(dealershipTwo.sellCar('Toyota Corolla', 230000));
console.log(dealershipTwo.sellCar('Mercedes C63', 110000));

let dealershipThree = new CarDealership('SoftAuto');
dealershipThree.addCar('Toyota Corolla', 100, 3500, 190000);
dealershipThree.addCar('Mercedes C63', 300, 29000, 187000);
dealershipThree.addCar('Audi A3', 120, 4900, 240000);
console.log(dealershipThree.currentCar());

let dealershipFour = new CarDealership('SoftAuto');
dealershipFour.addCar('Toyota Corolla', 100, 3500, 190000);
dealershipFour.addCar('Mercedes C63', 300, 29000, 187000);
dealershipFour.addCar('Audi A3', 120, 4900, 240000);
dealershipFour.sellCar('Toyota Corolla', 230000);
dealershipFour.sellCar('Mercedes C63', 110000);
console.log(dealershipFour.salesReport('horsepower'));