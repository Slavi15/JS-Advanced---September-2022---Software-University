function distanceConverter() {
    const button = document.getElementById('convert');

    button.addEventListener('click', convertFunction);

    function convertFunction(e) {
        let value = e.target.parentElement.children[1].value;
        let selected = e.target.parentElement.children[2].value;

        switch (selected) {
            case 'km':
                populate(value);
                break;
            case 'm':
                populate(value / 1000);
                break;
            case 'cm':
                populate(value / 100000);
                break;
            case 'mm':
                populate(value / 1000000);
                break;
            case 'mi':
                populate(value / 0.6213);
                break;
            case 'yrd':
                populate(value * 0.0009144);
                break;
            case 'ft':
                populate(value * 0.0003048);
                break;
            case 'in':
                populate(value * 0.0000254);
                break;
        };

        function populate(value) {
            let selected = document.getElementsByTagName('select')[1].value;
            let result = document.getElementById('outputDistance');

            let current = 0;
            switch (selected) {
                case 'km':
                    current = value;
                    result.value = current;
                    break;
                case 'm':
                    current = value * 1000;
                    result.value = current;
                    break;
                case 'cm':
                    current = value * 100000;
                    result.value = current;
                    break;
                case 'mm':
                    current = value * 1000000;
                    result.value = current;
                    break;
                case 'mi':
                    current = value * 0.6213;
                    result.value = current;
                    break;
                case 'yrd':
                    current = value / 0.0009144;
                    result.value = current;
                    break;
                case 'ft':
                    current = value / 0.0003048;
                    result.value = current;
                    break;
                case 'in':
                    current = value / 0.0000254;
                    result.value = current;
                    break;
            };
        };
    };
};