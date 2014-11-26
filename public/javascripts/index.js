$(function() {
  var realConsoleLog = console.log;
  console.log = function () {
    var message = [].join.call(arguments, " ");
    // Display the message somewhere... (jQuery example)
    $("#console").text(message);
    realConsoleLog.apply(console, arguments);
  };

  console.log("hello", "my", "name", "is", "james");

});
