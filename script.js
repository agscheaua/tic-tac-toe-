
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
                console.log("writeInGameboardMapLogic, problem.");  
            };

            if (
                (gameboardMap[0] === "X" && gameboardMap[1] === "X" && gameboardMap[2] === "X") ||
                (gameboardMap[3] === "X" && gameboardMap[4] === "X" && gameboardMap[5] === "X") ||
                (gameboardMap[6] === "X" && gameboardMap[7] === "X" && gameboardMap[8] === "X") ||
                (gameboardMap[0] === "X" && gameboardMap[3] === "X" && gameboardMap[6] === "X") ||
                (gameboardMap[1] === "X" && gameboardMap[4] === "X" && gameboardMap[7] === "X") ||
                (gameboardMap[2] === "X" && gameboardMap[5] === "X" && gameboardMap[8] === "X") ||
                (gameboardMap[0] === "X" && gameboardMap[4] === "X" && gameboardMap[8] === "X") ||
                (gameboardMap[6] === "X" && gameboardMap[4] === "X" && gameboardMap[2] === "X")
            ) {
                if (player1.getPlayerSymbol() === "X") {
                    player1.incrementPlayerGamesWon();
                   alert(player1.getPlayerName() + " has won the game!");
                    player1.incrementGamesPlayed();
                    player2.incrementGamesPlayed();
                    cleanGameBoardMap();
                    firstGame.givePlayersSymbols();
                    firstGame.writeInGameboardMapLogic();  
                }
                else if (player2.getPlayerSymbol() === "X") {
                    player2.incrementPlayerGamesWon();
                    alert(player2.getPlayerName() + " has won the game!"); 
                    player1.incrementGamesPlayed();
                    player2.incrementGamesPlayed();
                    cleanGameBoardMap();
                    firstGame.givePlayersSymbols();
                    firstGame.writeInGameboardMapLogic();  
                }
                else{};
            }
            else if (
                (gameboardMap[0] === "O" && gameboardMap[1] === "O" && gameboardMap[2] === "O") ||
                (gameboardMap[3] === "O" && gameboardMap[4] === "O" && gameboardMap[5] === "O") ||
                (gameboardMap[3] === "O" && gameboardMap[4] === "O" && gameboardMap[5] === "O") ||
                (gameboardMap[0] === "O" && gameboardMap[3] === "O" && gameboardMap[6] === "O") ||
                (gameboardMap[1] === "O" && gameboardMap[4] === "O" && gameboardMap[7] === "O") ||
                (gameboardMap[2] === "O" && gameboardMap[5] === "O" && gameboardMap[8] === "O") ||
                (gameboardMap[0] === "O" && gameboardMap[4] === "O" && gameboardMap[8] === "O") ||
                (gameboardMap[6] === "O" && gameboardMap[4] === "O" && gameboardMap[2] === "O")
            ) {
                if (player1.getPlayerSymbol() === "O") {
                    player1.incrementPlayerGamesWon();
                    alert(player1.getPlayerName() + " has won the game!");
                    player1.incrementGamesPlayed();
                    player2.incrementGamesPlayed();
                    cleanGameBoardMap();
                    firstGame.givePlayersSymbols();
                    firstGame.writeInGameboardMapLogic();  
                }          
                else if (player2.getPlayerSymbol() === "O") {
                    player2.incrementPlayerGamesWon();
                    alert(player2.getPlayerName() + " has won the game!");
                    player1.incrementGamesPlayed();
                    player2.incrementGamesPlayed();
                    cleanGameBoardMap();
                    firstGame.givePlayersSymbols();
                    firstGame.writeInGameboardMapLogic();   
                }
                else{};
            }
            else { 
                return "Draw, no one won the game!";   
            };
        } );  
        player1.incrementGamesPlayed();
        player2.incrementGamesPlayed();
        cleanGameBoardMap();
    };
    const cleanGameBoardMap = () => {
        for (let i = 0; i <= 8; i++ ) {
            gameboardMap[i] = "";
        }; 
    }
    const getGameboardMap = () => {
        return console.log(gameboardMap);   
    };
    return { 
        writeInGameboardMap, getGameboardMap, givePlayersSymbols, writeInGameboardMapLogic,
        cleanGameBoardMap,
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
};

const firstGame = gameboard();    
firstGame.givePlayersSymbols();
firstGame.writeInGameboardMapLogic();    
/*firstGame.givePlayersSymbols();
firstGame.writeInGameboardMapLogic();  */
console.log(player1.getPlayerTurn(), player2.getPlayerTurn(), player1.getGamesPlayed());  
console.log(player1.getPlayerGamesWon(), player2.getPlayerGamesWon());   