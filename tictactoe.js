let squares = document.querySelectorAll(".gameSquare");
let squareArr = Array.from(squares);
let playerTurn = true;
let won = false;
// Generella tankar: Gör en function för att kolla "Winning-positions" och gör kollen efter varje drag.
// 
let firstPlayer = {
    name: "PlayerOne",
    won: false,

}

let secPlayer = {
    name: "PlayerTwo",
    won: false,

}


for (let i = 0; i < squares.length; i++) {
    squares[i].id = i;
    squares[i].addEventListener("click", function (e) {
        if (won) return;
        let square = e.target;
        if (playerTurn) {
            playerOne(square);
        } else playerTwo(square);

        playerTurn = !playerTurn;
        checkWinning2();
    })
};

let startScreen = document.querySelector(".start");
startScreen.addEventListener("click", function (e) {
    startScreen.classList.toggle("hide");
});

function playerOne(div) {
    if (div.textContent) return;
    myTurn = true;
    let x = document.createElement("i");
    x.textContent = "clear";
    x.className = "material-icons piece";

    div.appendChild(x);
}

function playerTwo(div) {
    if (div.textContent) return;
    let o = document.createElement("i");
    o.textContent = "radio_button_unchecked";
    let text = o.textContent;
    o.className = "material-icons piece";
    div.appendChild(o);
    return text;
}


function checkWinning() {
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
}
// Kom på något smart sätt att kolla vinster.
function checkWinning2() {
    const winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < winStates.length; i++) {
        let player = null;
        for (let square of winStates[i]) {
            console.log(square);
            if (player === null && squares[square].innerText !== "") {
                player = squares[square].innerText;
            } else if (player !== squares[square].innerText) {
                break;
            } else if (square === winStates[i][winStates[i].length - 1]) {

                won = true;
                if (player === "clear") {
                    renderWin(playerOne);
                } else renderWin(playerTwo);
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
    /* resBtn.addEventListener("click", function () {

    }) */

};