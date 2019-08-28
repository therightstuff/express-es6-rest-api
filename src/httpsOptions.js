import fs from 'fs';

import config from '../config';
import { log } from './lib/util';

// readFileSync function must use __dirname get current directory
// require use ./ refer to current directory.

let httpsOptions = {};
try {
    var source = config[config.env].httpsFileLocation.replace('[[CURRENT_DIR]]', __dirname);
    var key = `${source}privkey.pem`;
    var cert = `${source}cert.pem`;
    log.info(`key: ${key}`);
    log.info(`cert: ${cert}`);
    httpsOptions = {
        key: fs.readFileSync(key, 'utf8'),
        cert: fs.readFileSync(cert, 'utf8')
    };
} catch (error){
    log.info('unable to load https key and certificate');
    log.debug(error);
}

module.exports = httpsOptions;