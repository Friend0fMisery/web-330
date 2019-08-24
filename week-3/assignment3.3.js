/*
============================================
; Title: Assignment 3.3
; Author: Justin Singleton
; Date: 23 August 2019
; Description: This program demonstrates the
; use of JavaScript Singleton Pattern.
;===========================================
*/
// header //
const header = require('../singleton-header.js');
console.log(header.display("Justin", "Singleton", "Assignment 3.3"));
// the Singleton function to create a single and same instance //
var DatabaseSingletonTest = (function() {
  var instance;
  function createInstance() {
    var singleDatabase = new Object("Database Instance Initialized!");
    return singleDatabase;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();
// function to create and compare two of the same Singleton instance //
function databaseInit() {
  var databaseInstance1 = DatabaseSingletonTest.getInstance();
  var databaseInstance2 = DatabaseSingletonTest.getInstance();
  console.log("Same Database Instance? " + (databaseInstance1 === databaseInstance2));
}
// call the function //
databaseInit();
