// List all files in a directory in Node.js recursively in a synchronous fashion
var walkSync = function (dir, filelist) {
    var path = path || require('path');
    var fs = fs || require('fs'), files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function (file) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = walkSync(path.join(dir, file), filelist);
        }
        else {
            filelist.push(path.join(dir, file));
        }
    });
    return filelist;
};
var arr = [];
walkSync('./src/assets', arr);
createPreloadScene(arr);
function createPreloadScene(arr) {
    var content = "export default class PreloadScene extends Phaser.Scene {\n    constructor() {\n      super({ key: 'PreloadScene' });\n    }\n    preload() {\n";
    var obj = {};
    arr.forEach(function (element) {
        if (element.search('.png') === -1) {
            return;
        }
        var key = element.replace('.png', '').slice(element.lastIndexOf('/') + 1);
        obj[key.toUpperCase()] = key;
        content += "\t\t\tthis.load.image('" + key + "', '" + element + "');\n";
    });
    content += "\t}\n}\n";
    content += "export const PRELOADED_KEYS = " + JSON.stringify(obj);
    var fs = require('fs');
    fs.writeFile(__dirname + '/dist/preloadScene.ts', content, function () { return console.log(obj); });
}