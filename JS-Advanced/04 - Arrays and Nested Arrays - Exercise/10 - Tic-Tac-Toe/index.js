function ticTacToe(arr) {
    let dashboardTable = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let symbol = 'X';
    let isWinner = false;
    let isFull = false;

    function winnerChecker() {
        if (dashboardTable[0][0] !== false && dashboardTable[0][0] === dashboardTable[1][1] && dashboardTable[0][0] === dashboardTable[2][2]) {
            console.log(`Player ${dashboardTable[0][0]} wins!`);
            isWinner = true;
        } else if (dashboardTable[0][2] !== false && dashboardTable[0][2] === dashboardTable[1][1] && dashboardTable[0][2] === dashboardTable[2][0]) {
            console.log(`Player ${dashboardTable[0][2]} wins!`);
            isWinner = true;
        };

        for (let row = 0; row < dashboardTable.length; row++) {
            if (dashboardTable[row][0] !== false) {
                if (dashboardTable[row].every(symbol => symbol === dashboardTable[row][0])) {
                    console.log(`Player ${dashboardTable[row][0]} wins!`);
                    isWinner = true;
                };
            };

            if (dashboardTable[0][row] !== false) {
                if (dashboardTable[0][row] === dashboardTable[1][row] && dashboardTable[0][row] === dashboardTable[2][row]) {
                    console.log(`Player ${dashboardTable[0][row]} wins!`);
                    isWinner = true;
                };
            };
        };
    };

    for (let i = 0; i < arr.length; i++) {
        const [x, y] = arr[i].split(' ');

        if (dashboardTable[x][y] === 'X' || dashboardTable[x][y] === 'O') {
            console.log('This place is already taken. Please choose another!');
        } else {
            if (symbol === 'X') {
                dashboardTable[x].splice(y, 1, 'X');
                symbol = 'O';
            } else if (symbol === 'O') {
                dashboardTable[x].splice(y, 1, 'O');
                symbol = 'X';
            };
        };

        winnerChecker();

        for (let row of dashboardTable) {
            if (row.includes(false) === false) {
                isFull = true;
            } else {
                isFull = false;
            };
        };

        if (isFull === true) {
            console.log("The game ended! Nobody wins :(");
            for (let row of dashboardTable) {
                console.log(row.join('\t'));
            };
            break;
        };

        if (isWinner === true) {
            for (let row of dashboardTable) {
                console.log(row.join('\t'));
            };
            break;
        };
    };
};

ticTacToe(["0 1",
            "0 0",
            "0 2",
            "2 0",
            "1 0",
            "1 1",
            "1 2",
            "2 2",
            "2 1",
            "0 0"]);
ticTacToe(["0 0", 
            "0 0", 
            "1 1", 
            "0 1", 
            "1 2", 
            "0 2", 
            "2 2", 
            "1 2", 
            "2 2", 
            "2 1"]);
ticTacToe(["0 1",
            "0 0",
            "0 2",
            "2 0",
            "1 0",
            "1 2",
            "1 1",
            "2 1",
            "2 2",
            "0 0"]);