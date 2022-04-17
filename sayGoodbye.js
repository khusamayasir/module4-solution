(function (window) {
    var greeting_bye = new Object();
    var greeting = "Good Bye";
    greeting_bye.sayGoodbye = function (name) {
        console.log(greeting + " " + name);
    };
    window.greeting_bye = greeting_bye;
  })(window);