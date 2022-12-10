var bfr = new Buffer.alloc(5, 'abcdeasfasf', 'ascii'); //creates a buffer of size 5bytes with default value of 'abcdeasfasf' (only 5 bytes is stored and remaining data is ignored) and encoding as ascii
console.log(bfr)
console.log(bfr.toString()); //abcde
console.log(bfr.toJSON())
console.log(bfr[2]); //buffer behaves as if it is an array, so we can access specific buffer elements like an array element
bfr.write('YZ');
console.log(bfr.toString()); //YZcde