/*
============================================
; Title: Assignment 1.3
; Author: Justin Singleton
; Date: 10 August 2019
; Description: This program demonstrates the
; use of JavaScript function classes.
;===========================================
*/

const header = require('../singleton-header.js');
console.log(header.display("Justin", "Singleton", "Assignment 1.3"));

function Phone(price) {
  this.manufacturer = "LG";
  this.model = "G7";
  this.color = "grey";
  this.price = price;
  this.getPrice = function() {
    return this.price;
  };
  this.getModel = function() {
    return this.model;
  };
  this.getDetails = function() {
    return "-- DISPLAYING CELL PHONE DETAILS --" +
    "\n" + "Manufacturer: " + this.manufacturer +
    "\n" + "Model: " + this.getModel() +
    "\n" + "Color: " + this.color +
    "\n" + "Price: " + this.getPrice();
  };
};

var phone = new Phone(600);

console.log(phone.getDetails());
