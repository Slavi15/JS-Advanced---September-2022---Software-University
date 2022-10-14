window.addEventListener('load', serviceFunction);

function serviceFunction() {
    const [sendButton, clearButton] = Array.from(document.getElementsByTagName('button'));

    sendButton.addEventListener('click', sendForm);
    clearButton.addEventListener('click', clearData);

    function sendForm(e) {
        e.preventDefault();

        const section = document.getElementById('received-orders');
        const select = document.getElementsByTagName('select')[0];
        const [clientName, clientPhone] = Array.from(document.getElementsByTagName('input'));
        const description = document.getElementsByTagName('textarea')[0];

        if (clientName.value === '' || clientPhone.value === '' || description.value === '') return;

        const div = createElement('div', null, 'container');
        div.appendChild(createElement('h2', `Product type for repair: ${select.value}`));
        div.appendChild(createElement('h3', `Client information: ${clientName.value}, ${clientPhone.value}`));
        div.appendChild(createElement('h4', `Description of the problem: ${description.value}`));

        const startRepairButton = createElement('button', 'Start repair', 'start-btn');
        const finishRepairButton = createElement('button', 'Finish repair', 'finish-btn');
        finishRepairButton.disabled = true;

        startRepairButton.addEventListener('click', function() {
            this.disabled = true;
            finishRepairButton.disabled = false;
        });

        finishRepairButton.addEventListener('click', function() {
            const completed = document.getElementById('completed-orders');
            this.parentElement.children[3].remove();
            this.remove();
            div.remove();
            completed.appendChild(div);
        });

        div.appendChild(startRepairButton);
        div.appendChild(finishRepairButton);
        section.appendChild(div);

        clientName.value = '';
        clientPhone.value = '';
        description.value = '';
    };

    function clearData() {
        const divElements = Array.from(document.querySelectorAll('#completed-orders .container'));
        for (let el of divElements) {
            el.remove();
        };
    };

    function createElement(tag, value, className) {
        const element = document.createElement(tag);
        value ? element.textContent = value : '';
        if (className) element.classList.add(className);
        return element;
    };
};