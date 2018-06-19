(() => {
	window.alert(`Help the 5 children make it to the other side!`);
})();

// the gV object (instance of this constructor function, will integrate the names of most variables withing this code, as oposed to using global variables, which could be changed by the console)(it stands as short for "global variables")
function Variables (
	s,
	m,
	h,
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
	this.sprite = sprite/*[
		'images/char-boy.png',
		'images/char-cat-girl.png',
		'images/char-horn-girl.png',
		'images/char-pink-girl.png',
		'images/char-princess-girl.png'
	]*/;
	this.highScore = highScore;
}
// creates secure "global variables"
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
console.log(gV);
/*let
	s = 0,
	m = 0,
	h = 0,
	round = 1,
	gameSpeed = 1,
	arrivedXTimes = 0,
	score = 0,
	scoreCounter,
	sprite = [
		'images/char-boy.png',
		'images/char-cat-girl.png',
		'images/char-horn-girl.png',
		'images/char-pink-girl.png',
		'images/char-princess-girl.png'
	],
	gV.highScore;
*/
if(localStorage.length >= 1) {
	gV.highScore = JSON.parse(localStorage.getItem("stringfiedHScore"));
} else {
	gV.highScore = [
		["Guts", 50],
		["Griffith", 40],
		["Casca", 30],
		["Judeu", 20],
		["Pippin", 10]
	];
}

// Logic for timer, located at top-right corner
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

	// set to run on 1sec intervals, each time the function iterates over itself, until the game is through
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
				(player.y < allEnemies[i].y + allEnemies[i].height) &&
				(player.height + player.y > allEnemies[i].y)) {
					// collision detected!
					// reset the player object's position to it's starting point
					setTimeout(function() {
						player.resetPosition();
						(function askName() {
							var person = window.prompt("Game Over! Please, enter your name:", "Name");
							if(person === null || person === "Name" || person === "") {
								window.alert("Don't be shy!");
								askName();
							} else {
								if(gV.scoreCounter >= 50) {
									gV.highScore[0][0] = person;
									gV.highScore[0][1] = gV.scoreCounter;
								}
								if(gV.scoreCounter >= 40 && gV.scoreCounter < 50) {
									gV.highScore[1][0] = person;
									gV.highScore[1][1] = gV.scoreCounter;
								}
								if(gV.scoreCounter >= 30 && gV.scoreCounter < 40) {
									gV.highScore[2][0] = person;
									gV.highScore[2][1] = gV.scoreCounter;
								}
								if(gV.scoreCounter >= 20 && gV.scoreCounter < 30) {
									gV.highScore[3][0] = person;
									gV.highScore[3][1] = gV.scoreCounter;
								}
								if(gV.scoreCounter >= 10 && gV.scoreCounter < 20) {
									gV.highScore[4][0] = person;
									gV.highScore[4][1] = gV.scoreCounter;
								}

								localStorage.setItem( 'stringfiedHScore', JSON.stringify(gV.highScore));

								window.alert(`HIGH SCORE: \n\n${JSON.parse(localStorage.getItem("stringfiedHScore"))[0][0]} :  ${JSON.parse(localStorage.getItem("stringfiedHScore"))[0][1]}\n${JSON.parse(localStorage.getItem("stringfiedHScore"))[1][0]} :  ${JSON.parse(localStorage.getItem("stringfiedHScore"))[1][1]}\n${JSON.parse(localStorage.getItem("stringfiedHScore"))[2][0]} :  ${JSON.parse(localStorage.getItem("stringfiedHScore"))[2][1]}\n${JSON.parse(localStorage.getItem("stringfiedHScore"))[3][0]} :  ${JSON.parse(localStorage.getItem("stringfiedHScore"))[3][1]}\n${JSON.parse(localStorage.getItem("stringfiedHScore"))[4][0]} :  ${JSON.parse(localStorage.getItem("stringfiedHScore"))[4][1]}`);
							}
						})();
					}, 500);
					player.gameOver();
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

// Draw the enemy on the screen, required method for game
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

	// returns player object to it's initial location
	this.gameOver = function () {
		h = 0;
		m = 0;
		s = 0;
		player.x = 200;
		player.y = 400;
		gV.gameSpeed = 1.1;
		gV.round = 1;
		gV.score = 0;
		gV.arrivedXTimes = 0;
	};
};

Player.prototype.update = function(dt) {
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {

	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

	// each time the player reaches the water
	ctx.font = '45px impact';
	ctx.fillStyle = 'white';
	ctx.fillText(`Round ${gV.round}`, 10, 108);
	ctx.strokeText(`Round ${gV.round}`, 10, 108);

	// renders time counter
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

// creates 3 instances of the Enemy constructor, at the positions provided by
// the enemiesY array, and adds them to the allEnemies array,
// to be provided to the updateEntities() and renderEntities() functions//
// at the engine.js file
let allEnemies = [];
let enemiesY = [63, 143, 223];
for(let enemyY of enemiesY) {
	let enemy = new Enemy(0, enemyY, 150 + (gV.gameSpeed * (Math.floor(Math.random() * 400))));
	allEnemies.push(enemy);
}

// instantiates the player object, from the Player constructor
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

// prevents window from rolling left or right
window.addEventListener("keydown", function(e) {
	if ([37, 39].indexOf(e.keyCode) > -1) {
		e.preventDefault();
	}
}, false);