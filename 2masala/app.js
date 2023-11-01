document.addEventListener("DOMContentLoaded", function () {
  var clockElement = document.getElementById("clock");

  function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    clockElement.textContent =
      hours + ":" + minutes + ":" + seconds + " " + amPm;

    setTimeout(updateClock, 1000);
  }

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  updateClock();
});
