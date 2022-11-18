function attachEvents() {
    const [location, weatherButton] = Array.from(document.getElementsByClassName('bl'));

    weatherButton.addEventListener('click', fetchWeather);

    async function fetchWeather() {
        try {
            const res = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);
            const locationsData = await res.json();

            const foundIndex = locationsData.findIndex(loc => loc.name === location.value);

            const codeResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationsData[foundIndex].code}`);
            const codesData = await codeResponse.json();

            const upcomingForecast = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationsData[foundIndex].code}`);
            const upcomingData = await upcomingForecast.json();

            createCurrentForecast(codesData);
            createUpcomingForecast(upcomingData);
        } catch (err) {
            document.getElementById('forecast').style.display = 'block';
            document.getElementById('forecast').textContent = 'Error';
        };
    };

    function createCurrentForecast(codesData) {
        const forecast = document.getElementById('forecast');
        forecast.style.display = 'block';

        const forecasts = createElement('div', null, 'forecasts');
        const conditionSymbol = createElement('span', conditionChecker(codesData.forecast.condition), 'condition symbol');
        const condition = createElement('span', null, 'condition');

        condition.appendChild(createElement('span', codesData.name, 'forecast-data'));
        condition.appendChild(createElement('span', `${codesData.forecast.low}&#176;/${codesData.forecast.high}&#176;`, 'forecast-data'));
        condition.appendChild(createElement('span', codesData.forecast.condition, 'forecast-data'));

        forecasts.appendChild(conditionSymbol);
        forecasts.appendChild(condition);
        forecast.children[0].appendChild(forecasts);
    };

    function createUpcomingForecast(upcomingData) {
        const forecast = document.getElementById('forecast');
        forecast.style.display = 'block';

        const forecasts = createElement('div', null, 'forecast-info');

        const items = Object.entries(upcomingData.forecast).map(([key, value]) => {
            const span = createElement('span', null, 'upcoming');
            span.appendChild(createElement('span', conditionChecker(value.condition), 'symbol'));
            span.appendChild(createElement('span', `${value.low}&#176;/${value.high}&#176;`, 'forecast-data'));
            span.appendChild(createElement('span', value.condition, 'forecast-data'));

            return span;
        });

        forecasts.append(...items);
        forecast.children[1].appendChild(forecasts);
    };

    function conditionChecker(condition) {
        switch (condition) {
            case 'Sunny':
                return '&#x2600;';
            case 'Partly sunny':
                return '&#x26C5;';
            case 'Overcast':
                return '&#x2601;';
            case 'Rain':
                return '&#x2614;';
            case 'Degress':
                return '&#x176;';
        };
    };

    function createElement(tag, text, className) {
        const element = document.createElement(tag);
        if (text) element.innerHTML = text;
        if (className) {
            const classValues = className.split(' ');
            classValues.forEach(value => {
                element.classList.add(value);
            });
        };
        return element;
    };
};

attachEvents();