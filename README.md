gameboard - module made with IIFE
    gameboardMap - the array that holds all 9 symbols
    writeInGameboardMap() - function that takes two arguments (the first argument is the location in the array you want to write something, the second the data you want to write)
    cleanGameBoardMap() - clean the array of any written data
    getGameboardMap() - will long in the browser console the gamebordMap array
    getCopyGameboardMap() - create a copy of the gamebordMap and returns it, the copy cannot change the original
    
//
    
player - factory function to create player instances
    it holds multiple private variables and multiple methods, you can deduct their functionality from their name
    
//
    
displayGame - module made with IIFE
    create the container for the squares in witch the symbols are placed
    create all 9 squares inside the container
    create an array that holds a reference to all 9 squares
    cleanDispaySymbols() - clean all squares of any text inside them
    givePlayersSymbolsDisplay() - give the player 1 and player 2 their symbols based on the GAMES PLAYED, player 1 always starts first with X then player 2 starts round 2 with X, and the change goes on...
    getFirstPlayer() - log in console at the start of each round the first mover and its symbol, 
    displayGameLogic() - add a event listener to the squares container, when the mouse is press down on each square, it will calculate each player turn based on the number of turns each has had, it will calculate if someone has won the game, when the game is won the player gamesWon variable that holds the nr. of consecutive wins get incremented with 1, it will reset the score of the loser to 0, it will reset the turn played of each player, and will increment the nr. of games played of each player, it will, announce the game winner, clean the gameboardMap array, clean the display squares; it announce each round witch player is to input and with what symbol; at 3 consecutive wins anounce the whole game winner with alert and reset the gamesWon variable to 0.
    
    
