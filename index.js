const  fs = require('fs');

console.log('READ START');
// Asynchronous way to read file

fs.readFile('input.txt',function(err,data){
    if(err){
        console.log(err);
        return err;
    }
    console.log('Data: ', data.toString());
    console.log('READ END');
    return data;
} );

console.log('OTHER STUFF');

//synchronous way to read file

const data  = fs.readFileSync('input.txt');
console.log('Data',data.toString());
console.log('READ END');
console.log('OTHER STUFF');



// Operation

// Read- OPEN -> READ

// const fs = require('fs');
// const buf = new Buffer(1024);

// fs.open('input.txt', 'r+', function (err, fd) {
//     if (err) {
//         console.log('Error: ', err);
//     }
//     console.log('File open successfully');

//     fs.read(fd, buf, 0, buf.length, function (er, bytes) {
//         if (er) {
//             console.log(er);
//         }
//         console.log('Data: ', bytes);
//         console.log('Data: ', buf.slice(0, bytes).toString());
//     });
// });


//WRITE

