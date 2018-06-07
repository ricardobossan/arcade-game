/*eslint-disable*/
describe('This code should set enemies:', () => {

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
				expect(enemy1.y).toBe(142);
			});
			it('initial location value for enemy2', () => {
				expect(enemy2.y).toBe(223);
			});
			it('initial location value for enemy3', () => {
				expect(enemy3.y).toBe(305);
			});
		});
	});

	describe('updates enemy\'s position on the screen', () => {
		describe('relates dt parameter to other variables', () => {
			it('check if the already created instances of the Enemy() constructor get the newlly setted properties', () => {
				Enemy.prototype.p = 250;
				var enemy4 = new Enemy();
				expect(enemy3.newProperty).toEqual(Enemy.prototype.newProperty);
			});
			it('updates enemy\'s position', () => {
				expect(enemy1.x + enemy1.speed * dt).toEqual(enemy1.x += enemy1.speed * dt);
			});
		});
	/*	describe('handles collision with the player', () => {
			it('when enemy.x + 80px and enemy.y + 80px touches the player.x and player.y', () => {
				if(enemy1.x + 80 === player.x && enemy1.y + 80 === player.y) {
					player.reset();
				}

			});
		});*/
	});
	it('Every instance of the Enemy() constructor should be added to the `allEnemies` array', () => {
		expect(allEnemies[0].speed, allEnemies[1].speed, allEnemies[2].speed).toBe(enemy1.speed, enemy2.speed, enemy3.speed);
		});
});
describe('creates the Player Class, making sure that', () => {
	it('the player image is loaded', () => {
		expect(player.sprite).toBe('images/char-boy.png');
	});
	it('the player object starts at half the screen\'s width and close to the bottom of the screen', () => {
		expect(player.x).toEqual(505/2);
		expect(player.y).toEqual(526);
	});
	/*it('the update() method works',  () => {
		expect().toBe();
	});*/
	/*it('the render() method works',  () => {
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


