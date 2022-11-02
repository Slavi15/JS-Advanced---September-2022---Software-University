function busSchedule() {
    const span = document.getElementsByTagName('span')[0];
    const [departButton, arriveButton] = Array.from(document.querySelectorAll('input[type=button]'));

    async function depart() {
        try {
            const res = await fetch(`http://localhost:3030/jsonstore/bus/schedule/depot`);
            const data = await res.json();

            span.textContent = `Next stop ${data.name}`;
            departButton.disabled = true;
            arriveButton.disabled = false;
        } catch (err) {
            span.textContent = 'Error';
        };
    };

    async function arrive() {
        try {
            span.textContent = `Arriving at ${span.textContent.slice(10)}`;
            arriveButton.disabled = true;
            departButton.disabled = false;
        } catch (err) {
            span.textContent = 'Error';
        };
    };

    return {
        depart,
        arrive
    };
};

let result = busSchedule();