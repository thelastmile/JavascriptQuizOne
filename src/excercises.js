/*jshint eqnull:true, expr:true*/

// For this quiz, you will be writing
// functions and creating objects
// to satisfy the specifications!

var quiz = {};

(function() {

// triple()
// Edit the below function to return 3x the number provided,
// OR return a string "not an number" if the argument provided
// is not a number!
  quiz.triple = function(num) {
    if(typeof(num) == 'number') {
      return num * 3;
    } else {
      return "not an number"
    }
  };

// reverse()
// Write a function that reverses the contents
// of a string
  quiz.reverse = function(letters) {
    return letters.split('').reverse().join('');
  };

// makePizza()
// This function should create a Pizza object
// with an ingredients array of the string 'pepperoni'
// and a size property set to 'large'
// NOt sure if this is an anti-pattern

  quiz.makePizza = function Pizza() {
    this.ingredients = ['pepperoni']
    this.size = 'large'
  }

// myCar();
// This function should create a Car object
// that records the number of miles it drives.
// It should have a drive() function that takes a number of miles
// as its argument and a miles_drive() function
// that returns the total number of miles the car has driven

  quiz.myCar = function() {
    function Car() {
      this.driven = 0;
      this.drive = function(miles) {
        this.driven += miles;
      }
    }
    return new Car();
  }
  

}).call(this);
