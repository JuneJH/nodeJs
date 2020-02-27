const fs = require('fs');
const configGlobal = require('./config');

const pathSet = new Map();


function init(app) {
    const files = fs.readdirSync(configGlobal['web_path']);
    for (let i = 0; i < files.length; i++) {
        const temp = require('./' + configGlobal['web_path'] + '/' + files[i]);
        if (temp) {
            for (const [k, v] of temp) {
                if (!pathSet.get(k)) {
                    pathSet.set(k, v);
                    app.get(k,v);
                } else {
                    throw Error('接口重复！！！')
                }

            }
        }
    }
}

module.exports.init = init