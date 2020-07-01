// Player  status


let currentPlayer = true;
let player_1 = false; // times
let Player_2 = false; //circle


player_1 = currentPlayer; // active player

// click the block to show the times or circle according to the player term

function show(elem) {
    let block = document.querySelector(`.${elem}`);
    let times = block.querySelector('.fa-times'); //player 1 symbol
    let circle = block.querySelector('.fa-circle'); // player 2 symbol
    let allPlayer = block.querySelector('i');


    if (allPlayer.classList.contains('show')) {

        alert('Plese select empty box');
    } else {
        // for payer 1 (Times Player ) to show circle when clicked
        if (player_1 === true) {
            if (times.classList.contains("hide") == true) {
                times.classList.add("show");
            }


            player_1 = false;
            Player_2 = currentPlayer;
        } else {
            if (circle.classList.contains("hide") == true) {
                circle.classList.add("show");
            }


            Player_2 = false;
            player_1 = currentPlayer;
        }

    }
}