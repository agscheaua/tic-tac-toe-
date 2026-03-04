const gameBoard = (function() {
    return {
        sqare1: "", sqare2: "", sqare3: "",
        sqare4: "", sqare5: "", sqare6: "",
        sqare7: "", sqare8: "", sqare9: "",
    };
}) (); 

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
    const getPlayerScore = () => {
        return playerScore;
    };
    const incrementScore = () => {
        return playerScore++;
    };
    const getPlayerSymbol = () => {
        playerSymbol = prompt("X or O").toUpperCase();
        if (playerChoice === "X" || playerChoice === "O") {
            return playerSymbol;
        }
        else{
            console.log("Invalid symbol chosen.");
        }; 
    }
    const getPlayerSqare = () =>  {
        playerSqare = prompt("sqare1 - sqare9, choose the location of your symbol.").toLowerCase();
        if (playerSqare === "sqare1" || playerSqare === "sqare2" ||
            playerSqare === "sqare3" || playerSqare === "sqare4" ||
            playerSqare === "sqare5" || playerSqare === "sqare6" ||
            playerSqare === "sqare7" || playerSqare === "sqare8" ||
            playerSqare === "sqare9"
        ) {
            return playerSqare;
        }
        else {
            console.log("Invalid sqare placement.");
        }
    }

    return {
        getPlayerName, getPlayerTurn, getPlayerScore, incrementScore,
        getPlayerSymbol, getPlayerSqare
    };
};
const alex = player("alex");
const george = player("george");
console.log(alex);

const gameFlow = function() {
    if (alex.getPlayerTurn() === 0 && george.getPlayerScore() === 0) {

    }
};      