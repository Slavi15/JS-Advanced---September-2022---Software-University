function loadCommits() {
    const [username, repo] = Array.from(document.querySelectorAll('input[type=text]'));
    const commits = document.getElementById('commits');

    fetch(`https://api.github.com/repos/${username.value}/${repo.value}/commits`)
    .then(res => {
        if (!res.ok) {
            const liTag = document.createElement('li');
            liTag.textContent = `Error: ${res.status} (Not Found)`;
            return commits.appendChild(liTag);
        };
        return res.json();
    })
    .then(data => {
        const items = data.map(item => {
            const liTag = document.createElement('li');
            liTag.textContent = `${item.commit.author.name}: ${item.commit.message}`;

            return liTag;
        });
        commits.append(...items);
    });
};