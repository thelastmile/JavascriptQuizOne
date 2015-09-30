
describe('isEven()', function() {
  it('should return true if the number is even', function() {
    expect(isEven(16)).to.eql(true);
  });

  it('should return false if the number is odd', function() {
    expect(isEven(21)).to.eql(false);
  });
});

describe('longestWord()', function() {
  it('returns the longest word in a string', function() {
    expect(longestWord('hey yo whats up')).to.eql('whats');
  });

  it('works for one word strings', function() {
    expect(longestWord('short')).to.eql('short');
  });
});

describe('triple()', function() {
  it('should return *3 the number provided', function() {
    expect(triple(2)).to.equal(6)
  });

  it('should return "not an integer" if the argument provided is not a number', function() {
    expect(triple('hahaha')).to.equal('not an number');
  });

});

describe('removeX()', function() { 
  it('should remove any occurence of the letter x', function() {
    expect(removeX("xbxb")).to.eql("bb");
  });

  it('should remove capitalized X too', function() {
    expect(removeX("XXXwhy")).to.eql('why');
  });
});


describe('reverse()', function() {
  it('should reverse the string provided', function() {
    var test = "good times";
    expect(reverse(test)).to.eql('semit doog');
  });
});

describe('makePizza()', function() {
  var pizza = new Pizza();

  it('should construct a Pizza object', function() {
    expect(pizza.constructor.name).to.eql('Pizza');
  });

  it('should have a property called "ingredients" that is an array', function() {
    expect(pizza.ingredients).to.be.an('array');
  });

  it('should have a property called "size" that is set to "large"', function() {
    expect(pizza.size).to.eql('large');
  });
});

describe('Car', function() {

  var car = new Car();

  it('should construct a Car object', function() {
    expect(car).to.be.a(Car);
  })

  it('with a "drive()" method that adds miles', function() {
    expect(car).to.have.property('drive');
    //car.drive(100);
  });

  it('and a "driven()" method that returns the number of miles driven', function() {
    car.drive(100);
    expect(car.driven).to.eql(100);
  });
});
      
describe('PasscodeValidator', function() {

  var validator = new PasscodeValidator(1234);

  it('should take a code param when constructed', function() {
    var validator = new PasscodeValidator(1234);
  });

  it ('should have a "validate" method that returns true if the provided string matches the secret code', function() {
    expect(validator.validate(1234)).to.eql(true);
  });
  
  it('should return false if validate() is passed a string that does not match the secret code', function() {
    expect(validator.validate(5678)).to.eql(false);
  });
});

describe('validate_date()', function() {

  it('should return false if the month is higher than 12', function() {
    expect(validate_date('33/22/98')).to.eql(false);
  });

  it('should return false if the day is not valid', function() {
    expect(validate_date('12/33/12')).to.eql(false);
  });
});

describe('format_date()', function() {
  it('should return the date in the format of "Month, day, year", e.g. "December 31, 2012"', function() {
    expect(format_date("06/22/2015")).to.eql("June 22, 2015");
  });

  it('should return the full name of the month', function() {
    expect(format_date("12/31/2012")).to.eql("December 31, 2012");
  });

});

describe('maxDifference()', function() {
  it('should return the maximum difference of any pair of numbers in the given array', function() {
    expect(maxDifference([1,3,54,98,21,3])).to.eql(97);
  });
});


describe('ShoppingCart', function() { 
  var cart = new ShoppingCart();
  var item1 = new Item();
  var item2 = new Item();

  it('should have a function addItem that saves items in the cart AND returns true', function() {
    expect(cart.addItem(item1)).to.eql(true);
  });

  it('should have a function totalItems that returns the number of items added to the cart', function() {
    cart.addItem(item2);
    expect(cart.totalItems()).to.eql(2);
  });

  it('should have a function totalPrice that returns the total prices of the items added the the cart', function() {
    expect(cart.totalPrice()).to.eql(item1.price + item2.price);
  });
});







