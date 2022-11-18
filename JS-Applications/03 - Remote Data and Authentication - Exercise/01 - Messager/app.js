function attachEvents() {
    const [sendButton, refreshButton] = Array.from(document.querySelectorAll('input[type=button]'));

    sendButton.addEventListener('click', sendFunction);
    refreshButton.addEventListener('click', refreshFunction);

    const URL = 'http://localhost:3030/jsonstore/messenger';

    async function sendFunction() {
        const [author, content] = Array.from(document.querySelectorAll('input[type=text]'));
        try {
            const data = {
                author: author.value,
                content: content.value
            };

            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            return response.json();
        } catch (err) {
            console.log(err);
        };
    };

    async function refreshFunction() {
        const textarea = document.getElementById('messages');
        try {
            const response = await fetch(URL);
            const resData = await response.json();

            const items = Object.entries(resData).map(([key, value]) => {
                return `${value.author}: ${value.content}`;
            });

            textarea.textContent = items.join('\n');
        } catch (err) {
            console.log(err);
        };
    };
};

attachEvents();