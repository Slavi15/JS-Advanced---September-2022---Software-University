async function accordionFunction() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
        const data = await response.json();

        const section = document.getElementById('main');

        const items = data.map(item => {
            const accordion = createElement('div', null, 'accordion');

            const head = createElement('div', null, 'head');
            head.appendChild(createElement('span', item.title));
            const button = createElement('button', 'More', 'button');
            button.id = item._id;

            button.addEventListener('click', function() {
                if (this.textContent === 'More') {
                    this.textContent = 'Less';
                    this.parentElement.parentElement.children[1].style.display = 'block';
                } else {
                    this.textContent = 'More';
                    this.parentElement.parentElement.children[1].style.display = 'none';
                };
            });

            head.appendChild(button);

            const extra = createElement('div', null, 'extra');
            fetchDetails(item._id)
            .then(res => {
                extra.appendChild(createElement('p', res.content));
            });

            accordion.appendChild(head);
            accordion.appendChild(extra);

            return accordion;
        });

        section.replaceChildren(...items);

        async function fetchDetails(id) {
            const detailsResponse = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`);
            const detailsData = await detailsResponse.json();

            return detailsData;
        };
    } catch (err) {

    };
};

function createElement(tag, text, className) {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    if (className) element.classList.add(className);
    return element;
};