let squares = document.querySelectorAll(".gameSquare");

let playerTurn = true;
let won = false;
// Generella tankar: Gör en function för att kolla "Winning-positions" och gör kollen efter varje drag.
// 
let firstPlayer = {
    name: "PlayerOne",
    wins: 0,

}

let secPlayer = {
    name: "PlayerTwo",
    wins: 0,

}

function play() {

    for (let i = 0; i < squares.length; i++) {

        squares[i].addEventListener("click", function (e) {
            if (won) return;
            let square = e.target;
            if (playerTurn) {
                playerOne(square);


            } else {
                playerTwo(square);


            }
            console.log(playerTurn);



            checkWinning2();
        })
    };
}

let startScreen = document.querySelector(".start");
startScreen.addEventListener("click", function () {
    startScreen.classList.toggle("hide");
});

function playerOne(div) {
    if (div.textContent) return;

    let x = document.createElement("i");
    x.textContent = "clear";
    x.className = "material-icons piece";

    div.appendChild(x);
    playerTurn = !playerTurn;

}

function playerTwo(div) {
    if (div.textContent) return;
    let o = document.createElement("i");
    o.textContent = "radio_button_unchecked";

    o.className = "material-icons piece";
    div.appendChild(o);
    playerTurn = !playerTurn;

}


/* function checkWinning() { // Funkar bra, men ful lösning.
    // check if someone won or tie.

    for (let i = 0; i < squares.length; i++) {
        console.log(squares[i].innerText)
        if (squares[0].innerText === "clear" && squares[1].innerText === "clear" && squares[2].innerText === "clear") {
            console.log("Player one Won!");
            won = true;
            renderWin(playerOne)
            return;
        } else if (squares[0].innerText === "radio_button_unchecked" && squares[1].innerText === "radio_button_unchecked" && squares[2].innerText === "radio_button_unchecked") {
            console.log("Player two Won!");
            won = true;
            renderWin(playerTwo)
            return;
        } else if (squares[3].innerText === "clear" && squares[4].innerText === "clear" && squares[5].innerText === "clear") {
            console.log("Player one Won!");
            won = true;
            renderWin(playerOne)
            return;
        } else if (squares[3].innerText === "radio_button_unchecked" && squares[4].innerText === "radio_button_unchecked" && squares[5].innerText === "radio_button_unchecked") {
            console.log("Player two Won!");
            won = true;
            renderWin(playerTwo)
            return;
        } else if (squares[6].innerText === "clear" && squares[7].innerText === "clear" && squares[8].innerText === "clear") {
            console.log("Player one Won!");
            won = true;
            renderWin(playerOne)
            return;
        } else if (squares[6].innerText === "radio_button_unchecked" && squares[7].innerText === "radio_button_unchecked" && squares[8].innerText === "radio_button_unchecked") {
            console.log("Player two Won!");
            won = true;
            renderWin(playerTwo)
            return;
        } else if (squares[0].innerText === "clear" && squares[3].innerText === "clear" && squares[7].innerText === "clear") {
            console.log("Player one Won!");
            won = true;
            renderWin(playerOne)
            return;
        } else if (squares[0].innerText === "radio_button_unchecked" && squares[3].innerText === "radio_button_unchecked" && squares[7].innerText === "radio_button_unchecked") {
            console.log("Player two Won!");
            won = true;
            renderWin(playerTwo)
            return;
        } else if (squares[1].innerText === "clear" && squares[4].innerText === "clear" && squares[8].innerText === "clear") {
            console.log("Player one Won!");
            won = true;
            renderWin(playerOne)
            return;
        } else if (squares[1].innerText === "radio_button_unchecked" && squares[4].innerText === "radio_button_unchecked" && squares[8].innerText === "radio_button_unchecked") {
            console.log("Player two Won!");
            won = true;
            renderWin(playerTwo)
            return;
        } else if (squares[2].innerText === "clear" && squares[5].innerText === "clear" && squares[8].innerText === "clear") {
            console.log("Player one Won!");
            won = true;
            renderWin(playerOne)
            return;
        } else if (squares[2].innerText === "radio_button_unchecked" && squares[5].innerText === "radio_button_unchecked" && squares[8].innerText === "radio_button_unchecked") {
            console.log("Player two Won!");
            won = true;
            renderWin(playerTwo)
            return;
        } else if (squares[0].innerText === "clear" && squares[4].innerText === "clear" && squares[8].innerText === "clear") {
            console.log("Player one Won!");
            won = true;
            renderWin(playerOne)
            return;
        } else if (squares[0].innerText === "radio_button_unchecked" && squares[4].innerText === "radio_button_unchecked" && squares[8].innerText === "radio_button_unchecked") {
            console.log("Player two Won!");
            won = true;
            renderWin(playerTwo)
            return;
        } else if (squares[2].innerText === "clear" && squares[4].innerText === "clear" && squares[6].innerText === "clear") {
            console.log("Player one Won!");
            won = true;
            return;
        } else if (squares[2].innerText === "radio_button_unchecked" && squares[4].innerText === "radio_button_unchecked" && squares[6].innerText === "radio_button_unchecked") {
            console.log("Player two Won!");
            renderWin(playerTwo)
            won = true;
            return;
        }

    }
} */
// Kom på något smart sätt att kolla vinster.
function checkWinning2() {
    const winStates = [ // Dessa är helt enkelt alla möjliga vinstrader gjorda i arrayer i en array. 
        [0, 1, 2], // horisontell rad
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // vertikal
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], // Diagonal
        [2, 4, 6]
    ]
    for (let i = 0; i < winStates.length; i++) { // Loop för hela arrayen
        let player = null; // Null för att hålla reda på första klicket på respektive rad.
        for (let square of winStates[i]) {

            if (player === null && squares[square].innerText !== "") { // Om första klicket (alltså null) och rutan inte är tom ->
                player = squares[square].innerText; // Player = X el O.
            } else if (player !== squares[square].innerText) { // Om rutan jämte "player"-rutan blir tagen av motståndaren kommer den raden helt enkelt inte räknas med. därav break;
                break;
            } else if (square === winStates[i][winStates[i].length - 1]) { // om föregående inte händer kommer det att bli en hel rad när man klickar i sista rutan för respektive vinstrad.
                // Då görs antagandet att alla rutor i respektive rad är av samma "X" eller "O".
                won = true;
                if (player === "clear") {
                    renderWin(firstPlayer);
                } else renderWin(secPlayer);
            }
        }
        if (won) break;
    }
}

function renderWin(player) {
    /* let bg = document.createElement("div");
    bg.className = "winScreen-BG";
    document.body.appendChild(bg); */

    let div = document.createElement("div");
    div.className = "winScreen";
    let p = document.createElement("p");
    p.className = "winScreen-text"
    p.textContent = player.name + " won!";
    div.appendChild(p);
    let resBtn = document.createElement("button");
    resBtn.className = "resBtn";
    resBtn.textContent = "Reset";
    div.appendChild(resBtn);
    document.body.appendChild(div);
    resBtn.addEventListener("click", function () {
        div.remove();
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = "";
        };

        won = false;
        playerTurn = true;
        player.wins++;
        play();
        console.log(playerTurn);
    })

};
play();