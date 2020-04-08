'use strict';

import { log } from './lib/util';

export default ({ config }, next) => {
	log.debug(`loading db with ${config.env} config`);

	// connect to a database if needed, then pass it to callback:
	let db = {
		state: "not available" // add relevant state to any db object
	};
	if (next) next(db);
};