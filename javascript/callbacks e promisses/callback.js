//promises
const doSomethingPromise = new Promise((resolve, reject)=> {
    setTimeout (function() {
   // did something
    resolve('First data');
  }, 1000);
})


//callbacks
function doSomething(callback){
  setTimeout (function() {
   // did something
    callback('First data');
  }, 1000);
}
function do0therThing(callback) {
  setTimeout(function() {
    // did other thing
    callback('Second data');
 }, 1000);
}
function doAll() {
    try {
    doSomething(function(data) {
        var processedData = data.split('');

        do0therThing(function(data2) {
            var processedData2 = data2.split('');

            setTimeout(function() {
                console.log(processedData, processedData2);
        }, 1000);
       });
     });
    }   catch(err){
    }
}

doAll()