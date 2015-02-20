var sc = document.getElementById("screen");

function add_square(p, color, size) {
  // Defaults values for the square is middle of screen, red, 10x10
  p     = (typeof p === "undefined") ? { x: 0, y: 0} : p;
  color = (typeof color === "undefined") ? "#FF0000" : color;
  size  = (typeof size === "undefined") ? { x: 10, y: 10} : size;
  ctx = sc.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(p.x, p.y, size.x, size.y);
}

function get_random_position() {
  return {
    x: Math.floor(Math.random() * (sc.width + 1)),
    y: Math.floor(Math.random() * (sc.height + 1))
  };
}

var tela = {
  // Get center position of the screen
  get_center: function() {
    return { x: sc.width / 2, y: sc.height / 2 }
  },
  // Get screen dimensions
  get_dimensions: function() {
    return {x: sc.width, y: sc.height };
  },
  // Clear the canvas
  clear: function() {
    ctx = sc.getContext("2d");
    ctx.clearRect ( 0 , 0 , sc.width, sc.height );
  }
};