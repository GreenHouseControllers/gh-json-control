const fs = require('fs');
const path = require('path');

const build = (fullPath) => {
    let returnArr = {
        fastDynamic: {},
        fastStatic: {},
        slowStaticPaths: {},
        slowDynamicPaths: {}
    };
// read and parse build.json
    let buildJson = JSON.parse(fs.readFileSync(path.join(fullPath, './build.json')));

    for (i = 0; i < buildJson.length; i++){
// get setup array
        if(buildJson[i]["type"] == "setup"){
            let filePath = path.join(fullPath, './', buildJson[i]["fileName"]);
            returnArr["setup"] = JSON.parse(fs.readFileSync(filePath));
        }
// get fast-dynamic arrays
        else if(buildJson[i]["type"] == "fast-dynamic"){
            let filePath = path.join(fullPath, './', buildJson[i]["fileName"]);
            let name = buildJson[i]["name"];
            returnArr["fastDynamic"][name] = JSON.parse(fs.readFileSync(filePath));
        }
// get fast-static arrays
        else if(buildJson[i]["type"] == "fast-static"){
            let filePath = path.join(fullPath, './', buildJson[i]["fileName"]);
            let name = buildJson[i]["name"];
            returnArr["fastStatic"][name] = JSON.parse(fs.readFileSync(filePath));
        }
// get slow-static paths
        else if(buildJson[i]["type"] == "slow-static"){
            const filePath = path.join(fullPath, './', buildJson[i]["fileName"]);
            const name = buildJson[i]["name"];
            returnArr["slowStaticPaths"][name] = filePath;
        }
// get slow-dynamic paths
        else if(buildJson[i]["type"] == "slow-dynamic"){
            const filePath = path.join(fullPath, './', buildJson[i]["fileName"]);
            const name = buildJson[i]["name"];
            returnArr["slowDynamicPaths"][name] = filePath;
        }
    }
    return returnArr;

}

module.exports = build;