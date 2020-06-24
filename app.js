
class game {
    constructor(){
        this.score = 0;
        this.gestureOptions = ['Scissors', 'Paper', 'Rock', 'Lizard', 'Spock'];
    }

    randomlySelectGestures(){
        return this.gestureOptions[Math.floor(Math.random() * this.gestureOptions.length)];
    }
}

class player {
    constructor(name){
        this.points = 0;
        this.name = name;
    }
}


