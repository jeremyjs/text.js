
$(function() {

  function userOutput(msg) {
    $('#output').append('<p class="terminal-line user-input"> > ' + msg + '</p>');
  };

  function gameOutput(msg) {
    $('#output').append('<p class="terminal-line game-output">' + msg + '</p>');
  }

  var maxLines = 20;
  box = false;

  var log = console.log;
  console.log = function () {
    var message = [].join.call(arguments, " ");
    userOutput(message);
    lines++;
    if(lines > maxLines) $('#output').children().first().remove();
    interpret(message);
    log.apply(console, arguments);
  };

  function interpret(cmd) {
    var msg = "I don't know that command!";
    if(cmd === 'use box') {
      if(box) {
        msg = 'You hide in the box.';
      } else {
        msg = "You don't have a box!";
      }
    }
    gameOutput(msg);
  }

  var lines = 0;

  var $in = $('#input');
  $in.keyup(function(e){
    if(e.which === 13) {
      var cmd = $(this).val();
      console.log(cmd);
    }
    e.preventDefault();
  });
});
