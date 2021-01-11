const fs = require('fs');
const path = require('path');

const build = (dirname, dirPath) => {
    let returnArr = {};

    let fullPath = path.join(dirname, dirPath);

    let buildJson = JSON.parse(fs.readFileSync(path.join(fullPath, './build.json')));
    for (i = 0; i < buildJson.length; i++){
        if(buildJson[i]["type"] == "setup"){
            let filePath = path.join(fullPath, './', buildJson[i]["fileName"]);
            returnArr["setup"] = JSON.parse(fs.readFileSync(filePath));
        }
    }
    return returnArr;

}

module.exports = build;