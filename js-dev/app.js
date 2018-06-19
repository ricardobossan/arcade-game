// Tells the player the game's objective
(() => {
	window.alert(`Help the 5 children make it to the other side!`);
})();

// The gV object (instance of the following constructor function), will provide
// it's properties as variables for use in most functions withing this game's code,
// as oposed to using global variables, which could be changed by users in the console)
// (as a clarification: The 'gV' object name would stand as short for "global variables")
function Variables (
	// seconds, minutes and hours for logic of the timer() function and the
	// Enemy.prototype.update() method
	s,
	m,
	h,
	// ramaining parameters for use in functions
	round,
	gameSpeed,
	arrivedXTimes,
	score,
	scoreCounter,
	sprite,
	highScore
) {
	this.s = s;
	this.m = m;
	this.h = h;
	this.round = round;
	this.gameSpeed = gameSpeed;
	this.arrivedXTimes = arrivedXTimes;
	this.score = score;
	scoreCounter;
	this.sprite = sprite;
	this.highScore = highScore;
}

// Instantiates the Variables() Constructor Function
// The arguments passed here, in the Variables() Constructor, work as values for
// the properties to be used in this code's functions. This kind of creates
// "secure global variables", for us in functions
// When referenced by a function, each property of the gV object will be prefixed by
//  this object's name
const gV = new Variables(
	0,
	0,
	0,
	1,
	1,
	0,
	0,
	"",
	[
		'images/char-boy.png',
		'images/char-cat-girl.png',
		'images/char-horn-girl.png',
		'images/char-pink-girl.png',
		'images/char-princess-girl.png'
	],
	""
);

// Logic for timer
const timer = function myTimer() {
	gV.s++;
	if (gV.s >= 60) {
		gV.s = 0;
		gV.m++;
		if (gV.m >= 60) {
			gV.m = 0;
			gV.h++;
		}
	}

	// Sets the timer to run on 1 sec intervals, each time the function iterates over itself, until the game is through
	setTimeout(myTimer, 1000);
};
// runs timer function after 1 second
setTimeout(timer, 1000);

// Enemy's constructor function
let Enemy = function(x, y, speed) {

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

	// Multiplies any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	this.x += this.speed * dt;
	// Checks for colliision between the player and enemy objects
	(function() {
		(function() {
			// Checks collision for each of the 3 enemy bugs
			// if the player arrives at a enemy position, including
			//  it's width, collision occurs
			for(let i = 0; i < allEnemies.length; i++) {
				if ((player.x < allEnemies[i].x + allEnemies[i].width) &&
				(player.x + player.width > allEnemies[i].x) &&
				(player.y < allEnemies[i].y + allEnemies[i].height) &&
				(player.height + player.y > allEnemies[i].y)) {
					// collision detected!
					// reset the player position to it's starting point
					setTimeout(function() {
						player.resetPosition();
						(function askName() {
							// Checks if there's data stored locally from previous game sessions,
							if(localStorage.length >= 1) {
								gV.highScore = JSON.parse(localStorage.getItem("stringfiedHScore"));
							// if there isn't, it creates 5 standart player's score to be displayed
							} else {
								gV.highScore = [
									["Guts", 50],
									["Griffith", 40],
									["Casca", 30],
									["Judeu", 20],
									["Pippin", 10]
								];
							}
							// When the player is hit by a bug, ends the game and prompts the player
							// for his/her name
							var person = window.prompt("Game Over! Please, enter your name:", "Name");
							if(person === null || person === "Name" || person === "") {
								window.alert("Don't be shy!");
								askName();
							// Checks if the player's score reache's one of the 5 score marks, and if
							// his score is higher than that of players from previous game sessions for
							// that score mark. If all are `True`, then the present game session
							// player's name and score will take the previous best score for that mark
							// in the `HIGH SCORE`board
							} else {
								if(gV.scoreCounter >= 50 && gV.scoreCounter >= gV.highScore[0][1]) {
									gV.highScore[0][0] = person;
									gV.highScore[0][1] = gV.scoreCounter;
								}
								if(gV.scoreCounter >= 40 && gV.scoreCounter < 50 && gV.scoreCounter >= gV.highScore[1][1]) {
									gV.highScore[1][0] = person;
									gV.highScore[1][1] = gV.scoreCounter;
								}
								if(gV.scoreCounter >= 30 && gV.scoreCounter < 40 && gV.scoreCounter >= gV.highScore[2][1]) {
									gV.highScore[2][0] = person;
									gV.highScore[2][1] = gV.scoreCounter;
								}
								if(gV.scoreCounter >= 20 && gV.scoreCounter < 30 && gV.scoreCounter >= gV.highScore[3][1]) {
									gV.highScore[3][0] = person;
									gV.highScore[3][1] = gV.scoreCounter;
								}
								if(gV.scoreCounter >= 10 && gV.scoreCounter < 20 && gV.scoreCounter >= gV.highScore[4][1]) {
									gV.highScore[4][0] = person;
									gV.highScore[4][1] = gV.scoreCounter;
								}
								// saves current `HIGH SCORES` board names and scores for future game sessions
								// even if the browser window is shut
								localStorage.setItem( 'stringfiedHScore', JSON.stringify(gV.highScore));
								// displayes updated `HIGH SCORES` board
								window.alert(`HIGH SCORE: \n\n${JSON.parse(localStorage.getItem("stringfiedHScore"))[0][0]} :  ${JSON.parse(localStorage.getItem("stringfiedHScore"))[0][1]}\n${JSON.parse(localStorage.getItem("stringfiedHScore"))[1][0]} :  ${JSON.parse(localStorage.getItem("stringfiedHScore"))[1][1]}\n${JSON.parse(localStorage.getItem("stringfiedHScore"))[2][0]} :  ${JSON.parse(localStorage.getItem("stringfiedHScore"))[2][1]}\n${JSON.parse(localStorage.getItem("stringfiedHScore"))[3][0]} :  ${JSON.parse(localStorage.getItem("stringfiedHScore"))[3][1]}\n${JSON.parse(localStorage.getItem("stringfiedHScore"))[4][0]} :  ${JSON.parse(localStorage.getItem("stringfiedHScore"))[4][1]}`);
							}
						})();
					}, 500);
					// resets game
					player.gameOver();
					// resets player object, by reinstantiating the Player() Constructor
					player = new Player(200, 400, gV.sprite[0]);
				}
			}
		})();
	})();

	// when off canvas, reset the x axis position of enemy to move across again
	if (this.x > 550) {
		this.x = -100;
		this.speed = 150 + (gV.gameSpeed * (Math.floor(Math.random() * 300)));
	}
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Player's constructor function
var Player = function(x, y, sprite) {
	this.sprite = sprite;
	this.x = x;
	this.y = y;
	this.width = 10;
	this.height = 10;

	// returns player object to it's initial location
	this.resetPosition = function () {
		player.x = 200;
		player.y = 400;
	};

	// returns player object to it's initial location and some of
	// the game's logic also
	this.gameOver = function () {
		player.x = 200;
		player.y = 400;
		gV.h = 0;
		gV.m = 0;
		gV.s = 0;
		gV.gameSpeed = 1.1;
		gV.round = 1;
		gV.score = 0;
		gV.arrivedXTimes = 0;
	};
};

// Draw the enemy on the screen
Player.prototype.render = function() {

	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

	// Each time the player reaches the water, updates the
	// round counter, at top-left corner of the canvas
	ctx.font = '45px impact';
	ctx.fillStyle = 'white';
	ctx.fillText(`Round ${gV.round}`, 10, 108);
	ctx.strokeText(`Round ${gV.round}`, 10, 108);

	// renders time counter, at the top-right corner of the canvas
	ctx.font = '24px impact';
	ctx.fillStyle = 'white';
	ctx.fillText(`${gV.h > 9 ? gV.h : "0" + gV.h} : ${gV.m > 9 ? gV.m : "0" + gV.m} : ${gV.s > 9 ? gV.s : "0" + gV.s}`, 380, 82);
	ctx.strokeText(`${gV.h > 9 ? gV.h : "0" + gV.h} : ${gV.m > 9 ? gV.m : "0" + gV.m} : ${gV.s > 9 ? gV.s : "0" + gV.s}`, 380, 82);

	// updates the score counter, at the top-right corner of the canvas,
	// each time the player reaches the water
	ctx.font = '30px impact';
	ctx.fillStyle = 'white';
	ctx.fillText(`Score: ${gV.score}`, 380, 118);
	ctx.strokeText(`Score: ${gV.score}`, 380, 118);
};

// Creates 3 instances of the Enemy constructor, at the positions provided by
// the enemiesY array, and adds them to the allEnemies array,
// to be provided to the updateEntities() and renderEntities() functions
// at the `engine.js` file
let allEnemies = [];
let enemiesY = [63, 143, 223];
for(let enemyY of enemiesY) {
	let enemy = new Enemy(0, enemyY, 150 + (gV.gameSpeed * (Math.floor(Math.random() * 400))));
	allEnemies.push(enemy);
}

// instantiates the player object, from the Player() constructor
let player = new Player(200, 400, gV.sprite[0]);

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
		// Counts each time the player arrives at the water
		gV.arrivedXTimes++;
		player.x = 200;
		player.y = 400;
		player = new Player(200, 400, gV.sprite[gV.arrivedXTimes]);
		gV.score++;
		gV.scoreCounter = (function(){
			return gV.score;
		}());

		if(gV.arrivedXTimes % 5 === 0) {
			gV.arrivedXTimes = 0;
			gV.round ++;
			window.alert(`Congratulations!! You unlocked the Round ${gV.round} difficulty!`);
			gV.gameSpeed *= 1.3;
			player = new Player(200, 400, gV.sprite[gV.arrivedXTimes]);
		}
	}
};

// This listens for key presses and sends the keys to
// Player.handleInput() method
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

// prevents window from rolling left or right
window.addEventListener("keydown", function(e) {
	if ([37, 39].indexOf(e.keyCode) > -1) {
		e.preventDefault();
	}
}, false);