/*eslint-disable*/
describe('Enemy()\'s instances given parameters should pass', function() {
	//var describe, it, expect, Enemy, enemy1, enemy2, enemy3;
	beforeEach(function(done){
		Enemy();
		done();

	});
	describe('x and y arguments in the Enemy() constructor should pass', function() {
		it('arguments passed in instance 1 should pass', function() {
			var enemy = new Enemy(2, 3);
			expect(enemy.x, enemy.y).toEqual(2, 3);
		});
		it('arguments passed in instance 2 should pass', function() {
			var enemy = new Enemy(9, 4);
			expect(enemy.x, enemy.y).toEqual(9, 4);
		});
		it('arguments passed in instance 3 should pass', function() {
			var enemy = new Enemy(15, 5);
			expect(enemy.x, enemy.y).toEqual(15, 5);
		});
	});
	it('Enemy.sprite references correct image location', function() {
		var enemy = new Enemy();
		expect(enemy.sprite).toBe("images/enemy-bug.png");
	});
	it('Enemy.speed is a number', function() {
		var enemy = new Enemy();
		expect(enemy.speed).not.toBe(NaN);
	});
	describe('defines Enemy()\'s instances initial location by pixel', function() {
		it('initial location value for enemy1', function() {
			expect(enemy1.y).toBe(223);
		});
		it('initial location value for enemy2', function() {
			expect(enemy2.y).toBe(280);
		});
		it('initial location value for enemy3', function() {
			expect(enemy3.y).toBe(320);
		});
	});
});

describe('updates enemy\'s position on the screen', function(){
	describe('relates dt parameter to other variables', function() {
		it('check if the already created instances of the Enemy() constructor get the newlly setted methods', function() {
			Enemy.prototype.p = 250;
			var enemy4 = new Enemy();
			expect(enemy3.p).toEqual(Enemy.prototype.p);
		});
		it('updates enemy\'s position', function() {
			expect(enemy1.x + enemy1.speed * dt).toEqual(enemy1.x += enemy1.speed * dt);
		});
	});
	describe('handles collision with the player', function() {
		it('when enemy.x + 80px and enemy.y + 80px touches the player.x and player.y', function() {
			if(enemy1.x + 80 === player.x && enemy1.y + 80 === player.y) {
				player.reset();
			}
			expect(enemy1.x).toBe(enemy1.x === canvas.x/2);
		});
	});
});
describe('creates the Player Class', function() {
	describe('extending the Enemy() constructor', function() {
		it('taking it\'s update() method', function() {
			expect(Player.update).toEqual(Enemy.update);
		});
	});
});

