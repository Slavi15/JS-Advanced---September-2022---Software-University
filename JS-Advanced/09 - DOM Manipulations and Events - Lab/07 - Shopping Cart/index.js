function shoppingCart() {
    const buttons = document.getElementsByClassName('add-product');
    const checkoutButton = document.getElementsByClassName('checkout')[0];
    const textarea = document.getElementsByTagName('textarea')[0];

    let products = [];
    let totalPrice = 0;

    Array.from(buttons, (button) => {
        button.addEventListener('click', function() {
            const title = this.parentElement.parentElement.children[1].children[0].textContent;
            const price = this.parentElement.parentElement.children[3].textContent;
            const outputText = `Added ${title} for ${price} to the cart.\n`;
            textarea.value += outputText;

            if (products.includes(title) === false) {
                products.push(title);
            };
            totalPrice += Number(price);
        });
    });

    checkoutButton.addEventListener('click', function() {
        textarea.value += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`;
        this.disabled = true;
        for (let button of Array.from(buttons)) {
            button.disabled = true;
        };
    });
};