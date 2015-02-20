/** Global key code callback for keyboard interaction */
function key_controll(e){
  if(e.keyCode == 37)
    key_left();
  else if(e.keyCode == 38)
    key_up();
  else if(e.keyCode == 39)
    key_right();
  else if(e.keyCode == 40)
    key_down();
  else if(e.keyCode == 107)
    key_add();
  else if(e.keyCode == 109)
    key_subtract();
  else if(e.keyCode == 80)
    key_o();
}

/** Actions fired by key codes */
function key_left()     { snake.direction =  37; }
function key_up()       { snake.direction =  38; }
function key_right()    { snake.direction =  39; }
function key_down()     { snake.direction =  40; }
function key_add()      { snake.add_hash();      }
function key_subtract() { snake.remove_hash();   }
function key_o()        { snake.toggle();        }