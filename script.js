
// gamebord object, the fucntion to place the symbol on the specific sqare, 

let randomNumber = Math.floor((Math.random() * 100) +1);  
  
const gameboard = function() {
    const gameboardMap = [  
        "", "", "",
        "", "", "",
        "", "", "",
    ];
    const writeInGameboardMap = (sqare, symbol) => {
        gameboardMap[sqare-1] = symbol;      
    }; 
    const givePlayersSymbols = () => {
        if (player1.getGamesPlayed() % 2 === 0) {   
            player1.givePlayerSymbolX();
            player2.givePlayerSymbolO(); 
        }
        else if (player1.getGamesPlayed() % 2 !== 0) {
            player1.givePlayerSymbolO();
            player2.givePlayerSymbolX();
        }
        else {
            console.log("givePlayersSymbols, problems.") 
        };
    }; 
    const writeInGameboardMapLogic = function() {
        gameboardMap.forEach( (item) => {
            if (player1.getPlayerTurn() > player2.getPlayerTurn()) {
                player2.askPlayerSqare();
                for (;gameboardMap[player2.getPlayerSqare() - 1] !== "";) {
                    player2.askPlayerSqare();
                };
                writeInGameboardMap(player2.getPlayerSqare(), player2.getPlayerSymbol());
                player2.incrementTurn();
                console.log("player1 bigger.") 
            }
            else if(player1.getPlayerTurn() < player2.getPlayerTurn()) {
                player1.askPlayerSqare();
                for (;gameboardMap[player1.getPlayerSqare() - 1] !== "";) {
                    player1.askPlayerSqare();
                };
                writeInGameboardMap(player1.getPlayerSqare(), player1.getPlayerSymbol());
                player1.incrementTurn();
                console.log("player2 bigger.");  
            }
            else if (player1.getPlayerTurn() === player2.getPlayerTurn()) {
                player1.askPlayerSqare();
                for (;gameboardMap[player1.getPlayerSqare() - 1] !== "";) {
                    player1.askPlayerSqare();
                };
                writeInGameboardMap(player1.getPlayerSqare(), player1.getPlayerSymbol());
                player1.incrementTurn();
                console.log("equal"); 
            } 
            else { 
                console.log("problem writeInGameboardMapLogic");  
            };
        } );  
        player1.incrementGamesPlayed();
        player2.incrementGamesPlayed();
        return getGameboardMap();
    };
    const getGameWinner = function() {
        if (gameboardMap[0] !== "") {
        if (gameboardMap[0] === gameboardMap[1] && gameboardMap[1] === gameboardMap[2]) {
            console.log(gameboardMap[1] + " wins!");
        }
        else if (gameboardMap[3] === gameboardMap[4] && gameboardMap[4] === gameboardMap[5]) {
            console.log(gameboardMap[4] + " wins!");
        }
        else if (gameboardMap[6] === gameboardMap[7] && gameboardMap[7] === gameboardMap[8]) {
            console.log(gameboardMap[7] + " wins!");
        }
        else if (gameboardMap[0] === gameboardMap[3] && gameboardMap[3] === gameboardMap[6]) {
            console.log(gameboardMap[1] + " wins!");
        }
        else if (gameboardMap[1] === gameboardMap[4] && gameboardMap[4] === gameboardMap[7]) {
            console.log(gameboardMap[2] + " wins!");
        }
        else if (gameboardMap[2] === gameboardMap[5] && gameboardMap[5] === gameboardMap[8]) {
            console.log(gameboardMap[3] + " wins!");
        }
        else if (gameboardMap[0] === gameboardMap[4] && gameboardMap[4] === gameboardMap[8]) {
            console.log(gameboardMap[1] + " wins!");
        }
        else if (gameboardMap[6] === gameboardMap[4] && gameboardMap[4] === gameboardMap[2]) {
            console.log(gameboardMap[7] + " wins!");  
        }
        else {
        return console.log("pending"); 
        };
        }
        else{
            return console.log("pending");
        } 
    };
    const getGameboardMap = () => {
        return console.log(gameboardMap);   
    };
    return { 
        writeInGameboardMap, getGameboardMap, givePlayersSymbols, writeInGameboardMapLogic,
        getGameWinner,
    }; 
};  

// factory to create players

const player = function(name) {
    const playerName = name;
    let playerTurn = 0; 
    let playerGamesWon = 0;
    let gamesPlayed = 0;
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
    const getPlayerGamesWon = () => {
        return playerGamesWon;
    };
    const incrementPlayerGamesWon = () => {
        return playerGamesWon++;
    };
    const getGamesPlayed = () => {
        return gamesPlayed;
    };
    const incrementGamesPlayed = () => {
        return gamesPlayed++;
    };
    const givePlayerSymbolX = () => {
        return playerSymbol = "X";
    };
    const givePlayerSymbolO = () => {
        return playerSymbol = "O"
    };
    const askPlayerSqare = () => {
        return playerSqare = prompt(`${playerName}, please input in the chosen sqare (1 - 9), your symbol ${playerSymbol}.`); 
    };
    const getPlayerSqare = () =>  {  
        return playerSqare;  
    };
    const getPlayerSymbol = () => {
        return playerSymbol;
    };
    return {
        getPlayerName, getPlayerTurn, incrementTurn, getGamesPlayed, incrementGamesPlayed, 
        givePlayerSymbolX, givePlayerSymbolO, askPlayerSqare, getPlayerSqare, getPlayerSymbol,
        getPlayerGamesWon, incrementPlayerGamesWon,

    };
};
const player1 = player("Alex");
const player2 = player("George");

 const gameFlow = function() {
    if (player1.getPlayerTurn() === 0 && player2.getPlayerTurn() === 0) {
        if (randomNumber > 50) {

        }
        else if (randomNumber <= 50) {
 
        }
        else {
            console.log("0-100 problem"); 
        }
    }
    else {
        console.log("else player turn");
    }
 };

const firstGame = gameboard(); 
//firstGame.givePlayersSymbols();
//firstGame.writeInGameboardMapLogic();  
console.log(player1.getPlayerTurn(), player2.getPlayerTurn(), player1.getGamesPlayed());  
         