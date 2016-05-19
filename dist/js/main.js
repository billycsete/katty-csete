(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Google Analytics
 */

'use strict';

/* jshint ignore:start */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');


// Init analytics
var initialize = function(trackingID) {
	ga('create', trackingID, 'auto');
	ga('send', 'pageview');
};


module.exports.initialize = initialize;
/* jshint ignore:end */

},{}],2:[function(require,module,exports){
/**
 * requestionAnimationFrame shim
 * http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
 */

'use strict';

window.requestAnimationFrame = (function() {
	return window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};
})();

},{}],3:[function(require,module,exports){
'use strict';

// Add raf shim
require('./requestAnimationFrame.js');


/**
 * scrollToElement
 *
 * @description smooth scroll to an element
 * @param {Element} element - anchor link scroll to trigger
 * @param {Number} scrollSpeed - speed of scroll in milliseconds
 */
function scrollToElement(element, scrollSpeed) {

	var scrollTargetY = element.offsetTop || 0;
	var scrollY = window.scrollY;
	var speed = scrollSpeed || 2000;
	var currentTime = 0;

	// min time 0.1, max time 0.8 seconds
	var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

	// easing equations from https://github.com/danro/easing-js/blob/master/easing.js
	function easeOutSine(pos) {
		return Math.sin(pos * (Math.PI / 2));
	}

	// add animation loop
	function tick() {
		currentTime += 1 / 60;

		var p = currentTime / time;
		var t = easeOutSine(p);

		if (p < 1) {
			requestAnimationFrame(tick);
			window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
		} else {
			window.scrollTo(0, scrollTargetY);
		}
	}

	// call it once to get started
	tick();
}


module.exports = scrollToElement;

},{"./requestAnimationFrame.js":2}],4:[function(require,module,exports){
'use strict';

var googleAnalytics  = require('./helpers/googleAnalytics.js');
var scrollToElement = require('./helpers/scrollToElement.js');


/**
 * Main JS
 */
var Main = (function() {


	/**
	 * Setup scroll to section sidebar links
	 */
	function initSectionScrollLinks() {

		var scrollLinks = document.querySelectorAll('.sidebar-link');

		for (var i = 0; i < scrollLinks.length; i++) {
			scrollLinks[i].addEventListener('click', function(evt) {
				// get a reference to the element associated with the scroll to link that was clicked
				var id = evt.target.getAttribute('href').replace('#', '');
				var element = document.getElementById(id);
				// if no matching element was found, exit now
				if (!element) {
					return;
				}
				// prevent the default anchor link jump
				evt.preventDefault();
				// scroll to the section related to the sidebar link clicked
				scrollToElement(element, 1500);
			});
		}
	}


	/**
	 * Initialize Main
	 */
	return {
		initialize : function() {
			// setup google analytics
			var googleAnalyticsTrackingID = 'UA-43275048-4';
			googleAnalytics.initialize(googleAnalyticsTrackingID);
			// setup sidebar links
			initSectionScrollLinks();
		},
	};


})();

module.exports.Main = Main.initialize();


},{"./helpers/googleAnalytics.js":1,"./helpers/scrollToElement.js":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaGVscGVycy9nb29nbGVBbmFseXRpY3MuanMiLCJzcmMvanMvaGVscGVycy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCJzcmMvanMvaGVscGVycy9zY3JvbGxUb0VsZW1lbnQuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBHb29nbGUgQW5hbHl0aWNzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG4oZnVuY3Rpb24oaSxzLG8sZyxyLGEsbSl7aVsnR29vZ2xlQW5hbHl0aWNzT2JqZWN0J109cjtpW3JdPWlbcl18fGZ1bmN0aW9uKCl7XG4oaVtyXS5xPWlbcl0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0saVtyXS5sPTEqbmV3IERhdGUoKTthPXMuY3JlYXRlRWxlbWVudChvKSxcbm09cy5nZXRFbGVtZW50c0J5VGFnTmFtZShvKVswXTthLmFzeW5jPTE7YS5zcmM9ZzttLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsbSlcbn0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnLy93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJywnZ2EnKTtcblxuXG4vLyBJbml0IGFuYWx5dGljc1xudmFyIGluaXRpYWxpemUgPSBmdW5jdGlvbih0cmFja2luZ0lEKSB7XG5cdGdhKCdjcmVhdGUnLCB0cmFja2luZ0lELCAnYXV0bycpO1xuXHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cy5pbml0aWFsaXplID0gaW5pdGlhbGl6ZTtcbi8qIGpzaGludCBpZ25vcmU6ZW5kICovXG4iLCIvKipcbiAqIHJlcXVlc3Rpb25BbmltYXRpb25GcmFtZSBzaGltXG4gKiBodHRwOi8vd3d3LnBhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuXHR9O1xufSkoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gQWRkIHJhZiBzaGltXG5yZXF1aXJlKCcuL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcycpO1xuXG5cbi8qKlxuICogc2Nyb2xsVG9FbGVtZW50XG4gKlxuICogQGRlc2NyaXB0aW9uIHNtb290aCBzY3JvbGwgdG8gYW4gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gYW5jaG9yIGxpbmsgc2Nyb2xsIHRvIHRyaWdnZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY3JvbGxTcGVlZCAtIHNwZWVkIG9mIHNjcm9sbCBpbiBtaWxsaXNlY29uZHNcbiAqL1xuZnVuY3Rpb24gc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQsIHNjcm9sbFNwZWVkKSB7XG5cblx0dmFyIHNjcm9sbFRhcmdldFkgPSBlbGVtZW50Lm9mZnNldFRvcCB8fCAwO1xuXHR2YXIgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuXHR2YXIgc3BlZWQgPSBzY3JvbGxTcGVlZCB8fCAyMDAwO1xuXHR2YXIgY3VycmVudFRpbWUgPSAwO1xuXG5cdC8vIG1pbiB0aW1lIDAuMSwgbWF4IHRpbWUgMC44IHNlY29uZHNcblx0dmFyIHRpbWUgPSBNYXRoLm1heCgwLjEsIE1hdGgubWluKE1hdGguYWJzKHNjcm9sbFkgLSBzY3JvbGxUYXJnZXRZKSAvIHNwZWVkLCAwLjgpKTtcblxuXHQvLyBlYXNpbmcgZXF1YXRpb25zIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2RhbnJvL2Vhc2luZy1qcy9ibG9iL21hc3Rlci9lYXNpbmcuanNcblx0ZnVuY3Rpb24gZWFzZU91dFNpbmUocG9zKSB7XG5cdFx0cmV0dXJuIE1hdGguc2luKHBvcyAqIChNYXRoLlBJIC8gMikpO1xuXHR9XG5cblx0Ly8gYWRkIGFuaW1hdGlvbiBsb29wXG5cdGZ1bmN0aW9uIHRpY2soKSB7XG5cdFx0Y3VycmVudFRpbWUgKz0gMSAvIDYwO1xuXG5cdFx0dmFyIHAgPSBjdXJyZW50VGltZSAvIHRpbWU7XG5cdFx0dmFyIHQgPSBlYXNlT3V0U2luZShwKTtcblxuXHRcdGlmIChwIDwgMSkge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFkgKyAoKHNjcm9sbFRhcmdldFkgLSBzY3JvbGxZKSAqIHQpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFRhcmdldFkpO1xuXHRcdH1cblx0fVxuXG5cdC8vIGNhbGwgaXQgb25jZSB0byBnZXQgc3RhcnRlZFxuXHR0aWNrKCk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGxUb0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBnb29nbGVBbmFseXRpY3MgID0gcmVxdWlyZSgnLi9oZWxwZXJzL2dvb2dsZUFuYWx5dGljcy5qcycpO1xudmFyIHNjcm9sbFRvRWxlbWVudCA9IHJlcXVpcmUoJy4vaGVscGVycy9zY3JvbGxUb0VsZW1lbnQuanMnKTtcblxuXG4vKipcbiAqIE1haW4gSlNcbiAqL1xudmFyIE1haW4gPSAoZnVuY3Rpb24oKSB7XG5cblxuXHQvKipcblx0ICogU2V0dXAgc2Nyb2xsIHRvIHNlY3Rpb24gc2lkZWJhciBsaW5rc1xuXHQgKi9cblx0ZnVuY3Rpb24gaW5pdFNlY3Rpb25TY3JvbGxMaW5rcygpIHtcblxuXHRcdHZhciBzY3JvbGxMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLWxpbmsnKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2Nyb2xsTGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHNjcm9sbExpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRcdC8vIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIHNjcm9sbCB0byBsaW5rIHRoYXQgd2FzIGNsaWNrZWRcblx0XHRcdFx0dmFyIGlkID0gZXZ0LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuXHRcdFx0XHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0XHRcdFx0Ly8gaWYgbm8gbWF0Y2hpbmcgZWxlbWVudCB3YXMgZm91bmQsIGV4aXQgbm93XG5cdFx0XHRcdGlmICghZWxlbWVudCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBwcmV2ZW50IHRoZSBkZWZhdWx0IGFuY2hvciBsaW5rIGp1bXBcblx0XHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdC8vIHNjcm9sbCB0byB0aGUgc2VjdGlvbiByZWxhdGVkIHRvIHRoZSBzaWRlYmFyIGxpbmsgY2xpY2tlZFxuXHRcdFx0XHRzY3JvbGxUb0VsZW1lbnQoZWxlbWVudCwgMTUwMCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIE1haW5cblx0ICovXG5cdHJldHVybiB7XG5cdFx0aW5pdGlhbGl6ZSA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gc2V0dXAgZ29vZ2xlIGFuYWx5dGljc1xuXHRcdFx0dmFyIGdvb2dsZUFuYWx5dGljc1RyYWNraW5nSUQgPSAnVUEtNDMyNzUwNDgtNCc7XG5cdFx0XHRnb29nbGVBbmFseXRpY3MuaW5pdGlhbGl6ZShnb29nbGVBbmFseXRpY3NUcmFja2luZ0lEKTtcblx0XHRcdC8vIHNldHVwIHNpZGViYXIgbGlua3Ncblx0XHRcdGluaXRTZWN0aW9uU2Nyb2xsTGlua3MoKTtcblx0XHR9LFxuXHR9O1xuXG5cbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzLk1haW4gPSBNYWluLmluaXRpYWxpemUoKTtcblxuIl19
