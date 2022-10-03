function taskManager() {
    const addButton = document.getElementById('add');

    addButton.addEventListener('click', function () {
        const taskValue = document.getElementsByName('task')[0].value;
        const textarea = document.getElementsByTagName('textarea')[0];
        const dateValue = document.getElementsByName('date')[0].value;

        if (taskValue !== '' && textarea !== '' && dateValue !== '') {
            const article = document.createElement('article');

            article.innerHTML = `
            <h3>${taskValue}</h3>
            <p>Description: ${textarea.value}</p>
            <p>Due Date: ${dateValue}</p>
            <div class="flex">
                <button class="green">Start</button>
                <button class="red" onclick="() => { document.getElementsByTagName('section')[1].removeChild(this.parentElement.parentElement); }">Delete</button>
            </div>
            `;

            document.getElementsByTagName('section')[1].children[1].appendChild(article);
        };
    });

    // const openButtons = Array.from(document.getElementsByClassName('green'));
    // for (let button of openButtons) {
    //     button.addEventListener('click', function() {
    //         document.getElementById('in-progress').appendChild(this.parentElement.parentElement);
    //         document.getElementsByTagName('section')[1].removeChild(this.parentElement.parentElement);
    //     });
    // };
};