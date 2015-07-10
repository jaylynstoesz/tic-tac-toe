window.onload = function() {
  var div = document.getElementsByClassName('cell');
  var player = document.getElementById('player');
  for(var i = 0; i < div.length; i++){
    div[i].addEventListener('click', function(e){
      if (player.innerHTML === "player 1") {
        if (e.currentTarget.innerHTML === "") {
          e.currentTarget.innerHTML = " X";
          player.innerHTML = "player 2";
        }
      } else {
        if (e.currentTarget.innerHTML === "") {
          e.currentTarget.innerHTML = " O";
          player.innerHTML = "player 1";
        }
      }
    });
  }
}
