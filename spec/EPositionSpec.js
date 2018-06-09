/*eslint-disable*/
describe('This code should set the enemy objects:', () => {

	describe('Enemy()\'s instances given parameters should pass', () => {
		it('Enemy.sprite references correct image location', () => {
			matchArray = [];
			allEnemies.forEach(function(element) {
				matchArray.push(element.sprite)
			});
			expect(matchArray[0, 1, 2]).toEqual('images/enemy-bug.png');
		});
		it('Enemy.speed is a number', () => {
			var enemy = new Enemy();
			expect(enemy.speed).not.toBe(NaN);
		});
		it('Should update enemy\'s speed', () => {
			matchArray = [];
			allEnemies.forEach(function(element) {
				matchArray.push(element.speed);
			});
			expect(matchArray[0, 1, 2]).toBe(something);
		});

		describe('defines Enemy()\'s instances initial location by pixel', () => {
			it('initial location value for enemy1', () => {
				expect(allEnemies[0].y).toBe(63);
			});
			it('initial location value for enemy2', () => {
				expect(allEnemies[1].y).toBe(143);
			});
			it('initial location value for enemy3', () => {
				expect(allEnemies[2].y).toBe(223);
			});
		});
	});

/*	describe('handles collision with the player', () => {
		// SOLUTION HERE: https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
			it('when enemy.x + 80px and enemy.y + 80px touches the player.x and player.y', () => {
				if(enemy1.x + 80 === player.x && enemy1.y + 80 === player.y) {
					player.reset();
			}
		});
	});*/
});
describe('creates the Player Class, making sure that', () => {
	it('the player object\'s sprite is rendered', () => {
		expect(player.sprite).toBe('images/char-boy.png');
	});
	it('ctx is defined', () => {
		/*engine.js, lines 23-29. removed line 25 due to error `undefined`*/
		canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		canvas.width = 505;
		canvas.height = 606;
		document.body.appendChild(canvas);
		expect(ctx).not.toBe();
	});
	it('score should be updated when player arrives in the water', () => {
		score = 0;
		(() => {
			for(var i = 0; i <= 4; i++) {
				player.y -= 82;
				if(player.y <= -10) {
					score++;
				}
			}
		})();
		expect(score).toEqual(1);
	})
});