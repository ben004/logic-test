let input = {
    team1: {
        name: 'Team G-Revolution',
        power_of_beyblades: [54, 57, 78]
    },
    team2: {
        name: 'Team power',
        power_of_beyblades: [45, 56, 78]
    }
}

const validate = (input) => {
    if (input.team1.power_of_beyblades.length !== input.team2.power_of_beyblades.length) {
        throw "Both team not having same number of players";
    }
    return true;
}

const calculateWinningPossiability = (input) => {
    validate(input);
    let teamGRevolutionWins = 0;
    for (let index = 0; index < input.team1.power_of_beyblades.length; index++) {
        if (input.team1.power_of_beyblades[index] > input.team2.power_of_beyblades[index]) {
            teamGRevolutionWins+=1;
        }
    }
    return `${input.team1.name} can win if they go to fight in an optimal manner of ${teamGRevolutionWins}`;
}

console.log(calculateWinningPossiability(input));