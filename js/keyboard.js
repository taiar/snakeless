function key_controll(e){
  if(e.keyCode == 37)
    key_left();
  else if(e.keyCode == 38)
    key_up();
  else if(e.keyCode == 39)
    key_right();
  else if(e.keyCode == 40)
    key_down();
}

function key_left()   { snake.direction =  37; }
function key_up()     { snake.direction =  38; }
function key_right()  { snake.direction =  39; }
function key_down()   { snake.direction =  40; }