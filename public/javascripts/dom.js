window.onload = function() {
  var combos = [
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"],
    ["one", "four", "seven"],
    ["two", "five", "eight"],
    ["three", "six", "nine"],
    ["one", "five", "nine"],
    ["three", "five", "seven"]
  ];

  var player1 = {};
  var player2 = {};
  var win1, win2;
  var div = document.getElementsByClassName('cell');
  var player = document.getElementById('player');
  var filled = [];

  function score() {
    for (var i = 0; i < combos.length; i++) {
      var first = combos[i][0];
      var second = combos[i][1];
      var third = combos[i][2];
      if (player1[first] * player1[second] * player1[third] === 8) {
        win1 = true;
      }
      if (player2[first] * player2[second] * player2[third] === 27) {
        win2 = true;
      }
    }
  }

  for(var i = 0; i < div.length; i++){
    div[i].addEventListener('click', function(e){
      filled.push(e.currentTarget.id);
      if (player.innerHTML === "player 1") {
        if (e.currentTarget.innerHTML === "") {
          e.currentTarget.innerHTML = " X";
          player.innerHTML = "player 2";
          player1[e.currentTarget.id] = 2;
        }
      } else {
        if (e.currentTarget.innerHTML === "") {
          e.currentTarget.innerHTML = " O";
          player2[e.currentTarget.id] = 3;
          player.innerHTML = "player 1";
        }
      }
    score();
    if (filled.length === 9) {
      alert("Cat's Game! Click OK to start over.");
      player1 = {};
      player2 = {};
      filled = [];
      player.innerHTML = "player 1";
      for (var i = 0; i < div.length; i++) {
        div[i].innerHTML = "";
      }
    }
    else if (win1) {
      alert("Player 1 kicked your ass!");
      player1 = {};
      player2 = {};
      filled = [];
      player.innerHTML = "player 1";
      win1 = false;
      for (var j = 0; j < div.length; j++) {
        div[j].innerHTML = "";
      }
    } else if (win2) {
      alert("Player 2 pwned your ass!");
      player1 = {};
      player2 = {};
      filled = [];
      player.innerHTML = "player 1";
      win2 = false;
      for (var k = 0; k < div.length; k++) {
        div[k].innerHTML = "";
      }
    }
    });
  }
};
