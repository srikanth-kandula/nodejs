/**
 * One pattern of using module.exports
 * 
 * is to directly assign a object that needs to be used.
 * As objects are of reference type, changes made to the object properites will persist
 * across all the files (modules) that require the module.
 */

let person = {
  age: 22,
  name: 'Krishna',
  greet: function () {
    console.log(`Hello from ${this.name}`);
  }
};

module.exports = person;