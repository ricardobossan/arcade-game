// var global = window;
/*
TODO:

* write and  instantiate all enemy objects and write the player object
  because it's the only reason the canvas is not writing, according
  to the `console`, in dev tools

*/
// Enemies our player must avoid
// Constructors can't use arrow functions
//var canvasX = document.querySelector('canvas').width;
//let dt = !NaN;
/*document.body.appendChild(img1);
const img2 = new Image();
img2.src = 'images/char-boy.png';
img2.alt = 'boy';
document.body.appendChild(img2);
*/
var Enemy = function(x, y) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images

	this.sprite = 'images/enemy-bug.png';
	this.x = x;
	this.y = y;
	this.speed = Math.floor(Math.random() * 10 + 1);
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = (dt) => {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	this.x += this.speed * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = () => {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.speed = Math.floor(Math.random() * 10 + 1);
		this.sprite = 'images/char-boy.png';
	}
	update(dt) {
		// You should multiply any movement by the dt parameter
		// which will ensure the game runs at the same speed for
		// all computers.
		this.x += this.speed * dt;
	}
	// Draw the eney on the screen, required method for game
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
let enemiesY = [143, 223, 305];
for(let enemyY of enemiesY) {
	let enemy = new Enemy(0, enemyY);
	allEnemies.push(enemy);
}
/*var enemy1 = new Enemy(0, 142);
var enemy2 = new Enemy(0, 223);
var enemy3 = new Enemy(0, 305);
enemy1.addToArray();
enemy2.addToArray();
enemy3.addToArray();
*/
// Place the player object in a variable called player
var player = new Player(252, 526);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', (e) => {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[e.keyCode]);
});