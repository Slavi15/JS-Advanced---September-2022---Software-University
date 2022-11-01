async function getInfo() {
    const input = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const ulBuses = document.getElementById('buses');

    try {
        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${input.value}`);
        const data = await response.json();

        stopName.textContent = data.name;

        const items = Object.entries(data.buses).map(([key, value]) => {
            const li = document.createElement('li');
            li.textContent = `Bus ${key} arrives in ${value} minutes`;
            return li;
        });

        ulBuses.replaceChildren(...items);
    } catch (err) {
        stopName.textContent = 'Error';
        ulBuses.innerHTML = '';
    };
};