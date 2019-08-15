/*
============================================
; Title: Assignment 2.2
; Author: Justin Singleton
; Date: 15 August 2019
; Description: This program demonstrates the
; use of Javascript Prototypes.
;===========================================
*/
// header //
const header = require('../singleton-header.js');
console.log(header.display("Justin", "Singleton", "Assignment 2.2"));
// object literal 'person' with getAge function //
var person = {
  getAge: function () {
    return this.age
  }
};
// new person object 'justin' with 'age' and 'fullname' //
var justin = Object.create(person, {
  "age": {
    "value": "23",
  },
  "fullname": {
    "value": "Justin Singleton"
  }
});
// call getAge function with 'justin' //
justin.getAge();
// log statements for 'fullname' and 'age' //
console.log("The person's full name is " + justin.fullname + ".");
console.log("The person's age is " + justin.getAge());
