
var $ = require('../../lib/jquery/jquery.js');

var Sidebar = function() {

	var eventType = (document.ontouchstart !== null) ? 'click' : 'touchstart';
	var navItems = $('.sidebar-nav a');

	navItems.on(eventType, function (evt) {
		//stop default behavior
		evt.preventDefault();

		// get section id from the href
		var link = $(this).attr('href');

		// scroll to section
		$('html, body').animate({
			scrollTop: $(link).offset().top
		}, 500);
	});
};

module.exports = Sidebar;
