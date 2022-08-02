//file that consumes this module will have no acces to count
let count = 0;
const inc = () => count++;
const dec = () => count--;
const getCount = () => count;

module.exports = {
    inc,
    dec,
    getCount
}