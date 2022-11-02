async function lockedProfile() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
        const data = await response.json();
        
        const main = document.getElementById('main');

        const items = Object.entries(data).map(([key, value]) => {
            const profile = document.createElement('div');
            profile.classList.add('profile');
            
            const image = document.createElement('img');
            image.src = './iconProfile2.png';
            image.classList.add('userIcon');

            const labelOne = document.createElement('label');
            labelOne.textContent = 'Lock';

            const inputOne = document.createElement('input');
            inputOne.type = 'radio';
            inputOne.name = 'user1Locked';
            inputOne.value = 'lock';
            inputOne.checked = true;

            const labelTwo = document.createElement('label');
            labelTwo.textContent = 'Unlock';

            const inputTwo = document.createElement('input');
            inputTwo.type = 'radio';
            inputTwo.name = 'user1Locked';
            inputTwo.value = 'unlock';

            const labelThree = document.createElement('label');
            labelThree.textContent = 'Username';

            const inputThree = document.createElement('input');
            inputThree.type = 'text';
            inputThree.name = 'user1Username';
            inputThree.value = value.username;
            inputThree.disabled = true;
            inputThree.readOnly = true;

                const hiddenFields = document.createElement('div');
                hiddenFields.classList.add('hiddenInfo');
                hiddenFields.appendChild(document.createElement('hr'));

                const labelFour = document.createElement('label');
                labelFour.textContent = 'Email:';

                const inputFour = document.createElement('input');
                inputFour.type = 'email';
                inputFour.name = 'user1Email';
                inputFour.value = value.email;
                inputFour.disabled = true;
                inputFour.readOnly = true;

                const labelFive = document.createElement('label');
                labelFive.textContent = 'Age:';

                const inputFive = document.createElement('input');
                inputFive.type = 'email';
                inputFive.name = 'user1Age';
                inputFive.value = value.age;
                inputFive.disabled = true;
                inputFive.readOnly = true;

                hiddenFields.appendChild(labelFour);
                hiddenFields.appendChild(inputFour);
                hiddenFields.appendChild(labelFive);
                hiddenFields.appendChild(inputFive);

            const button = document.createElement('button');
            button.textContent = 'Show more';

            button.addEventListener('click', function() {
                const lock = this.parentElement.children[2];

                if (!lock.checked) {
                    if (this.textContent === 'Show more') {
                        this.parentElement.children[9].classList.remove('hiddenInfo');
                        this.textContent = 'Hide it';
                    } else {
                        this.parentElement.children[9].classList.add('hiddenInfo');
                        this.textContent = 'Show more';
                    };
                };
            });

            profile.appendChild(image);
            profile.appendChild(labelOne);
            profile.appendChild(inputOne);
            profile.appendChild(labelTwo);
            profile.appendChild(inputTwo);

            profile.appendChild(document.createElement('br'));
            profile.appendChild(document.createElement('hr'));

            profile.appendChild(labelThree);
            profile.appendChild(inputThree);
            profile.appendChild(hiddenFields);
            profile.appendChild(button);

            return profile;
        });

        main.replaceChildren(...items);
    } catch (err) {

    };
};