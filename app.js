
class game {

    constructor(){
        this.score = 0;
        this.gestureOptions = ['Scissors', 'Paper', 'Rock', 'Lizard', 'Spock'];

        this.player1 = new player('Ritz');
        this.player2 = new player('DevCode');
    }

    run(){
        this.gameRules();
    }

    gameRules(){
        console.log('Welcome to RPSLS');
        console.log('Best of three wins the game');
    }
}

class player {
    constructor(name){
        this.points = 0;
        this.name = name;
    }

    randomlySelectGestures(){
        return this.gestureOptions[Math.floor(Math.random() * this.gestureOptions.length)];
    }
}

let rungame = new game();
rungame.run();

