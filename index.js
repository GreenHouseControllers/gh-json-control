const pathFunc = require('path');

const liveConfig = require('./config/liveConfig');
const buildFunc = require('./bin/build');

const slowStaticMethods = require('./bin/methods/slowStatic');

module.exports = {
    _nullPath: undefined,

    _slowStaticPaths: {},
    _slowDynamicPaths: {},

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
        this._slowStaticPaths = buildResponse.slowStaticPaths;
        this._slowDynamicPaths = buildResponse.slowDynamicPaths;

        console.log(1, this.fastDynamic);
        console.log(2, this.fastStatic);
        console.log(3, this._slowStaticPaths);
        console.log(4, this._slowDynamicPaths);

        return this.setup;
    },
    getFullSlowStatic(name){
        let path = this._slowStaticPaths
    }
}