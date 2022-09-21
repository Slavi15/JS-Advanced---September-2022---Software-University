function createSortedList() {
    let list = [];

    return {
        add: function(element) {
            list.push(element);
            list.sort((a, b) => a - b);
        },
        remove: function(index) {
            if (index >= 0 && index < list.length) {
                list.splice(index, 1);
            };
        },
        get: function(index) {
            if (index >= 0 && index < list.length) {
                return list[index];
            };
        },
        size: list.length
    };
};

let list = createSortedList();
list.add(9);
list.add(6);
list.add(3); 
console.log(list.get(1)); 
list.remove(1); 
console.log(list.get(1));