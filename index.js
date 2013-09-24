var nunjucks = require('nunjucks');
var path = require('path');


exports.__express = function(templatePath, options, fn) {
	var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(options.settings.views));
	try {
		fn(null, env.render(templatePath, options));
	} catch (ex) {
		fn(ex);
	}
};