const tox = () => "X"; 
const printOnSameLine = (val) =>{
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(val);
}

class PromiseQueueClass{
    constructor(promiseList=[], concurrentTask = 1){
        this.taskList = promiseList;
        this.concurrentTask = concurrentTask;
        this.taskCount = promiseList.length;
        this.processingList = [];
        this.completedList = [];
    }

    graphTask(){
       var { taskList, processingList, completedList} = this;
       printOnSameLine(`
            taskList : [${taskList.map(tox)}] 
            processingList : [${processingList.map(tox)}] 
            completedList : [${completedList.map(tox)}]  

       
       `);
    }   

    get runAnother(){
            return (this.processingList.length < this.concurrentTask  && this.taskCount)
        }

    run(){
        while(this.runAnother && this.taskList.length){
            var promise = this.taskList.shift();
            promise.then(()=>{
                this.completedList.push(this.processingList.shift());
                this.run();
                this.graphTask();
            })
            this.processingList.push(promise);
            this.graphTask();
        }
    }

}
module.exports = PromiseQueueClass