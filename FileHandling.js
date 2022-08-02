const fs = require('fs');
/**
 * Other fs.readfileSysn(file, encoding,)
 * fs.readfile(file, encoding, (error, text){ console.log(text)})
 * for Binary: No encoding Arg
 * "fs.writeFile(file, text, err => {})"
 * fs.mkdir(file, ,err =>{})
 * Check to see if file exists: fs.existSync(filename)",
 * Append Files: const coloData = require(file)  ie. a json file
 * fs.appendFile(file, data, err =>{})
 * Rename as sync and async version: 
 * fs.renameSync(filename, newname)
 * It can be use to move file
 * fs.rename(filename, newfile, err =>{})
 * Rename directories: fs.renameSync(dirname, newName),
 * Remove dir: fs.rmdir(dirname, err=>{})
 * Before removing dir: we need to dlete files in there: 
 * fs.readdirSync() => gets all filename
 * Loop through each file name and use fs.unlink
 */

//Sychonously
// console.log("Started reading files");
const files = fs.readdirSync("./lib");
// console.log("finished reading files");
//Async

fs.readdir("./lib",(err,files) => {
    console.log("finished reading files");
    console.log(files);
})
//Tis will be invoked because above read will be invoked async
console.log("Started reading files");
//console.log(files);
