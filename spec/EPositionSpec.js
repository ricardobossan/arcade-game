describe('Enemy()\'s instances given parameters should pass', function() {

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
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
/*	var Enemy = function(x, y) {
	this.sprite = 'images/enemy-bug.png';
	this.x = x;
	this.y = y;
	this.speed = Math.floor(Math.random() * 10 + 1);
	this.initialLocation = {
		iLX: -100,
		iLY: this.name === enemy1 ? 223 : this.name === enemy2 ? 280 : this.name === enemy3 ? 320 : null
	};
};
*/
	describe('relates dt parameter to other variables', function() {
		beforeEach(function() {
			var enemy1 = new Enemy();
			var enemy2 = new Enemy();
			var enemy3 = new Enemy();
		});
/*			it('check if the already created instances of the Enemy() constructor get the newlly setted methods', function() {
			Enemy.prototype.onePlusOne = function() {
			};
			var enemy4 = new Enemy()
			expect(this.p).toEqual(2);
		});
*/	});
});