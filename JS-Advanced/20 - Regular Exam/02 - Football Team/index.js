class FootballTeam {
    constructor(clubName, country, invitedPlayers = []) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = invitedPlayers;
    };

    newAdditions(footballPlayers) {
        const split = footballPlayers.map(item => item.split('/'));
        let names = [];
        split.forEach(item => {
            const foundIndex = this.invitedPlayers.findIndex(player => player.name === item[0]);

            if (foundIndex === -1) {
                this.invitedPlayers.push({
                    name: item[0],
                    age: Number(item[1]),
                    playerValue: Number(item[2])
                });
                names.push(item[0]);
            } else {
                if (Number(item[2]) > this.invitedPlayers[foundIndex].playerValue) {
                    this.invitedPlayers[foundIndex].playerValue = Number(item[2]);
                };
            };
        });

        return `You successfully invite ${names.join(', ')}.`;
    };

    signContract(selectedPlayer) {
        const [name, playerOffer] = selectedPlayer.split('/');
        const foundIndex = this.invitedPlayers.findIndex(player => player.name === name);

        if (foundIndex === -1) throw new Error(`${name} is not invited to the selection list!`);
        if (playerOffer < this.invitedPlayers[foundIndex].playerValue) {
            const priceDifference = Math.abs(Number(this.invitedPlayers[foundIndex].playerValue) - Number(playerOffer))
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        } else {
            this.invitedPlayers[foundIndex].playerValue = 'Bought';
            return `Congratulations! You sign a contract with ${this.invitedPlayers[foundIndex].name} for ${playerOffer} million dollars.`;
        };
    };

    ageLimit(name, age) {
        const foundIndex = this.invitedPlayers.findIndex(player => player.name === name);

        if (foundIndex === -1) throw new Error(`${name} is not invited to the selection list!`);
        if (this.invitedPlayers[foundIndex].age < age) {
            const ageDifference = Math.abs(age - this.invitedPlayers[foundIndex].age);
            if (ageDifference <= 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            };
        } else if (this.invitedPlayers[foundIndex].age >= age) {
            return  `${name} is above age limit!`;
        };
    };

    transferWindowResult() {
        let output = [];
        output.push('Players list:');
        const sorted = this.invitedPlayers.sort((a, b) => a['name'].localeCompare(b['name']));
        sorted.forEach(player => {
            output.push(`Player ${player.name}-${player.playerValue}`);
        });
        return output.join('\n');
    };
};

let fTeam = new FootballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

let fTeamTwo = new FootballTeam("Barcelona", "Spain");
console.log(fTeamTwo.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50",
"Pau Torres/25/52"]));
console.log(fTeamTwo.signContract("Lionel Messi/60"));
console.log(fTeamTwo.signContract("Kylian Mbappé/240"));
console.log(fTeamTwo.signContract("Barbukov/10"));

let fTeamThree = new FootballTeam("Barcelona", "Spain");
console.log(fTeamThree.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50",
"Pau Torres/25/52"]));
console.log(fTeamThree.ageLimit("Lionel Messi", 33 ));
console.log(fTeamThree.ageLimit("Kylian Mbappé", 30));
console.log(fTeamThree.ageLimit("Pau Torres", 26));
console.log(fTeamThree.signContract("Kylian Mbappé/240"));

let fTeamFour = new FootballTeam("Barcelona", "Spain");
console.log(fTeamFour.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50",
"Pau Torres/25/52"]));
console.log(fTeamFour.signContract("Kylian Mbappé/240"));
console.log(fTeamFour.ageLimit("Kylian Mbappé", 30));
console.log(fTeamFour.transferWindowResult());