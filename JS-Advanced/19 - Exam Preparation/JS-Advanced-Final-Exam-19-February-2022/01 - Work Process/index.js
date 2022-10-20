function workProcess() {
    const hireButton = document.getElementById('add-worker');

    hireButton.addEventListener('click', addWorker);

    function addWorker(e) {
        e.preventDefault();

        const [firstName, lastName, email, birth, position, salary] = Array.from(document.getElementsByTagName('input'));

        if (firstName.value === '' || 
            lastName.value === '' || 
            email.value === '' || 
            birth.value === '' || 
            position.value === '' || 
            salary.value === '') return;

        const tableBody = document.getElementById('tbody');
        const sum = document.getElementById('sum');

        let sumNumber = 0;

        const trTag = createElement('tr');
        trTag.appendChild(createElement('td', firstName.value));
        trTag.appendChild(createElement('td', lastName.value));
        trTag.appendChild(createElement('td', email.value));
        trTag.appendChild(createElement('td', birth.value));
        trTag.appendChild(createElement('td', position.value));
        trTag.appendChild(createElement('td', salary.value));

        const btnContainer = createElement('td');

        const firedButton = createElement('button', 'Fired', 'fired');
        const editButton = createElement('button', 'Edit', 'edit');

        firedButton.addEventListener('click', function() {
            this.parentElement.parentElement.remove();

            sum.textContent = (Number(sum.textContent) - Number(this.parentElement.parentElement.children[5].textContent)).toFixed(2);
        });

        editButton.addEventListener('click', function() {
            this.parentElement.parentElement.remove();

            firstName.value = this.parentElement.parentElement.children[0].textContent;
            lastName.value = this.parentElement.parentElement.children[1].textContent;
            email.value = this.parentElement.parentElement.children[2].textContent;
            birth.value = this.parentElement.parentElement.children[3].textContent;
            position.value = this.parentElement.parentElement.children[4].textContent;
            salary.value = this.parentElement.parentElement.children[5].textContent;

            sum.textContent = (Number(sum.textContent) - Number(this.parentElement.parentElement.children[5].textContent)).toFixed(2);
        });

        btnContainer.appendChild(firedButton);
        btnContainer.appendChild(editButton);

        trTag.appendChild(btnContainer);
        tableBody.appendChild(trTag);

        sumNumber += Number(salary.value);
        sum.textContent = (Number(sum.textContent) + sumNumber).toFixed(2);

        firstName.value = '';
        lastName.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';
    };

    function createElement(tag, textContent, className) {
        const element = document.createElement(tag);
        if (textContent) element.textContent = textContent;
        if (className) element.classList.add(className);
        return element;
    };
};

workProcess();