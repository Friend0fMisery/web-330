/*
============================================
; Title: Assignment 3.2
; Author: Justin Singleton
; Date: 23 August 2019
; Description: This program demonstrates the
; use of JavaScript Factory Pattern.
;===========================================
*/
// header //
const header = require('../singleton-header.js');
console.log(header.display("Justin", "Singleton", "Assignment 3.2"));
// function classes //
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

function Oracle(properties) {
  this.username = properties.username || "justin";
  this.password = properties.password || "12x34";
  this.server = properties.server || "localhost:1234";
  this.version = properties.version || 9.16;
};

function Informix(properties) {
  this.username = properties.username || "john";
  this.password = properties.password || "56y78";
  this.server = properties.server || "localhost:5678";
};
// empty factory function //
function DatabaseFactory() {};
// factory function to assign database types to function classes //
DatabaseFactory.prototype.databaseClass = Oracle;
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  }
  if (properties.databaseType === "MySql") {
    this.databaseClass = MySql;
  }
  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  }
  if (properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  }
  return new this.databaseClass(properties);
};
// database factory objects //
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "admin",
  password: "password"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "admin",
  password: "password"
});
// output Oracle and Informix results //
console.log(oracle);
console.log(informix);
