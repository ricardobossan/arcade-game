/*
TODO:

* write and  instantiate all enemy objects and write the player object
  because it's the only reason the canvas is not writing, according
  to the `console`, in dev tools

*/
// Enemies our player must avoid
var Enemy = function() {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	dt();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[e.keyCode]);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblRPRE86XG5cbiogd3JpdGUgYW5kICBpbnN0YW50aWF0ZSBhbGwgZW5lbXkgb2JqZWN0cyBhbmQgd3JpdGUgdGhlIHBsYXllciBvYmplY3RcbiAgYmVjYXVzZSBpdCdzIHRoZSBvbmx5IHJlYXNvbiB0aGUgY2FudmFzIGlzIG5vdCB3cml0aW5nLCBhY2NvcmRpbmdcbiAgdG8gdGhlIGBjb25zb2xlYCwgaW4gZGV2IHRvb2xzXG5cbiovXG4vLyBFbmVtaWVzIG91ciBwbGF5ZXIgbXVzdCBhdm9pZFxudmFyIEVuZW15ID0gZnVuY3Rpb24oKSB7XG5cdC8vIFZhcmlhYmxlcyBhcHBsaWVkIHRvIGVhY2ggb2Ygb3VyIGluc3RhbmNlcyBnbyBoZXJlLFxuXHQvLyB3ZSd2ZSBwcm92aWRlZCBvbmUgZm9yIHlvdSB0byBnZXQgc3RhcnRlZFxuXG5cdC8vIFRoZSBpbWFnZS9zcHJpdGUgZm9yIG91ciBlbmVtaWVzLCB0aGlzIHVzZXNcblx0Ly8gYSBoZWxwZXIgd2UndmUgcHJvdmlkZWQgdG8gZWFzaWx5IGxvYWQgaW1hZ2VzXG5cdHRoaXMuc3ByaXRlID0gJ2ltYWdlcy9lbmVteS1idWcucG5nJztcbn07XG5cbi8vIFVwZGF0ZSB0aGUgZW5lbXkncyBwb3NpdGlvbiwgcmVxdWlyZWQgbWV0aG9kIGZvciBnYW1lXG4vLyBQYXJhbWV0ZXI6IGR0LCBhIHRpbWUgZGVsdGEgYmV0d2VlbiB0aWNrc1xuRW5lbXkucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGR0KSB7XG5cdC8vIFlvdSBzaG91bGQgbXVsdGlwbHkgYW55IG1vdmVtZW50IGJ5IHRoZSBkdCBwYXJhbWV0ZXJcblx0Ly8gd2hpY2ggd2lsbCBlbnN1cmUgdGhlIGdhbWUgcnVucyBhdCB0aGUgc2FtZSBzcGVlZCBmb3Jcblx0Ly8gYWxsIGNvbXB1dGVycy5cblx0ZHQoKTtcbn07XG5cbi8vIERyYXcgdGhlIGVuZW15IG9uIHRoZSBzY3JlZW4sIHJlcXVpcmVkIG1ldGhvZCBmb3IgZ2FtZVxuRW5lbXkucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuXHRjdHguZHJhd0ltYWdlKFJlc291cmNlcy5nZXQodGhpcy5zcHJpdGUpLCB0aGlzLngsIHRoaXMueSk7XG59O1xuXG4vLyBOb3cgd3JpdGUgeW91ciBvd24gcGxheWVyIGNsYXNzXG4vLyBUaGlzIGNsYXNzIHJlcXVpcmVzIGFuIHVwZGF0ZSgpLCByZW5kZXIoKSBhbmRcbi8vIGEgaGFuZGxlSW5wdXQoKSBtZXRob2QuXG5cblxuLy8gTm93IGluc3RhbnRpYXRlIHlvdXIgb2JqZWN0cy5cbi8vIFBsYWNlIGFsbCBlbmVteSBvYmplY3RzIGluIGFuIGFycmF5IGNhbGxlZCBhbGxFbmVtaWVzXG4vLyBQbGFjZSB0aGUgcGxheWVyIG9iamVjdCBpbiBhIHZhcmlhYmxlIGNhbGxlZCBwbGF5ZXJcblxuXG5cbi8vIFRoaXMgbGlzdGVucyBmb3Iga2V5IHByZXNzZXMgYW5kIHNlbmRzIHRoZSBrZXlzIHRvIHlvdXJcbi8vIFBsYXllci5oYW5kbGVJbnB1dCgpIG1ldGhvZC4gWW91IGRvbid0IG5lZWQgdG8gbW9kaWZ5IHRoaXMuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcblx0dmFyIGFsbG93ZWRLZXlzID0ge1xuXHRcdDM3OiAnbGVmdCcsXG5cdFx0Mzg6ICd1cCcsXG5cdFx0Mzk6ICdyaWdodCcsXG5cdFx0NDA6ICdkb3duJ1xuXHR9O1xuXG5cdHBsYXllci5oYW5kbGVJbnB1dChhbGxvd2VkS2V5c1tlLmtleUNvZGVdKTtcbn0pO1xuIl0sImZpbGUiOiJhcHAuanMifQ==
