const dice = {
    images: {
        1: 'images/dice1.svg',
        2: 'images/dice2.svg',
        3: 'images/dice3.svg',
        4: 'images/dice4.svg',
        5: 'images/dice5.svg',
        6: 'images/dice6.svg'
    },
    n: 6,
    randomNum() {
        const num = Math.floor(Math.random() * 6) + 1;
        return num;
    }
}



const btn = document.querySelector('button');

btn.onclick = function roll() {
    const player1 = dice.randomNum();
    const player2 = dice.randomNum();
    winner(player1, player2);
    document.getElementById('img1').setAttribute('src', dice['images'][player1]);
    document.getElementById('img2').setAttribute('src', dice['images'][player2]);

}


function winner(a, b) {
    if (a > b) {
        document.querySelector('h1').innerHTML = 'Player 1 wins!!';
    } else if (a === b) {
        document.querySelector('h1').innerHTML = 'Its a draw!!';
    } else {
        document.querySelector('h1').innerHTML = 'Player 2 wins!!';
    }
}