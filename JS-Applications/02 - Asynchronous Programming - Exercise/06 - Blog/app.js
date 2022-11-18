function attachEvents() {
    const [loadPostsButton, viewPostsButton] = Array.from(document.getElementsByTagName('button'));

    loadPostsButton.addEventListener('click', loadPosts);
    viewPostsButton.addEventListener('click', viewPosts);

    async function loadPosts() {
        try {
            const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
            const data = await response.json();

            const posts = document.getElementById('posts');

            const items = Object.entries(data).map(([key, value]) => {
                if (value.title === 'Unit Testing And Modules') {
                    document.getElementById('post-title').textContent = value.title;
                    document.getElementById('post-body').textContent = value.body;
                };
                
                const option = document.createElement('option');
                option.value = value.id;
                option.textContent = value.title;

                return option;
            });

            posts.replaceChildren(...items);
        } catch (err) {
            console.log(err);
        };
    };

    async function viewPosts() {
        try {
            const postResponse = await fetch(`http://localhost:3030/jsonstore/blog/posts/${posts.value}`);
            const post = await postResponse.json();

            const commentsResponse = await fetch('http://localhost:3030/jsonstore/blog/comments');
            const comments = await commentsResponse.json();
            
            document.getElementById('post-title').textContent = post.title;
            document.getElementById('post-body').textContent = post.body;

            const ulTag = document.getElementById('post-comments');

            const items = Object.entries(comments).map(([key, value]) => {
                if (value.postId === document.getElementById('posts').value) {
                    const li = document.createElement('li');
                    li.id = value.id;
                    li.textContent = value.text;

                    return li;
                };
            });

            const filteredItems = items.filter(item => item !== undefined);
            ulTag.replaceChildren(...filteredItems);
        } catch (err) {
            console.log(err);
        };
    };
};

attachEvents();