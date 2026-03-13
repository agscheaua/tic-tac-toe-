
// the factory function to create the gameboard and all methods for placement and logic of the game,
// it can be transformed in a module IIFEs;
  
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
        else {};
    }; 
    let loopBreaker = 0;
    const writeInGameboardMapLogic = function() {   
        for (let i = 0; i <= 8; i++) { 
            if (loopBreaker > 0) {
                break;
            }
            else if (player1.getPlayerGamesWon() === 3 && loopBreaker === 0) {
                alert(`${player1.getPlayerName()} has won the game!`);
                console.log(`${player1.getPlayerName()} has won the game!`);
                loopBreaker += 1;
                break;
            }
            else if (player2.getPlayerGamesWon() === 3 && loopBreaker === 0) { 
                alert(`${player2.getPlayerName()} has won the game!`); 
                console.log(`${player2.getPlayerName()} has won the game!`);
                loopBreaker += 1; 
                break; 
            }
            else{
            };  

            if (player1.getPlayerTurn() > player2.getPlayerTurn()) {
                player2.askPlayerSqare();
                for (;gameboardMap[player2.getPlayerSqare() - 1] !== "";) {
                    player2.askPlayerSqare();
                };
                writeInGameboardMap(player2.getPlayerSqare(), player2.getPlayerSymbol());
                player2.incrementTurn();
            }
            else if(player1.getPlayerTurn() < player2.getPlayerTurn()) {
                player1.askPlayerSqare();
                for (;gameboardMap[player1.getPlayerSqare() - 1] !== "";) {
                    player1.askPlayerSqare();
                };
                writeInGameboardMap(player1.getPlayerSqare(), player1.getPlayerSymbol());
                player1.incrementTurn();
            }
            else if (player1.getPlayerTurn() === player2.getPlayerTurn()) {
                if (player1.getPlayerSymbol() === "X") {
                    player1.askPlayerSqare();
                    for (;gameboardMap[player1.getPlayerSqare() - 1] !== "";) {
                        player1.askPlayerSqare();
                    };
                    writeInGameboardMap(player1.getPlayerSqare(), player1.getPlayerSymbol());
                    player1.incrementTurn();
                }
                else if (player2.getPlayerSymbol() === "X") {
                    player2.askPlayerSqare();
                    for (;gameboardMap[player2.getPlayerSqare() - 1] !== "";) {
                        player2.askPlayerSqare();
                    };
                    writeInGameboardMap(player2.getPlayerSqare(), player2.getPlayerSymbol());
                    player2.incrementTurn();
                }
                else {};
            }  
            else {};

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
                    player2.resetPlayerGamesWon();
                    player1.resetTurn();
                    player2.resetTurn(); 
                    player1.incrementGamesPlayed();
                    player2.incrementGamesPlayed();
                    alert(player1.getPlayerName() + " has won the round number " + player1.getGamesPlayed());
                    console.log(player1.getPlayerName() + " has won the round number " + player1.getGamesPlayed());
                    console.log(`${player1.getPlayerName()} score: ` + player1.getPlayerGamesWon(),
                    `${player2.getPlayerName()} score: ` + player2.getPlayerGamesWon());  
                    cleanGameBoardMap();
                    battlefield.givePlayersSymbols();
                    battlefield.writeInGameboardMapLogic();
                }
                else if (player2.getPlayerSymbol() === "X") {
                    player2.incrementPlayerGamesWon();
                    player1.resetPlayerGamesWon();
                    player1.resetTurn();
                    player2.resetTurn(); 
                    player1.incrementGamesPlayed();
                    player2.incrementGamesPlayed();
                    alert(player2.getPlayerName() + " has won the round number " + player2.getGamesPlayed()); 
                    console.log(player2.getPlayerName() + " has won the round number " + player2.getGamesPlayed()); 
                    console.log(`${player1.getPlayerName()} score: ` + player1.getPlayerGamesWon(),
                    `${player2.getPlayerName()} score: ` + player2.getPlayerGamesWon());  
                    cleanGameBoardMap(); 
                    battlefield.givePlayersSymbols();
                    battlefield.writeInGameboardMapLogic(); 
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
                    player2.resetPlayerGamesWon();
                    player1.resetTurn();
                    player2.resetTurn(); 
                    player1.incrementGamesPlayed();
                    player2.incrementGamesPlayed();
                    alert(player1.getPlayerName() + " has won the round number " + player1.getGamesPlayed());
                    console.log(player1.getPlayerName() + " has won the round number " + player1.getGamesPlayed()); 
                    console.log(`${player1.getPlayerName()} score: ` + player1.getPlayerGamesWon(),
                    `${player2.getPlayerName()} score: ` + player2.getPlayerGamesWon());  
                    cleanGameBoardMap(); 
                    battlefield.givePlayersSymbols();
                    battlefield.writeInGameboardMapLogic();
                }          
                else if (player2.getPlayerSymbol() === "O") {
                    player2.incrementPlayerGamesWon();
                    player1.resetPlayerGamesWon(); 
                    player1.resetTurn();
                    player2.resetTurn(); 
                    player1.incrementGamesPlayed();
                    player2.incrementGamesPlayed();
                    alert(player2.getPlayerName() + " has won the round number " + player2.getGamesPlayed()); 
                    console.log(player2.getPlayerName() + " has won the round number " + player2.getGamesPlayed()); 
                    console.log(`${player1.getPlayerName()} score: ` + player1.getPlayerGamesWon(),
                    `${player2.getPlayerName()} score: ` + player2.getPlayerGamesWon());  
                    cleanGameBoardMap();
                    battlefield.givePlayersSymbols();
                    battlefield.writeInGameboardMapLogic();
                }
                else{};
            }
            else if (gameboardMap[0] !== "" && gameboardMap[1] !== "" && gameboardMap[2] !== "" && gameboardMap[3] !== "" &&
                gameboardMap[4] !== "" && gameboardMap[5] !== "" && gameboardMap[6] !== "" && gameboardMap[7] !== "" && gameboardMap[8] !== "") {  
                    player1.resetTurn();
                    player2.resetTurn();    
                    player1.incrementGamesPlayed();
                    player2.incrementGamesPlayed();  
                    alert("Draw, no one won this round!"); 
                    console.log("Draw, no one won this round!");   
                    console.log(`${player1.getPlayerName()} score: ` + player1.getPlayerGamesWon(),
                    `${player2.getPlayerName()} score: ` + player2.getPlayerGamesWon()); 
                    cleanGameBoardMap();
                    battlefield.givePlayersSymbols();
                    battlefield.writeInGameboardMapLogic();
                }
            else {}; 
        };  
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

// the factory function to create the players, (the game was made with only 2 players in mind);

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
    const resetTurn = () => {
        return playerTurn = 0;
    }
    const getPlayerGamesWon = () => {
        return playerGamesWon;
    };
    const incrementPlayerGamesWon = () => {
        return playerGamesWon++;
    };
    const resetPlayerGamesWon = () => {
        return playerGamesWon = 0;
    }
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
    const getPlayerSymbol = () => {
        return playerSymbol;
    };
    const askPlayerSqare = () => {
        return playerSqare = prompt(`${playerName}, please input in the chosen sqare (1 - 9), your symbol ${playerSymbol}.`); 
    };
    const getPlayerSqare = () =>  {  
        return playerSqare;  
    };
    return {
        getPlayerName, getPlayerTurn, incrementTurn, getGamesPlayed, incrementGamesPlayed, 
        givePlayerSymbolX, givePlayerSymbolO, askPlayerSqare, getPlayerSqare, getPlayerSymbol,
        getPlayerGamesWon, incrementPlayerGamesWon, resetPlayerGamesWon, resetTurn,
    };
};

// the 2 players, instances of the player factory function, and the battlefield,
// a instance of gameboard factory function;

const player1 = player("Alex");
const player2 = player("George"); 
const battlefield = gameboard(); 

// the module made with a IIFEs, to control the flow of the game; 

const gameFlow = (function() {
    const playRound = () => {
        battlefield.givePlayersSymbols();
        battlefield.writeInGameboardMapLogic();
    };
    return {
        playRound,
    };
}) ();      
//gameFlow.playRound();   

const displayGame = (function() {
    const elementsCreator = function() {
        const sqaresContainerElement = document.createElement("div");
        sqaresContainerElement.classList.add("sqaresContainer");
        document.body.appendChild(sqaresContainerElement);

        for (let i = 0; i <= 8; i++) {
            const sqareSymbol = document.createElement("div");
            sqareSymbol.classList.add(`sqare${i+1}`, `sqare`); 
            sqaresContainerElement.appendChild(sqareSymbol); 
        };

        const allSqareSymbol = Array.from(document.querySelectorAll(".sqare"));
        for (let i = 0; i <= 8; i++) {
            allSqareSymbol[i].textContent = 1;
        };
    };
 
    return{
        elementsCreator,
    };
}) (); 
displayGame.elementsCreator();

