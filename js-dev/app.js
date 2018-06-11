// Enemy's constructor function
var Enemy = function(x, y, speed) {

	this.sprite = 'images/enemy-bug.png';
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.width = 89;
	this.height = 71;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	this.x += this.speed * dt;
	// checks for colliision betwen the player and enemy objects
	(function() {
		(function() {
			for(let i = 0; i < allEnemies.length; i++) {
				if ((player.x < allEnemies[i].x + allEnemies[i].width) &&
				(player.x + player.width > allEnemies[i].x) &&
				(player.y < allEnemies[i].y + allEnemies[i].height)&&
				(player.height + player.y > allEnemies[i].y)) {
					// collision detected!
					// reset the player object's position to it's starting point
					player.reset();
					// zores score
					score = 0;
				}
			}
		})();
	})();

	// when off canvas, reset position of enemy to move across again
	if (this.x > 550) {
		this.x = -100;
		this.speed = 150 + Math.floor(Math.random() * 400);
	}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Player's constructor function
var Player = function(x, y) {
	// sets game's initial score to -
	score = 0;

	this.sprite = 'images/char-boy.png';
	this.x = x;
	this.y = y;
	this.width = 10;
	this.height = 10;

	// returns player object to it's initial location
	this.reset = function () {
		player.x = 200;
		player.y = 400;
	};
};


Player.prototype.update = function(dt) {
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

	// updates the score counter, at the top-right corner of the canvas,
	// each time the player reaches the water
	ctx.font = '30px impact';
	ctx.fillStyle = 'white';
	ctx.fillText(`Score: ${score}`, 380, 104);
	ctx.strokeText(`Score: ${score}`, 380, 104);
};

// creates 3 instances of the Enemy constructor, at the positions provided by
// the enemiesY array, and adds them to the allEnemies array,
// to be provided to the updateEntities() and renderEntities() functions//
// at the engine.js file
let allEnemies = [];
let enemiesY = [63, 143, 223];
for(let enemyY of enemiesY) {
	let enemy = new Enemy(0, enemyY, 150 + Math.floor(Math.random() * 400));
	allEnemies.push(enemy);
}

// instantiates the player object, from the Player constructor
let player = new Player(200, 400);

// handles player movement on input, and keeps it within canvas limits
Player.prototype.handleInput = function(key) {
	// defines the player's inputs and limits
	if(key === "up" && this.y > 0){
		this.y -= 82;
	}
	if(key === "down" & this.y < 400){
		this.y += 82;
	}
	if(key === "right" && this.x < 400) {
		this.x += 100;
	}
	if(key === "left" && this.x > 0) {
		this.x -= 100;
	}
	if(player.y <= -10) {
		score++;
		player.reset();
	}
};

//document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>Player</h1>');

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[e.keyCode]);
});

// prevents window from rolling up or down
window.addEventListener("keydown", function(e) {
	if ([38, 40].indexOf(e.keyCode) > -1) {
		e.preventDefault();
	}
}, false);

// High score

/*
// Set and Set Local Storage items

localStorage.setItem('siteName', 'My Site');
localStorage.setItem('siteDescription', 'siteDescription');

siteName = localStorage.getItem('siteName');
header.innerHTML = siteName;

// ## Iinnefficient way to store variables. Lots and lots of variables
var siteName = 'My Site',
	siteDescription = 'Another JS Site';

localStorage.setItem('siteName', siteName);
localStorage.setItem('siteDescription', siteDescription);

// Better way is to store the multiple data in a single local key/value pair
// in order for local storage to store information, it need to store it as strings.
// json files store strings
*/

document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>Javascript Scoreboard</h1>');
var header = document.getElementsByTagName('h1')[0],
	siteData = {
		siteName: 'My Site',
		siteDesccription: 'Another JS Site'
	},
	localData;


localStorage.setItem( 'siteData', JSON.stringify(siteData));

localData = JSON.parse(localStorage.getItem('siteData'));

console.log(localData);
console.log(localStorage.getItem('siteData'));

header.innerHTML = localData.siteName;

// removeItem makes the item flash quickly, chaing the HTML,
// then vanishing from the Application//Resources panel, at chrome dev tools
//localStorage.removeItem('siteName');