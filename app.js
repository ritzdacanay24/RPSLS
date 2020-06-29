class Game {

    constructor(){
        this.score = 0;
        this.gestureOptions = ['Scissors', 'Paper', 'Rock', 'Lizard', 'Spock'];
        this.maxGames = 3;
        this.playedGames = 0;
        this.marker = '---------------------';
        this.gameMode = '';

    }

    //main funtion to run game.
    run(){
        this.gameRules();

        this.player1 = new player(this.player1);
        this.player2 = new player(this.player2);

        console.log('Game Details');

        //run loop until one of the playes reaches the max games. 
        while(this.player1.points < this.maxGames &&  this.player2.points < this.maxGames){
            
            //for each round, make sure the entered gesture is valid. 
            this.validateGesture(this.player1);
            
            //if game mode is single, randomly select a gesture value for the computer.
            if(this.gameMode == 'Single'){
                this.player2.selection = this.player2.chooseRandomGesture(this.gestureOptions);
            }else{
                
                //if game mode is multiplayer, lets get the input from the human for the second player.
                this.validateGesture(this.player2);
            }

            //get the round winner between the two players. 
            this.validateResults();
        }

        this.diplayWinner();

    }

    //values entered by users should be a valid entry.
    validateGesture(player){
        player.selection = prompt(player.name + ': select from list: ' + this.gestureOptions)

        if(!this.gestureOptions.includes(player.selection)){
            alert('Incorrect value. Please try again.');
            this.validateGesture(player)
        }
        
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

        //compare selection from player 1 and player 2 and add 1 point to the player who won. 
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
        return options[Math.floor(Math.random() * options.length)];
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
        this.run()
    }

    runMode(){
        let gameMode = prompt('Enter 1 for single mode or 2 for multiplayer');
        
        if(gameMode == 1){
            this.single();
        }else if(gameMode == 2){
            this.mulitiPlayer();
        }
    }

}

let runGame = new GameMode();
runGame.runMode();



