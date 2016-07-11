function startTimer(duration, display) {
  var timer = duration,
    minutes, seconds;
  var isPaused = true;
  setInterval(function() {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.html(minutes + "'<br>" + seconds + "\"");
    if (!isPaused) {
      if (--timer < 0) {
        alert("Times Up!!");
        timer = duration;
        isPaused = true;
      }
    }
  }, 1000);

  $('#time').on('click', function() {
    isPaused = !isPaused;
  });

  $('#plus').click(function() {
    if (isPaused != false) {
      timer += 60;
    }
    console.log(minutes);
  });
  $('#minus').click(function() {
    if (isPaused != false) {
      timer -= 60;
    }
    console.log(minutes);
  });
  $('#reset').click(function() {
    timer = duration;
    isPaused = true;
  });
};

$(document).ready(function() {
  var timeLeft = 25;
  var secondsLeft = timeLeft * 60;
  var display = $('.timer');
  startTimer(secondsLeft, display);
});