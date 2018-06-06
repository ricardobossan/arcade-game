/*eslint-disable*/
describe('This code should set enemies:', () => {

	describe('Enemy()\'s instances given parameters should pass', () => {
		beforeEach((done) => {
			Enemy();
			done();

		});
		describe('x and y arguments in the Enemy() constructor should pass', () => {
			it('arguments passed in instance 1 should pass', () => {
				var enemy = new Enemy(2, 3);
				expect(enemy.x, enemy.y).toEqual(2, 3);
			});
			it('arguments passed in instance 2 should pass', () => {
				var enemy = new Enemy(9, 4);
				expect(enemy.x, enemy.y).toEqual(9, 4);
			});
			it('arguments passed in instance 3 should pass', () => {
				var enemy = new Enemy(15, 5);
				expect(enemy.x, enemy.y).toEqual(15, 5);
			});
		});
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
				expect(enemy1.y).toBe(223);
			});
			it('initial location value for enemy2', () => {
				expect(enemy2.y).toBe(280);
			});
			it('initial location value for enemy3', () => {
				expect(enemy3.y).toBe(320);
			});
		});
	});

	describe('updates enemy\'s position on the screen', () => {
		describe('relates dt parameter to other variables', () => {
			it('check if the already created instances of the Enemy() constructor get the newlly setted methods', () => {
				Enemy.prototype.p = 250;
				var enemy4 = new Enemy();
				expect(enemy3.p).toEqual(Enemy.prototype.p);
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
/*	it('Every instance of the Enemy() constructor should be added to the `allEnemies` array', () => {
		expect().toBe();
		}
*/	});
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


