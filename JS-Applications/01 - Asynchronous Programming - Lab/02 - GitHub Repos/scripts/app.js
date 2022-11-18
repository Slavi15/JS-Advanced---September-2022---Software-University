function loadRepos() {
	const input = document.getElementsByTagName('input')[0];
	const ulTag = document.getElementById('repos');
	
	fetch(`https://api.github.com/users/${input.value}/repos`)
	.then(res => {
		if (!res.ok) {
			const liTag = document.createElement('li');
			liTag.textContent = `${res.status} (Not Found)`;
			return ulTag.replaceChildren(liTag);
		};
		return res.json();
	})
	.then(data => {
		const items = data.map(repo => {
			const liTag = document.createElement('li');
			const aTag = document.createElement('a');
			aTag.href = repo.html_url;
			aTag.textContent = repo.full_name;
			liTag.appendChild(aTag);

			return liTag;
		});

		ulTag.replaceChildren(...items);
	})
	.catch(err => console.log(err));
};