(function (window) {
    var greeting_hello = new Object();
    var greeting = "Hello";
    greeting_hello.sayHello = function (name) {
        console.log(greeting + " " + name);
    };
    window.greeting_hello = greeting_hello;
  })(window);