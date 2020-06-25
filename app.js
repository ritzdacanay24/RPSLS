
class Game {

    constructor(){
        this.score = 0;
        this.gestureOptions = ['Scissors', 'Paper', 'Rock', 'Lizard', 'Spock'];
        this.maxGames = 3;
        this.playedGames = 0;
        this.marker = '---------------------';
        this.gameMode = '';

    }

    run(){
        this.gameRules();

        this.player1 = new player(this.player1);
        this.player2 = new player(this.player2);

        console.log('Game Details');
        while(this.player1.points < this.maxGames &&  this.player2.points < this.maxGames){
            
            function showConfirm() {
                let playerSelection1 = (prompt("Player1: selct from list: " + this.gestureOptions, ""));
                if (this.gestureOptions.includes(playerSelection1)) {
                } else {
                    alert("Please select from available list.");
                    showConfirm()
                }
            }

            showConfirm();

            this.player1.selection = prompt('Player1: selct from list: ' + this.gestureOptions);

            if(this.gameMode == 'Single'){
                this.player2.chooseRandomGesture(this.gestureOptions);
            }else{
                this.player2.selection = prompt('Player2: selct from list: ' + this.gestureOptions);
            }
            
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

    chooseRandomGesture(options){
        this.selection = options[Math.floor(Math.random() * options.length)];
    }

}

class GameMode extends Game {

    constructor(){
        super()
    }
    single() {
        console.log('single')
        this.player1 = prompt('First player name?');
        this.player2 = 'Devcode';
        this.gameMode = 'Single';
        this.run()
        
    }
      
    mulitiPlayer() {
        console.log('mulitiPlayer')
        this.player1 = prompt('First player name?');
        this.player2 = prompt('Second player name?');
        this.gameMode = 'Mulitplayer';

        if(!this.player1){
            this.mulitiPlayer()
            return;
        }else if(!this.player2){
            this.mulitiPlayer()
            return;
        }

        this.run()
    }
}


let rungame = new GameMode();
rungame.mulitiPlayer();

