// var global = window;
/*
TODO:

* write and  instantiate all enemy objects and write the player object
  because it's the only reason the canvas is not writing, according
  to the `console`, in dev tools

*/
// Enemies our player must avoid
// Constructors can't use arrow functions
var Enemy = function(x, y) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';
	// this.startingX = -100;
	this.x = x;
	this.y = y;
	this.speed = Math.floor(Math.random() * 10 + 1);
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = (dt) => {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	dt();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = () => {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

let enemyPosition = () => {

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', (e) => {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[e.keyCode]);
});

/*
####################################TESTS#################################
*/
/*
// trying console.log tests
var test = function(z, n) {
	return z + n;
};

// ##TEST## k(triangulate: test
/*(function(){
	console.log(`TESTING: test function 1: ${test(4, 8)}`);
	console.log(`TESTING: test function 2: ${test(40, -8)}`);
	console.log(`TESTING: test function 3: ${test(2/3	, 8)}`);
}());
*/
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIGdsb2JhbCA9IHdpbmRvdztcbi8qXG5UT0RPOlxuXG4qIHdyaXRlIGFuZCAgaW5zdGFudGlhdGUgYWxsIGVuZW15IG9iamVjdHMgYW5kIHdyaXRlIHRoZSBwbGF5ZXIgb2JqZWN0XG4gIGJlY2F1c2UgaXQncyB0aGUgb25seSByZWFzb24gdGhlIGNhbnZhcyBpcyBub3Qgd3JpdGluZywgYWNjb3JkaW5nXG4gIHRvIHRoZSBgY29uc29sZWAsIGluIGRldiB0b29sc1xuXG4qL1xuLy8gRW5lbWllcyBvdXIgcGxheWVyIG11c3QgYXZvaWRcbi8vIENvbnN0cnVjdG9ycyBjYW4ndCB1c2UgYXJyb3cgZnVuY3Rpb25zXG52YXIgRW5lbXkgPSBmdW5jdGlvbih4LCB5KSB7XG5cdC8vIFZhcmlhYmxlcyBhcHBsaWVkIHRvIGVhY2ggb2Ygb3VyIGluc3RhbmNlcyBnbyBoZXJlLFxuXHQvLyB3ZSd2ZSBwcm92aWRlZCBvbmUgZm9yIHlvdSB0byBnZXQgc3RhcnRlZFxuXG5cdC8vIFRoZSBpbWFnZS9zcHJpdGUgZm9yIG91ciBlbmVtaWVzLCB0aGlzIHVzZXNcblx0Ly8gYSBoZWxwZXIgd2UndmUgcHJvdmlkZWQgdG8gZWFzaWx5IGxvYWQgaW1hZ2VzXG5cdHRoaXMuc3ByaXRlID0gJ2ltYWdlcy9lbmVteS1idWcucG5nJztcblx0Ly8gdGhpcy5zdGFydGluZ1ggPSAtMTAwO1xuXHR0aGlzLnggPSB4O1xuXHR0aGlzLnkgPSB5O1xuXHR0aGlzLnNwZWVkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAgKyAxKTtcbn07XG5cblxuLy8gVXBkYXRlIHRoZSBlbmVteSdzIHBvc2l0aW9uLCByZXF1aXJlZCBtZXRob2QgZm9yIGdhbWVcbi8vIFBhcmFtZXRlcjogZHQsIGEgdGltZSBkZWx0YSBiZXR3ZWVuIHRpY2tzXG5FbmVteS5wcm90b3R5cGUudXBkYXRlID0gKGR0KSA9PiB7XG5cdC8vIFlvdSBzaG91bGQgbXVsdGlwbHkgYW55IG1vdmVtZW50IGJ5IHRoZSBkdCBwYXJhbWV0ZXJcblx0Ly8gd2hpY2ggd2lsbCBlbnN1cmUgdGhlIGdhbWUgcnVucyBhdCB0aGUgc2FtZSBzcGVlZCBmb3Jcblx0Ly8gYWxsIGNvbXB1dGVycy5cblx0ZHQoKTtcbn07XG5cbi8vIERyYXcgdGhlIGVuZW15IG9uIHRoZSBzY3JlZW4sIHJlcXVpcmVkIG1ldGhvZCBmb3IgZ2FtZVxuRW5lbXkucHJvdG90eXBlLnJlbmRlciA9ICgpID0+IHtcblx0Y3R4LmRyYXdJbWFnZShSZXNvdXJjZXMuZ2V0KHRoaXMuc3ByaXRlKSwgdGhpcy54LCB0aGlzLnkpO1xufTtcblxubGV0IGVuZW15UG9zaXRpb24gPSAoKSA9PiB7XG5cbn07XG5cbi8vIE5vdyB3cml0ZSB5b3VyIG93biBwbGF5ZXIgY2xhc3Ncbi8vIFRoaXMgY2xhc3MgcmVxdWlyZXMgYW4gdXBkYXRlKCksIHJlbmRlcigpIGFuZFxuLy8gYSBoYW5kbGVJbnB1dCgpIG1ldGhvZC5cblxuXG4vLyBOb3cgaW5zdGFudGlhdGUgeW91ciBvYmplY3RzLlxuLy8gUGxhY2UgYWxsIGVuZW15IG9iamVjdHMgaW4gYW4gYXJyYXkgY2FsbGVkIGFsbEVuZW1pZXNcbi8vIFBsYWNlIHRoZSBwbGF5ZXIgb2JqZWN0IGluIGEgdmFyaWFibGUgY2FsbGVkIHBsYXllclxuXG5cblxuLy8gVGhpcyBsaXN0ZW5zIGZvciBrZXkgcHJlc3NlcyBhbmQgc2VuZHMgdGhlIGtleXMgdG8geW91clxuLy8gUGxheWVyLmhhbmRsZUlucHV0KCkgbWV0aG9kLiBZb3UgZG9uJ3QgbmVlZCB0byBtb2RpZnkgdGhpcy5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcblx0dmFyIGFsbG93ZWRLZXlzID0ge1xuXHRcdDM3OiAnbGVmdCcsXG5cdFx0Mzg6ICd1cCcsXG5cdFx0Mzk6ICdyaWdodCcsXG5cdFx0NDA6ICdkb3duJ1xuXHR9O1xuXG5cdHBsYXllci5oYW5kbGVJbnB1dChhbGxvd2VkS2V5c1tlLmtleUNvZGVdKTtcbn0pO1xuXG4vKlxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjVEVTVFMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiovXG4vKlxuLy8gdHJ5aW5nIGNvbnNvbGUubG9nIHRlc3RzXG52YXIgdGVzdCA9IGZ1bmN0aW9uKHosIG4pIHtcblx0cmV0dXJuIHogKyBuO1xufTtcblxuLy8gIyNURVNUIyMgayh0cmlhbmd1bGF0ZTogdGVzdFxuLyooZnVuY3Rpb24oKXtcblx0Y29uc29sZS5sb2coYFRFU1RJTkc6IHRlc3QgZnVuY3Rpb24gMTogJHt0ZXN0KDQsIDgpfWApO1xuXHRjb25zb2xlLmxvZyhgVEVTVElORzogdGVzdCBmdW5jdGlvbiAyOiAke3Rlc3QoNDAsIC04KX1gKTtcblx0Y29uc29sZS5sb2coYFRFU1RJTkc6IHRlc3QgZnVuY3Rpb24gMzogJHt0ZXN0KDIvM1x0LCA4KX1gKTtcbn0oKSk7XG4qLyJdLCJmaWxlIjoiYXBwLmpzIn0=
