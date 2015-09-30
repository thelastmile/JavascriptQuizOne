/*jshint eqnull:true, expr:true*/

// For this quiz, you will be writing
// functions and creating objects
// to satisfy the specifications!

// isEven()
// This function should return true if the provided number is even
// and false if the provided numer is odd.

var isEven = function(num) {
  return num % 2 == 0
}

// longestWord()
// This function takes a string as its argument and returns the
// longest word in that string. This includes one word strings

var longestWord = function(text) {
  var words = text.split(' ');
  var winningWord = 0;
  var maxLength = 0;
  words.forEach(function(w) {
    if (w.length > maxLength) { 
      winningWord = w;
      maxLength = w.length;
    }
  });
  return winningWord;
}

// removeX()
// This function takes a string as its argument and returns
// the string having removed any occurence of the 
// characters 'x' or 'X'.

var removeX = function(text) {
 return text.replace(/x/gi, '');
};

// triple()
// Edit the below function to return 3x the number provided,
// OR return a string "not an number" if the argument provided
// is not a number!
var triple =function(num) {
if(typeof(num) == 'number') {
  return num * 3;
} else {
  return "not an number"
}
};

// reverse()
// Write a function that reverses a string
// without removing the whitespace
var reverse = function(letters) {
  return letters.split('').reverse().join('');
};

// Pizza()
// Write an object constructor function
// that creates a Pizza object
// with an ingredients array of the string 'pepperoni'
// and a size property set to 'large'

function Pizza() {
  this.ingredients = ['pepperoni']
  this.size = 'large'
}

// Car();
// This function should create a Car object
// It should have a drive() function that takes a number of miles
// as its argument and a miles_drive() function
// that returns the total number of miles the car has driven

function Car() {
  this.driven = 0;
  this.drive = function(miles) {
    this.driven += miles;
  }
}

// PasscodeValidator
// Construct an object that takes a secret code when 
// instantiated and has
// "validate" method that returns true if the passcode
// provided matches the secret code. 

function PasscodeValidator(code) {
  var secret = code;
  this.validate = function(attempt) {
    return attempt == secret;
  }
}

// validate_date()
//Write a function that takes a date string in the format
//"mm/dd/yy" and validates that the month and day 
//are valid. For example 01/99/1987 would be invalid 
//because 99 is not a valid month

var validate_date = function(date) {
  var parts = date.split('/');
  if(13 > parts[0] > 0) {
    if(32 > parts[1] > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// format_date()
// Write a function that takes an abbreviated date string "mm/dd/yyyy"
// and reformats the date to read "Month, dd, year" 
// eg format_date("12/22/2015") -> "December 22, 2015"
var format_date = function(date) {
  var parts = date.split('/');
  var months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December']
  return months[parts[0] - 1] + " " + parts[1] + ", " + parts[2];
}


// maxDifference()
// Write a function that takes an array of positive integers
// and returns the maximum difference between any two
// of the integers in the array

var maxDifference = function(numbers) {
  var min = numbers[0];
  var max = numbers[0];
  numbers.forEach(function(x) {
    if(min > x) { min = x; }
    if(max < x) { max = x; }
  });
  return max - min;
};

// ShoppingCart() 
// Construct an object with three methods
// addItem() accepts an Item object and saves it inside the ShoppingCart
// totalItems() counts the number of items current in the ShoppingCart
// totalPrice() sums the price of each item by calling price() on each item
//
// here is the Item constructor
function Item() { this.price = Math.random() * 10 }

function ShoppingCart() {
  this.items = [];
  this.addItem = function(item) {
    this.items.push(item)
    return true;
  };
  this.totalItems = function() {
    return this.items.length;
  };
  this.totalPrice = function() {
    var total = 0;
    this.items.forEach(function(i) {
      total += i.price;
    });
    return total;
  };
}

