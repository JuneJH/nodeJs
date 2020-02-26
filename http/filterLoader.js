const fs = require('fs');

const configGlob = require('./config');
const filterPaths = fs.readdirSync(configGlob.filter_path)
const filterSet = [];

for(let i = 0; i < filterPaths.length; i ++){
    filterSet.push(require('./'+configGlob.filter_path + '/' + filterPaths[i]))
}


module.exports = filterSet;