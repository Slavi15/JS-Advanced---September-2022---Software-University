window.addEventListener("load", carDealers);

function carDealers() {
    const publishButton = document.getElementById('publish');

    publishButton.addEventListener('click', publishCarData);

    let profitTotal = [];

    function publishCarData(e) {
        e.preventDefault();

        const [make, model, year, originalCost, sellingPrice] = Array.from(document.getElementsByTagName('input'));
        const selectField = document.getElementById('fuel');
        const table = document.getElementById('table-body');

        if (make.value === '' || 
            model.value === '' || 
            year.value === '' ||  
            originalCost.value === '' || 
            sellingPrice.value === '') return;
        if (Number(originalCost.value) > Number(sellingPrice.value)) return;

        const tr = createElement('tr', null, 'row');

        tr.appendChild(createElement('td', make.value));
        tr.appendChild(createElement('td', model.value));
        tr.appendChild(createElement('td', year.value));
        tr.appendChild(createElement('td', selectField.value));
        tr.appendChild(createElement('td', originalCost.value));
        tr.appendChild(createElement('td', sellingPrice.value));

        const btnContainer = createElement('td');
        
        const editButton = createElement('button', 'Edit', 'action-btn edit');
        const sellButton = createElement('button', 'Sell', 'action-btn sell');

        editButton.addEventListener('click', function() {
            this.parentElement.parentElement.remove();
            make.value = this.parentElement.parentElement.children[0].textContent;
            model.value = this.parentElement.parentElement.children[1].textContent;
            year.value = this.parentElement.parentElement.children[2].textContent;
            selectField.value = this.parentElement.parentElement.children[3].textContent;
            originalCost.value = this.parentElement.parentElement.children[4].textContent;
            sellingPrice.value = this.parentElement.parentElement.children[5].textContent;
        });

        sellButton.addEventListener('click', function() {
            this.parentElement.parentElement.remove();
            const carsList = document.getElementById('cars-list');
            const profit = document.getElementById('profit');

            const li = createElement('li', null, 'each-list');
            li.appendChild(createElement('span', `${this.parentElement.parentElement.children[0].textContent} ${this.parentElement.parentElement.children[1].textContent}`));
            li.appendChild(createElement('span', this.parentElement.parentElement.children[2].textContent));
            li.appendChild(createElement('span', `${Math.abs(Number(this.parentElement.parentElement.children[5].textContent) - Number(this.parentElement.parentElement.children[4].textContent))}`));

            carsList.appendChild(li);

            profitTotal.push(Math.abs(Number(this.parentElement.parentElement.children[5].textContent) - Number(this.parentElement.parentElement.children[4].textContent)));
            const sum = profitTotal.reduce((previous, current) => previous + current);

            profit.textContent = sum.toFixed(2);
        });

        btnContainer.appendChild(editButton);
        btnContainer.appendChild(sellButton);

        tr.appendChild(btnContainer);
        table.appendChild(tr);

        make.value = '';
        model.value = '';
        year.value = '';
        selectField.value = 'petrol';
        originalCost.value = '';
        sellingPrice.value = '';
    };

    function createElement(tag, text, className) {
        const element = document.createElement(tag);
        if (text) element.textContent = text;
        if (className) {
            let classArray = className.split(' ');
            classArray.forEach(prop => {
                element.classList.add(prop);
            });
        };
        return element;
    };
};