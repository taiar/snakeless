var foods = [];

var food_interval = window.setInterval(function() {
  foods.push(new food());
}, 5000);

var off_the_food_interval = window.setInterval(function() {
  foods.shift();
}, 5000);

function food(color, size){
  this.position = get_random_position();
  this.color = (typeof color === "undefined") ? "#FFFF00" : color;
  this.size  = (typeof size === "undefined") ? { x: 10, y: 10} : size;
}

/** Draw all food
 * * TODO: put all draw methods inside a new class or file
 */
function draw_food() {
  foods.forEach(function(element){
    add_square(element.position, element.color, element.size);
  });
}