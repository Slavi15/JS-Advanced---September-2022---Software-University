function fruitFunction(fruit, weight, price) {
    const weightKG = Number(weight) / 1000;
    const money = weightKG * price;
    console.log(`I need $${money.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${fruit}.`);
};

fruitFunction('orange', 2500, 1.80);
fruitFunction('apple', 1563, 2.35);