
// gamebord object, the fucntion to place the symbol on the specific sqare, 

let randomNumber = Math.floor((Math.random() * 100) +1); 
  
const gameboard = (function() {
    const gameboardMap = [
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
        givePlayerSymbolX, givePlayerSymbolO, givePlayerSqare, getPlayerSqare, getPlayerSymbol, 

    };
};
const player1 = player("Alex");
const player2 = player("George");
