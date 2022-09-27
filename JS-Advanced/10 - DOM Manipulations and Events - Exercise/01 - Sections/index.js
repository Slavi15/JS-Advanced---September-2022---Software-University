function sectionsFunction(arr) {
    const contentDiv = document.getElementById('content');

    for (let text of arr) {
        const div = document.createElement('div');
        const p = document.createElement('p');
        
        p.textContent = text;
        p.style.display = 'none';
        
        div.appendChild(p);
        div.addEventListener('click', function() {
            this.children[0].style.display = 'block';
        });

        contentDiv.appendChild(div);
    };
};