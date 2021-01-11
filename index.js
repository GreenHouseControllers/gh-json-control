const liveConfig = require('./config/liveConfig');
const buildFunc = require('./bin/build');

module.exports = {
    setup: undefined,
    connect(dirname, path){
        liveConfig.setUserPath(path);
        let buildResponse = buildFunc(dirname, path);
        this.setup = buildResponse.setup;

        return this.setup;
    }
}