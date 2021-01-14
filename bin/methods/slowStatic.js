const fs = require('fs');

module.exports = {
    getFull(path){
        return JSON.parse(fs.readFileSync(path));
    }
}