class SmartHike {
    constructor(username, goals = {}, listOfHikes = [], resources = 100) {
        this.username = username;
        this.goals = goals;
        this.listOfHikes = listOfHikes;
        this.resources = resources;
    };

    addGoal(peak, altitude) {
        const foundIndex = Object.keys(this.goals).findIndex(item => item === peak);

        if (foundIndex === -1) {
            this.goals[peak] = Number(altitude);
            return `You have successfully added a new goal - ${peak}`;
        };
        
        return `${peak} has already been added to your goals`;
    };

    hike(peak, time, difficultyLevel) {
        const foundIndex = Object.keys(this.goals).findIndex(item => item === peak);

        if (foundIndex === -1) throw new Error(`${peak} is not in your current goals`);
        if (this.resources === 0) throw new Error('You don\'t have enough resources to start the hike');

        const diff = this.resources - (time * 10);
        if (diff < 0) return 'You don\'t have enough resources to complete the hike';

        this.resources -= (time * 10);
        this.listOfHikes.push({
            peak: peak,
            time: Number(time),
            difficultyLevel: difficultyLevel
        });

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    };

    rest(time) {
        this.resources += (time * 10);

        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        };

        return `You have rested for ${time} hours and gained ${time * 10}% resources`
    };

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) return `${this.username} has not done any hiking yet`;

        if (criteria === 'hard') {
            const filteredArray = this.listOfHikes.filter(hike => hike.difficultyLevel === 'hard');
            if (filteredArray.length === 0) return `${this.username} has not done any ${criteria} hiking yet`;

            const sorted = filteredArray.sort((a, b) => a.time - b.time);

            return `${this.username}'s best ${criteria} hike is ${sorted[0].peak} peak, for ${sorted[0].time} hours`;
        } else if (criteria === 'easy') {
            const filteredArray = this.listOfHikes.filter(hike => hike.difficultyLevel === 'easy');
            if (filteredArray.length === 0) return `${this.username} has not done any ${criteria} hiking yet`;

            const sorted = filteredArray.sort((a, b) => a.time - b.time);

            return `${this.username}'s best ${criteria} hike is ${sorted[0].peak} peak, for ${sorted[0].time} hours`;
        } else if (criteria === 'all') {
            let output = [];
            output.push('All hiking records:');
            this.listOfHikes.forEach(hike => {
                output.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`)
            });
            return output.join('\n');
        };
    };
};

const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.addGoal('Musala', 2925));

const userTwo = new SmartHike('Vili');
console.log(userTwo.addGoal('Musala', 2925));
console.log(userTwo.addGoal('Rui', 1706));
console.log(userTwo.hike('Musala', 8, 'hard'));
console.log(userTwo.hike('Rui', 3, 'easy'));
console.log(userTwo.hike('Everest', 12, 'hard'));

const userThree = new SmartHike('Vili');
console.log(userThree.addGoal('Musala', 2925));
console.log(userThree.hike('Musala', 8, 'hard'));
console.log(userThree.rest(4));
console.log(userThree.rest(5));

const userFour = new SmartHike('Vili');
console.log(userFour.showRecord('all'));

const userFive = new SmartHike('Vili');
userFive.addGoal('Musala', 2925);
userFive.hike('Musala', 8, 'hard');
console.log(userFive.showRecord('easy'));
userFive.addGoal('Vihren', 2914);
userFive.hike('Vihren', 4, 'hard');
console.log(userFive.showRecord('hard'));
userFive.addGoal('Rui', 1706);
userFive.hike('Rui', 3, 'easy');
console.log(userFive.showRecord('all'));