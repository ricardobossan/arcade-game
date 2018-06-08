/*eslint-disable*/
describe('This code should set the enemy objects:', () => {

	describe('Enemy()\'s instances given parameters should pass', () => {
		it('Enemy.sprite references correct image location', () => {
			var enemy = new Enemy();
			expect(enemy.sprite).toBe("images/enemy-bug.png");
		});
		it('Enemy.speed is a number', () => {
			var enemy = new Enemy();
			expect(enemy.speed).not.toBe(NaN);
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

	describe('updates enemy\'s position on the screen', () => {
			/*	describe('handles collision with the player', () => {
		// SOLUTION HERE: https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
			it('when enemy.x + 80px and enemy.y + 80px touches the player.x and player.y', () => {
				if(enemy1.x + 80 === player.x && enemy1.y + 80 === player.y) {
					player.reset();
				}

			});
		});*/
	});
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
	/*it('the update() method works',  () => {
		expect().toBe();
	});*/
	/*it('the player.render() method, on engine.js, works',  () => {
		expect().toBe();
	});*/
	/*it('the handleinput() method works', () => {
		expect().toBe();
		expect().toBe();
		expect().toBe();
	});*/
	/*it('the handleinput() method works', () => {
		expect().toBe();
	});*/
	/*it('the anyNewMethod() method works', () => {
		expect().toBe();
	});*/
});


