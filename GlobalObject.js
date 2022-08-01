// common js module paatern require , export, path 
const path = require('path');
function print(props){
    console.log(props);
}

function getNextElement(array, item){
    var itemIndex = array.indexOf(item);
    console.log(itemIndex);
    return array[itemIndex+1];
}

print(__dirname);
print(__filename);
print(process.id);
const itemArray = process.argv;
const firstName = getNextElement(itemArray,"--firstName");
const lastName = getNextElement(itemArray,"--lastName");
print("Arguments"+ firstName+" and "+lastName);
console.log(`The file name is ${path.basename(__filename)}`);