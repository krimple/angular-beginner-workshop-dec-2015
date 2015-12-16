The JS Oath:

#1 I will ALWAYS RUN JSHINT
#2 I will never think of JavaScript as Java. Ever.

Lesson Notes - JavaScript Node and Angular

#1 - the node environment
(use nvm to set up a node with nvm install stable)
(puts node in ~/.nvm/versions/xxxxx)
(adds version’s bin directory to the path)
(you now get node and npm on the command line)

#2 - npm install <packagename>
Puts the package in the ./node-modules directory (under the current one).  Does not place anything into the path (by default).  Good for libraries we want to reach from the program in that directory, but not for utility scripts.

#3 - npm install -g <packagename>
Puts the package in ~/.nvm/versions/xxxx/lib, and makes a symbolic link to any script files in the package’s bin directory in the ~/.nvm/versions/bin directory so you can use it.  Good for any utility command lines like jshint, karma, gulp, grunt, and other Node-based tools.

#4 - npm init  - creates a project by initializing package.json in the current directory.
The project is used for version control, and for dependency management.
Similar (but not completely) to Maven’s pom.xml file in Java

#5 - playing with node using the REPL

(run ‘node’)

#6 - npm install —save (ex:  npm install perf-time —-save)
 
#7 - constructor functions:
function Foo() {
	this.thing = 'x';
	this.func1 = function() { ...}
} 

creates a new object Foo with a property x
and function func1.
Great for objects that need to be created in 
more than one place (domain objects)

#8 - javascript literals

var thing = {
	x: 234,
	doSomething: function() { ... }
}

Creates object thing with property x and function property doSomething.  Good for one-off objects (think tests and configs and structural elements in your app)

#9 jasmine
Jasmine (jasmine.github.io) - is a testing api with the following features

 // describe:  the body of the test suite
 describe('simple javascript calculator', function() {
  // this is a function-based API, so any variables the
  // whole test needs can be pre-defined (name-wise or even
  // with values) at the describe block and seen by beforeEach, it, and afterEach
  var calculator;

  // runs before each 'it'
  beforeEach(function() {
    calculator = new Calculator();
  });

  // a test spec 
  it('should add properly', function() {
    var result = calculator.add(3, 4);
    // expect:  the thing to check
    // toBe: the matcher (see the docs for all the matchers)
    expect(result).toBe(7);
  });

  it('should subtract properly', function() {
    var result = calculator.subtract(3, 4);
    expect(result).toBe(-1);
  });
});

#10 - running Jasmine - though Karma
npm install jasmine-core --save-dev 
npm install karma-jasmine --save-dev
npm install karma-chrome-launcher --save-dev
npm install karma-story-reporter --save-dev

Create your karma script with
karma init

run with karma start


 QUESTIONS
 1.  Why the hell can't I require a lib from the REPL???






