class List {
    numbersList = [];
    size = 0;

    add(element) {
        this.numbersList.push(element);
        this.numbersList.sort((a, b) => a - b);
        this.size += 1;
    };

    remove(index) {
        if (index >= 0 && index < this.numbersList.length) {
            this.numbersList.splice(index, 1);
            this.size -= 1;
        };
    };

    get(index) {
        if (index >= 0 && index < this.numbersList.length) return this.numbersList[index];
    };
};

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));