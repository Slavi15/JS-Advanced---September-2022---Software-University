window.addEventListener("load", scaryStory);

function scaryStory() {
  const publishButton = document.getElementById('form-btn');

  publishButton.addEventListener('click', publishFunction);

  function publishFunction(e) {
    e.preventDefault();

    const [firstName, lastName, age, storyTitle] = Array.from(document.getElementsByTagName('input'));
    const section = document.getElementById('genre');
    const textarea = document.getElementById('story');

    const previewList = document.getElementById('preview-list');

    if (firstName.value === '' ||
        lastName.value === '' ||
        age.value === '' ||
        storyTitle.value === '' ||
        textarea.value === '') return;

    const liTag = createElement('li', null, 'story-info');

    const article = createElement('article');
    article.appendChild(createElement('h4', `Name: ${firstName.value} ${lastName.value}`));
    article.appendChild(createElement('p', `Age: ${age.value}`));
    article.appendChild(createElement('p', `Title: ${storyTitle.value}`));
    article.appendChild(createElement('p', `Genre: ${section.value}`));
    article.appendChild(createElement('p', textarea.value));

    const saveButton = createElement('button', 'Save Story', 'save-btn');
    const editButton = createElement('button', 'Edit Story', 'edit-btn');
    const deleteButton = createElement('button', 'Delete Story', 'delete-btn');

    editButton.addEventListener('click', function() {
      this.parentElement.remove();

      firstName.value = this.parentElement.children[0].children[0].textContent.slice(6, 10);
      lastName.value = this.parentElement.children[0].children[0].textContent.slice(11);
      age.value = this.parentElement.children[0].children[1].textContent.slice(5);
      storyTitle.value = this.parentElement.children[0].children[2].textContent.slice(7);
      section.value = this.parentElement.children[0].children[3].textContent.slice(7);
      textarea.value = this.parentElement.children[0].children[4].textContent;
      e.target.disabled = false;
    });

    saveButton.addEventListener('click', function() {
      const main = document.getElementById('main');

      const formWrapper = document.getElementsByClassName('form-wrapper')[0];
      const sideWrapper = document.getElementById('side-wrapper');
      formWrapper.remove();
      sideWrapper.remove();

      main.appendChild(createElement('h1', 'Your scary story is saved!'));
      console.log(main);
    });

    deleteButton.addEventListener('click', function() {
      this.parentElement.remove();
      e.target.disabled = false;
    });

    liTag.appendChild(article);

    liTag.appendChild(saveButton);
    liTag.appendChild(editButton);
    liTag.appendChild(deleteButton);

    previewList.appendChild(liTag);

    e.target.disabled = true;

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    textarea.value = '';
  };

  function createElement(tag, text, className) {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    if (className) element.classList.add(className);
    return element;
  };
};