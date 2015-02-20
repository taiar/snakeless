var snake = {
  // Snake's present size
  size: 1,
  // Snake's maximum size (the minimun is 1)
  max_size: 100,
  // Snake's present position (default is the middle of the sceeen)
  position: tela.get_center(),
  // Snake's hashes body size in pixels
  hash_size: {x:10,y:10},
  // Snake's color
  color: "#FF0000",
  // Snake's status (0 is not moving, 1 is moving)
  status: 0,
  // Snake's direction following JS keycodes for arrow keys (default is right)
  direction: 39,
  // Variable that holds the interval reference for snake to move
  interval: null,
  // Snake's time interval to move (acts like Snake's speed)
  speed: 150,
  // Snake's body's hashes positions
  hashes: [],
  /** (Re)Start the snake */
  init: function() {
    // Snake's body initial size is 1 in the middle of the screen
    this.hashes = [];
    this.hashes.push(tela.get_center());
    foods.push(new food());
    this.redraw();
    this.on();
  },
  /** Makes the snake to move */
  on: function() {
    this.status = 1;
    this.interval = window.setInterval(global_walk, this.speed);
  },
  /** Makes the snake to stop */
  off: function() {
    this.status = 0;
    window.clearInterval(this.interval);
  },
  /** Print snake's body
   *
   * TODO: put all draw methods inside a new class or file
   * */
  redraw: function() {
    tela.clear();
    this.hashes.forEach(function(element){
      add_square(element, this.color, this.hash_size);
    });
    draw_food();
  },
  /** Changes snake's direction based on the direction it is moving. */
  change_direction: function(direction_code) {
    this.direction = (direction_code != opposed_direction[this.direction]) ?
      direction_code : this.direction;
  },
  /** Recalculate the new snake's body position and call the draw function
        making it walk */
  walk: function() {
    // Snake's new position based on the direction it is going
    if(this.direction == 37)
      this.position.x = (this.position.x - this.hash_size.x < 0) ?
        tela.get_dimensions().x : this.position.x - this.hash_size.x;
    else if(this.direction == 38)
      this.position.y = (this.position.y - this.hash_size.y < 0) ?
        tela.get_dimensions().y : this.position.y - this.hash_size.y;
    else if(this.direction == 39)
      this.position.x = (this.position.x + this.hash_size.x) %
        tela.get_dimensions().x;
    else if(this.direction == 40)
      this.position.y = (this.position.y + this.hash_size.y) %
        tela.get_dimensions().y;
    // Calculate the new body position moving like a snake
    old_pos = {};
    new_pos = {x: this.position.x, y: this.position.y};
    for (i = 0; i < this.hashes.length; i++) {
      old_pos = this.hashes[i];
      this.hashes[i] = new_pos;
      new_pos = old_pos;
    }
    // Check if snake eats
    foods.forEach(function(element,index){
      if(Math.abs(element.position.x - snake.position.x) <= snake.hash_size.x &&
        Math.abs(element.position.y - snake.position.y) <= snake.hash_size.y) {
        snake.eat(index);
      }
    });
    // Redraw Snake's body
    this.redraw();
  },
  /** Add a new hash bit on the snake */
  add_hash: function() {
    if(this.size >= this.max_size) {
      this.size = this.max_size;
    } else {
      this.size = this.size + 1;
      this.hashes.push({
        x: this.hashes[this.hashes.length - 1].x - this.hash_size.x,
        y: this.hashes[this.hashes.length - 1].y
      });
    }
  },
  /** Snake eats */
  eat: function(food_index) {
    foods.splice(food_index, 1);
    this.add_hash();
    foods.push(new food());
  },
  /** Remove hash bit off the snake */
  remove_hash: function() {
    if(this.size <= 1) {
      this.size = 1;
    } else {
      this.size = this.size - 1;
      this.hashes.splice(-1,1);
    }
  },
  /** Toggles snake on/off */
  toggle: function() {
    if(this.status == 1)
      this.off();
    else this.on();
  }
};

function global_walk() {
  snake.walk();
}
