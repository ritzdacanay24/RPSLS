
class game {

    constructor(){
        this.score = 0;
        this.gestureOptions = ['Scissors', 'Paper', 'Rock', 'Lizard', 'Spock'];
        this.totalGames = 3;

        this.player1 = new player('Ritz');
        this.player2 = new player('DevCode');
    }

    run(){
        this.gameRules();
        let playerSelection1 = this.player1.randomlySelectGestures(this.gestureOptions);
        let playerSelection2 = this.player1.randomlySelectGestures(this.gestureOptions);

        this.validateResults(playerSelection1, playerSelection2);
    }

    gameRules(){
        console.log('Welcome to RPSLS');
        console.log('Best of three wins the game');
    }

    validateResults(p1, p2){
        console.log(p1);
        console.log(p2);
    }
}

class player {
    constructor(name){
        this.points = 0;
        this.name = name;
    }

    randomlySelectGestures(options){
        return options[Math.floor(Math.random() * options.length)];
    }
}

let rungame = new game();
rungame.run();

