// This file implements a class that will take in parameter as a lit fo promises and 
//tries to run them sequentially at few specified bundles at a time
//It simiar to message queues with
const PromiseQueueClass = require("./PromiseQueueClass")

var delay = (seconds) => new Promise((resolve,reject)=>{
    setTimeout(resolve, seconds*1000);
})

//Combining both sequential and parallel processes or promises at same time
//We eant to execute delay certain no. of promisies in paraller or concurrently
const concurrentTasks = [
    delay(2),
    delay(5),
    delay(10),
    delay(3),
    delay(2),
    delay(5),
    delay(10),
    delay(3)
]
//2 is the number of tasks we want to execute concurrently
var pq = new PromiseQueueClass(concurrentTasks, 2);
pq.run();

