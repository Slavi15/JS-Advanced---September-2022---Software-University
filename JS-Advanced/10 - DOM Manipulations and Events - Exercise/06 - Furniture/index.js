function furnitureFunction() {
  const table = document.querySelector('table tbody');
  const buttons = Array.from(document.getElementsByTagName('button'));

  buttons[0].addEventListener('click', generateFunction);
  buttons[1].addEventListener('click', buyFunction);

  function generateFunction(e) {
    let textarea = JSON.parse(e.target.parentElement.children[1].value);
    // console.log(JSON.parse(textarea.value));

    for (let i = 0; i < textarea.length; i++) {
      const tr = document.createElement('tr');

      tr.innerHTML = `<td><img src=${textarea[i].img} /></td>
        <td><p>${textarea[i].name}</p></td>
        <td><p>${textarea[i].price}</p></td>
        <td><p>${textarea[i].decFactor}</p></td>
        <td><input type="checkbox" /></td>`;

      table.appendChild(tr);
    };
  };

  function buyFunction(e) {
    const textarea = e.target.parentElement.children[4];
    const checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]'));

    let products = [];
    let price = 0;
    decFactor = [];

    for (let checkbox of checkboxes) {
      if (checkbox.checked === true) {
        products.push(checkbox.parentElement.parentElement.children[1].children[0].textContent);
        price += Number(checkbox.parentElement.parentElement.children[2].children[0].textContent);
        decFactor.push(Number(checkbox.parentElement.parentElement.children[3].children[0].textContent));
      };
    };

    const averageDecFactor = decFactor.reduce((previous, current) => previous + current) / (decFactor.length);
    textarea.value = `Bought furniture: ${products.join(', ')}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${averageDecFactor}`.trim();
  };
};