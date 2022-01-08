let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initializes the game
document.getElementById("next-lbl").innerHTML = nextPlayer;



//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{

    for (let gameBoard of document.getElementsByTagName("td")) {
        let brackets = document.createElement("button")
        brackets.innerHTML = "[]"
        brackets.type = "brackets"
        document.getElementById(gameBoard.id).appendChild(brackets)
    }

}


let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    let test = event.target
    test.innerHTML = nextPlayer
    if (nextPlayer == 'X') {
        nextPlayer = 'O'
    } else {
        nextPlayer = 'X'
    }
    document.getElementById("next-lbl").innerHTML = nextPlayer
    test.disabled = true


    // Check if the game is over
    if (isGameOver())
    {
        let header = document.createElement("h1")
        header.innerHTML = "Game Over"
        document.getElementById('game-over-lbl').appendChild(header)
    }

}

function isGameOver()
{
    let num = 0
    let button = document.querySelectorAll('button')


    for (let i = 0; i < button.length; i++) {

        if (button[i].disabled == true) {
            num++
        }
    }
    if (num == button.length) {
        return true
    } else {
        return false
    }
    // This function returns true if all the buttons are disabled and false otherwise

}