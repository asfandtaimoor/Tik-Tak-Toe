// Wining Algorithm

// Value

let box_1 = document.querySelector('.block-1');
let box_2 = document.querySelector('.block-2');
let box_3 = document.querySelector('.block-3');
let box_4 = document.querySelector('.block-4');
let box_5 = document.querySelector('.block-5');
let box_6 = document.querySelector('.block-6');
let box_7 = document.querySelector('.block-7');
let box_8 = document.querySelector('.block-8');
let box_9 = document.querySelector('.block-9');

// player 1

let p1_b1 = box_1.querySelector('.fa-times');
let p1_b2 = box_2.querySelector('.fa-times');
let p1_b3 = box_3.querySelector('.fa-times');
let p1_b4 = box_4.querySelector('.fa-times');
let p1_b5 = box_5.querySelector('.fa-times');
let p1_b6 = box_6.querySelector('.fa-times');
let p1_b7 = box_7.querySelector('.fa-times');
let p1_b8 = box_8.querySelector('.fa-times');
let p1_b9 = box_9.querySelector('.fa-times');


// Player 2

let p2_b1 = box_1.querySelector('.fa-circle');
let p2_b2 = box_2.querySelector('.fa-circle');
let p2_b3 = box_3.querySelector('.fa-circle');
let p2_b4 = box_4.querySelector('.fa-circle');
let p2_b5 = box_5.querySelector('.fa-circle');
let p2_b6 = box_6.querySelector('.fa-circle');
let p2_b7 = box_7.querySelector('.fa-circle');
let p2_b8 = box_8.querySelector('.fa-circle');
let p2_b9 = box_9.querySelector('.fa-circle');



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




    if (times.classList.contains('hide') && circle.classList.contains('hide')) {


        // for payer 1 (Times Player ) to show circle when clicked
        if (player_1 === true) {
            if (times.classList.contains("hide") == true) {
                times.classList.remove("hide");
            }


            player_1 = false;
            Player_2 = currentPlayer;
        } else {
            if (circle.classList.contains("hide") == true) {
                circle.classList.remove("hide");
            }


            Player_2 = false;
            player_1 = currentPlayer;
        }

    } else {
        alert("Please select empty one");
    }

    // Winning algo for player 1


    if (!(p1_b1.classList.contains('hide') || p1_b2.classList.contains('hide') || p1_b3.classList.contains('hide'))) {
        alert("Line 1 working");
    } else if (!(p1_b4.classList.contains('hide') || p1_b5.classList.contains('hide') || p1_b6.classList.contains('hide'))) {
        alert("line 2 working");
    } else if (!(p1_b7.classList.contains('hide') || p1_b8.classList.contains('hide') || p1_b9.classList.contains('hide'))) {
        alert("line 3 working");
    } else if (!(p1_b1.classList.contains('hide') || p1_b4.classList.contains('hide') || p1_b7.classList.contains('hide'))) {
        alert("Top left to bottom right working");
    } else if (!(p1_b2.classList.contains('hide') || p1_b5.classList.contains('hide') || p1_b8.classList.contains('hide'))) {
        alert("Top left to bottom right working");
    } else if (!(p1_b3.classList.contains('hide') || p1_b6.classList.contains('hide') || p1_b9.classList.contains('hide'))) {
        alert("Top left to bottom right working");
    } else if (!(p1_b1.classList.contains('hide') || p1_b5.classList.contains('hide') || p1_b9.classList.contains('hide'))) {
        alert("Top left to bottom right working");
    } else if (!(p1_b3.classList.contains('hide') || p1_b5.classList.contains('hide') || p1_b7.classList.contains('hide'))) {
        alert("Top left to bottom right working");
    }

    // Winning algo for player 2
    if (!(p2_b1.classList.contains('hide') || p2_b2.classList.contains('hide') || p2_b3.classList.contains('hide'))) {
        alert(" circle Line 1 working");
    } else if (!(p2_b4.classList.contains('hide') || p2_b5.classList.contains('hide') || p2_b6.classList.contains('hide'))) {
        alert("circle line 2 working");
    } else if (!(p2_b7.classList.contains('hide') || p2_b8.classList.contains('hide') || p2_b9.classList.contains('hide'))) {
        alert("circle line 3 working");
    } else if (!(p2_b1.classList.contains('hide') || p2_b4.classList.contains('hide') || p2_b7.classList.contains('hide'))) {
        alert("circle Top left to bottom right working");
    } else if (!(p2_b2.classList.contains('hide') || p2_b5.classList.contains('hide') || p2_b8.classList.contains('hide'))) {
        alert("circle Top left to bottom right working");
    } else if (!(p2_b3.classList.contains('hide') || p2_b6.classList.contains('hide') || p2_b9.classList.contains('hide'))) {
        alert("circle Top left to bottom right working");
    } else if (!(p2_b1.classList.contains('hide') || p2_b5.classList.contains('hide') || p2_b9.classList.contains('hide'))) {
        alert("circle Top left to bottom right working");
    } else if (!(p2_b3.classList.contains('hide') || p2_b5.classList.contains('hide') || p2_b7.classList.contains('hide'))) {
        alert("circle Top left to bottom right working");
    }

}



// main algo