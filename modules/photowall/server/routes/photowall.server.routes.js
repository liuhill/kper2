'use strict';

module.exports = function(app) {
	// Routing logic
	var pw = require('../controller/photowall.server.contoller.js');

	app.route('/pw').get(pw.renderIndex);
	// ...
};
