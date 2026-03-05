
// gamebord object, the fucntion to place the symbol on the specific sqare 

const gameboard = (function() {
    let gameboardMap = [
        "", "", "",
        "", "", "",
        "", "", "",
    ];
    const gameboardMapSymboled = function(sqare, symbol) {
        gameboardMap[sqare-1] = symbol;      
    };
    const getGameboardMap = () => {
        console.log(gameboardMap);   
    };
    return { gameboardMapSymboled, getGameboardMap,
    }; 
}) (); 

// factory to create players

const player = function(name) {
    const playerName = name;
    let playerTurn = 0;
    let playerScore = 0;
    let playerSymbol;
    let playerSqare;
    const getPlayerName = () => {
        return playerName;
    };
    const getPlayerTurn = () => { 
        return playerTurn;
    };
    const incrementTurn = () => {
        return playerTurn++;
    };
    const getPlayerScore = () => {
        return playerScore;
    };
    const incrementScore = () => {
        return playerScore++;
    };
    const givePlayerSymbolX = () => {
        playerSymbol = "X";
    };
    const givePlayerSymbolO = () => {
        playerSymbol = "O"
    };
    const givePlayerSqare = () => {
        playerSqare = prompt(`${playerName}, please input in the chosen sqare (1 - 9), your symbol ${playerSymbol}.`); 
    };
    const getPlayerSqare = () =>  {  
        return playerSqare;  
    };
    const getPlayerSymbol = () => {
        return playerSymbol;
    };
    return {
        getPlayerName, getPlayerTurn, incrementTurn, getPlayerScore, incrementScore,
        givePlayerSymbolX, givePlayerSymbolO, getPlayerSqare, getPlayerSymbol, 
        givePlayerSqare,
    };
};
const player1 = player("Alex");
const player2 = player("George");

// the logic to play

let randomNumber = Math.floor((Math.random() * 100) +1);     

const gameFlow = function() {
    if (player1.getPlayerTurn() === 0 && player2.getPlayerTurn() === 0) {
        if (randomNumber >= 50) {
            player1.givePlayerSymbolX();  
            player2.givePlayerSymbolO();  
            player1.incrementTurn();  
            
                player1.givePlayerSqare();  
                player2.givePlayerSqare();
                gameboard.gameboardMapSymboled(player1.getPlayerSqare(), player1.getPlayerSymbol()); 
                gameboard.gameboardMapSymboled(player2.getPlayerSqare(), player2.getPlayerSymbol());
        }   
        /*else if (randomNumber < 50) { 
            player2.givePlayerSymbolX();   
            player2.givePlayerSqare();
            player2.incrementTurn();

            player1.givePlayerSymbolO();  
            player1.givePlayerSqare(); 

            gameboard.gameboardMapSymboled(player2.getPlayerSqare(), player2.getPlayerSymbol()); 
            gameboard.gameboardMapSymboled(player1.getPlayerSqare(), player1.getPlayerSymbol());
        }*/
        else { 
            console.log("something is wrong.");    
        }   
        console.log(gameboard.getGameboardMap());               
    }              
};               