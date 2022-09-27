function attachGradientEvents() {
    const gradientBox = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradientBox.addEventListener('mousemove', function(event) {
        // console.log(event.offsetX);
        // console.log(event.target.offsetWidth);
        const position = Number(event.offsetX);
        const width = Number(event.target.clientWidth);
        result.textContent = `${Math.trunc((position / width) * 100)}%`;
    });
};