/**
 * One pattern of using module.exports
 * 
 * is to directly assign a function to it, which can be invoked upon require' ing.
 */
module.exports = function () {
  console.log('first greet');
};