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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRW5lbWllcyBvdXIgcGxheWVyIG11c3QgYXZvaWRcbnZhciBFbmVteSA9IGZ1bmN0aW9uKCkge1xuXHQvLyBWYXJpYWJsZXMgYXBwbGllZCB0byBlYWNoIG9mIG91ciBpbnN0YW5jZXMgZ28gaGVyZSxcblx0Ly8gd2UndmUgcHJvdmlkZWQgb25lIGZvciB5b3UgdG8gZ2V0IHN0YXJ0ZWRcblxuXHQvLyBUaGUgaW1hZ2Uvc3ByaXRlIGZvciBvdXIgZW5lbWllcywgdGhpcyB1c2VzXG5cdC8vIGEgaGVscGVyIHdlJ3ZlIHByb3ZpZGVkIHRvIGVhc2lseSBsb2FkIGltYWdlc1xuXHR0aGlzLnNwcml0ZSA9ICdpbWFnZXMvZW5lbXktYnVnLnBuZyc7XG59O1xuXG4vLyBVcGRhdGUgdGhlIGVuZW15J3MgcG9zaXRpb24sIHJlcXVpcmVkIG1ldGhvZCBmb3IgZ2FtZVxuLy8gUGFyYW1ldGVyOiBkdCwgYSB0aW1lIGRlbHRhIGJldHdlZW4gdGlja3NcbkVuZW15LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkdCkge1xuXHQvLyBZb3Ugc2hvdWxkIG11bHRpcGx5IGFueSBtb3ZlbWVudCBieSB0aGUgZHQgcGFyYW1ldGVyXG5cdC8vIHdoaWNoIHdpbGwgZW5zdXJlIHRoZSBnYW1lIHJ1bnMgYXQgdGhlIHNhbWUgc3BlZWQgZm9yXG5cdC8vIGFsbCBjb21wdXRlcnMuXG5cdGR0KCk7XG59O1xuXG4vLyBEcmF3IHRoZSBlbmVteSBvbiB0aGUgc2NyZWVuLCByZXF1aXJlZCBtZXRob2QgZm9yIGdhbWVcbkVuZW15LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcblx0Y3R4LmRyYXdJbWFnZShSZXNvdXJjZXMuZ2V0KHRoaXMuc3ByaXRlKSwgdGhpcy54LCB0aGlzLnkpO1xufTtcblxuLy8gTm93IHdyaXRlIHlvdXIgb3duIHBsYXllciBjbGFzc1xuLy8gVGhpcyBjbGFzcyByZXF1aXJlcyBhbiB1cGRhdGUoKSwgcmVuZGVyKCkgYW5kXG4vLyBhIGhhbmRsZUlucHV0KCkgbWV0aG9kLlxuXG5cbi8vIE5vdyBpbnN0YW50aWF0ZSB5b3VyIG9iamVjdHMuXG4vLyBQbGFjZSBhbGwgZW5lbXkgb2JqZWN0cyBpbiBhbiBhcnJheSBjYWxsZWQgYWxsRW5lbWllc1xuLy8gUGxhY2UgdGhlIHBsYXllciBvYmplY3QgaW4gYSB2YXJpYWJsZSBjYWxsZWQgcGxheWVyXG5cblxuXG4vLyBUaGlzIGxpc3RlbnMgZm9yIGtleSBwcmVzc2VzIGFuZCBzZW5kcyB0aGUga2V5cyB0byB5b3VyXG4vLyBQbGF5ZXIuaGFuZGxlSW5wdXQoKSBtZXRob2QuIFlvdSBkb24ndCBuZWVkIHRvIG1vZGlmeSB0aGlzLlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG5cdHZhciBhbGxvd2VkS2V5cyA9IHtcblx0XHQzNzogJ2xlZnQnLFxuXHRcdDM4OiAndXAnLFxuXHRcdDM5OiAncmlnaHQnLFxuXHRcdDQwOiAnZG93bidcblx0fTtcblxuXHRwbGF5ZXIuaGFuZGxlSW5wdXQoYWxsb3dlZEtleXNbZS5rZXlDb2RlXSk7XG59KTtcbiJdLCJmaWxlIjoiYXBwLmpzIn0=
