const pathFunc = require('path');

const liveConfig = require('./config/liveConfig');
const buildFunc = require('./bin/build');

module.exports = {
    _nullPath: undefined,
    setup: undefined,
    fastDynamic: undefined,
    fastStatic: undefined,

    connect(dirname, path){
        this._nullPath = pathFunc.join(dirname, path);
        liveConfig.setUserPath(path);
        let buildResponse = buildFunc(this._nullPath);

        this.setup = buildResponse.setup;
        this.fastDynamic = buildResponse.fastDynamic;
        this.fastStatic = buildResponse.fastStatic;

        console.log(1, this.fastDynamic);
        console.log(2, this.fastStatic);

        return this.setup;
    }
}