(() => {
	window.alert(`Help the 5 children make it to the other side!`);
})();

// Logic for timer, located at top-right corner
let
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
	highScore;

if(localStorage.length >= 1) {
	highScore = JSON.parse(localStorage.getItem("stringfiedHScore"));
} else {
	highScore = [
		["Guts", 50],
		["Griffith", 40],
		["Casca", 30],
		["Judeu", 20],
		["Pippin", 10]
	];
}

const timer = function myTimer() {
	s++;
	if (s >= 60) {
		s = 0;
		m++;
		if (m >= 60) {
			m = 0;
			h++;
		}
	}

	// set to run on 1sec intervals, each time the function iterates over itself, until the game is through
	setTimeout(myTimer, 1000);
};
// runs timer function after 1 second
setTimeout(timer, 1000);



console.log(score);
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
								if(scoreCounter >= 50) {
									highScore[0][0] = person;
									highScore[0][1] = scoreCounter;
								}
								if(scoreCounter >= 40 && scoreCounter < 50) {
									highScore[1][0] = person;
									highScore[1][1] = scoreCounter;
								}
								if(scoreCounter >= 30 && scoreCounter < 40) {
									highScore[2][0] = person;
									highScore[2][1] = scoreCounter;
								}
								if(scoreCounter >= 20 && scoreCounter < 30) {
									highScore[3][0] = person;
									highScore[3][1] = scoreCounter;
								}
								if(scoreCounter >= 10 && scoreCounter < 20) {
									highScore[4][0] = person;
									highScore[4][1] = scoreCounter;
								}

								localStorage.setItem( 'stringfiedHScore', JSON.stringify(highScore));

								window.alert(`HIGH SCORE: \n\n${JSON.parse(localStorage.getItem("stringfiedHScore"))[0][0]} :  ${JSON.parse(localStorage.getItem("stringfiedHScore"))[0][1]}\n${JSON.parse(localStorage.getItem("stringfiedHScore"))[1][0]} :  ${JSON.parse(localStorage.getItem("stringfiedHScore"))[1][1]}\n${JSON.parse(localStorage.getItem("stringfiedHScore"))[2][0]} :  ${JSON.parse(localStorage.getItem("stringfiedHScore"))[2][1]}\n${JSON.parse(localStorage.getItem("stringfiedHScore"))[3][0]} :  ${JSON.parse(localStorage.getItem("stringfiedHScore"))[3][1]}\n${JSON.parse(localStorage.getItem("stringfiedHScore"))[4][0]} :  ${JSON.parse(localStorage.getItem("stringfiedHScore"))[4][1]}`);
							}
						})();
					}, 500);
					player.gameOver();
					player = new Player(200, 400, sprite[0]);
				}
			}
		})();
	})();

	// when off canvas, reset the x axis position of enemy to move across again
	if (this.x > 550) {
		this.x = -100;
		this.speed = 150 + (gameSpeed * (Math.floor(Math.random() * 300)));
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
		gameSpeed = 1.1;
		round = 1;
		score = 0;
		arrivedXTimes = 0;
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
	ctx.fillText(`Round ${round}`, 10, 108);
	ctx.strokeText(`Round ${round}`, 10, 108);

	// renders time counter
	ctx.font = '24px impact';
	ctx.fillStyle = 'white';
	ctx.fillText(`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`, 380, 82);
	ctx.strokeText(`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`, 380, 82);
	// updates the score counter, at the top-right corner of the canvas,
	// each time the player reaches the water
	ctx.font = '30px impact';
	ctx.fillStyle = 'white';
	ctx.fillText(`Score: ${score}`, 380, 118);
	ctx.strokeText(`Score: ${score}`, 380, 118);
};

// creates 3 instances of the Enemy constructor, at the positions provided by
// the enemiesY array, and adds them to the allEnemies array,
// to be provided to the updateEntities() and renderEntities() functions//
// at the engine.js file
let allEnemies = [];
let enemiesY = [63, 143, 223];
for(let enemyY of enemiesY) {
	let enemy = new Enemy(0, enemyY, 150 + (gameSpeed * (Math.floor(Math.random() * 400))));
	allEnemies.push(enemy);
}

// instantiates the player object, from the Player constructor
let player = new Player(200, 400, sprite[0]);

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
		arrivedXTimes++;
		player.x = 200;
		player.y = 400;
		player = new Player(200, 400, sprite[arrivedXTimes]);
		score++;
		scoreCounter = (function(){
			return score;
		}());

		if(arrivedXTimes % 5 === 0) {
			arrivedXTimes = 0;
			round ++;
			window.alert(`Congratulations!! You unlocked the Round ${round} difficulty!`);
			gameSpeed *= 1.3;
			player = new Player(200, 400, sprite[arrivedXTimes]);
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