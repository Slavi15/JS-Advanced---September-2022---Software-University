function attachEventListeners() {
    const buttons = document.querySelectorAll('input[type=button]');

    for (let button of Array.from(buttons)) {
        button.addEventListener('click', convertFunction);
    };

    function convertFunction(event) {
        let inputValue = Number(event.target.parentElement.querySelector('input[type=text]').value);
        let btnID = event.target.id;

        switch (btnID) {
            case 'daysBtn':
                populate(inputValue);
                break;
            case 'hoursBtn':
                populate(inputValue / 24);
                break;
            case 'minutesBtn':
                populate(inputValue / 24 / 60);
                break;
            case 'secondsBtn':
                populate(inputValue / 24 / 60 / 60);
                break;
        };
    };

    function populate(value) {
        let inputs = Array.from(document.querySelectorAll('input[type=text]'));
        inputs.shift().value = value;
        let currentValue = value * 24;
        for (let input of inputs) {
            input.value = currentValue;
            currentValue *= 60;
        };
    };
};