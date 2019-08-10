/*
============================================
; Title: Assignment 1.4
; Author: Justin Singleton
; Date: 10 August 2019
; Description: This program demonstrates the
; use of Javascript Duck typing.
;===========================================
*/

const header = require('../singleton-header.js');
console.log(header.display("Justin", "Singleton", "Assignment 1.4"));

function Car(model) {
  this.model = model;
}

Car.prototype.start = function() {
  console.log("Car added to the Racetrack!");
}

function Truck(model, year) {
  this.model = model;
  this.year = year;
}

Truck.prototype.start = function() {
  console.log("Truck added to the Racetrack!");
}

function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

Jeep.prototype.start = function() {
  console.log("Jeep added to the Racetrack!");
}

var racetrack = [];

function driveIt(vehicle) {
  vehicle.start();
  racetrack.push(vehicle);
}

var cruze = new Car("Cruze");
var silverado = new Truck("Silverado", "2020");
var wrangler = new Jeep("Wrangler", "2018", "Black");

driveIt(cruze);
driveIt(silverado);
driveIt(wrangler);

console.log("-- The following vehicles have been added to the racetrack --");

for (i = 0; i < racetrack.length; i++) {
  console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
}
