function ticketsFunction(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        };
    };
    
    const data = arr.map(item => item.split('|'));
    let arrayTickets = [];

    data.forEach(([destination, price, status]) => {
        arrayTickets.push(new Ticket(destination, Number(price), status));
    });

    if (criteria === 'destination' || criteria === 'status') {
        const sortedArrayTickets = arrayTickets.sort((a, b) => a[criteria].localeCompare(b[criteria]));
        return sortedArrayTickets;
    } else if ( criteria === 'price') {
        const sortedArrayTickets = arrayTickets.sort((a, b) => a[criteria] - b[criteria]);
        return sortedArrayTickets;
    };
};

console.log(ticketsFunction([
                    'Philadelphia|94.20|available',
                    'New York City|95.99|available',
                    'New York City|95.99|sold',
                    'Boston|126.20|departed'
                ], 'destination'));
console.log(ticketsFunction([
                    'Philadelphia|94.20|available',
                    'New York City|95.99|available',
                    'New York City|95.99|sold',
                    'Boston|126.20|departed'
                ], 'status'));