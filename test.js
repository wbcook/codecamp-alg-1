var assert = require('assert');

//***
// Mocha Example
//***

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

//***
// Chai Example
//***

var should = require('chai').should() //actually call the function

describe('Tea Ceremony', function() {
  describe('Tea Offerings', function() {
    it('should offer three (3) selections of tea', function() {
      var foo = 'bar'
      , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

      foo.should.be.a('string');
      foo.should.equal('bar');
      foo.should.have.length(3);
      beverages.should.have.property('tea').with.length(3);
    });
  });
});

//***
// Reverse a String
//***

// You may need to turn the string into an array before you can reverse it.
//
// Your result must be a string.

// Global String Object
// String.prototype.split()
// Array.prototype.forEach()
// Array.prototype.reverse()
// Array.prototype.join()

describe('Reverse a String', function() {
  describe('#reverseString()', function() {
    it('should reverse the provided string', function() {

      function reverseString(string) {

        string = string.split(' ');

        for (var i = 0; i < string.length; i++) {

          string[i] = string[i].split('').reverse().join('');

        }

        string = string.reverse().join(' ');

        return string;

      }
      reverseString("hello").should.be.a('string');
      reverseString("hello").should.equal('olleh');
      reverseString("Howdy").should.equal('ydwoH');
      reverseString("Your mother was a murloc").should.equal('colrum a saw rehtom ruoY');
    });
  });
});

describe('Factorialize a Number', function() {
  describe('#factorialize()', function() {
    it('should return the factorial of the provided integer', function() {

      function factorialize(num) {

        var result = 1;

        for (var i = 1; i <= num; i++) {

          result = result * i;

        }

        return result;
      }

      factorialize(5).should.be.a('number');
      factorialize(5).should.equal(120);
      factorialize(10).should.equal(3628800);
      factorialize(20).should.equal(2432902008176640000);
      factorialize(0).should.equal(1);

    });
  });
});

describe('Check for Palindromes', function() {
  describe('#palindrome()', function() {
    it('should return true if the given string is a palindrome. Otherwise, return false.', function() {

      function palindrome(str) {

        var fwd = str.replace(/[\W_]/g, '').toLowerCase();
        bwd = reverseString(str.replace(/[\W_]/g, '').toLowerCase());

        if (fwd === bwd) {
          return true;
        } else {
          return false;
        }

        return str;

      }

      function reverseString(string) {

        string = string.split(' ');

        for (var i = 0; i < string.length; i++) {

          string[i] = string[i].split('').reverse().join('');

        }

        string = string.reverse().join(' ');

        return string;

      }

      palindrome("eye").should.be.a('boolean');
      palindrome("eye").should.equal(true);
      palindrome("_eye").should.equal(true);
      palindrome("race car").should.equal(true);
      palindrome("not a palindrome").should.equal(false);
      palindrome("A man, a plan, a canal. Panama").should.equal(true);
      palindrome("never odd or even").should.equal(true);
      palindrome("nope").should.equal(false);
      palindrome("almostomla").should.equal(false);
      palindrome("My age is 0, 0 si ega ym.").should.equal(true);
      palindrome("1 eye for of 1 eye.").should.equal(false);
      palindrome("0_0 (: /-\ :) 0-0").should.equal(true);
      palindrome("five|\_/|four").should.equal(false);

    });
  });
});

// .------------------------------------------------------------------.
// |                                  _                               |
// |                              - `   `' .                         /|
// |                          - `            `.                     L |
// |                        .                  ;- .                J  |
// |                       -                    _.,;               L  |
// |                      '                    '   | ..           /   |
// |                     '                       /`/    -        J    |
// |                    :      ,-""-.             |   .  ` `-.   L    |
// |                     `_--.  _.-. `.         `-'  '         `/     |
// |\                     (0)/ J|(0)) |          -  .          L      |
// | \                   .`-/  J '-' /           \            J       |
// |  \                .-  /  _ .-"`           \              L       |
// |   \              .   Y  (O  `-            \          __ J        |
// |    \                 L`__     '         \          .`  )L        |
// |     \           '    `^__`;'`  \       \          /    /         |
// |      \               -               \            |    \         |
// |       \        '     / /        \   \             |     \   /`\  |
// |        \      .       ' /|| \ `  \ \              |      \  \  \ |
// |         \    .        .            |               \      `.|   Y|
// |          \  .        :             |               J\           ||
// |           \.        :              J               L \          ;|
// |  _       _/        .               L              /   \         \|
// | ( `-._.-'         .                 \            L     `._       |
// |,._     _.'       .`                  \          J        `.      |
// ||  `````  .' ,  /|                     `-.       L          \     |
// |`._   __.'  /  / |\                       `-.,__./           \    |
// |   ```,`   /  / /  \                            J             \   |
// |  .-'    ,'  /_/    \                           L              \  |
// |  `._.-'.__.'     sk \                         J                \ |
// '------------------------------------------------------------------'

//***
// EOF
//***
