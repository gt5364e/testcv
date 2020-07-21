
function playGame(){
  var playerone = Math.random() * 6;
  var playertwo = Math.random() * 6;

  playerone = Math.floor(playerone);
  playertwo = Math.floor(playertwo);

  if(playerone > playertwo){
    document.getElementById("winner").innerHTML = "Player 1 Wins";
  } else if(playerone < playertwo){
    document.getElementById("winner").innerHTML = "Player 2 Wins";
  } else if(playerone = playertwo){
    document.getElementById("winner").innerHTML = "Draw";
  }

  switch(playerone){
    case 0:
    document.getElementById("diceONE").src = "images/dice1.png"
    break;

    case 1:
    document.getElementById("diceONE").src = "images/dice2.png"
    break;

    case 2:
    document.getElementById("diceONE").src = "images/dice3.png"
    break;

    case 3:
    document.getElementById("diceONE").src = "images/dice4.png"
    break;

    case 4:
    document.getElementById("diceONE").src = "images/dice5.png"
    break;

    case 5:
    document.getElementById("diceONE").src = "images/dice6.png"
    break;
  }


  switch(playertwo){
    case 0:
    document.getElementById("diceTWO").src = "images/dice1.png"
    break;

    case 1:
    document.getElementById("diceTWO").src = "images/dice2.png"
    break;

    case 2:
    document.getElementById("diceTWO").src = "images/dice3.png"
    break;

    case 3:
    document.getElementById("diceTWO").src = "images/dice4.png"
    break;

    case 4:
    document.getElementById("diceTWO").src = "images/dice5.png"
    break;

    case 5:
    document.getElementById("diceTWO").src = "images/dice6.png"
    break;
  }
}
