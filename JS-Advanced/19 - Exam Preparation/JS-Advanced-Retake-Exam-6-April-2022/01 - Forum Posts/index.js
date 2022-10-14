window.addEventListener("load", forumPosts);

function forumPosts() {
  const [publishButton, clearButton] = Array.from(document.getElementsByTagName('button'));

  publishButton.addEventListener('click', publishData);
  clearButton.addEventListener('click', clearData);

  function publishData() {
    const [title, category] = Array.from(document.getElementsByTagName('input'));
    const contentText = document.getElementsByTagName('textarea')[0];
    const ulTag = document.getElementById('review-list');
    const published = document.getElementById('published-list');

    if (title.value === '' || category.value === '' || contentText.value === '') return;

    const liTag = createElement('li', null, 'rpost');

    const article = createElement('article');
    article.appendChild(createElement('h4', title.value));
    article.appendChild(createElement('p', `Category: ${category.value}`));
    article.appendChild(createElement('p', `Content: ${contentText.value}`));
    liTag.appendChild(article);

    const editButton = createElement('button', 'Edit', 'action-btn edit');
    const approveButton = createElement('button', 'Approve', 'action-btn approve');

    editButton.addEventListener('click', function() {
        liTag.remove();
        title.value = this.parentElement.children[0].children[0].textContent;
        category.value = this.parentElement.children[0].children[1].textContent.slice(10);
        contentText.value = this.parentElement.children[0].children[2].textContent.slice(9);
    });

    approveButton.addEventListener('click', function() {
        liTag.remove();
        this.remove();
        editButton.remove();
        published.appendChild(liTag);
    });

    liTag.appendChild(editButton);
    liTag.appendChild(approveButton);
    ulTag.appendChild(liTag);

    title.value = '';
    category.value = '';
    contentText.value = '';
  };

  function clearData() {
    const publishedElements = Array.from(document.getElementById('published-list').children);
    for (let el of publishedElements) {
        el.remove();
    };
  };

  function createElement(tag, value, className) {
    const element = document.createElement(tag);
    value ? element.textContent = value : '';
    if (className) {
        let classArray = className.split(' ');
        for (let classname of classArray) {
            element.classList.add(classname);
        };
    };
    return element;
  };
};