class VegetableStore {
    constructor(owner, location, availableProducts = []) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = availableProducts;
    };

    totalPrice = 0;

    loadingVegetables(vegetables) {
        vegetables.forEach(vegetable => {
            const [type, quantity, price] = vegetable.split(' ');
            const foundIndex = this.availableProducts.findIndex(item => item.type === type);

            if (foundIndex === -1) {
                return this.availableProducts.push({
                    type: type,
                    quantity: Number(quantity),
                    price: Number(price)
                });
            };

            this.availableProducts[foundIndex].quantity += Number(quantity);
            if (this.availableProducts[foundIndex].price < Number(price)) this.availableProducts[foundIndex].price = Number(price);
        });

        let vegArray = [];
        this.availableProducts.forEach(item => vegArray.push(item.type));
        return `Successfully added ${vegArray.join(', ')}`;
    };

    buyingVegetables(selectedProducts) {
        let currentPrice = 0;

        selectedProducts.forEach(product => {
            const [type, quantity] = product.split(' ');
            const foundIndex = this.availableProducts.findIndex(item => item.type === type);

            if (foundIndex === -1) throw new Error(`${type} is not available in the store, your current bill is $${currentPrice.toFixed(2)}.`);
            if (Number(quantity) > this.availableProducts[foundIndex].quantity) throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${currentPrice.toFixed(2)}.`);

            this.totalPrice += (Number(quantity) * this.availableProducts[foundIndex].price);
            this.availableProducts[foundIndex].quantity -= Number(quantity);
            currentPrice += (Number(quantity) * this.availableProducts[foundIndex].price);
        });

        return `Great choice! You must pay the following amount $${currentPrice.toFixed(2)}.`;
    };

    rottingVegetable(type, quantity) {
        const foundIndex = this.availableProducts.findIndex(item => item.type === type);

        if (foundIndex === -1) throw new Error(`${type} is not available in the store.`);
        if (Number(quantity) > this.availableProducts[foundIndex].quantity) {
            this.availableProducts[foundIndex].quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            this.availableProducts[foundIndex].quantity -= Number(quantity);
            return `Some quantity of the ${type} has been removed.`;
        };
    };

    revision() {
        let output = [];
        output.push('Available vegetables:');

        let sorted = this.availableProducts.sort((a, b) => a.price - b.price);
        sorted.forEach(item => {
            output.push(`${item.type}-${item.quantity}-$${item.price}`);
        });

        output.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return output.join('\n');
    };
};

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

let vegStoreTwo = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStoreTwo.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStoreTwo.buyingVegetables(["Okra 1"]));
console.log(vegStoreTwo.buyingVegetables(["Beans 8", "Okra 1.5"]));
console.log(vegStoreTwo.buyingVegetables(["Banana 1", "Beans 2"]));

let vegStoreThree = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStoreThree.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStoreThree.rottingVegetable("Okra", 1));
console.log(vegStoreThree.rottingVegetable("Okra", 2.5));
console.log(vegStoreThree.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStoreFour = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStoreFour.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStoreFour.rottingVegetable("Okra", 1));
console.log(vegStoreFour.rottingVegetable("Okra", 2.5));
console.log(vegStoreFour.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStoreFour.revision());