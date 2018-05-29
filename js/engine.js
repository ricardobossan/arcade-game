/* Engine.js
 * This file provides the game loop functionality (update entities and render),
 * draws the initial game board on the screen, and then calls the update and
 * render methods on your player and enemy objects (defined in your app.js).
 *
 * A game engine works by drawing the entire game screen over and over, kind of
 * like a flipbook you may have created as a kid. When your player moves across
 * the screen, it may look like just that image/character is moving or being
 * drawn but that is not the case. What's really happening is the entire "scene"
 * is being drawn over and over, presenting the illusion of animation.
 *
 * This engine makes the canvas' context (ctx) object globally available to make
 * writing app.js a little simpler to work with.
 */

var Engine = (function(global) {
	/* Predefine the variables we'll be using within this scope,
	 * create the canvas element, grab the 2D context for that canvas
	 * set the canvas elements height/width and add it to the DOM.
	 */
	var doc = global.document,
		win = global.window,
		canvas = doc.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		lastTime;

	canvas.width = 505;
	canvas.height = 606;
	doc.body.appendChild(canvas);

	/* This function serves as the kickoff point for the game loop itself
	 * and handles properly calling the update and render methods.
	 */
	function main() {
		/* Get our time delta information which is required if your game
		 * requires smooth animation. Because everyone's computer processes
		 * instructions at different speeds we need a constant value that
		 * would be the same for everyone (regardless of how fast their
		 * computer is) - hurray time!
		 */
		var now = Date.now(),
			dt = (now - lastTime) / 1000.0;

		/* Call our update/render functions, pass along the time delta to
		 * our update function since it may be used for smooth animation.
		 */
		update(dt);
		render();

		/* Set our lastTime variable which is used to determine the time delta
		 * for the next time this function is called.
		 */
		lastTime = now;

		/* Use the browser's requestAnimationFrame function to call this
		 * function again as soon as the browser is able to draw another frame.
		 */
		win.requestAnimationFrame(main);
		win.webkitRequestAnimationFrame(main[document.getElementsByTagName('canvas')]); // Chrome/Webkit
	}

	/* This function does some initial setup that should only occur once,
	 * particularly setting the lastTime variable that is required for the
	 * game loop.
	 */
	function init() {
		reset();
		lastTime = Date.now();
		main();
	}

	/* This function is called by main (our game loop) and itself calls all
	 * of the functions which may need to update entity's data. Based on how
	 * you implement your collision detection (when two entities occupy the
	 * same space, for instance when your character should die), you may find
	 * the need to add an additional function call here. For now, we've left
	 * it commented out - you may or may not want to implement this
	 * functionality this way (you could just implement collision detection
	 * on the entities themselves within your app.js file).
	 */
	function update(dt) {
		updateEntities(dt);
		// checkCollisions();
	}

	/* This is called by the update function and loops through all of the
	 * objects within your allEnemies array as defined in app.js and calls
	 * their update() methods. It will then call the update function for your
	 * player object. These update methods should focus purely on updating
	 * the data/properties related to the object. Do your drawing in your
	 * render methods.
	 */
	function updateEntities(dt) {
		allEnemies.forEach(function(enemy) {
			enemy.update(dt);
		});
		player.update();
	}

	/* This function initially draws the "game level", it will then call
	 * the renderEntities function. Remember, this function is called every
	 * game tick (or loop of the game engine) because that's how games work -
	 * they are flipbooks creating the illusion of animation but in reality
	 * they are just drawing the entire screen over and over.
	 */
	function render() {
		/* This array holds the relative URL to the image used
		 * for that particular row of the game level.
		 */
		var rowImages = [
				'images/water-block.png',   // Top row is water
				'images/stone-block.png',   // Row 1 of 3 of stone
				'images/stone-block.png',   // Row 2 of 3 of stone
				'images/stone-block.png',   // Row 3 of 3 of stone
				'images/grass-block.png',   // Row 1 of 2 of grass
				'images/grass-block.png'    // Row 2 of 2 of grass
			],
			numRows = 6,
			numCols = 5,
			row, col;

		// Before drawing, clear existing canvas
		ctx.clearRect(0,0,canvas.width,canvas.height);

		/* Loop through the number of rows and columns we've defined above
		 * and, using the rowImages array, draw the correct image for that
		 * portion of the "grid"
		 */
		for (row = 0; row < numRows; row++) {
			for (col = 0; col < numCols; col++) {
				/* The drawImage function of the canvas' context element
				 * requires 3 parameters: the image to draw, the x coordinate
				 * to start drawing and the y coordinate to start drawing.
				 * We're using our Resources helpers to refer to our images
				 * so that we get the benefits of caching these images, since
				 * we're using them over and over.
				 */
				ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
			}
		}

		renderEntities();
	}

	/* This function is called by the render function and is called on each game
	 * tick. Its purpose is to then call the render functions you have defined
	 * on your enemy and player entities within app.js
	 */
	function renderEntities() {
		/* Loop through all of the objects within the allEnemies array and call
		 * the render function you have defined.
		 */
		allEnemies.forEach(function(enemy) {
			enemy.render();
		});

		player.render();
	}

	/* This function does nothing but it could have been a good place to
	 * handle game reset states - maybe a new game menu or a game over screen
	 * those sorts of things. It's only called once by the init() method.
	 */
	function reset() {
		// noop
	}

	/* Go ahead and load all of the images we know we're going to need to
	 * draw our game level. Then set init as the callback method, so that when
	 * all of these images are properly loaded our game will start.
	 */
	Resources.load([
		'images/stone-block.png',
		'images/water-block.png',
		'images/grass-block.png',
		'images/enemy-bug.png',
		'images/char-boy.png'
	]);
	Resources.onReady(init);

	/* Assign the canvas' context object to the global variable (the window
	 * object when run in a browser) so that developers can use it more easily
	 * from within their app.js files.
	 */
	global.ctx = ctx;
})(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJlbmdpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogRW5naW5lLmpzXG4gKiBUaGlzIGZpbGUgcHJvdmlkZXMgdGhlIGdhbWUgbG9vcCBmdW5jdGlvbmFsaXR5ICh1cGRhdGUgZW50aXRpZXMgYW5kIHJlbmRlciksXG4gKiBkcmF3cyB0aGUgaW5pdGlhbCBnYW1lIGJvYXJkIG9uIHRoZSBzY3JlZW4sIGFuZCB0aGVuIGNhbGxzIHRoZSB1cGRhdGUgYW5kXG4gKiByZW5kZXIgbWV0aG9kcyBvbiB5b3VyIHBsYXllciBhbmQgZW5lbXkgb2JqZWN0cyAoZGVmaW5lZCBpbiB5b3VyIGFwcC5qcykuXG4gKlxuICogQSBnYW1lIGVuZ2luZSB3b3JrcyBieSBkcmF3aW5nIHRoZSBlbnRpcmUgZ2FtZSBzY3JlZW4gb3ZlciBhbmQgb3Zlciwga2luZCBvZlxuICogbGlrZSBhIGZsaXBib29rIHlvdSBtYXkgaGF2ZSBjcmVhdGVkIGFzIGEga2lkLiBXaGVuIHlvdXIgcGxheWVyIG1vdmVzIGFjcm9zc1xuICogdGhlIHNjcmVlbiwgaXQgbWF5IGxvb2sgbGlrZSBqdXN0IHRoYXQgaW1hZ2UvY2hhcmFjdGVyIGlzIG1vdmluZyBvciBiZWluZ1xuICogZHJhd24gYnV0IHRoYXQgaXMgbm90IHRoZSBjYXNlLiBXaGF0J3MgcmVhbGx5IGhhcHBlbmluZyBpcyB0aGUgZW50aXJlIFwic2NlbmVcIlxuICogaXMgYmVpbmcgZHJhd24gb3ZlciBhbmQgb3ZlciwgcHJlc2VudGluZyB0aGUgaWxsdXNpb24gb2YgYW5pbWF0aW9uLlxuICpcbiAqIFRoaXMgZW5naW5lIG1ha2VzIHRoZSBjYW52YXMnIGNvbnRleHQgKGN0eCkgb2JqZWN0IGdsb2JhbGx5IGF2YWlsYWJsZSB0byBtYWtlXG4gKiB3cml0aW5nIGFwcC5qcyBhIGxpdHRsZSBzaW1wbGVyIHRvIHdvcmsgd2l0aC5cbiAqL1xuXG52YXIgRW5naW5lID0gKGZ1bmN0aW9uKGdsb2JhbCkge1xuXHQvKiBQcmVkZWZpbmUgdGhlIHZhcmlhYmxlcyB3ZSdsbCBiZSB1c2luZyB3aXRoaW4gdGhpcyBzY29wZSxcblx0ICogY3JlYXRlIHRoZSBjYW52YXMgZWxlbWVudCwgZ3JhYiB0aGUgMkQgY29udGV4dCBmb3IgdGhhdCBjYW52YXNcblx0ICogc2V0IHRoZSBjYW52YXMgZWxlbWVudHMgaGVpZ2h0L3dpZHRoIGFuZCBhZGQgaXQgdG8gdGhlIERPTS5cblx0ICovXG5cdHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQsXG5cdFx0d2luID0gZ2xvYmFsLndpbmRvdyxcblx0XHRjYW52YXMgPSBkb2MuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksXG5cdFx0Y3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyksXG5cdFx0bGFzdFRpbWU7XG5cblx0Y2FudmFzLndpZHRoID0gNTA1O1xuXHRjYW52YXMuaGVpZ2h0ID0gNjA2O1xuXHRkb2MuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG5cdC8qIFRoaXMgZnVuY3Rpb24gc2VydmVzIGFzIHRoZSBraWNrb2ZmIHBvaW50IGZvciB0aGUgZ2FtZSBsb29wIGl0c2VsZlxuXHQgKiBhbmQgaGFuZGxlcyBwcm9wZXJseSBjYWxsaW5nIHRoZSB1cGRhdGUgYW5kIHJlbmRlciBtZXRob2RzLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFpbigpIHtcblx0XHQvKiBHZXQgb3VyIHRpbWUgZGVsdGEgaW5mb3JtYXRpb24gd2hpY2ggaXMgcmVxdWlyZWQgaWYgeW91ciBnYW1lXG5cdFx0ICogcmVxdWlyZXMgc21vb3RoIGFuaW1hdGlvbi4gQmVjYXVzZSBldmVyeW9uZSdzIGNvbXB1dGVyIHByb2Nlc3Nlc1xuXHRcdCAqIGluc3RydWN0aW9ucyBhdCBkaWZmZXJlbnQgc3BlZWRzIHdlIG5lZWQgYSBjb25zdGFudCB2YWx1ZSB0aGF0XG5cdFx0ICogd291bGQgYmUgdGhlIHNhbWUgZm9yIGV2ZXJ5b25lIChyZWdhcmRsZXNzIG9mIGhvdyBmYXN0IHRoZWlyXG5cdFx0ICogY29tcHV0ZXIgaXMpIC0gaHVycmF5IHRpbWUhXG5cdFx0ICovXG5cdFx0dmFyIG5vdyA9IERhdGUubm93KCksXG5cdFx0XHRkdCA9IChub3cgLSBsYXN0VGltZSkgLyAxMDAwLjA7XG5cblx0XHQvKiBDYWxsIG91ciB1cGRhdGUvcmVuZGVyIGZ1bmN0aW9ucywgcGFzcyBhbG9uZyB0aGUgdGltZSBkZWx0YSB0b1xuXHRcdCAqIG91ciB1cGRhdGUgZnVuY3Rpb24gc2luY2UgaXQgbWF5IGJlIHVzZWQgZm9yIHNtb290aCBhbmltYXRpb24uXG5cdFx0ICovXG5cdFx0dXBkYXRlKGR0KTtcblx0XHRyZW5kZXIoKTtcblxuXHRcdC8qIFNldCBvdXIgbGFzdFRpbWUgdmFyaWFibGUgd2hpY2ggaXMgdXNlZCB0byBkZXRlcm1pbmUgdGhlIHRpbWUgZGVsdGFcblx0XHQgKiBmb3IgdGhlIG5leHQgdGltZSB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZC5cblx0XHQgKi9cblx0XHRsYXN0VGltZSA9IG5vdztcblxuXHRcdC8qIFVzZSB0aGUgYnJvd3NlcidzIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmdW5jdGlvbiB0byBjYWxsIHRoaXNcblx0XHQgKiBmdW5jdGlvbiBhZ2FpbiBhcyBzb29uIGFzIHRoZSBicm93c2VyIGlzIGFibGUgdG8gZHJhdyBhbm90aGVyIGZyYW1lLlxuXHRcdCAqL1xuXHRcdHdpbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWFpbik7XG5cdFx0d2luLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluW2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW52YXMnKV0pOyAvLyBDaHJvbWUvV2Via2l0XG5cdH1cblxuXHQvKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZSBpbml0aWFsIHNldHVwIHRoYXQgc2hvdWxkIG9ubHkgb2NjdXIgb25jZSxcblx0ICogcGFydGljdWxhcmx5IHNldHRpbmcgdGhlIGxhc3RUaW1lIHZhcmlhYmxlIHRoYXQgaXMgcmVxdWlyZWQgZm9yIHRoZVxuXHQgKiBnYW1lIGxvb3AuXG5cdCAqL1xuXHRmdW5jdGlvbiBpbml0KCkge1xuXHRcdHJlc2V0KCk7XG5cdFx0bGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdG1haW4oKTtcblx0fVxuXG5cdC8qIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IG1haW4gKG91ciBnYW1lIGxvb3ApIGFuZCBpdHNlbGYgY2FsbHMgYWxsXG5cdCAqIG9mIHRoZSBmdW5jdGlvbnMgd2hpY2ggbWF5IG5lZWQgdG8gdXBkYXRlIGVudGl0eSdzIGRhdGEuIEJhc2VkIG9uIGhvd1xuXHQgKiB5b3UgaW1wbGVtZW50IHlvdXIgY29sbGlzaW9uIGRldGVjdGlvbiAod2hlbiB0d28gZW50aXRpZXMgb2NjdXB5IHRoZVxuXHQgKiBzYW1lIHNwYWNlLCBmb3IgaW5zdGFuY2Ugd2hlbiB5b3VyIGNoYXJhY3RlciBzaG91bGQgZGllKSwgeW91IG1heSBmaW5kXG5cdCAqIHRoZSBuZWVkIHRvIGFkZCBhbiBhZGRpdGlvbmFsIGZ1bmN0aW9uIGNhbGwgaGVyZS4gRm9yIG5vdywgd2UndmUgbGVmdFxuXHQgKiBpdCBjb21tZW50ZWQgb3V0IC0geW91IG1heSBvciBtYXkgbm90IHdhbnQgdG8gaW1wbGVtZW50IHRoaXNcblx0ICogZnVuY3Rpb25hbGl0eSB0aGlzIHdheSAoeW91IGNvdWxkIGp1c3QgaW1wbGVtZW50IGNvbGxpc2lvbiBkZXRlY3Rpb25cblx0ICogb24gdGhlIGVudGl0aWVzIHRoZW1zZWx2ZXMgd2l0aGluIHlvdXIgYXBwLmpzIGZpbGUpLlxuXHQgKi9cblx0ZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG5cdFx0dXBkYXRlRW50aXRpZXMoZHQpO1xuXHRcdC8vIGNoZWNrQ29sbGlzaW9ucygpO1xuXHR9XG5cblx0LyogVGhpcyBpcyBjYWxsZWQgYnkgdGhlIHVwZGF0ZSBmdW5jdGlvbiBhbmQgbG9vcHMgdGhyb3VnaCBhbGwgb2YgdGhlXG5cdCAqIG9iamVjdHMgd2l0aGluIHlvdXIgYWxsRW5lbWllcyBhcnJheSBhcyBkZWZpbmVkIGluIGFwcC5qcyBhbmQgY2FsbHNcblx0ICogdGhlaXIgdXBkYXRlKCkgbWV0aG9kcy4gSXQgd2lsbCB0aGVuIGNhbGwgdGhlIHVwZGF0ZSBmdW5jdGlvbiBmb3IgeW91clxuXHQgKiBwbGF5ZXIgb2JqZWN0LiBUaGVzZSB1cGRhdGUgbWV0aG9kcyBzaG91bGQgZm9jdXMgcHVyZWx5IG9uIHVwZGF0aW5nXG5cdCAqIHRoZSBkYXRhL3Byb3BlcnRpZXMgcmVsYXRlZCB0byB0aGUgb2JqZWN0LiBEbyB5b3VyIGRyYXdpbmcgaW4geW91clxuXHQgKiByZW5kZXIgbWV0aG9kcy5cblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZUVudGl0aWVzKGR0KSB7XG5cdFx0YWxsRW5lbWllcy5mb3JFYWNoKGZ1bmN0aW9uKGVuZW15KSB7XG5cdFx0XHRlbmVteS51cGRhdGUoZHQpO1xuXHRcdH0pO1xuXHRcdHBsYXllci51cGRhdGUoKTtcblx0fVxuXG5cdC8qIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGx5IGRyYXdzIHRoZSBcImdhbWUgbGV2ZWxcIiwgaXQgd2lsbCB0aGVuIGNhbGxcblx0ICogdGhlIHJlbmRlckVudGl0aWVzIGZ1bmN0aW9uLiBSZW1lbWJlciwgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZXZlcnlcblx0ICogZ2FtZSB0aWNrIChvciBsb29wIG9mIHRoZSBnYW1lIGVuZ2luZSkgYmVjYXVzZSB0aGF0J3MgaG93IGdhbWVzIHdvcmsgLVxuXHQgKiB0aGV5IGFyZSBmbGlwYm9va3MgY3JlYXRpbmcgdGhlIGlsbHVzaW9uIG9mIGFuaW1hdGlvbiBidXQgaW4gcmVhbGl0eVxuXHQgKiB0aGV5IGFyZSBqdXN0IGRyYXdpbmcgdGhlIGVudGlyZSBzY3JlZW4gb3ZlciBhbmQgb3Zlci5cblx0ICovXG5cdGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHQvKiBUaGlzIGFycmF5IGhvbGRzIHRoZSByZWxhdGl2ZSBVUkwgdG8gdGhlIGltYWdlIHVzZWRcblx0XHQgKiBmb3IgdGhhdCBwYXJ0aWN1bGFyIHJvdyBvZiB0aGUgZ2FtZSBsZXZlbC5cblx0XHQgKi9cblx0XHR2YXIgcm93SW1hZ2VzID0gW1xuXHRcdFx0XHQnaW1hZ2VzL3dhdGVyLWJsb2NrLnBuZycsICAgLy8gVG9wIHJvdyBpcyB3YXRlclxuXHRcdFx0XHQnaW1hZ2VzL3N0b25lLWJsb2NrLnBuZycsICAgLy8gUm93IDEgb2YgMyBvZiBzdG9uZVxuXHRcdFx0XHQnaW1hZ2VzL3N0b25lLWJsb2NrLnBuZycsICAgLy8gUm93IDIgb2YgMyBvZiBzdG9uZVxuXHRcdFx0XHQnaW1hZ2VzL3N0b25lLWJsb2NrLnBuZycsICAgLy8gUm93IDMgb2YgMyBvZiBzdG9uZVxuXHRcdFx0XHQnaW1hZ2VzL2dyYXNzLWJsb2NrLnBuZycsICAgLy8gUm93IDEgb2YgMiBvZiBncmFzc1xuXHRcdFx0XHQnaW1hZ2VzL2dyYXNzLWJsb2NrLnBuZycgICAgLy8gUm93IDIgb2YgMiBvZiBncmFzc1xuXHRcdFx0XSxcblx0XHRcdG51bVJvd3MgPSA2LFxuXHRcdFx0bnVtQ29scyA9IDUsXG5cdFx0XHRyb3csIGNvbDtcblxuXHRcdC8vIEJlZm9yZSBkcmF3aW5nLCBjbGVhciBleGlzdGluZyBjYW52YXNcblx0XHRjdHguY2xlYXJSZWN0KDAsMCxjYW52YXMud2lkdGgsY2FudmFzLmhlaWdodCk7XG5cblx0XHQvKiBMb29wIHRocm91Z2ggdGhlIG51bWJlciBvZiByb3dzIGFuZCBjb2x1bW5zIHdlJ3ZlIGRlZmluZWQgYWJvdmVcblx0XHQgKiBhbmQsIHVzaW5nIHRoZSByb3dJbWFnZXMgYXJyYXksIGRyYXcgdGhlIGNvcnJlY3QgaW1hZ2UgZm9yIHRoYXRcblx0XHQgKiBwb3J0aW9uIG9mIHRoZSBcImdyaWRcIlxuXHRcdCAqL1xuXHRcdGZvciAocm93ID0gMDsgcm93IDwgbnVtUm93czsgcm93KyspIHtcblx0XHRcdGZvciAoY29sID0gMDsgY29sIDwgbnVtQ29sczsgY29sKyspIHtcblx0XHRcdFx0LyogVGhlIGRyYXdJbWFnZSBmdW5jdGlvbiBvZiB0aGUgY2FudmFzJyBjb250ZXh0IGVsZW1lbnRcblx0XHRcdFx0ICogcmVxdWlyZXMgMyBwYXJhbWV0ZXJzOiB0aGUgaW1hZ2UgdG8gZHJhdywgdGhlIHggY29vcmRpbmF0ZVxuXHRcdFx0XHQgKiB0byBzdGFydCBkcmF3aW5nIGFuZCB0aGUgeSBjb29yZGluYXRlIHRvIHN0YXJ0IGRyYXdpbmcuXG5cdFx0XHRcdCAqIFdlJ3JlIHVzaW5nIG91ciBSZXNvdXJjZXMgaGVscGVycyB0byByZWZlciB0byBvdXIgaW1hZ2VzXG5cdFx0XHRcdCAqIHNvIHRoYXQgd2UgZ2V0IHRoZSBiZW5lZml0cyBvZiBjYWNoaW5nIHRoZXNlIGltYWdlcywgc2luY2Vcblx0XHRcdFx0ICogd2UncmUgdXNpbmcgdGhlbSBvdmVyIGFuZCBvdmVyLlxuXHRcdFx0XHQgKi9cblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShSZXNvdXJjZXMuZ2V0KHJvd0ltYWdlc1tyb3ddKSwgY29sICogMTAxLCByb3cgKiA4Myk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmVuZGVyRW50aXRpZXMoKTtcblx0fVxuXG5cdC8qIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IHRoZSByZW5kZXIgZnVuY3Rpb24gYW5kIGlzIGNhbGxlZCBvbiBlYWNoIGdhbWVcblx0ICogdGljay4gSXRzIHB1cnBvc2UgaXMgdG8gdGhlbiBjYWxsIHRoZSByZW5kZXIgZnVuY3Rpb25zIHlvdSBoYXZlIGRlZmluZWRcblx0ICogb24geW91ciBlbmVteSBhbmQgcGxheWVyIGVudGl0aWVzIHdpdGhpbiBhcHAuanNcblx0ICovXG5cdGZ1bmN0aW9uIHJlbmRlckVudGl0aWVzKCkge1xuXHRcdC8qIExvb3AgdGhyb3VnaCBhbGwgb2YgdGhlIG9iamVjdHMgd2l0aGluIHRoZSBhbGxFbmVtaWVzIGFycmF5IGFuZCBjYWxsXG5cdFx0ICogdGhlIHJlbmRlciBmdW5jdGlvbiB5b3UgaGF2ZSBkZWZpbmVkLlxuXHRcdCAqL1xuXHRcdGFsbEVuZW1pZXMuZm9yRWFjaChmdW5jdGlvbihlbmVteSkge1xuXHRcdFx0ZW5lbXkucmVuZGVyKCk7XG5cdFx0fSk7XG5cblx0XHRwbGF5ZXIucmVuZGVyKCk7XG5cdH1cblxuXHQvKiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90aGluZyBidXQgaXQgY291bGQgaGF2ZSBiZWVuIGEgZ29vZCBwbGFjZSB0b1xuXHQgKiBoYW5kbGUgZ2FtZSByZXNldCBzdGF0ZXMgLSBtYXliZSBhIG5ldyBnYW1lIG1lbnUgb3IgYSBnYW1lIG92ZXIgc2NyZWVuXG5cdCAqIHRob3NlIHNvcnRzIG9mIHRoaW5ncy4gSXQncyBvbmx5IGNhbGxlZCBvbmNlIGJ5IHRoZSBpbml0KCkgbWV0aG9kLlxuXHQgKi9cblx0ZnVuY3Rpb24gcmVzZXQoKSB7XG5cdFx0Ly8gbm9vcFxuXHR9XG5cblx0LyogR28gYWhlYWQgYW5kIGxvYWQgYWxsIG9mIHRoZSBpbWFnZXMgd2Uga25vdyB3ZSdyZSBnb2luZyB0byBuZWVkIHRvXG5cdCAqIGRyYXcgb3VyIGdhbWUgbGV2ZWwuIFRoZW4gc2V0IGluaXQgYXMgdGhlIGNhbGxiYWNrIG1ldGhvZCwgc28gdGhhdCB3aGVuXG5cdCAqIGFsbCBvZiB0aGVzZSBpbWFnZXMgYXJlIHByb3Blcmx5IGxvYWRlZCBvdXIgZ2FtZSB3aWxsIHN0YXJ0LlxuXHQgKi9cblx0UmVzb3VyY2VzLmxvYWQoW1xuXHRcdCdpbWFnZXMvc3RvbmUtYmxvY2sucG5nJyxcblx0XHQnaW1hZ2VzL3dhdGVyLWJsb2NrLnBuZycsXG5cdFx0J2ltYWdlcy9ncmFzcy1ibG9jay5wbmcnLFxuXHRcdCdpbWFnZXMvZW5lbXktYnVnLnBuZycsXG5cdFx0J2ltYWdlcy9jaGFyLWJveS5wbmcnXG5cdF0pO1xuXHRSZXNvdXJjZXMub25SZWFkeShpbml0KTtcblxuXHQvKiBBc3NpZ24gdGhlIGNhbnZhcycgY29udGV4dCBvYmplY3QgdG8gdGhlIGdsb2JhbCB2YXJpYWJsZSAodGhlIHdpbmRvd1xuXHQgKiBvYmplY3Qgd2hlbiBydW4gaW4gYSBicm93c2VyKSBzbyB0aGF0IGRldmVsb3BlcnMgY2FuIHVzZSBpdCBtb3JlIGVhc2lseVxuXHQgKiBmcm9tIHdpdGhpbiB0aGVpciBhcHAuanMgZmlsZXMuXG5cdCAqL1xuXHRnbG9iYWwuY3R4ID0gY3R4O1xufSkodGhpcyk7XG4iXSwiZmlsZSI6ImVuZ2luZS5qcyJ9
