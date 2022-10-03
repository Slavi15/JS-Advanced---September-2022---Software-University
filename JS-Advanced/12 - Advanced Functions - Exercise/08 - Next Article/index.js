function getArticleGenerator(articles) {
    return function () {
        if (articles.length > 0) {
            const article = document.createElement('article');
            article.textContent = articles.shift();
            document.getElementById('content').appendChild(article);
        };
    };
};