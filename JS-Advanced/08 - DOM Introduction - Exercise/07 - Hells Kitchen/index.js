function hellsKitchen() {
    const button = document.getElementById('btnSend');
    const [bestRestaurantParagraph, bestWorkersParagraph] = Array.from(document.querySelectorAll('p'));

    button.addEventListener('click', function () {
        const input = document.getElementsByTagName('textarea')[0];
        const regex = new RegExp(/[\s,-]+/, 'g');
        const restaurantData = JSON.parse(input.value).map(item => item.split(regex));

        const map = new Map();

        for (let [restaurant, ...workers] of restaurantData) {
            let reducedData = workers.reduce((previousValue, currentValue, currentIndex, workers) => {
                if (currentIndex % 2 === 0) {
                    previousValue.push({
                        name: currentValue,
                        value: Number(workers[currentIndex + 1])
                    });
                };
                return previousValue;
            }, []);

            let avgSalary = reducedData.reduce((previousValue, currentValue, currentIndex, array) => {
                return previousValue + (currentValue.value / array.length);
            }, 0);

            let highestValue = Math.max(...reducedData.map(i => i.value));

            if (map.has(restaurant) === false) {
                map.set(restaurant, {
                    workerData: reducedData,
                    averageSalary: avgSalary,
                    bestSalary: highestValue
                });
            } else {
                reducedData.forEach(obj => {
                    map.get(restaurant).workerData.push(obj);
                });
                map.get(restaurant).averageSalary += avgSalary;
                map.get(restaurant).bestSalary < highestValue ? map.get(restaurant).bestSalary = highestValue : '';
            };
        };

        const sortedMap = new Map([...map.entries()].sort((a, b) => b[1].averageSalary - a[1].averageSalary));
        for (let kvp of sortedMap) {
            kvp[1].workerData.sort((a, b) => b.value - a.value);
        };

        const [firstKey] = sortedMap.keys();
        const [firstValues] = sortedMap.values();

        const bestRestaurantOutput = `Name: ${firstKey} Average Salary: ${firstValues.averageSalary.toFixed(2)} Best Salary: ${firstValues.bestSalary.toFixed(2)}`;
        let bestWorkersOutput = [];
        for (let worker of firstValues.workerData) {
            bestWorkersOutput.push(`Name: ${worker.name} With Salary: ${worker.value}`);
        };

        bestRestaurantParagraph.textContent = bestRestaurantOutput;
        bestWorkersParagraph.textContent = bestWorkersOutput.join(' ');
        input.value = '';
    });
};

// ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]