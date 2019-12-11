'use strict';
/////////// Global variable///////////
var darkAnswer = [];
var lightAnswer = [];
var questions = [];

/////////////constructor/////////////

function Strings (question, dark, light) {
  this.question = question;
  this.dark = dark;
  this.light = light;

  questions.push(this.question);
  darkAnswer.push(this.dark);
  lightAnswer.push(this.light);
}

new Strings ('', '', '');
new Strings ('', '', '');
new Strings ('', '', '');
new Strings ('', '', '');
new Strings ('', '', '');
new Strings ('', '', '');
new Strings ('', '', '');
new Strings ('', '', '');
new Strings ('', '', '');



