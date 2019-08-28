'use strict';

var config = {
	// [production|development], overridden by NODE_ENV environment variable
	env: process.env.NODE_ENV || 'production',
	// [error|warning|info|debug], overridden by LOG_LEVEL environment variable
	logLevel: process.env.LOG_LEVEL || 'warning',
	bodyLimit: '100kb',
	corsHeaders: [ "Link" ],
	development: {
		// location of key and cert files for secure server
		httpsFileLocation: '[[CURRENT_DIR]]/../',
		server: {
			host: '127.0.0.1',
			// port value overridden by PORT environment variable
			port: process.env.PORT || '3000'
		}
	},
	production: {
		// location of key and cert files for secure server
		httpsFileLocation: '/etc/letsencrypt/live/your-host-name.com/',
		server: {
			host: 'your-host-name.com',
			// port value overridden by PORT environment variable
			port: process.env.PORT || '3000'
		}
	},
	// interval (ms) for printing memory usage to console, 0 to disable
	memoryCheckInterval: 0
};
module.exports = config;