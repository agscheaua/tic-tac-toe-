
// module made with an IIFE, holds the gameboard array and functions
// that interat with it;
const gameboard = (function() {
    const gameboardMap = [  
        "", "", "",
        "", "", "",
        "", "", "",
    ];

    const writeInGameboardMap = (sqare, symbol) => {
        gameboardMap[sqare-1] = symbol;      
    }; 

    const cleanGameBoardMap = () => {
        for (let i = 0; i <= 8; i++ ) {
            gameboardMap[i] = "";
        }; 
    };

    const getGameboardMap = () => {
        return console.log(gameboardMap);   
    };

    const getCopyGameboardMap = () => {
        let copyOfGameboardMap = gameboardMap.slice(0);
        return copyOfGameboardMap;
    };

    return { 
        writeInGameboardMap, cleanGameBoardMap, getGameboardMap, getCopyGameboardMap
    };  
}) ();  

// factory function to create instances of player; 
const player = function(name) { 
    let playerName = name;
    let playerTurn = 0; 
    let playerGamesWon = 0;
    let gamesPlayed = 0;
    let playerSymbol;
    let playerSqare;
    const getPlayerName = () => {
        return playerName;
    };

    const changePlayerName = (newName) => {
        return playerName = newName;
    };

    const getPlayerTurn = () => { 
        return playerTurn;
    };

    const incrementTurn = () => {
        return playerTurn++;
    };

    const resetTurn = () => {
        return playerTurn = 0;
    };

    const getPlayerGamesWon = () => {
        return playerGamesWon;
    };

    const incrementPlayerGamesWon = () => {
        return playerGamesWon++;
    };

    const resetPlayerGamesWon = () => {
        return playerGamesWon = 0;
    };

    const getGamesPlayed = () => {
        return gamesPlayed;
    };

    const incrementGamesPlayed = () => {
        return gamesPlayed++;
    };

    const resetGamesPlayed = () => {
        return gamesPlayed = 0;
    }

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

    const givePlayerSqare = (sqare) => {
        return playerSqare = sqare;
    };

    return {
        getPlayerName, getPlayerTurn, incrementTurn, getGamesPlayed, incrementGamesPlayed, 
        givePlayerSymbolX, givePlayerSymbolO, askPlayerSqare, getPlayerSqare, getPlayerSymbol,
        getPlayerGamesWon, incrementPlayerGamesWon, resetPlayerGamesWon, resetTurn,
        givePlayerSqare, resetGamesPlayed, changePlayerName,
    };
};

// two instances of player;
const player1 = player("Player-1");
const player2 = player("Player-2");   

// module made with IIFE that control the game display, and all its logic
const displayGame = function() { 
    
    //variable that need to be used in all the other methods of displayGame module (IIFE);
    let roundFinish;

    const gameInfoAndControl = document.querySelector(".gameInfoAndControl");

    const gameInitiationContainer = document.querySelector(".gameInitiationContainer");
    const gameName = document.querySelector(".gameName");
    const startGameButton = document.querySelector(".startGameButton");

    const gameControlAndInfo = document.querySelector(".gameControlAndInfo");
    const firstPlayer = document.querySelector(".firstPlayer");
    const secondPlayer = document.querySelector(".secondPlayer");
    const roundNumber = document.querySelector(".roundNumber");
    const roundInfo = document.querySelector(".roundInfo");
    const resetGame = document.querySelector(".resetGame");
    const changeNameButton = document.querySelector(".changeNameButton");

    const boardgameDisplay = document.querySelector(".boardgameDisplay");
    const sqaresContainerElement = document.createElement("div");
    sqaresContainerElement.classList.add("sqaresContainer");  
    boardgameDisplay.appendChild(sqaresContainerElement); 

    for (let i = 0; i <= 8; i++) {
        const sqareSymbol = document.createElement("div");
        sqareSymbol.classList.add(`sqare${i+1}`, "sqare"); 
        sqaresContainerElement.appendChild(sqareSymbol); 
    }; 

    const allSqareToSymbol = Array.from(document.querySelectorAll(".sqare"));

    //clean all sqare of all the text;
    const cleanDispaySymbols = () => {
        for (let i = 0; i <= 8; i++) {
            allSqareToSymbol[i].textContent = "";
        };
    }; 

    //change the name of the player any time you want;
    const changeName = function() {
        changeNameButton.addEventListener("click", () => {
            let player1Name = prompt("Enter a new name of maximum 16 and minimum 1 characters for Player-1: ");
            if (player1Name == null) {
                player1Name = "Player-1"
                player1.changePlayerName(player1Name);
            } 
            else{; 
                for (;player1Name.length > 16 || player1Name.length < 1;) { 
                    player1Name = prompt("Enter a new name of maximum 16 and minimum 1 characters for Player-1: ");
                };
                player1.changePlayerName(player1Name);
            };

            let player2Name = prompt("Enter a new name of maximum 16 and minimum 1 characters for Player-2: ");
            if (player2Name == null) {
                player2Name = "Player-2"
                player2.changePlayerName(player2Name);
            } 
            else{; 
                for (;player2Name.length > 16 || player2Name.length < 1;) { 
                    player2Name = prompt("Enter a new name of maximum 16 and minimum 1 characters for Player-1: ");
                };
                player2.changePlayerName(player2Name); 
            };
     
            getFirstPlayer();  
            getPlayerSymbol();
            gameInfo();n
            console.log(player1.getPlayerName(), player2.getPlayerName()); 
        });   
    };
    
    //give players their symbols based on the rounds played;
    const givePlayersSymbolsDisplay = function() {
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
    
    //annonce the first player to input at the start of the game;
    const getFirstPlayer = function() {
        givePlayersSymbolsDisplay();
        if (player1.getPlayerTurn() === player2.getPlayerTurn() && (player1.getPlayerTurn() === 0 && player2.getPlayerTurn() === 0)) {
            if (player1.getPlayerSymbol() === "X") { 
                console.log(`${player1.getPlayerName()} turn with '${player1.getPlayerSymbol()}' symbol`);
                roundInfo.textContent = `${player1.getPlayerName()} turn with '${player1.getPlayerSymbol()}' symbol`;
            }
            else if (player2.getPlayerSymbol() === "X") {
                console.log(`${player2.getPlayerName()} turn with '${player2.getPlayerSymbol()}' symbol`);
                roundInfo.textContent = `${player2.getPlayerName()} turn with '${player2.getPlayerSymbol()}' symbol`;
            } 
            else {};     
        } 
        else{}; 
    }; 

    //announce the current player turn with its symbol;
    const getPlayerSymbol = function() {
        if (player1.getPlayerTurn() > player2.getPlayerTurn()) {
            console.log(`${player2.getPlayerName()} turn with '${player2.getPlayerSymbol()}' symbol`);
            roundInfo.textContent = `${player2.getPlayerName()} turn with '${player2.getPlayerSymbol()}' symbol`;
        }
        else if (player1.getPlayerTurn() < player2.getPlayerTurn()) {
            console.log(`${player1.getPlayerName()} turn with '${player1.getPlayerSymbol()}' symbol`);
            roundInfo.textContent = `${player1.getPlayerName()} turn with '${player1.getPlayerSymbol()}' symbol`;
        }
        else if (player1.getPlayerTurn() === player2.getPlayerTurn()) {
            if (player1.getPlayerSymbol() === "X") {
                console.log(`${player1.getPlayerName()} turn with '${player1.getPlayerSymbol()}' symbol`);
                roundInfo.textContent = `${player1.getPlayerName()} turn with '${player1.getPlayerSymbol()}' symbol`;
            }
            else if (player2.getPlayerSymbol() === "X") {
                console.log(`${player2.getPlayerName()} turn with '${player2.getPlayerSymbol()}' symbol`);
                roundInfo.textContent = `${player2.getPlayerName()} turn with '${player2.getPlayerSymbol()}' symbol`;
            }
            else {};  
        }
        else {};     
    };

    //anounce the current score;
    const gameInfo = function() { 
        firstPlayer.textContent = `${player1.getPlayerName()} score: ${player1.getPlayerGamesWon()}`;
        secondPlayer.textContent = `${player2.getPlayerName()} score: ${player2.getPlayerGamesWon()}`;
        roundNumber.textContent = `Round number: ${player1.getGamesPlayed()}`;
    };

    const displayGameLogic = function() {  
        gameInfo(); 
        sqaresContainerElement.addEventListener("mousedown", (elem) => {
            givePlayersSymbolsDisplay();
            gameInfo();
            
            // get the square clicked index inside the gameboardMap array;
            let sqareClicked = elem.target.classList[0].slice(-1); 

            //write the symbol in the square clicked;
            if (player1.getPlayerTurn() > player2.getPlayerTurn()) { 
                player2.givePlayerSqare(sqareClicked); 
                if (gameboard.getCopyGameboardMap()[player2.getPlayerSqare() - 1] === "" ) {
                    gameboard.writeInGameboardMap(player2.getPlayerSqare(), player2.getPlayerSymbol());
                    elem.target.textContent = (gameboard.getCopyGameboardMap()[sqareClicked - 1]); 
                    player2.incrementTurn();
                }
                else {player2.givePlayerSqare(sqareClicked)};
            }
            else if(player1.getPlayerTurn() < player2.getPlayerTurn()) {
                player1.givePlayerSqare(sqareClicked);
                if (gameboard.getCopyGameboardMap()[player1.getPlayerSqare() - 1] === "") {
                    gameboard.writeInGameboardMap(player1.getPlayerSqare(), player1.getPlayerSymbol());
                    elem.target.textContent = (gameboard.getCopyGameboardMap()[sqareClicked - 1]); 
                    player1.incrementTurn();
                }
                else {player1.givePlayerSqare(sqareClicked)};      
            }
            else if (player1.getPlayerTurn() === player2.getPlayerTurn()) {
                if (player1.getPlayerSymbol() === "X") {
                    player1.givePlayerSqare(sqareClicked);
                    if (gameboard.getCopyGameboardMap()[player1.getPlayerSqare() - 1] === "") {
                        gameboard.writeInGameboardMap(player1.getPlayerSqare(), player1.getPlayerSymbol());
                        elem.target.textContent = (gameboard.getCopyGameboardMap()[sqareClicked - 1]); 
                        player1.incrementTurn();
                    }
                    else {player1.givePlayerSqare(sqareClicked)};
                }
                else if (player2.getPlayerSymbol() === "X") {
                    player2.givePlayerSqare(sqareClicked); 
                    if (gameboard.getCopyGameboardMap()[player2.getPlayerSqare() - 1] === "" ) {
                        gameboard.writeInGameboardMap(player2.getPlayerSqare(), player2.getPlayerSymbol());
                        elem.target.textContent = (gameboard.getCopyGameboardMap()[sqareClicked - 1]); 
                        player2.incrementTurn();
                    }
                    else {player2.givePlayerSqare(sqareClicked)};
                }
                else {};
            }   
            else {};   

            //check to see if any player has won the game, round;
            if (
                (gameboard.getCopyGameboardMap()[0] === "X" && gameboard.getCopyGameboardMap()[1] === "X" && gameboard.getCopyGameboardMap()[2] === "X") ||
                (gameboard.getCopyGameboardMap()[3] === "X" && gameboard.getCopyGameboardMap()[4] === "X" && gameboard.getCopyGameboardMap()[5] === "X") ||
                (gameboard.getCopyGameboardMap()[6] === "X" && gameboard.getCopyGameboardMap()[7] === "X" && gameboard.getCopyGameboardMap()[8] === "X") ||
                (gameboard.getCopyGameboardMap()[0] === "X" && gameboard.getCopyGameboardMap()[3] === "X" && gameboard.getCopyGameboardMap()[6] === "X") ||
                (gameboard.getCopyGameboardMap()[1] === "X" && gameboard.getCopyGameboardMap()[4] === "X" && gameboard.getCopyGameboardMap()[7] === "X") ||
                (gameboard.getCopyGameboardMap()[2] === "X" && gameboard.getCopyGameboardMap()[5] === "X" && gameboard.getCopyGameboardMap()[8] === "X") ||
                (gameboard.getCopyGameboardMap()[0] === "X" && gameboard.getCopyGameboardMap()[4] === "X" && gameboard.getCopyGameboardMap()[8] === "X") ||
                (gameboard.getCopyGameboardMap()[6] === "X" && gameboard.getCopyGameboardMap()[4] === "X" && gameboard.getCopyGameboardMap()[2] === "X")
            ) {
                if (player1.getPlayerSymbol() === "X") {
                    player1.incrementPlayerGamesWon();
                    player2.resetPlayerGamesWon(); 
                    player1.resetTurn();
                    player2.resetTurn(); 
                    player1.incrementGamesPlayed(); 
                    player2.incrementGamesPlayed();
                    roundFinish = true;
                    console.log(player1.getPlayerName() + " has won the round number " + player1.getGamesPlayed());
                    console.log(`${player1.getPlayerName()} score: ` + player1.getPlayerGamesWon(),
                    `${player2.getPlayerName()} score: ` + player2.getPlayerGamesWon());  
                    gameboard.cleanGameBoardMap();
                    cleanDispaySymbols();   
                }
                else if (player2.getPlayerSymbol() === "X") {
                    player2.incrementPlayerGamesWon();
                    player1.resetPlayerGamesWon();
                    player1.resetTurn();
                    player2.resetTurn(); 
                    player1.incrementGamesPlayed();
                    player2.incrementGamesPlayed();
                    roundFinish = true;
                    console.log(player2.getPlayerName() + " has won the round number " + player2.getGamesPlayed()); 
                    console.log(`${player1.getPlayerName()} score: ` + player1.getPlayerGamesWon(),
                    `${player2.getPlayerName()} score: ` + player2.getPlayerGamesWon());  
                    gameboard.cleanGameBoardMap(); 
                    cleanDispaySymbols();
                }
                else{};
            }
            else if (
                (gameboard.getCopyGameboardMap()[0] === "O" && gameboard.getCopyGameboardMap()[1] === "O" && gameboard.getCopyGameboardMap()[2] === "O") ||
                (gameboard.getCopyGameboardMap()[3] === "O" && gameboard.getCopyGameboardMap()[4] === "O" && gameboard.getCopyGameboardMap()[5] === "O") ||
                (gameboard.getCopyGameboardMap()[3] === "O" && gameboard.getCopyGameboardMap()[4] === "O" && gameboard.getCopyGameboardMap()[5] === "O") ||
                (gameboard.getCopyGameboardMap()[0] === "O" && gameboard.getCopyGameboardMap()[3] === "O" && gameboard.getCopyGameboardMap()[6] === "O") ||
                (gameboard.getCopyGameboardMap()[1] === "O" && gameboard.getCopyGameboardMap()[4] === "O" && gameboard.getCopyGameboardMap()[7] === "O") ||
                (gameboard.getCopyGameboardMap()[2] === "O" && gameboard.getCopyGameboardMap()[5] === "O" && gameboard.getCopyGameboardMap()[8] === "O") ||
                (gameboard.getCopyGameboardMap()[0] === "O" && gameboard.getCopyGameboardMap()[4] === "O" && gameboard.getCopyGameboardMap()[8] === "O") ||
                (gameboard.getCopyGameboardMap()[6] === "O" && gameboard.getCopyGameboardMap()[4] === "O" && gameboard.getCopyGameboardMap()[2] === "O")
            ) {
                if (player1.getPlayerSymbol() === "O") {
                    player1.incrementPlayerGamesWon();
                    player2.resetPlayerGamesWon();
                    player1.resetTurn();
                    player2.resetTurn(); 
                    player1.incrementGamesPlayed();
                    player2.incrementGamesPlayed();
                    roundFinish = true;
                    console.log(player1.getPlayerName() + " has won the round number " + player1.getGamesPlayed()); 
                    console.log(`${player1.getPlayerName()} score: ` + player1.getPlayerGamesWon(),
                    `${player2.getPlayerName()} score: ` + player2.getPlayerGamesWon());  
                    gameboard.cleanGameBoardMap(); 
                    cleanDispaySymbols() 
                }          
                else if (player2.getPlayerSymbol() === "O") {
                    player2.incrementPlayerGamesWon();
                    player1.resetPlayerGamesWon(); 
                    player1.resetTurn();
                    player2.resetTurn(); 
                    player1.incrementGamesPlayed(); 
                    player2.incrementGamesPlayed();
                    roundFinish = true;
                    console.log(player2.getPlayerName() + " has won the round number " + player2.getGamesPlayed()); 
                    console.log(`${player1.getPlayerName()} score: ` + player1.getPlayerGamesWon(),
                    `${player2.getPlayerName()} score: ` + player2.getPlayerGamesWon());  
                    gameboard.cleanGameBoardMap();
                    cleanDispaySymbols()                    
                }
                else{}; 
            }
            else if (gameboard.getCopyGameboardMap()[0] !== "" && gameboard.getCopyGameboardMap()[1] !== "" && gameboard.getCopyGameboardMap()[2] !== "" && gameboard.getCopyGameboardMap()[3] !== "" &&
                gameboard.getCopyGameboardMap()[4] !== "" && gameboard.getCopyGameboardMap()[5] !== "" && gameboard.getCopyGameboardMap()[6] !== "" && gameboard.getCopyGameboardMap()[7] !== "" && gameboard.getCopyGameboardMap()[8] !== "") {  
                    player1.resetTurn();
                    player2.resetTurn();    
                    player1.incrementGamesPlayed();
                    player2.incrementGamesPlayed();  
                    roundFinish = true;
                    console.log("Draw, no one won this round!");   
                    console.log(`${player1.getPlayerName()} score: ` + player1.getPlayerGamesWon(),
                    `${player2.getPlayerName()} score: ` + player2.getPlayerGamesWon()); 
                    gameboard.cleanGameBoardMap();
                    cleanDispaySymbols(); 
                }
            else {
                console.log("Pending.");
            }; 

            //display the current player that needs to input along side its symbol;
            if (roundFinish !== true) {  
                getPlayerSymbol();
            } 
            else {
                console.log("Round end."); 
                roundFinish = false;
                getFirstPlayer();
            };  

            gameInfo();

            //declare a winner after 3 consecutive wins;
            if (player1.getPlayerGamesWon() === 3) {
                alert(`${player1.getPlayerName()} has won the game!`);
                console.log(`${player1.getPlayerName()} has won the game!`);
                player1.resetPlayerGamesWon();
                player2.resetPlayerGamesWon(); 
                gameInfo();
                
            }
            else if (player2.getPlayerGamesWon() === 3) { 
                alert(`${player2.getPlayerName()} has won the game!`); 
                console.log(`${player2.getPlayerName()} has won the game!`);
                player1.resetPlayerGamesWon();
                player2.resetPlayerGamesWon(); 
                gameInfo();
            } 
            else{};  
            console.log(gameboard.getCopyGameboardMap());
        });  
    }; 

    const resetGameButton = function() {
        resetGame.addEventListener("click", () => {
            location.reload();
            displayGame(); 
        });
    };

    const invokeVisibility = function() { 
        gameControlAndInfo.style.visibility = "visible";    
    }; 
    
    const gameStart = function() {
        startGameButton.addEventListener("click", () => {  
                gameInitiationContainer.remove();   
                invokeVisibility(); 
                resetGameButton();
                changeName();
                gameInfo();  
                getFirstPlayer();  
                displayGameLogic();   
        });
    };
   
    return{
        displayGameLogic, getFirstPlayer, gameInfo, resetGameButton, gameStart, changeName, getPlayerSymbol, 
    };   
};   
displayGame().gameStart();          