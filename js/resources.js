/* Resources.js
 * This is simply an image loading utility. It eases the process of loading
 * image files so that they can be used within your game. It also includes
 * a simple "caching" layer so it will reuse cached images if you attempt
 * to load the same image multiple times.
 */
(function() {
	var resourceCache = {};
	var loading = [];
	var readyCallbacks = [];

	/* This is the publicly accessible image loading function. It accepts
	 * an array of strings pointing to image files or a string for a single
	 * image. It will then call our private image loading function accordingly.
	 */
	function load(urlOrArr) {
		if(urlOrArr instanceof Array) {
			/* If the developer passed in an array of images
			 * loop through each value and call our image
			 * loader on that image file
			 */
			urlOrArr.forEach(function(url) {
				_load(url);
			});
		} else {
			/* The developer did not pass an array to this function,
			 * assume the value is a string and call our image loader
			 * directly.
			 */
			_load(urlOrArr);
		}
	}

	/* This is our private image loader function, it is
	 * called by the public image loader function.
	 */
	function _load(url) {
		if(resourceCache[url]) {
			/* If this URL has been previously loaded it will exist within
			 * our resourceCache array. Just return that image rather
			 * re-loading the image.
			 */
			return resourceCache[url];
		} else {
			/* This URL has not been previously loaded and is not present
			 * within our cache; we'll need to load this image.
			 */
			var img = new Image();
			img.onload = function() {
				/* Once our image has properly loaded, add it to our cache
				 * so that we can simply return this image if the developer
				 * attempts to load this file in the future.
				 */
				resourceCache[url] = img;

				/* Once the image is actually loaded and properly cached,
				 * call all of the onReady() callbacks we have defined.
				 */
				if(isReady()) {
					readyCallbacks.forEach(function(func) { func(); });
				}
			};

			/* Set the initial cache value to false, this will change when
			 * the image's onload event handler is called. Finally, point
			 * the image's src attribute to the passed in URL.
			 */
			resourceCache[url] = false;
			img.src = url;
		}
	}

	/* This is used by developers to grab references to images they know
	 * have been previously loaded. If an image is cached, this functions
	 * the same as calling load() on that URL.
	 */
	function get(url) {
		return resourceCache[url];
	}

	/* This function determines if all of the images that have been requested
	 * for loading have in fact been properly loaded.
	 */
	function isReady() {
		var ready = true;
		for(var k in resourceCache) {
			if(resourceCache.hasOwnProperty(k) &&
			   !resourceCache[k]) {
				ready = false;
			}
		}
		return ready;
	}

	/* This function will add a function to the callback stack that is called
	 * when all requested images are properly loaded.
	 */
	function onReady(func) {
		readyCallbacks.push(func);
	}

	/* This object defines the publicly accessible functions available to
	 * developers by creating a global Resources object.
	 */
	window.Resources = {
		load: load,
		get: get,
		onReady: onReady,
		isReady: isReady
	};
})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyZXNvdXJjZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogUmVzb3VyY2VzLmpzXG4gKiBUaGlzIGlzIHNpbXBseSBhbiBpbWFnZSBsb2FkaW5nIHV0aWxpdHkuIEl0IGVhc2VzIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmdcbiAqIGltYWdlIGZpbGVzIHNvIHRoYXQgdGhleSBjYW4gYmUgdXNlZCB3aXRoaW4geW91ciBnYW1lLiBJdCBhbHNvIGluY2x1ZGVzXG4gKiBhIHNpbXBsZSBcImNhY2hpbmdcIiBsYXllciBzbyBpdCB3aWxsIHJldXNlIGNhY2hlZCBpbWFnZXMgaWYgeW91IGF0dGVtcHRcbiAqIHRvIGxvYWQgdGhlIHNhbWUgaW1hZ2UgbXVsdGlwbGUgdGltZXMuXG4gKi9cbihmdW5jdGlvbigpIHtcblx0dmFyIHJlc291cmNlQ2FjaGUgPSB7fTtcblx0dmFyIGxvYWRpbmcgPSBbXTtcblx0dmFyIHJlYWR5Q2FsbGJhY2tzID0gW107XG5cblx0LyogVGhpcyBpcyB0aGUgcHVibGljbHkgYWNjZXNzaWJsZSBpbWFnZSBsb2FkaW5nIGZ1bmN0aW9uLiBJdCBhY2NlcHRzXG5cdCAqIGFuIGFycmF5IG9mIHN0cmluZ3MgcG9pbnRpbmcgdG8gaW1hZ2UgZmlsZXMgb3IgYSBzdHJpbmcgZm9yIGEgc2luZ2xlXG5cdCAqIGltYWdlLiBJdCB3aWxsIHRoZW4gY2FsbCBvdXIgcHJpdmF0ZSBpbWFnZSBsb2FkaW5nIGZ1bmN0aW9uIGFjY29yZGluZ2x5LlxuXHQgKi9cblx0ZnVuY3Rpb24gbG9hZCh1cmxPckFycikge1xuXHRcdGlmKHVybE9yQXJyIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdC8qIElmIHRoZSBkZXZlbG9wZXIgcGFzc2VkIGluIGFuIGFycmF5IG9mIGltYWdlc1xuXHRcdFx0ICogbG9vcCB0aHJvdWdoIGVhY2ggdmFsdWUgYW5kIGNhbGwgb3VyIGltYWdlXG5cdFx0XHQgKiBsb2FkZXIgb24gdGhhdCBpbWFnZSBmaWxlXG5cdFx0XHQgKi9cblx0XHRcdHVybE9yQXJyLmZvckVhY2goZnVuY3Rpb24odXJsKSB7XG5cdFx0XHRcdF9sb2FkKHVybCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0LyogVGhlIGRldmVsb3BlciBkaWQgbm90IHBhc3MgYW4gYXJyYXkgdG8gdGhpcyBmdW5jdGlvbixcblx0XHRcdCAqIGFzc3VtZSB0aGUgdmFsdWUgaXMgYSBzdHJpbmcgYW5kIGNhbGwgb3VyIGltYWdlIGxvYWRlclxuXHRcdFx0ICogZGlyZWN0bHkuXG5cdFx0XHQgKi9cblx0XHRcdF9sb2FkKHVybE9yQXJyKTtcblx0XHR9XG5cdH1cblxuXHQvKiBUaGlzIGlzIG91ciBwcml2YXRlIGltYWdlIGxvYWRlciBmdW5jdGlvbiwgaXQgaXNcblx0ICogY2FsbGVkIGJ5IHRoZSBwdWJsaWMgaW1hZ2UgbG9hZGVyIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gX2xvYWQodXJsKSB7XG5cdFx0aWYocmVzb3VyY2VDYWNoZVt1cmxdKSB7XG5cdFx0XHQvKiBJZiB0aGlzIFVSTCBoYXMgYmVlbiBwcmV2aW91c2x5IGxvYWRlZCBpdCB3aWxsIGV4aXN0IHdpdGhpblxuXHRcdFx0ICogb3VyIHJlc291cmNlQ2FjaGUgYXJyYXkuIEp1c3QgcmV0dXJuIHRoYXQgaW1hZ2UgcmF0aGVyXG5cdFx0XHQgKiByZS1sb2FkaW5nIHRoZSBpbWFnZS5cblx0XHRcdCAqL1xuXHRcdFx0cmV0dXJuIHJlc291cmNlQ2FjaGVbdXJsXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0LyogVGhpcyBVUkwgaGFzIG5vdCBiZWVuIHByZXZpb3VzbHkgbG9hZGVkIGFuZCBpcyBub3QgcHJlc2VudFxuXHRcdFx0ICogd2l0aGluIG91ciBjYWNoZTsgd2UnbGwgbmVlZCB0byBsb2FkIHRoaXMgaW1hZ2UuXG5cdFx0XHQgKi9cblx0XHRcdHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0LyogT25jZSBvdXIgaW1hZ2UgaGFzIHByb3Blcmx5IGxvYWRlZCwgYWRkIGl0IHRvIG91ciBjYWNoZVxuXHRcdFx0XHQgKiBzbyB0aGF0IHdlIGNhbiBzaW1wbHkgcmV0dXJuIHRoaXMgaW1hZ2UgaWYgdGhlIGRldmVsb3BlclxuXHRcdFx0XHQgKiBhdHRlbXB0cyB0byBsb2FkIHRoaXMgZmlsZSBpbiB0aGUgZnV0dXJlLlxuXHRcdFx0XHQgKi9cblx0XHRcdFx0cmVzb3VyY2VDYWNoZVt1cmxdID0gaW1nO1xuXG5cdFx0XHRcdC8qIE9uY2UgdGhlIGltYWdlIGlzIGFjdHVhbGx5IGxvYWRlZCBhbmQgcHJvcGVybHkgY2FjaGVkLFxuXHRcdFx0XHQgKiBjYWxsIGFsbCBvZiB0aGUgb25SZWFkeSgpIGNhbGxiYWNrcyB3ZSBoYXZlIGRlZmluZWQuXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRpZihpc1JlYWR5KCkpIHtcblx0XHRcdFx0XHRyZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGZ1bmMpIHsgZnVuYygpOyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0LyogU2V0IHRoZSBpbml0aWFsIGNhY2hlIHZhbHVlIHRvIGZhbHNlLCB0aGlzIHdpbGwgY2hhbmdlIHdoZW5cblx0XHRcdCAqIHRoZSBpbWFnZSdzIG9ubG9hZCBldmVudCBoYW5kbGVyIGlzIGNhbGxlZC4gRmluYWxseSwgcG9pbnRcblx0XHRcdCAqIHRoZSBpbWFnZSdzIHNyYyBhdHRyaWJ1dGUgdG8gdGhlIHBhc3NlZCBpbiBVUkwuXG5cdFx0XHQgKi9cblx0XHRcdHJlc291cmNlQ2FjaGVbdXJsXSA9IGZhbHNlO1xuXHRcdFx0aW1nLnNyYyA9IHVybDtcblx0XHR9XG5cdH1cblxuXHQvKiBUaGlzIGlzIHVzZWQgYnkgZGV2ZWxvcGVycyB0byBncmFiIHJlZmVyZW5jZXMgdG8gaW1hZ2VzIHRoZXkga25vd1xuXHQgKiBoYXZlIGJlZW4gcHJldmlvdXNseSBsb2FkZWQuIElmIGFuIGltYWdlIGlzIGNhY2hlZCwgdGhpcyBmdW5jdGlvbnNcblx0ICogdGhlIHNhbWUgYXMgY2FsbGluZyBsb2FkKCkgb24gdGhhdCBVUkwuXG5cdCAqL1xuXHRmdW5jdGlvbiBnZXQodXJsKSB7XG5cdFx0cmV0dXJuIHJlc291cmNlQ2FjaGVbdXJsXTtcblx0fVxuXG5cdC8qIFRoaXMgZnVuY3Rpb24gZGV0ZXJtaW5lcyBpZiBhbGwgb2YgdGhlIGltYWdlcyB0aGF0IGhhdmUgYmVlbiByZXF1ZXN0ZWRcblx0ICogZm9yIGxvYWRpbmcgaGF2ZSBpbiBmYWN0IGJlZW4gcHJvcGVybHkgbG9hZGVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gaXNSZWFkeSgpIHtcblx0XHR2YXIgcmVhZHkgPSB0cnVlO1xuXHRcdGZvcih2YXIgayBpbiByZXNvdXJjZUNhY2hlKSB7XG5cdFx0XHRpZihyZXNvdXJjZUNhY2hlLmhhc093blByb3BlcnR5KGspICYmXG5cdFx0XHQgICAhcmVzb3VyY2VDYWNoZVtrXSkge1xuXHRcdFx0XHRyZWFkeSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVhZHk7XG5cdH1cblxuXHQvKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYWRkIGEgZnVuY3Rpb24gdG8gdGhlIGNhbGxiYWNrIHN0YWNrIHRoYXQgaXMgY2FsbGVkXG5cdCAqIHdoZW4gYWxsIHJlcXVlc3RlZCBpbWFnZXMgYXJlIHByb3Blcmx5IGxvYWRlZC5cblx0ICovXG5cdGZ1bmN0aW9uIG9uUmVhZHkoZnVuYykge1xuXHRcdHJlYWR5Q2FsbGJhY2tzLnB1c2goZnVuYyk7XG5cdH1cblxuXHQvKiBUaGlzIG9iamVjdCBkZWZpbmVzIHRoZSBwdWJsaWNseSBhY2Nlc3NpYmxlIGZ1bmN0aW9ucyBhdmFpbGFibGUgdG9cblx0ICogZGV2ZWxvcGVycyBieSBjcmVhdGluZyBhIGdsb2JhbCBSZXNvdXJjZXMgb2JqZWN0LlxuXHQgKi9cblx0d2luZG93LlJlc291cmNlcyA9IHtcblx0XHRsb2FkOiBsb2FkLFxuXHRcdGdldDogZ2V0LFxuXHRcdG9uUmVhZHk6IG9uUmVhZHksXG5cdFx0aXNSZWFkeTogaXNSZWFkeVxuXHR9O1xufSkoKTtcbiJdLCJmaWxlIjoicmVzb3VyY2VzLmpzIn0=
