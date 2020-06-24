
class game {

    constructor(){
        this.score = 0;
        this.gestureOptions = ['Scissors', 'Paper', 'Rock', 'Lizard', 'Spock'];
        this.maxGames = 3;
        this.playedGames = 0;
        this.marker = '---------------------';

        this.player1 = new player('Ritz');
        this.player2 = new player('DevCode');
    }

    run(){
        this.gameRules();

        console.log('Game Details');
        while(this.player1.points < this.maxGames &&  this.player2.points < this.maxGames){
            let playerSelection1 = this.player1.randomlySelectGestures(this.gestureOptions);
            let playerSelection2 = this.player2.randomlySelectGestures(this.gestureOptions);
            
            this.validateResults(playerSelection1, playerSelection2);
        }

        this.diplayWinner();

    }

    gameRules(){
        console.log('Welcome to RPSLS');
        console.log('First to three wins the game.');
        console.log(this.marker);
    }

    diplayWinner(){
        console.log(this.marker);
        if(this.player1.points > this.player2.points) {
            console.log('Game Results: ' + this.player1.name + " wins this game");
        }else {
            console.log('Game Results: ' + this.player2.name + " wins this game");
        }
    }

    validateResults(p1, p2){

        console.log('Game: ' + this.playedGames + ': ' + p1 + ' ' + p2);

        if(p1 === p2){
            console.log('Its a tie game!');
        }else{
            if (p1 === 'Rock'){
                if (p2 === 'Paper' || p2 === 'Spock'){
                    this.incrementScoreAndDisplayMessage(this.player2)
                } else {
                    this.incrementScoreAndDisplayMessage(this.player1)
                }
            }else if (p1 === 'Paper'){
                if (p2 === 'Scissors' || p2 === 'Lizard') {
                    this.incrementScoreAndDisplayMessage(this.player2)
                } else {
                    this.incrementScoreAndDisplayMessage(this.player1)
                }
            }else if (p1 === 'Scissors'){
                if (p2 === 'Rock' || p2 === 'Spock') {
                    this.incrementScoreAndDisplayMessage(this.player2)
                } else {
                    this.incrementScoreAndDisplayMessage(this.player1)
                }
            }else if (p1 === 'Lizard'){
                if (p2 === 'Rock' || p2 === 'Scissors') {
                    this.incrementScoreAndDisplayMessage(this.player2)
                } else {
                    this.incrementScoreAndDisplayMessage(this.player1)
                }
            }else if (p1 === 'Spock'){
                if (p2 === 'Lizard' || p2 === 'Paper') {
                    this.incrementScoreAndDisplayMessage(this.player2)
                } else {
                    this.incrementScoreAndDisplayMessage(this.player1)
                }
            }
        }

        this.playedGames++;
    }

    
    incrementScoreAndDisplayMessage(playerInfo){
        console.log(playerInfo.name + ' wins the round!')
        playerInfo.points++
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

