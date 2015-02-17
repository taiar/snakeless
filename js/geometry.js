var point = { x: 0, y: 0 };
var sc = document.getElementById("screen");

function add_square(p, color, size) {
  p = (typeof p === "undefined") ? { x: 0, y: 0} : p;
  color = (typeof color === "undefined") ? "#FF0000" : color;
  size = (typeof size === "undefined") ? { x: 10, y: 10} : size;
  ctx = sc.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(p.x, p.y, size.x, size.y);
}

var tela = {
  get_center: function() {
    return { x: sc.width / 2, y: sc.height / 2 }
  },
  clear: function() {
    ctx = sc.getContext("2d");
    ctx.clearRect ( 0 , 0 , sc.width, sc.height );
  }
}