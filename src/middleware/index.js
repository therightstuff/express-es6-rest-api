import { Router } from 'express';
import { log } from '../lib/util';

export default ({ config, db }) => {
	let routes = Router();

	log.debug(`loading middleware with ${config.env} config and db state ${db.state}`);

	// add middleware here

	return routes;
}
