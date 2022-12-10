//function expression

let greetMe = function () {
  console.log('Hey, I am node!');
};

module.exports = greetMe; //module.exports will be passed by the node after wrapping the code in an IIFE function before
//passing it to v8 engine. Hence this line of code will work.