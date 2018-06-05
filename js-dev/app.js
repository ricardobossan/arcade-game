// var global = window;
/*
TODO:

* write and  instantiate all enemy objects and write the player object
  because it's the only reason the canvas is not writing, according
  to the `console`, in dev tools

*/
// Enemies our player must avoid
// Constructors can't use arrow functions
var Enemy = function(x, y) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';
	this.x = x;
	this.y = y;
	this.speed = Math.floor(Math.random() * 10 + 1);
	//this.iLX = -100;
	//this.iLY = iLY/*this.name === enemy1 ? 223 : this.name === enemy2 ? 280 : this.name === enemy3 ? 320 : null*/;
};


var enemy1 = new Enemy(-100, 223);
var enemy2 = new Enemy(-100, 280);
var enemy3 = new Enemy(-100, 320);

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = (dt) => {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	dt();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = () => {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

let enemyPosition = () => {

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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

/*
####################################TESTS#################################
*/
/*
// trying console.log tests
var test = function(z, n) {
	return z + n;
};

// ##TEST## k(triangulate: test
/*(function(){
	console.log(`TESTING: test function 1: ${test(4, 8)}`);
	console.log(`TESTING: test function 2: ${test(40, -8)}`);
	console.log(`TESTING: test function 3: ${test(2/3	, 8)}`);
}());
*/