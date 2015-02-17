var snake = {
  size: 1,
  position: tela.get_center(),
  hash_size: {x:10,y:10},
  color: "#FF0000",
  status: 0,
  direction: 39,
  interval: null,
  speed: 500,
  init: function() {
    add_square(this.position, this.color, this.hash_size);
  },
  on: function() {
    this.interval = window.setInterval(global_walk, this.speed);
  },
  off: function() {
    window.clearInterval(this.interval);
  },
  redraw: function() {
    tela.clear();
    add_square(this.position, this.color, this.hash_size);
  },
  walk: function() {
    this.status = 1;
    if(this.direction == 37)
      this.position.x = this.position.x - this.hash_size.x;
    else if(this.direction == 38)
      this.position.y = this.position.y - this.hash_size.y;
    else if(this.direction == 39)
      this.position.x = this.position.x + this.hash_size.x;
    else if(this.direction == 40)
      this.position.y = this.position.y + this.hash_size.y;
    this.redraw();
  }
}

function global_walk() {
  snake.walk();
}