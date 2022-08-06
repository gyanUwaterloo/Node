const { Readable } = require("stream");

class ReadableArrayStream extends Readable{
    constructor(array=[]){
        super({objectMode : true});
        this.array = array;
        this.index = 0;
    }
//Therefore to read a file's whole contents from a `readable`, it is necessary
// to collect chunks across multiple `'readable'` events:
// The `readable.read()` method should only be called on `Readable` streams
//              * operating in paused mode. In flowing mode, `readable.read()` is called
//              * automatically until the internal buffer is fully drained.
    _read(){
        if(this.index <  this.array.length){
            const chunk = this.array[this.index];
            this.push({"data":chunk,"index": this.index});
            this.index++;
        }else{
            this.push(null);
        }

    }
}

const arrayList =["Mano","Apple","Oranges","Banana"];
var readStream = new ReadableArrayStream(arrayList);
readStream.on('data',(data)=>{console.log(data)})
readStream.on('end',()=> console.log("Stream Ended!")); 