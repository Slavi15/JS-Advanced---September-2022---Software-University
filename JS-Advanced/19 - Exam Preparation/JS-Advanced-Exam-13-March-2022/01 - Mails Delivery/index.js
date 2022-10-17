function mailsDelivery() {
    const [addButton, resetButton] = Array.from(document.getElementsByTagName('button'));

    addButton.addEventListener('click', addToList);
    resetButton.addEventListener('click', resetData);

    function addToList(e) {
        e.preventDefault();

        const [recipient, title] = Array.from(document.getElementsByTagName('input'));
        const message = document.getElementsByTagName('textarea')[0];
        const ul = document.getElementById('list');

        if (recipient.value === '' || title.value === '' || message.value === '') return;

        const li = createElementWithID('li');
        li.appendChild(createElementWithID('h4', `Title: ${title.value}`));
        li.appendChild(createElementWithID('h4', `Recipient Name: ${recipient.value}`));
        li.appendChild(createElementWithID('span', message.value));

        const div = createElementWithID('div', null, 'list-action');

        const sendButton = createElementWithID('button', 'Send', 'send', 'submit');
        const deleteButton = createElementWithID('button', 'Delete', 'delete', 'submit');

        sendButton.addEventListener('click', function (e) {
            e.preventDefault();

            const sentMails = document.getElementsByClassName('sent-list')[0];

            e.target.parentElement.parentElement.remove();

            const li = createElementWithID('li');
            li.appendChild(createElementWithID('span', e.target.parentElement.parentElement.children[1].textContent));
            li.appendChild(createElementWithID('span', e.target.parentElement.parentElement.children[0].textContent));

            const btnContainer = createElementWithClassName('div', null, 'btn');
            const deleteBtn = createElementWithClassName('button', 'Delete', 'delete', 'submit');

            deleteBtn.addEventListener('click', function (e) {
                e.preventDefault();

                const deletedMails = document.getElementsByClassName('delete-list')[0];

                e.target.parentElement.parentElement.remove();

                const li = createElementWithID('li');
                li.appendChild(createElementWithID('span', `To: ${e.target.parentElement.parentElement.children[0].textContent}`));
                li.appendChild(createElementWithID('span', `Title: ${e.target.parentElement.parentElement.children[1].textContent}`));

                deletedMails.appendChild(li);
            });

            btnContainer.appendChild(deleteBtn);
            li.appendChild(btnContainer);
            sentMails.appendChild(li);
        });

        deleteButton.addEventListener('click', function (e) {
            e.preventDefault();

            const deletedMails = document.getElementsByClassName('delete-list')[0];

            e.target.parentElement.parentElement.remove();

            const li = createElementWithID('li');
            li.appendChild(createElementWithID('span', `To: ${e.target.parentElement.parentElement.children[1].textContent}`));
            li.appendChild(createElementWithID('span', `Title: ${e.target.parentElement.parentElement.children[0].textContent}`));

            deletedMails.appendChild(li);
        });

        div.appendChild(sendButton);
        div.appendChild(deleteButton);

        li.appendChild(div);
        ul.appendChild(li);

        recipient.value = '';
        title.value = '';
        message.value = '';
    };

    function resetData(e) {
        e.preventDefault();

        const [recipient, title] = Array.from(document.getElementsByTagName('input'));
        const message = document.getElementsByTagName('textarea')[0];

        recipient.value = '';
        title.value = '';
        message.value = '';
    };

    function createElementWithID(tag, text, id) {
        const element = document.createElement(tag);
        if (text) element.textContent = text;
        if (id) element.setAttribute('id', id);
        return element;
    };

    function createElementWithClassName(tag, text, className, type) {
        const element = document.createElement(tag);
        if (text) element.textContent = text;
        if (className) element.classList.add(className);
        if (type) element.type = 'submit';
        return element;
    };
};

mailsDelivery();