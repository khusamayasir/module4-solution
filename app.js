(function () {
    var names = ["Usama", "Jaun", "Iqbal", "James", "Jerry", "Tom", "Jamaima", "Elia", "Smith", "Jamshed"];
    
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0);

        if (firstLetter === 'j' || firstLetter === 'J') {
            greeting_bye.sayGoodbye(names[i]);
        } else {
            greeting_hello.sayHello(names[i]);
        }
    }
  })();