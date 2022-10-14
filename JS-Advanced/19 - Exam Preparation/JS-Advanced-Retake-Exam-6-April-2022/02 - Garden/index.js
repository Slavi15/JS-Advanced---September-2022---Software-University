class Garden {
    constructor(spaceAvailable, plants = [], storage = []) {
        this.spaceAvailable = spaceAvailable;
        this.plants = plants;
        this.storage = storage;
    };

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) throw new Error('Not enough space in the garden.');

        this.plants.push({
            plantName: plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantity: 0
        });

        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    };

    ripenPlant(plantName, quantity) {
        const plantObject = this.plants.find(plant => plant.plantName === plantName);
        // const isRipen = this.plants.some(plant => plant.ripe === true);
        // const invalidQty = this.plants.some(plant => plant.ripe === true); 

        if (plantObject === undefined) throw new Error(`There is no ${plantName} in the garden.`);
        if (plantObject.ripe) throw new Error(`The ${plantName} is already ripe.`);
        if (quantity <= 0) throw new Error('The quantity cannot be zero or negative.');

        plantObject.ripe = true;
        plantObject.quantity += Number(quantity);
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else if (quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`;
        };
    };

    harvestPlant(plantName) {
        const plantObject = this.plants.find(plant => plant.plantName === plantName);

        if (plantObject === undefined) throw new Error(`There is no ${plantName} in the garden.`);
        if (!plantObject.ripe) throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);

        this.storage.push(`${plantName} (${plantObject.quantity})`);
        this.spaceAvailable += Number(plantObject.spaceRequired);
        const index = this.plants.findIndex(plant => plant.plantName === plantName);
        this.plants.splice(index, 1);

        return `The ${plantName} has been successfully harvested.`;
    };

    generateReport() {
        let sorted = this.plants.sort((a, b) => a['plantName'].localeCompare(b['plantName']));
        let garden = [];
        sorted.forEach(item => {
            garden.push(item.plantName);
        });

        let output = [];
        output.push(`The garden has ${this.spaceAvailable} free space left.`);
        output.push(`Plants in the garden: ${garden.join(', ')}`);
        if (!this.storage) {
            output.push('Plants in storage: The storage is empty.');
        } else {
            output.push(`Plants in storage: ${this.storage.join(', ')}`);
        };

        return output.join('\n');
    };
};

const myGarden = new Garden(250);
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('olive', 50));

const myGardenTwo = new Garden(250);
console.log(myGardenTwo.addPlant('apple', 20));
console.log(myGardenTwo.addPlant('orange', 100));
console.log(myGardenTwo.addPlant('cucumber', 30));
console.log(myGardenTwo.ripenPlant('apple', 10));
console.log(myGardenTwo.ripenPlant('orange', 1));
console.log(myGardenTwo.ripenPlant('orange', 4));

const myGardenThree = new Garden(250);
console.log(myGardenThree.addPlant('apple', 20)); 
console.log(myGardenThree.addPlant('orange', 100)); 
console.log(myGardenThree.addPlant('cucumber', 30)); 
console.log(myGardenThree.ripenPlant('apple', 10)); 
console.log(myGardenThree.ripenPlant('orange', 1)); 
console.log(myGardenThree.ripenPlant('olive', 30));

const myGardenFour = new Garden(250);
console.log(myGardenFour.addPlant('apple', 20));
console.log(myGardenFour.addPlant('orange', 100));
console.log(myGardenFour.addPlant('cucumber', 30));
console.log(myGardenFour.ripenPlant('apple', 10));
console.log(myGardenFour.ripenPlant('orange', 1));
console.log(myGardenFour.ripenPlant('cucumber', -5));

const myGardenFive = new Garden(250);
console.log(myGardenFive.addPlant('apple', 20));
console.log(myGardenFive.addPlant('orange', 200));
console.log(myGardenFive.addPlant('raspberry', 10));
console.log(myGardenFive.ripenPlant('apple', 10));
console.log(myGardenFive.ripenPlant('orange', 1)); 
console.log(myGardenFive.harvestPlant('apple')); 
console.log(myGardenFive.harvestPlant('olive'));

const myGardenSix = new Garden(250);
console.log(myGardenSix.addPlant('apple', 20));
console.log(myGardenSix.addPlant('orange', 200));
console.log(myGardenSix.addPlant('raspberry', 10));
console.log(myGardenSix.ripenPlant('apple', 10));
console.log(myGardenSix.ripenPlant('orange', 1));
console.log(myGardenSix.harvestPlant('apple'));
console.log(myGardenSix.harvestPlant('raspberry'));

const myGardenSeven = new Garden(250);
console.log(myGardenSeven.addPlant('apple', 20));
console.log(myGardenSeven.addPlant('orange', 200));
console.log(myGardenSeven.addPlant('raspberry', 10));
console.log(myGardenSeven.ripenPlant('apple', 10));
console.log(myGardenSeven.ripenPlant('orange', 1));
console.log(myGardenSeven.harvestPlant('orange'));
console.log(myGardenSeven.generateReport());