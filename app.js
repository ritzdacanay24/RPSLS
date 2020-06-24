
class Game {

    constructor(player1, player2){
        this.score = 0;
        this.gestureOptions = ['Scissors', 'Paper', 'Rock', 'Lizard', 'Spock'];
        this.maxGames = 3;
        this.playedGames = 0;
        this.marker = '---------------------';

        this.player1 = new player(player1);
        this.player2 = new player(player2);
    }

    run(){
        this.gameRules();

        console.log('Game Details');
        while(this.player1.points < this.maxGames &&  this.player2.points < this.maxGames){
            this.player1.randomlySelectGestures(this.gestureOptions);
            this.player2.randomlySelectGestures(this.gestureOptions);
            
            this.validateResults();
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
        console.log(this.player1);
        console.log(this.player2);
        if(this.player1.points > this.player2.points) {
            console.log('Game Results: ' + this.player1.name + " wins this game");
        }else {
            console.log('Game Results: ' + this.player2.name + " wins this game");
        }
    }

    validateResults(){

        console.log('Game: ' + this.playedGames + ': ' + this.player1.selection + ' ' + this.player2.selection);

        if(this.player1.selection === this.player2.selection){
            console.log('Its a tie game!');
        }else{
            if (this.player1.selection === 'Rock'){
                if (this.player2.selection === 'Paper' || this.player2.selection === 'Spock'){
                    this.incrementScoreAndDisplayMessage(this.player2)
                } else {
                    this.incrementScoreAndDisplayMessage(this.player1)
                }
            }else if (this.player1.selection === 'Paper'){
                if (this.player2.selection === 'Scissors' || this.player2.selection === 'Lizard') {
                    this.incrementScoreAndDisplayMessage(this.player2)
                } else {
                    this.incrementScoreAndDisplayMessage(this.player1)
                }
            }else if (this.player1.selection === 'Scissors'){
                if (this.player2.selection === 'Rock' || this.player2.selection === 'Spock') {
                    this.incrementScoreAndDisplayMessage(this.player2)
                } else {
                    this.incrementScoreAndDisplayMessage(this.player1)
                }
            }else if (this.player1.selection === 'Lizard'){
                if (this.player2.selection === 'Rock' || this.player2.selection === 'Scissors') {
                    this.incrementScoreAndDisplayMessage(this.player2)
                } else {
                    this.incrementScoreAndDisplayMessage(this.player1)
                }
            }else if (this.player1.selection === 'Spock'){
                if (this.player2.selection === 'Lizard' || this.player2.selection === 'Paper') {
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
        this.selection = "";
    }

    randomlySelectGestures(options){
        this.selection = options[Math.floor(Math.random() * options.length)];
    }
}

// class GameMode extends Game {

//     constructor(name, name1){
//         super(name, name1)
//     }
//     single() {
//         console.log('single')
//         console.log(this)
//       }

//     mulitiPlayer() {
//         console.log('mulitiPlayer')
//         console.log(this)
//     }
// }

let rungame = new Game('Ritz', 'Devcode');
rungame.run()

