function taskManager() {
    const addButton = document.getElementById('add');

    const taskElement = document.getElementById('task');
    const descriptionElement = document.getElementById('description');
    const dateElement = document.getElementById('date');

    const [section, sectionOpen, sectionProgress, sectionComplete] = Array.from(document.getElementsByTagName('section')).map(el => el.children[1]);

    addButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (taskElement.value !== '' && descriptionElement.value !== '' && dateElement.value !== '') {
            addTask(taskElement.value, descriptionElement.value, dateElement.value);
        };
        taskElement.value = '';
        descriptionElement.value = '';
        dateElement.value = '';
    });

    function addTask(task, description, date) {
        const article = createElement('article');

        article.appendChild(createElement('h3', task));
        article.appendChild(createElement('p', `Description: ${description}`));
        article.appendChild(createElement('p', `Due Date: ${date}`));

        const btnContainer = createElement('div', null, 'flex');

        const buttonStart = createElement('button', 'Start', 'green');
        const buttonDelete = createElement('button', 'Delete', 'red');
        const buttonFinish = createElement('button', 'Finish', 'orange');

        buttonStart.addEventListener('click', () => {
            buttonStart.remove();
            btnContainer.appendChild(buttonFinish);
            sectionProgress.appendChild(article);
        });
        buttonDelete.addEventListener('click', () => { 
            article.remove(); 
        });
        buttonFinish.addEventListener('click', () => {
            btnContainer.remove();
            sectionComplete.appendChild(article);
        });

        btnContainer.appendChild(buttonStart);
        btnContainer.appendChild(buttonDelete);

        article.appendChild(btnContainer);
        sectionOpen.appendChild(article);
    };

    function createElement(tagType, value, className) {
        const element = document.createElement(tagType);
        element.textContent = value;
        if (className) {
            element.classList.add(className);
        };
        return element;
    };
};